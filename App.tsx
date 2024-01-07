import {
  Box,
  GluestackUIProvider,
  Text,
  config,
  set,
} from "@gluestack-ui/themed";
import { ScrollView, Button, TextInput } from "react-native";
import Gradient from "./assets/Icons/Gradient";
import DocumentData from "./assets/Icons/DocumentData";
import LightBulbPerson from "./assets/Icons/LightbulbPerson";
import Rocket from "./assets/Icons/Rocket";
import Logo from "./assets/Icons/Logo";
import Home from "./src/screens/Home/HomeScreen";
import Topup from "./src/screens/Topup/TopupScreen";
import Login from "./src/screens/Auth/LoginScreen";
import Registration from "./src/screens/Auth/RegistrationScreen";
import Membership from "./src/screens/Membership/RedeemHistoryScreen";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <GluestackUIProvider>
        {/* <Home /> */}

        <stack.Navigator>
          <stack.Screen name="login" component={Login} />
          <stack.Screen name="register" component={Registration} />
          <stack.Screen name="home" component={Home} />
          <stack.Screen name="topup" component={Topup} />
          <stack.Screen name="membership" component={Membership} />
        </stack.Navigator>
      </GluestackUIProvider>
    </NavigationContainer>
  );
}

// const Home = () => {
//   return <Container />
// };

