import { isPromise } from 'src/shared/ultis';
import { toast } from 'react-toastify';


const addErrorAlert = (message: any, key?: any, data?: any) => {
  key = key ? key : message;
  toast.error(data);
};
export default () => (next: any) => (action: any) => {
  // If not a promise, continue on
  if (!isPromise(action.payload)) {
    return next(action);
  }

  /**
   *
   * The notification middleware serves to dispatch the initial pending promise to
   * the promise middleware, but adds a `then` and `catch.
   */
  return next(action)
    .then((response: any) => {
      if (action.meta && action.meta.successMessage) {
        toast.success(action.meta.successMessage);
      } else if (response && response.action && response.action.payload && response.action.payload.headers) {
        const headers = response.action.payload.headers;
        let alert: string = null as unknown as string;
        let alertParams: string = null as unknown as string;
        Object.entries(headers).forEach(([k, v]) => {
          if (k.toLowerCase().endsWith('app-alert')) {
            alert = v as string;
          } else if (k.toLowerCase().endsWith('app-params')) {
            alertParams = v as string;
          }
        });
        if (alert) {
          const alertParam = alertParams;
          toast.success(alertParam);
        }
      }
      return Promise.resolve(response);
    })
    .catch((error: any) => {
      if (action.meta && action.meta.errorMessage) {
        toast.error(action.meta.errorMessage);
      } else if (error && error.response) {
        const response = error.response;
        const data = response.data;
        if (!(response.status === 401 && (error.message === '' || (data && data.path && data.path.includes('/api/account'))))) {
          let i;
          switch (response.status) {
            // connection refused, server not reachable
            case 0:
              addErrorAlert('Server not reachable', 'error.server.not.reachable');
              break;

            case 400:
              const headers = Object.entries(response.headers);
              let errorHeader: string = null as unknown as string;
              let entityKey: string = null as unknown as string;
              headers.map(([k, v]) => {
                if (k.toLowerCase().endsWith('app-error')) {
                  errorHeader = v as string;
                } else if (k.toLowerCase().endsWith('app-params')) {
                  entityKey = v as string;
                }
              });
              if (errorHeader) {
                const entityName = entityKey;
                addErrorAlert(errorHeader, errorHeader, { entityName });
              } else if (data !== '' && data.fieldErrors) {
                const fieldErrors = data.fieldErrors;
                for (i = 0; i < fieldErrors.length; i++) {
                  const fieldError = fieldErrors[i];
                  if (['Min', 'Max', 'DecimalMin', 'DecimalMax'].includes(fieldError.message)) {
                    fieldError.message = 'Size';
                  }
                  // convert 'something[14].other[4].id' to 'something[].other[].id' so translations can be written to it
                  const convertedField = fieldError.field.replace(/\[\d*\]/g, '[]');
                  const fieldName = `reactApp.${fieldError.objectName}.${convertedField}`;
                  addErrorAlert(`Error on field "${fieldName}"`, `error.${fieldError.message}`, { fieldName });
                }
              } else if (data !== '' && data.message) {
                addErrorAlert(data.message, data.message, data.params);
              } else {
                addErrorAlert(data);
              }
              break;

            case 404:
              addErrorAlert('Not found', 'error.url.not.found');
              break;

            default:
              if (data !== '' && data.message) {
                addErrorAlert(data.message);
              } else {
                addErrorAlert(data);
              }
          }
        }
      } else if (error && error.message) {
        toast.error(error.message);
      } else {
        toast.error('Unknown error!');
      }
      return Promise.reject(error);
    });
};
