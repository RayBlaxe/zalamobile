import React, { useState } from "react";
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
import {
  ScrollView,
  Dimensions,
  StatusBar,
  ListRenderItemInfo,
} from "react-native";
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

interface Item {
  id: string;
  name: string;
  address: string;
  star: string;
  message: string;
  distance: string;
}

export default function HomeScreen() {
  const { width, height } = Dimensions.get("window");
  const hijauZala = "#539D00";
  const biruZala = "#00A1FF";
  const donkerZala = "#003C60";
  const shadow = {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  };

  // make a data that consist of id name address star message distance, that each name diffrent from each other

  const [artikel, setArtikel] = useState([
    {
      id: "1",
      judul: "Zala Laundry IPO dibuka untuk umum",
      deskripsi:
        "Zala Laundry IPO dibuka untuk umum, buka harga Rp. 1000 / saham",
      foto: "undang.png",
      tanggal: "12 November 2021",
    },
    {
      id: "2",
      judul: "Zala Laundry IPO dibuka untuk umum",
      deskripsi:
        "Zala Laundry IPO dibuka untuk umum, buka harga Rp. 1000 / saham",
      foto: "undang.png",
      tanggal: "12 November 2021",
    },
    {
      id: "3",
      judul: "Zala Laundry IPO dibuka untuk umum",
      deskripsi:
        "Zala Laundry IPO dibuka untuk umum, buka harga Rp. 1000 / saham",
      foto: "undang.png",
      tanggal: "12 November 2021",
    },
  ]);

  const [laundry, setLaundry] = useState([
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
  ]);

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
                  {" "}
                  Jl. Kedondong No.12....{" "}
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
            <Text bold fontSize={20} color={donkerZala}>
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
                  <Text bold fontSize={14} color={donkerZala}>
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
              <Text bold fontSize={20} color="#003c60">
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
            <HStack justifyContent="space-between" alignItems="center">
              <Text bold fontSize={20} color={donkerZala}>
                Terdekat
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
            <HStack justifyContent="space-between" alignItems="center">
              <Text bold fontSize={20} color={donkerZala}>
                Baru di Zala Mobile
              </Text>
            </HStack>
            <Box flex={1}>
              <FlatList
                data={laundry}
                renderItem={({ item }) => (
                  <Box
                    w={336}
                    h={146}
                    borderWidth={1}
                    borderRadius={20}
                    borderColor="#e6e6e6"
                    bgColor="white"
                    mr={10}
                    mb={10}
                  >
                    <Image
                      source={require("../../../assets/Images/Home/news.png")}
                      alt="Laundry"
                      borderRadius={20}
                      size="full"
                      resizeMode="stretch"
                    />
                  </Box>
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
              />
            </Box>
            <HStack justifyContent="space-between" alignItems="center">
              <Text bold fontSize={20} color={donkerZala}>
                Undang Teman
              </Text>
            </HStack>
            <Box flex={1}>
              <FlatList
                data={laundry}
                renderItem={({ item }) => (
                  <Box
                    w={336}
                    h={146}
                    borderWidth={1}
                    borderRadius={20}
                    borderColor="#e6e6e6"
                    bgColor="white"
                    mr={10}
                    mb={10}
                  >
                    <Image
                      source={require("../../../assets/Images/Home/undang.png")}
                      alt="Laundry"
                      borderRadius={20}
                      size="full"
                      resizeMode="stretch"
                    />
                  </Box>
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
              />
            </Box>
            <HStack justifyContent="space-between" alignItems="center">
              <Text bold fontSize={20} color={donkerZala}>
                Informasi & Event
              </Text>
            </HStack>
            <Box flex={1}>
              <FlatList
                data={laundry}
                renderItem={({ item }) => (
                  <Box
                    w={336}
                    h={146}
                    borderWidth={1}
                    borderRadius={20}
                    borderColor="#e6e6e6"
                    bgColor="white"
                    mr={10}
                    mb={10}
                  >
                    <Image
                      source={require("../../../assets/Images/Home/event.png")}
                      alt="Laundry"
                      borderRadius={20}
                      size="full"
                      resizeMode="stretch"
                    />
                  </Box>
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
              />
            </Box>
            <HStack justifyContent="space-between" alignItems="center">
              <Text bold fontSize={20} color={donkerZala}>
                Artikel Zala Mobile
              </Text>
            </HStack>
            <Box flex={1}>
              <FlatList
                data={artikel}
                renderItem={({ item }) => (
                  <HStack borderRadius={20} bgColor="white" mr={10} mb={14} space="md">
                    <Image
                      source={require("../../../assets/Images/Home/orang.png")}
                      alt="Laundry"
                      borderRadius={20}
                      width={80}
                      height={80}
                      borderBottomLeftRadius={50}
                      borderTopLeftRadius={50}
                      borderTopRightRadius={50}
                      borderBottomRightRadius={50}
                      resizeMode="stretch"
                    />
                    <VStack>
                      <Text
                        fontWeight="$semibold"
                        fontSize={16}
                        color={donkerZala}
                        >
                          {item.judul}
                        </Text>
                        <Text fontSize={12} color="#515151" fontWeight="$normal">
                          {item.deskripsi}
                        </Text>
                        <Text fontSize={12} color={biruZala} italic>
                          {item.tanggal}
                        </Text>
                    </VStack>
                  </HStack>
                )}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
              />
            </Box>
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
