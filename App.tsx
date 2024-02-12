import { NavigationContainer } from "@react-navigation/native";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import Login from "./src/screens/Auth/LoginScreen";
import "expo-dev-client";

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";

import { auth } from "./firebaseConfig";
import { Text } from "react-native";
import {
  GluestackUIProvider,
  GluestackUIStyledProvider,
} from "@gluestack-ui/themed";
import { config } from "./config/gluestack-ui.config";
import HomeScreen from "./src/screens/Home/HomeScreen";
import Profile from "./src/screens/Profile/ProfileScreen";
import Laundry from "./src/screens/Laundry/PilihLaundry";

WebBrowser.maybeCompleteAuthSession();

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MembershipScreen from "./src/screens/Membership/RedeemHistoryScreen";

export default function App() {
  const stack = createNativeStackNavigator();
  // const stack = createNativeStackNavigator();
  const [userInfo, setUserInfo] = React.useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId:
      "310889988474-hhnnukvb5c8cfamnm1d19uc9sb0bcj29.apps.googleusercontent.com",
    androidClientId:
      "310889988474-0g8590nfh2jqcp7mjmu68o6reo8t5q06.apps.googleusercontent.com",
    iosClientId:
      "310889988474-3rrmf22i7fi63l7em9o4sl65un4ufm2r.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential).then((userCredential) => {
        console.log("userCredential", userCredential.user);
      });
    }
  }, [response]);

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log(JSON.stringify(user, null, 2));
        setUserInfo(user);
      } else {
        console.log("User is not authenticated");
      }
    });

    return () => unsub();
  }, []);

  // dev = 1
  // prod = 0
  const status = 1;
  if (status === 0) {
    return (
      <GluestackUIProvider config={config}>
        {userInfo ? (
          <NavigationContainer>
            <stack.Navigator screenOptions={{ headerShown: false }}>
              <stack.Screen name="home" component={HomeScreen} />
              <stack.Screen name="profile" component={Profile} />
            </stack.Navigator>
          </NavigationContainer>
        ) : (
          <NavigationContainer>
            {/* <Text>Woi</Text> */}
            <Login promptAsync={promptAsync} />
            {/* <Topup /> */}
          </NavigationContainer>
        )}
      </GluestackUIProvider>
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
  } else if (status === 1) {
    return (
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </GluestackUIProvider>
    );
  }
}

// const Home = () => {
//   return <Container />
// };
