import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { getTasks } from "../api";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  console.log(tasks)

  useEffect(() => {
    (async ()=> {
        const tasks = await getTasks();
        setTasks(tasks);
    })()
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
