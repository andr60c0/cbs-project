import { Chatroom } from "../../entities/Chatroom";
export const TOGGLE_HAPPY = "TOGGLE_HAPPY";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const ADD_CHATROOM = "ADD_CHATROOM";
export const DELETE_CHATROOM = "DELETE_CHATROOM";
export const FETCH_CHATROOMS = "FETCH_CHATROOMS";

export const toggleHappy = () => {
  return { type: TOGGLE_HAPPY };
};

export const add = () => {
  return { type: ADD };
};

export const subtract = () => {
  return { type: SUBTRACT };
};

export const fetchChatrooms = () => {
  // return { type: ADD_CHATROOM, payload: chatroomName };
  return async (dispatch, getState) => {
    const idToken = getState().authentication.idToken;

    const response = await fetch("https://cbsstudentswebav-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=" + idToken, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json(); // json to javascript
    console.log(" fetch chatrooms (action) data", data);
    if (!response.ok) {
      //There was a problem..
      console.log("There was a problem");
    } else {
      let chatrooms = [];
      for (const key in data) {
        let chatroom = new Chatroom(data[key].chatroomName, "", [], key);
        chatrooms.push(chatroom);
      }
      dispatch({ type: FETCH_CHATROOMS, payload: chatrooms });
      console.log("ok perf");
    }
  };
};

export const addChatroom = (chatroomName) => {
  // return { type: ADD_CHATROOM, payload: chatroomName };
  return async (dispatch, getState) => {
    const idToken = getState().authentication.idToken;
    const response = await fetch("https://cbsstudentswebav-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=" + idToken, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        //javascript to json
        //key value pairs of data you want to send to server
        // ...
        chatroomName: chatroomName
      })
    });

    const data = await response.json(); // json to javascript
    console.log("data", data);
    if (!response.ok) {
      //There was a problem..
      console.log("There was a problem");
    } else {
      dispatch({ type: ADD_CHATROOM, payload: { chatroomName, id: data.name } });
      console.log("ok perf");
    }
  };
};

export const deleteChatroom = (id) => {
  // return { type: DELETE_CHATROOM, payload: title };
  return async (dispatch, getState) => {
    const idToken = getState().authentication.idToken;
    const response = await fetch("https://cbsstudentswebav-default-rtdb.europe-west1.firebasedatabase.app/chatrooms/" + id + ".json?auth=" + idToken, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json(); // json to javascript
    console.log("data", data);
    if (!response.ok) {
      //There was a problem..
      console.log("There was a problem");
    } else {
      dispatch({ type: DELETE_CHATROOM, payload: id });
      console.log("ok perf");
    }
  };
};
