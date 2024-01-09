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
import React, { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";

import { auth } from "./firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

// import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  // const stack = createNativeStackNavigator();
  const [userInfo, setUserInfo] = React.useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId:
      "310889988474-im52i6sim05s89so7q4vkisbv7tvh27r.apps.googleusercontent.com",
    androidClientId:
      "310889988474-0g8590nfh2jqcp7mjmu68o6reo8t5q06.apps.googleusercontent.com",
    iosClientId:
      "310889988474-3rrmf22i7fi63l7em9o4sl65un4ufm2r.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type == "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <NavigationContainer>
      <Login promptAsync={promptAsync} />
      {/* <Topup /> */}
    </NavigationContainer>
    // <NavigationContainer>
    //   <GluestackUIProvider>
    //     {/* <Home /> */}

    //     <stack.Navigator>
    //       <stack.Screen name="login" component={Login} />
    //       <stack.Screen name="register" component={Registration} />
    //       <stack.Screen name="home" component={Home} />
    //       <stack.Screen name="topup" component={Topup} />
    //       <stack.Screen name="membership" component={Membership} />
    //     </stack.Navigator>
    //   </GluestackUIProvider>
    // </NavigationContainer>
  );
}

// const Home = () => {
//   return <Container />
// };
