import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  HStack,
  Icon,
  VStack,
  
  Image,
  Center,
  
} from "@gluestack-ui/themed";
import {
  ScrollView,
  Dimensions,
  StatusBar,
  FlatList,
  
  
  TouchableOpacity,
  StyleSheet,
} from "react-native";

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
  WashingMachine,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";






export default function HomeScreen() {
  const { navigate } = useNavigation();
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

  interface Address {
    id: string;
    latitude: string;
    longitude: string;
    deskripsi: string;
  }
  
  interface Review {
    id: string;
    rating: number;
    deskripsi: string;
    created_at: any; // Replace with actual type if available
  }
  
  interface LaundryItem {
    id: string;
    name: string;
    address: string;
    star: string;
    message: string;
    distance: string;
  }

  const [laundry, setLaundry] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchLaundryData();
  }, []);

  async function fetchLaundryData() {
    const apiUrl = "https://api.zamanlaundry.id/product/laundry/rekomendasi";
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS56YW1hbmxhdW5kcnkuaWQvYXV0aC9sb2dpbiIsImlhdCI6MTcwNjEyMzczMSwiZXhwIjoxNzA2MTI3MzMxLCJuYmYiOjE3MDYxMjM3MzEsImp0aSI6InR0aXJOTlhPZG9KVGZVSUQiLCJzdWIiOiIxMzcxOGNkOS05YzQ5LTExZWUtOWQ1My1kOGJiYzE3OWFiYjciLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.WkHhrE4zKP38A1s8QNKH9IepWxgO8iEb8ccjG-AxpXM"; // Replace with your actual access token
    const apiKey = "Ikh4YE3fzOD50lPOm8HDYCRItBkJP3LnO9FjEZGLUm8KmqjA2zPsHIZh8WUjSeNs"
  
    // Create form data with latitude and longitude
    const formData = new FormData();
    formData.append('latitude', '0.4802224');
    formData.append('longitude', '101.4159171');
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST', // Adjust the method based on the API's requirements
        headers: {
          Authorization: `Bearer ${token}`,
          'X-API-KEY': apiKey,
        },
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.success) {
        const laundryData = data.data.map((item: any) => {
          const address = item.alamat.deskripsi;
          const truncatedAddress = address.length > 25 ? `${address.substring(0, 25)} ...` : address;

          const reviews: Review[] = item.ulasan;
  
          return {
            id: item.id,
            name: item.nama_outlet,
            address: truncatedAddress,
            star: item.rating.toString(),
            message: reviews.length > 0 ? reviews.length.toString() : "0",
            distance: `${item.jarak.toFixed(2)} km`,
          };
        });
  
        setLaundry(laundryData);
      } else {
        console.error("Error fetching data:", data.message);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


  
  
  // Call the function to fetch and transform the data
  fetchLaundryData();
  
  

  // const [isLoading, setLoading] = useState(true);
  // const [laundry, setLaundry] = useState<LaundryItem[]>([]);


  // const getToko = async () => {
  //   try {
  //     const response = await fetch('https://reactnative.dev/movies.json');
  //     const json = await response.json();
  //     setLaundry(json.movies);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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

  // const laundry: LaundryItem[] = [
  //   {
  //     id: "1",
  //     name: "Zala Laundry",
  //     address: "Jl. Kedondong No.12",
  //     star: "4.8",
  //     message: "11+",
  //     distance: "1.2 km",
  //   },
  //   {
  //     id: "2",
  //     name: "Zala Laundry",
  //     address: "Jl. Kedondong No.12",
  //     star: "4.8",
  //     message: "11+",
  //     distance: "1.2 km",
  //   },
  //   {
  //     id: "3",
  //     name: "Zala Laundry",
  //     address: "Jl. Kedondong No.12",
  //     star: "4.8",
  //     message: "11+",
  //     distance: "1.2 km",
  //   },
  //   {
  //     id: "4",
  //     name: "Zala Laundry",
  //     address: "Jl. Kedondong No.12",
  //     star: "4.8",
  //     message: "11+",
  //     distance: "1.2 km",
  //   },
  //   {
  //     id: "5",
  //     name: "Zala Laundry",
  //     address: "Jl. Kedondong No.12",
  //     star: "4.8",
  //     message: "11+",
  //     distance: "1.2 km",
  //   },
  //   {
  //     id: "6",
  //     name: "Zala Laundry",
  //     address: "Jl. Kedondong No.12",
  //     star: "4.8",
  //     message: "11+",
  //     distance: "1.2 km",
  //   },
  // ];

  return (
    <ScrollView>
      <VStack bgColor="#fafafa">
        <Box bg={biruZala} px={"$6"} py={"$2.5"}>
          <StatusBar
            animated={true}
            barStyle={"dark-content"}
            backgroundColor={"#00A1FF"}
          />
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
            <TouchableOpacity
              onPress={() => navigate("profile")}
              style={styles.notif}
            >
              <Bell color={biruZala} strokeWidth={2.25} />
            </TouchableOpacity>
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
                  <WashingMachine color="white" size={32}/>
                  
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
                        <HStack 
                        alignItems="center"
                        >
                          <Star size={16} color="#FFC107" />
                          <Text
                            fontSize={12}
                            fontWeight="$semibold"
                            color="#515151"
                          >
                            {item.star}
                          </Text>
                        </HStack>
                        <HStack 
                        alignItems="center"
                        >
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
                data={artikel.slice(0, 3)}
                renderItem={({ item }) => (
                  <HStack
                    borderRadius={20}
                    bgColor="white"
                    mr={10}
                    mb={14}
                    space="md"
                  >
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
                scrollEnabled={false}
                keyExtractor={(item) => item.id}
              />
              {artikel.length > 3 && <>{/* Show More */}</>}
            </Box>
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  notif: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    padding: 8,
    borderRadius: 50,
    alignItems: "center",
  },
});
