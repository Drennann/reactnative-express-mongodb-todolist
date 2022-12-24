import { View } from "react-native";
import Task from "./Task";

export default function ListTasks({tasks,navigation, setTasks}:any){
    return(
        <View>
            {tasks.length > 0 && tasks.map((task: any) => <Task key={task._id} task = {task} tasks = {tasks} navigation={navigation} setTasks={setTasks}/>)}
        </View>
    )
}