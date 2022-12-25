import { View, Text, Pressable, StyleSheet } from "react-native";
import { deleteTask } from "../api";

export default function Task({ task, navigation, setTasks, tasks }: any) {
  const onEditTask = () => {
    navigation.navigate("EditScreen", { initialTask: task });
  };

  const onDeleteTask = () => {
    //delete task and go to Home Screen
    deleteTask(task._id);
    const newTasks = tasks.filter((arg: { _id: any }) => arg._id !== task._id);
    setTasks(newTasks);
  };
  return (
    <View style={styles.TaskCard}>
      <Text style={styles.TaskCard__Title}>{task.title}</Text>
      <Text style={styles.TaskCard__Description}>{task.description}</Text>
      <View style={styles.TaskCard__ButtonsSection}>
        <Pressable
          style={styles.TaskCard__ButtonsSection__Button}
          onPress={onDeleteTask}
        >
          <Text style={styles.TaskCard__ButtonsSection__Button__Text}>
            Delete
          </Text>
        </Pressable>
        <Pressable
          style={styles.TaskCard__ButtonsSection__Button}
          onPress={onEditTask}
        >
          <Text style={styles.TaskCard__ButtonsSection__Button__Text}>
            Edit
          </Text>
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
  TaskCard: {
    backgroundColor: "#23212c",
    width: 250,
    minHeight: 200,
    borderWidth: 1,
    borderColor: "#212121",
    marginVertical: 25,
  },
  TaskCard__Description: {
    minHeight: 150,
    textAlign: "center",
    color: "#d0d0d0",
    fontSize: 16,
  },
  TaskCard__Title: {
    minHeight: 20,
    textAlign: "center",
    paddingVertical: 12,
    color: "#d0d0d0",
    fontSize: 24,
    fontWeight:"600"
  },
  TaskCard__ButtonsSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  TaskCard__ButtonsSection__Button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    marginVertical: 16,
    minWidth: 80,
    borderRadius: 4,
    elevation: 3,
    marginHorizontal: 5,
    backgroundColor:"#673ab7"
  },
  TaskCard__ButtonsSection__Button__Text:{
    color:"#d0d0d0",
    fontWeight:"500"
  }
});
