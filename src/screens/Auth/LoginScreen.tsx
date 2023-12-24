import { get, set } from "@gluestack-style/react";
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
  Image,
  Center,
} from "@gluestack-ui/themed";

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import * as SecureStore from "expo-secure-store";


const LoginScreen = () => {
  const [error, setError] = useState();
  const [userInfo, setUserInfo] = useState();
  const configureGoogleSignIn = () => {
    GoogleSignin.configure({
      webClientId:
        "310889988474-im52i6sim05s89so7q4vkisbv7tvh27r.apps.googleusercontent.com",
      androidClientId:
        "310889988474-0g8590nfh2jqcp7mjmu68o6reo8t5q06.apps.googleusercontent.com",
      iosClientId:
        "310889988474-3rrmf22i7fi63l7em9o4sl65un4ufm2r.apps.googleusercontent.com",
    });
  };

  useEffect(() => {
    configureGoogleSignIn();
  });

  const signIn = async () => {
    console.log("sign in pressed");
    try {
      const userInfo = await GoogleSignin.signIn();
      await GoogleSignin.hasPlayServices();
      // await SecureStore.setItemAsync(userInfo.user.id, userInfo);
      setUserInfo(userInfo);
      
    } catch (e:any) {
      setError(e);
    }
  };

  const Logout = async () => {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    setUserInfo(undefined);
  };


  const [password, setPassword] = useState(null);
  const [phonenumber, setPhonenumber] = useState(null);
  const handleLogin = () => {
    getSecureValue();
    // Perform login logic here
    console.log("Logging in...");
  };
  const hijauZala = "#539D00";
  const biruZala = "#00A1FF";
  const donkerZala = "#003C60";
  const [visible, setVisible] = useState(true);
  const [key, setKey] = useState();
  const [value, setValue] = useState();
  

 
  const getSecureValue = async () => {
    let result = await SecureStore.getItemAsync(userInfo.user.id);
    setValue(result);
  }

  const deleteSecureValue = async () => {
    await SecureStore.deleteItemAsync(key);
    setKey();
    setValue();
  }

  return (
    <ImageBackground
      source={require("../../../assets/Images/Auth/Topbar.png")}
      style={styles.container}
      borderBottomLeftRadius={20}
      borderBottomRightRadius={20}
    >
      <StatusBar translucent={true} backgroundColor="transparent" />

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
          value={phonenumber}
          onChangeText={setPhonenumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Masukkan password"
          secureTextEntry
          value={value}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={getSecureValue}>
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
        {userInfo ? <Text>{JSON.stringify(userInfo.user)}</Text> : null}
      <Text>{JSON.stringify(error)}</Text>
        {userInfo ? (
        <Button title="Sign Out" onPress={Logout} />
      ) : (
        <TouchableOpacity style={styles.secButton} onPress={signIn}>
          <HStack space="sm" alignItems="center" justifyContent="center">
            <Image
              source={require("../../../assets/Images/Auth/GIcon.png")}
              style={{ width: 24, height: 24, alignSelf: "center" }}
              alt="Logo"
            />
            <Text style={styles.secButtonText}>Masuk dengan Google</Text>
          </HStack>
        </TouchableOpacity>
      )}

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

        <TouchableOpacity style={styles.secButton} onPress={handleLogin}>
          <Text style={styles.secButtonText}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
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
