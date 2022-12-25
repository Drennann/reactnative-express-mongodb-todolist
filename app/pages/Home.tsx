import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import { useEffect, useState } from "react";
import { getTasks } from "../api";
import { useIsFocused } from "@react-navigation/native";
import ListTasks from "../components/ListTasks";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {ITask} from "../interfaces/interfaces"

type RootStackParamList = {
  Home: undefined;
  EditScreen: {initialTask: ITask};
  CreateTaskScreen: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: Props) {
  const [tasks, setTasks] = useState<Array<ITask>>([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      (async () => {
        const tasks = await getTasks();
        setTasks(tasks);
      })();
    }
  }, [isFocused]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {tasks.length > 0 ? (
          <ListTasks
            tasks={tasks}
            navigation={navigation}
            setTasks={setTasks}
          />
        ) : (
          <Text>No hay tareas.</Text>
        )}
        <Pressable
          style={styles.Home_Button}
          onPress={() => navigation.navigate("CreateTaskScreen")}
        >
          <Text style={styles.Home_Button_Text}>Create Task</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#13111c",
    alignItems: "center",
    justifyContent: "center",
    minHeight: height,
  },
  text: {
    color: "#d0d0d0",
  },
  Home_Button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    marginVertical: 16,
    minWidth: 80,
    borderRadius: 4,
    elevation: 3,
    marginHorizontal: 5,
    backgroundColor: "#673ab7",
    paddingHorizontal: 8,
  },
  Home_Button_Text: {
    color: "#d0d0d0",
    fontWeight: "500",
  },
});
