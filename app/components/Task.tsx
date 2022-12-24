import { PreventRemoveContext } from "@react-navigation/native";
import { View, Text, Button, Pressable } from "react-native";
import { deleteTask } from "../api";

export default function Task({task, navigation, setTasks, tasks}: any){

    const onEditTask = () => {
        navigation.navigate("EditScreen", {initialTask: task});
    }

    const onDeleteTask = () => {
        //delete task and go to Home Screen
        deleteTask(task._id)
        const newTasks = tasks.filter((arg: { _id: any }) => arg._id !== task._id)
        setTasks(newTasks)
    }
    return(
        <View>
            <Text>{task.title}</Text>
            <Text>{task.description}</Text>
            <View>
                <Button title="Edit" onPress={onEditTask}/>
                <Button title="Delete" onPress={onDeleteTask}/>
            </View>
        </View>
    )
}