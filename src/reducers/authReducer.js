import { types } from "../types/types";

const initialState = {
  checking: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      console.log("jejeje");

      return { ...state, checking: false, ...action.payload };
    case types.authCheckingFinish:
      return { ...state, checking: false };
    case types.authLogout:
      console.log("logout");
      return {
        checking: false,
      };
    default:
      return state;
  }
};
