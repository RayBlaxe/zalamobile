import React from "react";
import { View, Button, FlatList } from "react-native";
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
  MapPin,
  ChevronDown,
  Bell,
  Wallet,
  Plus,
  History,
  Store,
  BadgePercent,
  Users,
  Info,
  Link,
  Star,
  MessageSquare,
  WashingMachine,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

const PilihLaundry: React.FC = () => {
  const { navigate } = useNavigation();
  const { width, height } = Dimensions.get("window");
  const biruZala = "#00A1FF";
  const hijauZala = "#539D00";
  const donkerZala = "#003C60";

  const laundry: LaundryItem[] = [
    {
      id: "1",
      name: "Zala Laundry",
      address: "Jl. Kedondong No.12",
      star: "4.8",
      message: "11+",
      distance: "1.2 km",
    },
    {
      id: "2",
      name: "Zala Laundry",
      address: "Jl. Kedondong No.12",
      star: "4.8",
      message: "11+",
      distance: "1.2 km",
    },
    {
      id: "3",
      name: "Zala Laundry",
      address: "Jl. Kedondong No.12",
      star: "4.8",
      message: "11+",
      distance: "1.2 km",
    },
    {
      id: "4",
      name: "Zala Laundry",
      address: "Jl. Kedondong No.12",
      star: "4.8",
      message: "11+",
      distance: "1.2 km",
    },
    {
      id: "5",
      name: "Zala Laundry",
      address: "Jl. Kedondong No.12",
      star: "4.8",
      message: "11+",
      distance: "1.2 km",
    },
    {
      id: "6",
      name: "Zala Laundry",
      address: "Jl. Kedondong No.12",
      star: "4.8",
      message: "11+",
      distance: "1.2 km",
    },
  ];

  interface LaundryItem {
    id: string;
    name: string;
    address: string;
    star: string;
    message: string;
    distance: string;
  }

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
            <HStack space="sm" alignItems="center" py={"$3"}>
              <Pressable onPress={() => navigate("home")}>
                <ArrowLeft strokeWidth={2.25} color="black" />
              </Pressable>

              <Text color="$black" bold fontSize={18}>
                Pilih Laundry
              </Text>
            </HStack>
          </VStack>
        </Box>

        <VStack
          px={25}
          py={20}
          borderTopLeftRadius={40}
          borderBottomRightRadius={40}
          space="lg"
        >
          <HStack justifyContent="space-between" alignItems="center">
          <Text fontWeight="$semibold" fontSize={16} color="$black">
              Aneka Layanan Laundry
            </Text>

            <Box bgColor="#B3E3FF" py={5} px={18} borderRadius={20}>
              <Text bold fontSize={14} color={biruZala}>
                Lihat Semua
              </Text>
            </Box>
          </HStack>
          <Box flex={1}>
            <FlatList<LaundryItem>
              data={laundry}
              renderItem={({ item }) => (
                <Box
                  w={170}
                  h={200}
                  borderWidth={1}
                  borderRadius={20}
                  borderColor="#e6e6e6"
                  bgColor="white"
                  mr={10}
                  mb={10}
                >
                  <Image
                    source={require("../../../assets/Images/Home/zalalaundry.png")}
                    alt="Laundry"
                    borderTopLeftRadius={20}
                    borderTopRightRadius={20}
                    w={168}
                    h={120}
                  />
                  <VStack p={4}>
                    <Text fontWeight="$semibold" fontSize={14}>
                      {item.name}
                    </Text>
                    <Text fontSize={12} color="#515151">
                      {item.address}
                    </Text>
                    <HStack
                      space={"sm"}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <HStack alignItems="center">
                        <Star size={16} color="#FFC107" />
                        <Text
                          fontSize={12}
                          fontWeight="$semibold"
                          color="#515151"
                        >
                          {item.star}
                        </Text>
                      </HStack>
                      <HStack alignItems="center">
                        <MessageSquare size={16} color="#515151" />
                        <Text
                          fontSize={12}
                          fontWeight="$semibold"
                          color="#515151"
                        >
                          {item.message}
                        </Text>
                      </HStack>
                      <HStack alignItems="center">
                        <MapPin size={16} color="#515151" />
                        <Text
                          fontSize={12}
                          fontWeight="$semibold"
                          color="#515151"
                        >
                          {item.distance}
                        </Text>
                      </HStack>
                    </HStack>
                  </VStack>
                </Box>
              )}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
            />
          </Box>
          <Divider />
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontWeight="$semibold" fontSize={16} color="$black">
              Rekomendasi Untuk Anda
            </Text>

            <Box bgColor="#B3E3FF" py={5} px={18} borderRadius={20}>
              <Text bold fontSize={14} color={biruZala}>
                Lihat Semua
              </Text>
            </Box>
          </HStack>
          <Box flex={1}>
            <FlatList<LaundryItem>
              data={laundry}
              renderItem={({ item }) => (
                <Box
                  w={170}
                  h={200}
                  borderWidth={1}
                  borderRadius={20}
                  borderColor="#e6e6e6"
                  bgColor="white"
                  mr={10}
                  mb={10}
                >
                  <Image
                    source={require("../../../assets/Images/Home/zalalaundry.png")}
                    alt="Laundry"
                    borderTopLeftRadius={20}
                    borderTopRightRadius={20}
                    w={168}
                    h={120}
                  />
                  <VStack p={4}>
                    <Text fontWeight="$semibold" fontSize={14}>
                      {item.name}
                    </Text>
                    <Text fontSize={12} color="#515151">
                      {item.address}
                    </Text>
                    <HStack
                      space={"sm"}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <HStack alignItems="center">
                        <Star size={16} color="#FFC107" />
                        <Text
                          fontSize={12}
                          fontWeight="$semibold"
                          color="#515151"
                        >
                          {item.star}
                        </Text>
                      </HStack>
                      <HStack alignItems="center">
                        <MessageSquare size={16} color="#515151" />
                        <Text
                          fontSize={12}
                          fontWeight="$semibold"
                          color="#515151"
                        >
                          {item.message}
                        </Text>
                      </HStack>
                      <HStack alignItems="center">
                        <MapPin size={16} color="#515151" />
                        <Text
                          fontSize={12}
                          fontWeight="$semibold"
                          color="#515151"
                        >
                          {item.distance}
                        </Text>
                      </HStack>
                    </HStack>
                  </VStack>
                </Box>
              )}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
            />
          </Box>
          <Divider />
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontWeight="$semibold" fontSize={16} color="$black">
            Bisa laundry sepatu & tas
            </Text>

            <Box bgColor="#B3E3FF" py={5} px={18} borderRadius={20}>
              <Text bold fontSize={14} color={biruZala}>
                Lihat Semua
              </Text>
            </Box>
          </HStack>
          <Box flex={1}>
            <FlatList
              data={laundry}
              renderItem={({ item }) => (
                <Box
                  w={170}
                  h={200}
                  borderWidth={1}
                  borderRadius={20}
                  borderColor="#e6e6e6"
                  bgColor="white"
                  mr={10}
                  mb={10}
                >
                  <Image
                    source={require("../../../assets/Images/Home/zalalaundry.png")}
                    alt="Laundry"
                    borderTopLeftRadius={20}
                    borderTopRightRadius={20}
                    w={168}
                    h={120}
                  />
                  <VStack p={4}>
                    <Text fontWeight="$semibold" fontSize={14}>
                      {item.name}
                    </Text>
                    <Text fontSize={12} color="#515151">
                      {item.address}
                    </Text>
                    <HStack
                      space={"sm"}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <HStack alignItems="center">
                        <Star size={16} color="#FFC107" />
                        <Text
                          fontSize={12}
                          fontWeight="$semibold"
                          color="#515151"
                        >
                          {item.star}
                        </Text>
                      </HStack>
                      <HStack alignItems="center">
                        <MessageSquare size={16} color="#515151" />
                        <Text
                          fontSize={12}
                          fontWeight="$semibold"
                          color="#515151"
                        >
                          {item.message}
                        </Text>
                      </HStack>
                      <HStack alignItems="center">
                        <MapPin size={16} color="#515151" />
                        <Text
                          fontSize={12}
                          fontWeight="$semibold"
                          color="#515151"
                        >
                          {item.distance}
                        </Text>
                      </HStack>
                    </HStack>
                  </VStack>
                </Box>
              )}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
            />
          </Box>

          <Box flex={1}></Box>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default PilihLaundry;
