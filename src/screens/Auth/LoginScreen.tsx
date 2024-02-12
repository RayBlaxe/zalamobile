import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from "react-native";

import {
  Box,
  Text,
  HStack,
  Icon,
  VStack,
  AddIcon,
  Center,
  Image,
} from "@gluestack-ui/themed";

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import * as SecureStore from "expo-secure-store";
import auth from "@react-native-firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthRequestPromptOptions, AuthSessionResult } from "expo-auth-session";

const LoginScreen = ({
  promptAsync,
}: {
  promptAsync: (
    options?: AuthRequestPromptOptions | undefined
  ) => Promise<AuthSessionResult>;
}) => {
  const [error, setError] = useState();
  const [userInfo, setUserInfo] = useState();

  const doLogin = async () => {
    await SecureStore.setItemAsync("session", "is_logged_in");

    // navigation.navigate("register");
  };

  // async function onGoogleButtonPress() {
  //   try {
  //     // Check if your device supports Google Play
  //     console.log("CHECKING PLAY SERVICES");
  //     await GoogleSignin.hasPlayServices({
  //       showPlayServicesUpdateDialog: true,
  //     });
  //     console.log("PLAY SERVICES OK");

  //     // Get the users ID token
  //     console.log("GETTING ID TOKEN");
  //     const { idToken } = await GoogleSignin.signIn();
  //     console.log("ID TOKEN", idToken);

  //     // Create a Google credential with the token
  //     console.log("CREATING CREDENTIAL");
  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  //     console.log("CREDENTIAL", googleCredential);

  //     // Sign-in the user with the credential
  //     console.log("SIGNING IN");
  //     const userSignIn = await auth().signInWithCredential(googleCredential);
  //     console.log("SIGNED IN", userSignIn);

  //     // navigation.navigate("home")

  //     doLogin();
  //   } catch (error) {
  //     console.log("LOGIN ERROR", error);
  //   }
  // }

  const [password, setPassword] = useState(null);
  const [phonenumber, setPhonenumber] = useState(null);

  const hijauZala = "#539D00";
  const biruZala = "#00A1FF";
  const donkerZala = "#003C60";
  const [visible, setVisible] = useState(true);
  const [key, setKey] = useState();
  const [value, setValue] = useState();

  // const showUserInfo = () => {
  //   console.log(JSON.stringify(userInfo.user));
  // };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../../assets/Images/Auth/Topbar.png")}
        style={styles.container}
        borderBottomLeftRadius={20}
        borderBottomRightRadius={20}
        alt="adaw"
      >
        <StatusBar translucent={true}
        />

        <View style={styles.insideContainer}>
          <Image
            source={require("../../../assets/Images/Auth/Logo.png")}
            style={{ width: 120, height: 90, alignSelf: "center" }}
            alt="Logo"
            mb={"$2"}
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              alignSelf: "center",
            }}
            color="$black"
          >
            Masuk ke akunmu
          </Text>
          <Text
            style={{
              fontSize: 12,
              alignSelf: "center",
              marginBottom: 12,
            }}
            color="#787878"
          >
            silahkan masuk ke akun anda
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan nomor telepon "
          />
          <TextInput
            style={styles.input}
            placeholder="Masukkan password"
            secureTextEntry
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Masuk</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: "#878787" }} />
            <View>
              <Text
                style={{
                  fontSize: 12,
                  width: 70,
                  textAlign: "center",
                  color: "#878787",
                }}
              >
                Atau
              </Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: "#878787" }} />
          </View>

          <TouchableOpacity
            style={styles.secButton}
            onPress={() => promptAsync()}
          >
            <HStack alignItems="center" justifyContent="center">
              <Image
                source={require("../../../assets/Images/Auth/GIcon.png")}
                style={{ width: 24, height: 24, alignSelf: "center" }}
                alt="Logo"
              />
              <Text style={styles.secButtonText}>Masuk dengan Google</Text>
            </HStack>
          </TouchableOpacity>

          <Text
            marginTop={"$4"}
            marginBottom={"$1"}
            style={{
              fontSize: 12,
              alignSelf: "center",
            }}
            color="#878787"
          >
            Belum punya akun?
          </Text>

          <TouchableOpacity style={styles.secButton}>
            <Text style={styles.secButtonText}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#EFEFEF",
    height: 270,
    paddingVertical: 86,
  },
  insideContainer: {
    width: "100%",
    paddingHorizontal: 24,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 20,
    borderRadius: 40,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#539D00",
    marginVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 40,
    justifyContent: "center",
  },
  secButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#FFFFFF",
    borderColor: "#539D00",
    borderWidth: 1,

    paddingHorizontal: 20,
    borderRadius: 40,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
  secButtonText: {
    color: "#539D00",
    textAlign: "center",

    fontSize: 14,
    fontWeight: "bold",
  },
});

export default LoginScreen;
