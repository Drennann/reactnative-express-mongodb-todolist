import { View, StyleSheet, TextInput, Button } from "react-native";
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
      <TextInput onChange={(event) => onChangeHandler(event, "title")} />
      <TextInput onChange={(event) => onChangeHandler(event, "description")} />
      <View>
        <Button title="Volver" onPress={() => navigation.navigate("Home")} />
        <Button title="Aceptar" onPress={onPostTask} />
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
});
