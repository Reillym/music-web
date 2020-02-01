import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT, LOGOUT_ERROR } from './types';

export const loginRequest = (username: string, password: string) => ({
  type: LOGIN_REQUEST,
  payload: { username, password }
});
export const loginSuccess = (token: string) => ({ type: LOGIN_SUCCESS, payload: { token } });
export const loginError = (error: Error) => ({ type: LOGIN_ERROR, payload: error });
export const logout = () => ({ type: LOGOUT });
export const logoutError = () => ({ type: LOGOUT_ERROR });
