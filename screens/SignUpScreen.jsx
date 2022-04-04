import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from "react-native";
import { restoreUser, signup } from "../store/actions/AuthenticationActions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as SecureStore from "expo-secure-store";

function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // const token = useSelector((state) => state.authentication.idToken);
  // const emaill = useSelector((state) => state.authentication.email);
  // console.log("Email:", emaill);
  // console.log("Token", token);
  async function load() {
    let emailFromSecureStore = await SecureStore.getItemAsync("email");
    let tokenFromSecureStore = await SecureStore.getItemAsync("token");

    if (emailFromSecureStore && tokenFromSecureStore) {
      console.log("success", emailFromSecureStore);
      dispatch(restoreUser(emailFromSecureStore, tokenFromSecureStore));
    } else {
      console.log("failue");
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Text>Sign up to get access</Text>

      <View style={styles.formContainer}>
        <View>
          <Text style={styles.loginInfoText}>E-MAIL</Text>
          <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
        </View>
        <View>
          <Text style={styles.loginInfoText}>PASSWORD</Text>
          <TextInput placeholder="Password" onChangeText={setPassword} value={password} />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.loginInfoText}>REPEAT PASSWORD</Text>
          <TextInput placeholder="Repeat Password" />
        </View>
      </View>
      <TouchableOpacity style={styles.signUpBtn}>
        <Text style={styles.loginText} title="Sign Up" onPress={() => dispatch(signup(email, password))}>
          Get Access
        </Text>
      </TouchableOpacity>
      <View>
        <Text>I agree to the terms and conditions</Text>
      </View>
      {/* <Text> You've signed up with email: {email}</Text> */}
    </View>
  );
}

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
    padding: 10,
    width: eigthy,
    flex: 1
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
    padding: 18,
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

export default SignUpScreen;
