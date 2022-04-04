import { SUBTRACT, TOGGLE_HAPPY, ADD, ADD_CHATROOM, DELETE_CHATROOM, SIGNUP, FETCH_CHATROOMS } from "../actions/ChatActions";
import { Chatroom } from "../../entities/Chatroom";

const initialState = {
  chatrooms: [],
  counter: 0,
  isHappy: false,
  name: "Andre"
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, counter: state.counter + 1 };
    case SUBTRACT:
      return { ...state, counter: state.counter - 1 };
    case TOGGLE_HAPPY:
      return { ...state, isHappy: !state.isHappy };
    case ADD_CHATROOM:
      console.log(action.payload); // Should print out the chatroomName
      const chatroom = new Chatroom(action.payload.chatroomName, [], "", action.payload.id);
      const newChatroomArray = [...state.chatrooms, chatroom];
      return { ...state, chatrooms: newChatroomArray };
    //One line solution:
    // return {...state, chatrooms:[...state:chatrooms, {title:action.payload}]}

    // state.isHappy = !state.isHappy; // not allowed, it mutates the prior state
    case DELETE_CHATROOM:
      console.log(action.payload);
      //Return an array with all the chatrooms that are NOT the chatroom that is in the action.payload
      return { ...state, chatrooms: state.chatrooms.filter((chatroom) => chatroom.id !== action.payload) };

    case FETCH_CHATROOMS:
      console.log(action.payload);
      return { ...state, chatrooms: action.payload };

    default:
      return state; //does not do anything yet​
  }
};

export default chatReducer;
