import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import authenticationReducer from "./store/reducers/AuthenticationReducer";
import chatReducer from "./store/reducers/ChatReducer";
import ReduxThunk from "redux-thunk";
import NavigationComponent from "./components/Navigation";
import { NavigationContainer } from "@react-navigation/native";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// const Stack = createNativeStackNavigator();

const rootReducer = combineReducers({
  chat: chatReducer,
  authentication: authenticationReducer
  // posts: postReducer,
  // events: eventReducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationComponent />
      </NavigationContainer>
    </Provider>
  );
}

// function ChatStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Screen1" component={Screen1} />
//       <Stack.Screen name="Screen2" component={Screen2} />
//       <Stack.Screen name="AndreScreen" component={Screen3} />
//     </Stack.Navigator>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "hotpink",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
