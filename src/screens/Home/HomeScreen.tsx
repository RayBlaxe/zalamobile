import React from "react";
import {
  Box,
  Text,
  HStack,
  Icon,
  VStack,
  AddIcon,
  Image,
  Center,
  FlatList,
} from "@gluestack-ui/themed";

import { ScrollView, Dimensions, StatusBar } from "react-native";
import { Svg } from "react-native-svg";
import {
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
} from "lucide-react-native";

export default function HomeScreen() {
  const { width, height } = Dimensions.get("window");
  const hijauZala = "#539D00";
  const biruZala = "#00A1FF";
  const shadow = {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  };
  // make a data that consist of id name address star message distance, that each name diffrent from each other
  const data = [
    {
      id: 1,
      name: "Zala 1",
      address: "Jl. Kedondong No.12....",
      star: 4.5,
      message: 11,
      distance: "200m",
    },
    {
      id: 2,
      name: "Zala 2",
      address: "Jl. ayam No.12....",
      star: 4.5,
      message: 11,
      distance: "200m",
    },
    {
      id: 3,
      name: "Zala 3",
      address: "Jl. gorenng No.12....",
      star: 4.5,
      message: 11,
      distance: "200m",
    },
    {
      id: 4,
      name: "Zala 4",
      address: "Jl. lalapan No.12....",
      star: 4.5,
      message: 11,
      distance: "200m",
    },
  ];

  return (
    <ScrollView>
      <VStack bgColor="#fafafa">
        <Box bg={biruZala} px={"$6"} py={"$2.5"}>
          <StatusBar animated={true} backgroundColor={"#00A1FF"} />
          <HStack flex={1} alignItems="center">
            <VStack space="xs" flex={1}>
              <HStack space="sm">
                <MapPin color="white" size={24} strokeWidth={2.25} />

                <Text color="white">Lokasi Penjemputan</Text>
              </HStack>
              <HStack space="sm">
                <Text bold color="white">
                  Jl. Kedondong No.12....
                </Text>
                <ChevronDown color="white" strokeWidth={"2.25"} />
              </HStack>
            </VStack>

            <Box
              bgColor="white"
              w={"$10"}
              h={"$10"}
              p={"$2"}
              borderRadius={"$full"}
              alignContent="flex-end"
            >
              <Bell color={biruZala} strokeWidth={2.25} />
            </Box>
          </HStack>
        </Box>
        <Box>
          <Image
            style={{ width: width, height: 300 }}
            source={require("../../../assets/Images/Home/peopledoing.png")}
            alt="Orang Laundry"
            borderBottomRightRadius={50}
          />
        </Box>
        <Box
          borderTopLeftRadius={20}
          borderBottomRightRadius={20}
          bgColor="$white"
          style={{ width: width - 50, height: 80 }}
          position="absolute"
          alignSelf="center"
          mt={266}
          padding={10}
          justifyContent="center"
          {...shadow}
        >
          <HStack alignItems="center" space={"md"} flex={1}>
            <Box bg={biruZala} w={60} h={60} p={6} borderRadius={10}>
              <Wallet color="white" strokeWidth={2.25} width={46} height={46} />
            </Box>
            <VStack space="sm">
              <Text fontWeight="$medium" fontSize={14} color="#676767">
                Saldo Anda
              </Text>
              <Text fontWeight="$semibold" fontSize={20}>
                Rp. 100.000
              </Text>
            </VStack>
            <Box flex={1} alignItems="flex-end">
              <VStack alignItems="center">
                <Box
                  bg={biruZala}
                  w={46}
                  h={46}
                  p={6}
                  borderRadius={14}
                  alignItems="center"
                  justifyContent="center"
                >
                  <History
                    color="white"
                    strokeWidth={2.25}
                    width={30}
                    height={46}
                  />
                </Box>
                <Text fontSize={12} fontWeight="$semibold" color={biruZala}>
                  Top Up
                </Text>
              </VStack>
            </Box>
            <VStack alignItems="center">
              <Box
                bg={biruZala}
                w={46}
                h={46}
                p={6}
                borderRadius={14}
                alignItems="center"
                justifyContent="center"
              >
                <Plus color="white" strokeWidth={2.25} width={38} height={46} />
              </Box>
              <Text fontSize={12} fontWeight="$semibold" color={biruZala}>
                Riwayat
              </Text>
            </VStack>
          </HStack>
        </Box>
        <VStack space="md" py={20} bgColor="#fafafa">
          <VStack
            px={25}
            py={20}
            bgColor="white"
            borderTopLeftRadius={40}
            borderBottomRightRadius={40}
            space="lg"
          >
            <Text bold fontSize={20} color="black">
              Fitur Layanan
            </Text>
            <HStack justifyContent="space-between">
              <Box w={70} h={82}>
                <VStack alignItems="center">
                  <Center w={55} h={55} bgColor={biruZala} borderRadius={100}>
                    <Image
                      source={require("../../../assets/Icons/washing-machine.png")}
                      alt="washing-machine"
                    />
                  </Center>
                  <Text bold fontSize={14} color="#003C60">
                    Laundry
                  </Text>
                </VStack>
              </Box>
              <Box w={70} h={82}>
                <VStack alignItems="center">
                  <Center w={55} h={55} bgColor={biruZala} borderRadius={100}>
                    <Store size={30} color="white" />
                  </Center>
                  <Text bold fontSize={14} color="#003C60">
                    Zala Store
                  </Text>
                </VStack>
              </Box>
              <Box w={70} h={82}>
                <VStack alignItems="center">
                  <Center w={55} h={55} bgColor={biruZala} borderRadius={100}>
                    <BadgePercent size={32} color="white" />
                  </Center>
                  <Text bold fontSize={14} color="#003C60">
                    Promo
                  </Text>
                </VStack>
              </Box>
              <Box w={70} h={82}>
                <VStack alignItems="center">
                  <Center w={55} h={55} bgColor={biruZala} borderRadius={100}>
                    <Users size={32} color="white" />
                  </Center>
                  <Text textAlign="center" bold fontSize={14} color="#003C60">
                    Layanan B to B
                  </Text>
                </VStack>
              </Box>
            </HStack>
            <HStack justifyContent="space-between">
              <Box w={70} h={82}>
                <VStack alignItems="center">
                  <Center w={55} h={55} bgColor={biruZala} borderRadius={100}>
                    <Link size={32} color="white" />
                  </Center>
                  <Text bold fontSize={14} color="#003C60">
                    Kontak
                  </Text>
                </VStack>
              </Box>
              <Box w={70} h={82}>
                <VStack alignItems="center">
                  <Center w={55} h={55} bgColor={biruZala} borderRadius={100}>
                    <Info size={32} color="white" />
                  </Center>
                  <Text bold fontSize={14} color="#003C60">
                    Tentang
                  </Text>
                </VStack>
              </Box>
              <Box w={70} h={82}></Box>
              <Box w={70} h={82}></Box>
            </HStack>
          </VStack>
          <VStack
            px={25}
            py={20}
            bgColor="white"
            borderTopLeftRadius={40}
            borderBottomRightRadius={40}
            space="lg"
          >
            <HStack justifyContent="space-between" alignItems="center">
              <Text bold fontSize={20} color="black">
                Rekomendasi Laundry
              </Text>

              <Box bgColor="#B3E3FF" py={5} px={18} borderRadius={20}>
                <Text bold fontSize={14} color={biruZala}>
                  Lihat Semua
                </Text>
              </Box>
            </HStack>
            <Box flex={1}>
              <FlatList
                data={data}
                // declare item as a type of data

                renderItem={({ item }) => (
                  <Box
                    w={170}
                    h={190}
                    borderWidth={1}
                    borderRadius={20}
                    borderColor="#d1d1d1"
                    mr={10}
                  >
                    <VStack flex={1} space="xs">
                      <Box>
                        <Image
                          source={require("../../../assets/Images/Home/zalalaundry.png")}
                          alt="washing-machine"
                        />
                      </Box>
                      <Box px={10}>
                        <Text
                          bold
                          fontSize={14}
                          color="black"
                          fontWeight="$semibold"
                        >
                          {(item as { name: string }).name}
                        </Text>
                        <Text fontSize={12} color="#515151">
                          {(item as { address: string }).address}
                        </Text>
                        <HStack justifyContent="space-between">
                          <HStack alignItems="center" space="xs">
                            <Star size={16} color="#ffd500" />
                            <Text
                              fontSize={12}
                              fontWeight="$semibold"
                              color="#515151"
                            >
                              {(item as { star: string }).star}
                            </Text>
                          </HStack>
                          <HStack alignItems="center" space="xs">
                            <MessageSquare size={16} color="#515151" />
                            <Text
                              fontSize={12}
                              fontWeight="$semibold"
                              color="#515151"
                            >
                              {(item as { message: string }).message}
                            </Text>
                          </HStack>
                          <HStack alignItems="center" space="xs">
                            <MapPin size={16} color="#515151" />
                            <Text
                              fontSize={12}
                              fontWeight="$semibold"
                              color="#515151"
                            >
                              {(item as { distance: string }).distance}
                            </Text>
                          </HStack>
                        </HStack>
                      </Box>
                    </VStack>
                  </Box>
                )}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              ></FlatList>
            </Box>
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
