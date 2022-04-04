import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { login, restoreUser } from "../store/actions/AuthenticationActions";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import * as SecureStore from "expo-secure-store";

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // async function load() {
  //   let emailFromSecureStore = await SecureStore.getItemAsync("email");
  //   let tokenFromSecureStore = await SecureStore.getItemAsync("token");

  //   if (emailFromSecureStore && tokenFromSecureStore) {
  //     console.log("success", emailFromSecureStore);
  //     dispatch(restoreUser(emailFromSecureStore, tokenFromSecureStore));
  //   } else {
  //     console.log("failue");
  //   }
  // }

  // useEffect(() => {
  //   //load();
  // }, []);

  return (
    <View style={styles.container}>
      <Text>Log In</Text>
      <View style={styles.formContainer}>
        <Text>E-MAIL</Text>
        <TextInput style={styles.inputView} placeholder="Email" onChangeText={setEmail} value={email} />
        <Text>PASSWORD</Text>
        <TextInput style={styles.inputView} placeholder="Password" onChangeText={setPassword} value={password} />
      </View>

      <Button title="Log In" onPress={() => dispatch(login(email, password))}></Button>
      {/* <Text>Don't have an account? </Text> */}
      {/* <Button title="Sign Up" onPress={() => navigation.navigate("SignupScreen")} /> */}
      {/* <Text> You've logged in with email: {email}</Text> */}
    </View>
  );
};
const fullWidth = "100%";
const eigthy = "80%";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    width: fullWidth
  },

  formContainer: {
    borderWidth: 0.5,
    borderColor: "lightgray",
    margin: 15,
    borderRadius: 5,
    width: eigthy
  },

  inputView: {
    borderBottomWidth: 0.5,
    borderBottomColor: "lightgray",

    padding: 10
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20
  },

  loginInfoText: {
    color: "#32305D",
    fontSize: 10,
    fontWeight: "600",
    marginBottom: 8
  },

  loginText: {
    color: "#FFF"
  },

  signUpBtn: {
    backgroundColor: "#5050A5",
    color: "#fff",
    padding: "18px",
    borderRadius: 7,
    margin: 15,
    width: eigthy
  },

  logo: {
    width: 70,
    height: 90,
    marginBottom: 30,
    marginTop: 30
  }
});

export default LogInScreen;
