import { View, StyleSheet, TextInput, Pressable, Text } from "react-native";
import { useState } from "react";
import { postTask } from "../api";

export default function CreateTask({ navigation }: any) {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const onChangeHandler = (event: any, name: string) => {
    setTask({ ...task, [name]: event.nativeEvent.text });
  };

  const onPostTask = async () => {
    await postTask(task);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <TextInput onChange={(event) => onChangeHandler(event, "title")} style={styles.CreateTask_TextInput} placeholder="Title"/>
      <TextInput onChange={(event) => onChangeHandler(event, "description")} style={styles.CreateTask_TextInput} placeholder="Description" multiline={true}/>
      <View style={styles.CreateTask__ButtonsSection}>
        <Pressable
          style={styles.CreateTask_Button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.CreateTask_Button_Text}>Volver</Text>
        </Pressable>
        <Pressable style={styles.CreateTask_Button} onPress={onPostTask}>
          <Text style={styles.CreateTask_Button_Text}>Aceptar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#13111c",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100%",
  },
  text: {
    color: "#d0d0d0",
  },
  CreateTask__ButtonsSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  CreateTask_Button:{
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    marginVertical: 16,
    minWidth: 80,
    borderRadius: 4,
    elevation: 3,
    marginHorizontal: 5,
    backgroundColor:"#673ab7",
    paddingHorizontal:8
  },
  CreateTask_Button_Text:{
    color:"#d0d0d0",
    fontWeight:"500"
  },
  CreateTask_TextInput:{
    backgroundColor:"white",
    width: 200,
    marginVertical:8,
    minHeight:40
  }

});
