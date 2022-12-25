import { useState } from "react";
import { View, StyleSheet, TextInput, Pressable, Text } from "react-native";
import { putTask } from "../api";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {ITask} from "../interfaces/interfaces"

type RootStackParamList = {
  Home: undefined;
  EditScreen: {initialTask: ITask};
  CreateTaskScreen: undefined;
};


type Props = NativeStackScreenProps<RootStackParamList, 'EditScreen'>;

export default function EditScreen({ route, navigation }: Props) {
  const initialTask  = route.params.initialTask;

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
      style={styles.EditTask_TextInput}
        defaultValue={initialTask.title}
        multiline={true}
        onChange={(event) => onChangeHandler(event, "title")}
      />
      <TextInput
      style={styles.EditTask_TextInput}
        defaultValue={initialTask.description}
        multiline={true}
        onChange={(event) => onChangeHandler(event, "description")}
      />
      <View style={styles.EditTask__ButtonsSection}>
        <Pressable
          style={styles.EditTask_Button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.EditTask_Button_Text}>Volver</Text>
        </Pressable>
        <Pressable style={styles.EditTask_Button} onPress={onPutTask}>
          <Text style={styles.EditTask_Button_Text}>Aceptar</Text>
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
  EditTask__ButtonsSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  EditTask_Button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    marginVertical: 16,
    minWidth: 80,
    borderRadius: 4,
    elevation: 3,
    marginHorizontal: 5,
    backgroundColor:"#673ab7",
    paddingHorizontal: 8,
  },
  EditTask_Button_Text: {
    color:"#d0d0d0",
    fontWeight:"500"
  },
  EditTask_TextInput: {
    backgroundColor: "white",
    width: 200,
    marginVertical: 8,
    minHeight: 40,
  },
});
