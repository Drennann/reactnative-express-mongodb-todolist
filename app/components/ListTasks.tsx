import { View } from "react-native";
import Task from "./Task";
import { ITask } from "../interfaces/interfaces";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Dispatch, SetStateAction } from "react"

type RootStackParamList = {
  Home: undefined;
  EditScreen: {initialTask: ITask};
  CreateTaskScreen: undefined;
};

interface Props {
  setTasks: Dispatch<SetStateAction<ITask[]>>
  navigation: NativeStackNavigationProp<RootStackParamList, "Home", undefined>,
  tasks: Array<ITask>
}

export default function ListTasks({ tasks, navigation, setTasks }:Props) {
  return (
    <View>
      {tasks.length > 0 &&
        tasks.map((task: ITask) => (
          <Task
            key={task._id}
            task={task}
            tasks={tasks}
            navigation={navigation}
            setTasks={setTasks}
          />
        ))}
    </View>
  );
}
