import * as SecureStore from "expo-secure-store";
export const SIGNUP = "SIGNUP";
export const LOG_IN = "LOG_IN";
export const RESTORE_USER = "RESTORE_USER";

export const restoreUser = (email, token) => {
  return { type: RESTORE_USER, payload: { email, token } };
};

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAsyyni-Dfhu-SrZivjt3SdMFoEFPgHP98", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        //javascript to json
        //key value pairs of data you want to send to server
        // ...
        email: email,
        password: password,
        returnSecureToken: true
      })
    });
    const data = await response.json(); // json to javascript
    console.log(data);
    if (!response.ok) {
      //There was a problem..
      console.log("There was a problem");
    } else {
      await SecureStore.setItemAsync("email", data.email);
      await SecureStore.setItemAsync("token", data.idToken);
      dispatch({ type: SIGNUP, payload: { email, idToken: data.idToken } });
    }
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAsyyni-Dfhu-SrZivjt3SdMFoEFPgHP98", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        //javascript to json
        //key value pairs of data you want to send to server
        // ...
        email: email,
        password: password,
        returnSecureToken: true
      })
    });
    const data = await response.json(); // json to javascript
    console.log(data);
    if (!response.ok) {
      //There was a problem..
      console.log("There was a problem logging in");
    } else {
      console.log("You have successfully logged in with email: ", email);
      await SecureStore.setItemAsync("email", data.email);
      await SecureStore.setItemAsync("token", data.idToken);
      dispatch({ type: LOG_IN, payload: { email, idToken: data.idToken } });
    }
  };
};

// export const storeUser = (email, password) => {
//   return async (dispatch) => {
//     const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAsyyni-Dfhu-SrZivjt3SdMFoEFPgHP98", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         //javascript to json
//         //key value pairs of data you want to send to server
//         // ...
//         email: email,
//         password: password,
//         returnSecureToken: true
//       })
//     });
//     const data = await response.json(); // json to javascript
//     console.log(data);
//     if (!response.ok) {
//       //There was a problem..
//       console.log("There was a problem logging in");
//     } else {
//       console.log("You have successfully logged in with email: ", email);
//       dispatch({ type: LOG_IN, payload: { email, idToken: data.idToken } });
//     }
//   };
// };
