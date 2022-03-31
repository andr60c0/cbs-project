import { View, Text, TextInput, Button } from "react-native";
import { login } from "../store/actions/AuthenticationActions";
import { useState } from "react";
import { useDispatch } from "react-redux";

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <View>
      <Text>I am LogIn Screen</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput placeholder="Password" onChangeText={setPassword} value={password} />
      <Button title="Sign In" onPress={() => dispatch(login(email, password))}></Button>
      {/* <Text> You've logged in with email: {email}</Text> */}
    </View>
  );
};

export default LogInScreen;
