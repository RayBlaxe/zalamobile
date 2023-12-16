import {
  Box,
  GluestackUIProvider,
  Text,
  config,
  set,
} from "@gluestack-ui/themed";
import { ScrollView, Button } from "react-native";
import Gradient from "./assets/Icons/Gradient";
import DocumentData from "./assets/Icons/DocumentData";
import LightBulbPerson from "./assets/Icons/LightbulbPerson";
import Rocket from "./assets/Icons/Rocket";
import Logo from "./assets/Icons/Logo";
import Home from "./src/screens/Home/HomeScreen";
import Topup from "./src/screens/Topup/TopupScreen";
import Login from "./src/screens/Auth/LoginScreen";
import Membership from "./src/screens/Membership/RedeemHistoryScreen";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useEffect, useState } from "react";

export default function App() {
  // const [error, setError] = useState();
  // const [userInfo, setUserInfo] = useState();
  // const configureGoogleSignIn = () => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       "310889988474-im52i6sim05s89so7q4vkisbv7tvh27r.apps.googleusercontent.com",
  //     androidClientId:
  //       "310889988474-0g8590nfh2jqcp7mjmu68o6reo8t5q06.apps.googleusercontent.com",
  //     iosClientId:
  //       "310889988474-3rrmf22i7fi63l7em9o4sl65un4ufm2r.apps.googleusercontent.com",
  //   });
  // };

  // useEffect(() => {
  //   configureGoogleSignIn();
  // });

  // const signIn = async () => {
  //   console.log("sign in pressed");
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     setUserInfo(userInfo);
  //   } catch (e) {
  //     setError(e);
  //   }
  // };

  // const Logout = async () => {
  //   await GoogleSignin.revokeAccess();
  //   await GoogleSignin.signOut();
  //   setUserInfo(undefined);
  // };

  return (
    <GluestackUIProvider>
      {/* {userInfo && <Text>{JSON.stringify(userInfo.user)}</Text>}
      <Text>{JSON.stringify(error)}</Text>
      {userInfo ? (
        <Button title="Sign Out" onPress={Logout} />
      ) : (
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
        />
      )} */}

      <Login />
    </GluestackUIProvider>
  );
}

// const Home = () => {
//   return <Container />;
// };

const FeatureCard = ({ iconSvg: IconSvg, name, desc }: any) => {
  return (
    <Box
      flexDirection="column"
      borderWidth={1}
      borderColor="$borderDark700"
      flex={1}
      m="$2"
      p="$4"
      rounded="$md"
    >
      <Box alignItems="center" display="flex" flexDirection="row">
        {/* <Image source={iconSvg} alt="document" width={22} height={22} /> */}
        <Text>
          <IconSvg />
        </Text>
        <Text fontSize={22} color="$white" fontWeight="500" ml="$2">
          {name}
        </Text>
      </Box>
      <Text color="$textDark400" mt="$2">
        {desc}
      </Text>
    </Box>
  );
};

const Container = () => {
  return (
    <Box flex={1} backgroundColor="$black">
      <ScrollView
        style={{ height: "100%" }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Box
          position="absolute"
          sx={{
            "@base": {
              h: 500,
              w: 500,
            },
            "@lg": {
              h: 700,
              w: 700,
            },
          }}
        >
          <Gradient />
        </Box>
        <Box
          height="60%"
          sx={{
            "@base": {
              my: "$16",
              mx: "$5",
              height: "80%",
            },
            "@lg": {
              my: "$24",
              mx: "$32",
            },
          }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            bg="#64748B33"
            py="$2"
            px="$6"
            rounded="$full"
            alignItems="center"
            marginTop={20}
            sx={{
              "@base": {
                flexDirection: "column",
              },
              "@sm": {
                flexDirection: "row",
              },
              "@md": { alignSelf: "flex-start" },
            }}
          >
            <Text color="$white" fontWeight="$normal">
              Get started by editing
            </Text>
            <Text color="$white" fontWeight="$medium" ml="$2">
              App.tsx
            </Text>
          </Box>
          <Box justifyContent="center" alignItems="center">
            <Logo />
          </Box>
          <Box
            sx={{
              "@base": {
                flexDirection: "column",
              },
              "@md": {
                flexDirection: "row",
              },
            }}
          >
            <FeatureCard
              iconSvg={DocumentData}
              name="Docs"
              desc="Find in-depth information about gluestack features and API."
            />
            <FeatureCard
              iconSvg={LightBulbPerson}
              name="Learn"
              desc="Learn about gluestack in an interactive course with quizzes!"
            />
            <FeatureCard
              iconSvg={Rocket}
              name="Deploy"
              desc="Instantly drop your gluestack site to a shareable URL with vercel."
            />
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};
