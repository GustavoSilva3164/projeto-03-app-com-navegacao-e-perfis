import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Home from "./home"
import Perfil from "./perfil"
import Configuracoes from "./configuracoes"

const Tab = createBottomTabNavigator()

export default function Tabs({ route }) {

  const usuario = route.params?.usuario || "Usuário"

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: usuario === "admin" ? "#2563eb" : "#16a34a"
        },
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#020617"
        },
        tabBarActiveTintColor: "#38bdf8"
      }}
    >

      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{ usuario }}
        options={{ title: `Home - ${usuario}` }}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
        initialParams={{ usuario }}
        options={{ title: `Perfil - ${usuario}` }}
      />

      <Tab.Screen
        name="Configurações"
        component={Configuracoes}
      />

    </Tab.Navigator>
  )
}