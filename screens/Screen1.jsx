import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button, FlatList, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { subtract, toggleHappy, add, addChatroom, deleteChatroom, fetchChatrooms } from "../store/actions/ChatActions";
import { useEffect, useState } from "react";

const Screen1 = ({ navigation }) => {
  const isHappy = useSelector((state) => state.chat.isHappy); // subscribing to the store's chat slice/part
  const dispatch = useDispatch();
  const numberOfIcecreams = useSelector((state) => state.chat.counter);
  const chatrooms = useSelector((state) => state.chat.chatrooms);

  const [text, onChangeText] = useState("");
  // let databaseChatrooms;
  console.log("screen1", chatrooms);
  useEffect(() => {
    dispatch(fetchChatrooms());
  }, []);
  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <Text>{item.title}</Text>
      <Button title="Delete this chatroom" onPress={() => dispatch(deleteChatroom(item.id))}></Button>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text>I am screen 1</Text>
      <Text>Is Christian happy? {isHappy.toString()}</Text>
      <Text>How many icecreams should Christians children have {numberOfIcecreams}</Text>
      <Button title="Go to screen 2" onPress={() => navigation.navigate("Screen2")} />
      <Button title="Flip happy" onPress={() => dispatch(toggleHappy())} />

      <Button title="Give Icecream" onPress={() => dispatch(add())} />
      <Button title="Steal Icecream" onPress={() => dispatch(subtract())} />

      <TextInput placeholder="Chatroom name" onChangeText={onChangeText} value={text} keyExtractor={(item) => item.title} />
      <Button title="Add Chatroom" onPress={() => dispatch(addChatroom(text))}></Button>

      <FlatList data={chatrooms} renderItem={renderItem} />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   borderBlack: {
//     border: "solid",
//     borderWidth: "1px",
//     padding: "5px",
//     margin: "5px"
//   },
//   item: {
//     backgroundColor: "#f9c2ff",
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16
//   },
//   title: {
//     fontSize: 32
//   }
// });

export default Screen1;
