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
} from "@gluestack-ui/themed";

import {
  ScrollView,
  Dimensions,
  StatusBar,
  ImageBackground,
  Pressable,
} from "react-native";
import {
  Plus,
  ArrowLeft,
  Info,
  Ticket,
  ChevronRight,
} from "lucide-react-native";

export default function HomeScreen() {
  const { width, height } = Dimensions.get("window");
  const hijauZala = "#539D00";

  return (
    <ScrollView>
      <VStack>
        <Box
          borderColor="#d1d1d1"
          borderBottomWidth={"$2"}
          bg="#ffffff"
          px={"$5"}
        >
          <StatusBar
            animated={true}
            barStyle={"dark-content"}
            backgroundColor={"#ffffff"}
          />

          <HStack space="sm" alignContent="center" py={"$3"}>
            <ArrowLeft strokeWidth={2.25} color="black" />
            <Text color="black" bold fontSize={18}>
              Top Up
            </Text>
          </HStack>
        </Box>

        <VStack p={"$5"} space="md">
          <VStack space="sm">
            <Box>
              <Text bold fontSize={16} color="$black">
                ID Member
              </Text>
              <HStack space="sm" alignItems="center">
                <Info size={16} color="#8d8d8d" strokeWidth={2.25} />
                <Text fontSize={12} color="#8d8d8d">
                  Rekomendasi berdasarkan riwayat
                </Text>
              </HStack>
            </Box>
            <VStack
              p={"$3"}
              borderWidth={1}
              borderColor="#d1d1d1"
              borderRadius={10}
            >
              <Text color="$black" bold fontSize={14}>
                Said A Rahim
              </Text>
              <Text color="$trueGray500" fontSize={12}>
                XXX-XXX-XXX
              </Text>
            </VStack>
          </VStack>
          <VStack space="sm">
            <Text bold fontSize={16} color="$black">
              Pilih nominal
            </Text>
            <VStack space="md">
              <HStack space="md">
                <ImageBackground
                  source={require("../../../assets/Images/Topup/50k.png")}
                  borderRadius={5}
                >
                  <Center w={84} h={"$10"} borderRadius={5}>
                    <Text color="$white" bold fontSize={14}>
                      Rp50.000
                    </Text>
                  </Center>
                </ImageBackground>
                <ImageBackground
                  source={require("../../../assets/Images/Topup/75k.png")}
                  borderRadius={5}
                >
                  <Center w={84} h={"$10"} borderRadius={5}>
                    <Text color="$white" bold fontSize={14}>
                      Rp75.000
                    </Text>
                  </Center>
                </ImageBackground>
                <ImageBackground
                  source={require("../../../assets/Images/Topup/100k.png")}
                  borderRadius={5}
                >
                  <Center w={84} h={"$10"} borderRadius={5}>
                    <Text color="$white" bold fontSize={14}>
                      Rp100.000
                    </Text>
                  </Center>
                </ImageBackground>
                <ImageBackground
                  source={require("../../../assets/Images/Topup/150k.png")}
                  borderRadius={5}
                >
                  <Center w={84} h={"$10"} borderRadius={5}>
                    <Text color="$white" bold fontSize={14}>
                      Rp150.000
                    </Text>
                  </Center>
                </ImageBackground>
              </HStack>
              <HStack space="md">
                <ImageBackground
                  source={require("../../../assets/Images/Topup/200k.png")}
                  borderRadius={5}
                >
                  <Center w={84} h={"$10"} borderRadius={5}>
                    <Text color="$white" bold fontSize={14}>
                      Rp200.000
                    </Text>
                  </Center>
                </ImageBackground>
                <ImageBackground
                  source={require("../../../assets/Images/Topup/250k.png")}
                  borderRadius={5}
                >
                  <Center w={84} h={"$10"} borderRadius={5}>
                    <Text color="$white" bold fontSize={14}>
                      Rp250.000
                    </Text>
                  </Center>
                </ImageBackground>
                <ImageBackground
                  source={require("../../../assets/Images/Topup/500k.png")}
                  borderRadius={5}
                >
                  <Center w={84} h={"$10"} borderRadius={5}>
                    <Text color="$white" bold fontSize={14}>
                      Rp500.000
                    </Text>
                  </Center>
                </ImageBackground>
                <ImageBackground
                  source={require("../../../assets/Images/Topup/750k.png")}
                  borderRadius={5}
                >
                  <Center w={84} h={"$10"} borderRadius={5}>
                    <Text color="$white" bold fontSize={14}>
                      Rp750.000
                    </Text>
                  </Center>
                </ImageBackground>
              </HStack>
              <HStack space="md">
                <ImageBackground
                  source={require("../../../assets/Images/Topup/1m.png")}
                  borderRadius={5}
                >
                  <Center w={180} h={"$10"} borderRadius={5}>
                    <Text color="$white" bold fontSize={14}>
                      Rp1.000.000
                    </Text>
                  </Center>
                </ImageBackground>
                <ImageBackground
                  source={require("../../../assets/Images/Topup/2m.png")}
                  borderRadius={5}
                >
                  <Center w={180} h={"$10"} borderRadius={5}>
                    <Text color="$white" bold fontSize={14}>
                      Rp2.000.000
                    </Text>
                  </Center>
                </ImageBackground>
              </HStack>
            </VStack>
          </VStack>
          <VStack space="sm">
            <HStack
              space="sm"
              p={"$3"}
              borderWidth={1}
              borderColor="#d1d1d1"
              borderRadius={10}
            >
              <Ticket color="#000000" strokeWidth={2.25} />
              <Text color="$black" bold fontSize={14}>
                Gunakan Kode Promo
              </Text>
              <VStack
                flex={1}
                alignItems="flex-end"
                justifyContent="center"
                space="sm"
              >
                <ChevronRight color="#000000" strokeWidth={2.25} />
              </VStack>
            </HStack>
            <VStack
              space="sm"
              p={"$3"}
              borderWidth={1}
              borderColor="#d1d1d1"
              borderRadius={10}
            >
              <HStack>
                <Text color="$black" fontSize={14}>
                  Total Top Up
                </Text>
                <VStack
                  flex={1}
                  alignItems="flex-end"
                  justifyContent="center"
                  space="sm"
                >
                  <Text color="$black" fontSize={14}>
                    Rp 0
                  </Text>
                </VStack>
              </HStack>
              <HStack>
                <Text color="$black" fontSize={14}>
                  Voucher Pembayaran
                </Text>
                <VStack
                  flex={1}
                  alignItems="flex-end"
                  justifyContent="center"
                  space="sm"
                >
                  <Text color="$black" fontSize={14}>
                    - Rp 0
                  </Text>
                </VStack>
              </HStack>
              <HStack>
                <Text color="$black" bold fontSize={14}>
                  Total Pembayaran
                </Text>
                <VStack
                  flex={1}
                  alignItems="flex-end"
                  justifyContent="center"
                  space="sm"
                >
                  <Text color="$black" bold fontSize={14}>
                    Rp 0
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </VStack>
          <Pressable>
            {({ pressed }) => (
              <Center
                mt={"$5"}
                p={"$3"}
                borderRadius={10}
                opacity={pressed ? 0.5 : 1}
                bgColor={hijauZala}
              >
                <Text color="$white" bold fontSize={18}>
                  Top Up Sekarang !!!!!!!!!!!!!!!!!!
                </Text>
              </Center>
            )}
          </Pressable>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
