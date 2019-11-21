import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DevTools from './config/devtools';
import ErrorBoundary from './shared/error/error-boundary';
import { Provider } from 'react-redux';
import setupAxiosInterceptors from './config/axios-interceptor';
import initStore from './config/store';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';

import { clearAuthentication } from 'src/shared/reducers/authentication';

import { bindActionCreators } from 'redux';

const devTools = process.env.NODE_ENV === 'development' ? <DevTools /> : null;

const store = initStore();

const actions = bindActionCreators({ clearAuthentication }, store.dispatch);
setupAxiosInterceptors(() => actions.clearAuthentication('login.error.unauthorized'));

// const render = Component =>
//   ReactDOM.render(
//     <ErrorBoundary>
//       <Provider store={store}>
//         <div>
//           {/* If this slows down the app in dev disable it and enable when required  */}
//           {devTools}
//           <Component />
//         </div>
//       </Provider>
//     </ErrorBoundary>,
//     rootEl
//   );
ReactDOM.render(
  <ThemeProvider theme={theme}>
      <ErrorBoundary>
      <Provider store={store}>
        <div>
          <CssBaseline />
          <App />
          {/* <Component /> */}
        </div>
      </Provider>
    </ErrorBoundary>
  </ThemeProvider>
  , document.getElementById('root'));
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept("./App", () => {
    const NewApp = require("./App").default;

    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <Provider store={store}>
            <div>
              <CssBaseline />
              <NewApp />
            </div>
          </Provider>
        </ErrorBoundary>
      </ThemeProvider>
    , document.getElementById("root"));
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// render(App)