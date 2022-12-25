import { View, Text, StyleSheet, Button } from "react-native";
import { useEffect, useState } from "react";
import { getTasks } from "../api";
import { useIsFocused } from "@react-navigation/native";
import ListTasks from "../components/ListTasks";

export default function Home({ navigation }: any) {
  const [tasks, setTasks] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if(isFocused){
      (async () => {
        const tasks = await getTasks();
        setTasks(tasks);
      })();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      {tasks.length > 0 ? (
        <ListTasks tasks={tasks} navigation={navigation} setTasks={setTasks} />
      ) : (
        <Text>No hay tareas.</Text>
      )}
      <Button
        title="Create Task"
        onPress={() => navigation.navigate("CreateTaskScreen")}
      />
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
