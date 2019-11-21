import axios from 'axios';
import { ICrudGetAllAction, IPayloadResult } from 'src/shared/ultis/type';
import { Storage } from 'src/shared/ultis/util';

import { REQUEST, SUCCESS, FAILURE } from 'src/shared/reducers/action-type.util';
// import { setLocale } from 'app/shared/reducers/locale';
// import { IChucDanh } from 'app/shared/model/chuc-danh.model';
// import { IChucVu } from 'app/shared/model/chuc-vu.model';
// import { IDonVi } from 'app/shared/model/don-vi.model';
// import { IPhong } from 'app/shared/model/phong.model';
// import { IKhoa } from 'app/shared/model/khoa.model';
// import { IMenu } from 'app/shared/model/menu.model';
import { Redirect } from 'react-router';
import { toast } from 'react-toastify';

export const ACTION_TYPES = {
  LOGIN: 'authentication/LOGIN',
  GET_SESSION: 'authentication/GET_SESSION',
  LOGOUT: 'authentication/LOGOUT',
  CLEAR_AUTH: 'authentication/CLEAR_AUTH',
  ERROR_MESSAGE: 'authentication/ERROR_MESSAGE',
  GET_USER_INFO: 'authentication/GET_USER_INFO',
  GET_USER_MENU: 'authentication/GET_USER_MENU',
  SET_KHOA_PHONG: 'authentication/SET_KHOA_PHONG'
};

const initialState = {
  loading: false,
  isAuthenticated: false,
  loginSuccess: false,
  loginError: false, // Errors returned from server side
  showModalLogin: false,
  account: {} as any,
  // userInfo: defaultUserInfo as IUserInfo,
  errorMessage: null as unknown as string, // Errors returned from server side
  redirectMessage: null as unknown as string,
  sessionHasBeenFetched: false,
  idToken: null as unknown as string,
  logoutUrl: null as unknown as string
};

export type AuthenticationState = Readonly<typeof initialState>;

// Reducer

export default (state: AuthenticationState = initialState, action: any): AuthenticationState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.LOGIN):
    case REQUEST(ACTION_TYPES.GET_SESSION):
    case REQUEST(ACTION_TYPES.GET_USER_INFO):
      return {
        ...state,
        loading: true
      };
    case REQUEST(ACTION_TYPES.GET_USER_MENU):
      return {
        ...state,
        loading: true
      };
    case FAILURE(ACTION_TYPES.LOGIN):
      return {
        ...initialState,
        errorMessage: action.payload,
        showModalLogin: true,
        loginError: true
      };
    case FAILURE(ACTION_TYPES.GET_SESSION):
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        sessionHasBeenFetched: true,
        showModalLogin: true,
        errorMessage: action.payload
      };
    case FAILURE(ACTION_TYPES.GET_USER_INFO) :
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };
    case FAILURE(ACTION_TYPES.GET_USER_MENU) :
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.LOGIN):
      return {
        ...state,
        loading: false,
        loginError: false,
        showModalLogin: false,
        loginSuccess: true
      };
    case SUCCESS(ACTION_TYPES.LOGOUT):
      return {
        ...initialState,
        showModalLogin: true
      };
    case SUCCESS(ACTION_TYPES.GET_SESSION): {
      const isAuthenticated = action.payload && action.payload.data && action.payload.data.activated;
      return {
        ...state,
        isAuthenticated,
        loading: false,
        sessionHasBeenFetched: true,
        account: action.payload.data
      };
    }
    case SUCCESS(ACTION_TYPES.GET_USER_MENU): {
      return {
        ...state,
        loading: false
      };
    }
    case ACTION_TYPES.ERROR_MESSAGE:
      return {
        ...initialState,
        showModalLogin: true,
        redirectMessage: action.message
      };
     case ACTION_TYPES.SET_KHOA_PHONG:
       Storage.local.set('idKhoa', action.info.khoa.id);
       Storage.local.set('idPhong', action.info.phong.id);
       Storage.local.set('tenKhoa', action.info.khoa.ten);
       Storage.local.set('tenPhong', action.info.phong.ten);
      return {
        ...state
      };
    case ACTION_TYPES.CLEAR_AUTH:
      return {
        ...state,
        loading: false,
        showModalLogin: true,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

export const displayAuthError = (message: string) => ({ type: ACTION_TYPES.ERROR_MESSAGE, message });

// export const setKhoaPhong = info => ({ type: ACTION_TYPES.SET_KHOA_PHONG, info });

export const getSession = () => async (dispatch: any, getState: Function) => {
  await dispatch({
    type: ACTION_TYPES.GET_SESSION,
    payload: axios.get('services/juaa/api/account')
  });

  const { account } = getState().authentication;
  if (account && account.langKey) {
    const langKey = Storage.session.get('locale', account.langKey);
    // await dispatch(getUserInfo());
    await dispatch(getUserMenu());
  }
};

// export const getUserInfo: ICrudGetAllAction<IUserInfo> = () => ({
//   type: ACTION_TYPES.GET_USER_INFO,
//   payload: axios.get<IUserInfo>('services/jkcb/api/user')
// });
export const getUserMenu = () => ({
  type: ACTION_TYPES.GET_USER_MENU,
  payload: axios.get('services/jkcb/api/user-menu')
});
export const login = (username: string, password: string, rememberMe = false) => async (dispatch: any, getState: Function) => {
  const result = await dispatch({
    type: ACTION_TYPES.LOGIN,
    payload: axios.post('auth/login', { username, password })
  });
  await dispatch(getSession());
};

export const logout = () => async (dispatch: any) => {
  await dispatch({
    type: ACTION_TYPES.LOGOUT,
    payload: axios.post('auth/logout', {})
  });

  // fetch new csrf token
  dispatch(getSession());
};

export const clearAuthentication = (messageKey: string) => (dispatch: any, getState: Function) => {
  dispatch(displayAuthError(messageKey));
  dispatch({
    type: ACTION_TYPES.CLEAR_AUTH
  });
};
