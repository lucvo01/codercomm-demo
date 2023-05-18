import { createContext, useReducer, useEffect } from "react";
import apiService from "../app/apiService";
// import {isValidToken} from

const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  user: null
};

const INITIALIZE = "AUTH.INITILIZE";
const LOGIN_SUCCESS = "AUTH.LOGIN_SUCCESS";
const REGISTER_SUCCESS = "AUTH.REGISTER_SUCCESS";
const LOGOUT = "AUTH.INILOGOUTTILIZE";
const UPDATE_PROFILE = "AUTH.UPDATE_PROFILE";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user
      };

    default:
      return state;
  }
};

const AuthContext = createContext({ ...initialState });

const setSession = (accessToken) => {
  if (accessToken) {
    window.localStorage.setItem("accessToken", accessToken);
    apiService.defaults.header.common.Authorization = `Bearer ${accessToken}`;
  } else {
    window.localStorage.removeItem("accessToken");
    delete apiService.defaults.header.common.Authorization;
  }
};
function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async ({ email, password }, callback) => {
    const response = await apiService.post("/auth/login", { email, password });
    const { user, accessToken } = response.data;

    setSession(accessToken);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user }
    });
  };

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
