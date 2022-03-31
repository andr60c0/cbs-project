import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import authenticationReducer from "./store/reducers/AuthenticationReducer";
import ReduxThunk from "redux-thunk";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "./screens/MenuScreen";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
import LogInScreen from "./screens/LogInScreen";
import SignUpScreen from "./screens/SignUpScreen";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const rootReducer = combineReducers({
  // chat: chatReducer,
  authentication: authenticationReducer
  // posts: postReducer,
  // events: eventReducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Sign Up" component={SignUpScreen} />
          <Tab.Screen name="Log In" component={LogInScreen} />
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Discover" component={DiscoverScreen} />
          <Tab.Screen name="Chat" component={ChatScreen} />
          <Tab.Screen name="Menu" component={MenuScreen} />
        </Tab.Navigator>
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
