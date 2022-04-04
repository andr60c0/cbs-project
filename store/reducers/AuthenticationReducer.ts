import { RESTORE_USER, SIGNUP } from "../actions/AuthenticationActions";
import { LOG_IN } from "../actions/AuthenticationActions";

export interface UserState {
  idToken: string | undefined;
  email: string | undefined;
  password: string | undefined;
}

const initialState: UserState = {
  idToken: undefined,
  email: undefined,
  password: undefined
};

export interface Action {
  type: string;
  payload: any;
}

const authenticationReducer = (state: UserState = initialState, action: Action) => {
  switch (action.type) {
    case SIGNUP:
      console.log("Action payload", action.payload);
      return { ...state, email: action.payload.email, idToken: action.payload.idToken };

    case LOG_IN:
      console.log("Login action payload", action.payload);
      return { ...state, email: action.payload.email, idToken: action.payload.idToken };

    case RESTORE_USER:
      return { ...state, idToken: action.payload.token, email: action.payload.email };

    default:
      return state; //does not do anything yet​
  }
};

export default authenticationReducer;
