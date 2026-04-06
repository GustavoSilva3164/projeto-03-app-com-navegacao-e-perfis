import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Login from "./pages/login"
import Tabs from "./pages/tabs"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}