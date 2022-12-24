import { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { putTask } from "../api";

export default function EditScreen({ route, navigation }: any) {
  const { initialTask, setTasks } = route.params;

  const [task, setTask] = useState({
    title: initialTask.title,
    description: initialTask.description,
  });

  const onChangeHandler = (event: any, name: string) => {
    setTask({ ...task, [name]: event.nativeEvent.text });
  };

  const onPutTask = () => {
    putTask(initialTask._id, task);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <TextInput
        defaultValue={initialTask.title}
        onChange={(event) => onChangeHandler(event, "title")}
      />
      <TextInput
        defaultValue={initialTask.description}
        onChange={(event) => onChangeHandler(event, "description")}
      />
      <Button title="Volver" onPress={() => navigation.navigate("Home")} />
      <Button title="Aceptar" onPress={onPutTask} />
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
