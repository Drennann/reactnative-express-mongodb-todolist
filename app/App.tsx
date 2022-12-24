import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateTask from "./pages/CreateTask";
import EditScreen from "./pages/EditScreen";
import Home from "./pages/Home";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EditScreen" component={EditScreen} />
        <Stack.Screen name="CreateTaskScreen" component={CreateTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
