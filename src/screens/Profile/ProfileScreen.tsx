import React from "react";
import { View, Button } from "react-native";
import { auth } from "../../../firebaseConfig";
import { signOut } from "firebase/auth";
import {
  Box,
  Text,
  HStack,
  Icon,
  VStack,
  AddIcon,
  Image,
  Center,
  Divider,
  Pressable,
} from "@gluestack-ui/themed";

import {
  ScrollView,
  Dimensions,
  StatusBar,
  ImageBackground,
  Animated,
} from "react-native";
import { Svg } from "react-native-svg";
import {
  ArrowDownUp,
  ArrowLeft,
  BadgeRussianRuble,
  Flag,
  LogOut,
  Plus,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen: React.FC = () => {
  const { navigate } = useNavigation()
  const { width, height } = Dimensions.get("window");
  const biruZala = "#00A1FF";
  const hijauZala = "#539D00";
  return (
    <ScrollView>
      <VStack>
        <Box
          px={"$5"}
          py={"$2"}
          pt={"$6"}
          pb={"$2"}
          borderBottomLeftRadius={15}
          borderBottomRightRadius={15}
          bgColor="$white"
          softShadow="1"
          shadowRadius={"$0"}
        >
          <StatusBar
            translucent={true}
            animated={true}
            barStyle={"dark-content"}
            backgroundColor="transparent"
          />
          <VStack>
            <HStack space="sm" alignContent="center" py={"$3"}>
              <Pressable onPress={() => navigate("home")}>
              <ArrowLeft strokeWidth={2.25} color="black" />
              </Pressable>

              
              <Text color="$black" bold fontSize={18}>
                Profile
              </Text>
            </HStack>
          </VStack>
        </Box>

        <VStack p={"$5"} space="sm">
          <VStack alignItems="center" mb={"$2"}>
            <Image
              source={require("../../../assets/Images/Membership/kupon.png")}
              w={170}
              h={170}
              alt="Foto Orang"
              borderRadius={100}
              mb={"$6"}
              
            />
            <Text fontWeight="$medium" color="black" fontSize={22}>
              Mimiki
            </Text>
            <Text mt={"$1"} fontWeight="$medium" color="black" fontSize={16}>
              mikimiki@gmail.com
            </Text>
            <Text fontWeight="$medium" color="$coolGray400" fontSize={14}>
              +62812XXXXXXXX
            </Text>
          </VStack>
          <Text ml={4} fontWeight="$semibold" color="black" fontSize={18}>
            Aksi
          </Text>
          <VStack
            borderWidth={1}
            borderRadius={10}
            borderColor="#dedede"
            p={16}
            space="md"
            bgColor="$white"
          >
            <Pressable>
              {({ pressed }) => (
                <HStack
                  space="xl"
                  flex={1}
                  alignItems="center"
                  // make this hstack when the content is more than 1 line it will be a separator
                  borderColor="#dedede"
                  opacity={pressed ? 0.5 : 1}
                >
                  <Flag color="#544c4c" strokeWidth={2.5} />
                  <VStack>
                    <Text fontSize={16} fontWeight="$medium" color="black">
                      Laporkan masalah
                    </Text>
                  </VStack>
                </HStack>
              )}
            </Pressable>
            <Divider />
            <Pressable
            onPress={() => { signOut(auth), console.log("User signed out!");  }}
            
            >
              {({ pressed }) => (
                <HStack
                  space="xl"
                  flex={1}
                  alignItems="center"
                  // make this hstack when the content is more than 1 line it will be a separator
                  opacity={pressed ? 0.5 : 1}
                  borderColor="#dedede"
                  
                >
                  <LogOut color="#544c4c" strokeWidth={2.5} />
                  <VStack>
                    <Text fontSize={16} fontWeight="$medium" color="black">
                      Keluar
                    </Text>
                  </VStack>
                </HStack>
              )}
            </Pressable>
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default ProfileScreen;
