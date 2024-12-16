import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from './src/screens/A_HomeScreen';
import Login from './src/screens/B_Login';
import SingUp from './src/screens/B_SingUp';
import Events from './src/screens/C_Events';
import Calendar from './src/screens/D_Calendar';
import Calendar2 from './src/screens/D_Calendar2';
import Memories from './src/screens/D_Memories';
import Memories2 from './src/screens/D_Memories2';
import Organize from './src/screens/D_Organize';
import Organize2 from './src/screens/D_Organize2';
import Profile from './src/screens/D_Profile';
import Profile2 from './src/screens/D_Profile2';
import About from './src/screens/E_About';
import Help from './src/screens/E_Help';
import Notifications from './src/screens/E_Notifications';
import Terms from './src/screens/E_Terms';
import Overlay from './src/screens/Overlay';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Configuración del Tab Navigator
function TabScreens() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: "absolute" }, // Mantiene el menú inferior
        tabBarActiveTintColor: "blue", // Color de la pestaña activa
        tabBarInactiveTintColor: "gray", // Color de las pestañas inactivas
      }}
    >
      <Tab.Screen name="Organizar" component={Organize} />
      <Tab.Screen name="Agenda" component={Calendar} />
      <Tab.Screen name="Eventos" component={Events} />
      <Tab.Screen name="Recuerdos" component={Memories} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
}

function DrawerScreens() {
  return (
    <Drawer.Navigator initialRouteName="Inicio">
      <Drawer.Screen name="Inicio" component={TabScreens} />
      <Drawer.Screen name="Acerca de..." component={About} />
        <Drawer.Screen name="Ayuda y Soporte técnico" component={Help} />
        <Drawer.Screen name="Notificaciones" component={Notifications} />
        <Drawer.Screen name="Terminos y condiciones" component={Terms} />
        <Drawer.Screen name="Invitar amigos" component={Terms} />
      
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="SingUp" component={SingUp} />
      <Drawer.Screen name="Events" component={Events} />
      <Drawer.Screen name="Calendar" component={Calendar} />
      <Drawer.Screen name="Memories" component={Memories} />
      <Drawer.Screen name="Organize" component={Organize} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Calendar2" component={Calendar} />
      <Drawer.Screen name="Memories2" component={Memories} />
      <Drawer.Screen name="Organize2" component={Organize} />
      <Drawer.Screen name="Profile2" component={Profile} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerScreens />
    </NavigationContainer>
  );
}
