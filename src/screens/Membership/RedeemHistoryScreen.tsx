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
  Divider,
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
  Plus,
} from "lucide-react-native";

export default function RedeemHistoryScreen() {
  const { width, height } = Dimensions.get("window");
  const biruZala = "#00A1FF";
  const hijauZala = "#539D00";

  return (
    <ScrollView>
      <VStack>
        <ImageBackground
          source={require("../../../assets/Images/pattern.png")}
          style={{ width: width }}
          borderBottomLeftRadius={30}
          borderBottomRightRadius={30}
        >
          <Box
            px={"$5"}
            py={"$2"}
            pt={"$6"}
            pb={"$6"}
            borderBottomLeftRadius={30}
            borderBottomRightRadius={30}
          >
            <StatusBar
              translucent={true}
              animated={true}
              barStyle={"light-content"}
              backgroundColor="transparent"
            />
            <VStack>
              <HStack space="sm" alignContent="center" py={"$3"}>
                <ArrowLeft strokeWidth={2.25} color="white" />
                <Text color="white" bold fontSize={18}>
                  Riwayat Penggunaan Poin
                </Text>
              </HStack>
              <Box
                borderTopLeftRadius={20}
                borderBottomRightRadius={20}
                bgColor="$white"
                style={{ width: width - 50, height: 70 }}
                alignSelf="center"
                mt={height - 650}
                opacity={0.9}
                padding={10}
                justifyContent="center"
              >
                <HStack
                  alignItems="center"
                  justifyContent="space-between"
                  flex={1}
                >
                  <HStack alignItems="center" space={"sm"} flex={1}>
                    <Center bg={biruZala} w={48} h={48} p={6} borderRadius={10}>
                      <BadgeRussianRuble
                        color="white"
                        strokeWidth={2.25}
                        width={30}
                        height={30}
                      />
                    </Center>
                    <VStack alignItems="flex-start">
                      <Text fontWeight="$medium" fontSize={12}>
                        Poin Anda
                      </Text>
                      <Text fontWeight="$semibold" color="black" fontSize={20}>
                        5000
                      </Text>
                    </VStack>
                  </HStack>
                  <HStack alignItems="center" space={"sm"} flex={1}>
                    <Center bg={biruZala} w={48} h={48} borderRadius={10}>
                      <ArrowDownUp
                        color="white"
                        strokeWidth={2.25}
                        width={30}
                        height={30}
                      />
                    </Center>
                    <VStack alignItems="flex-start">
                      <Text fontWeight="$medium" fontSize={12}>
                        Total Penukaran
                      </Text>
                      <Text fontWeight="$semibold" color="black" fontSize={20}>
                        120
                      </Text>
                    </VStack>
                  </HStack>
                </HStack>
              </Box>
            </VStack>
          </Box>
        </ImageBackground>
        <VStack p={"$5"} space="md">
          <Text bold fontSize={18}>
            Riwayat
          </Text>

          <VStack
            borderWidth={1}
            borderRadius={20}
            borderColor="#dedede"
            p={10}
            space="md"
          >
            <HStack
              space="md"
              flex={1}
              // make this hstack when the content is more than 1 line it will be a separator

              borderColor="#dedede"
            >
              <Image
                source={require("../../../assets/Images/Membership/kupon.png")}
                w={44}
                h={44}
                alt="Foto Laundry"
                borderRadius={10}
                // make sure the size of the image is 100% width and the height is auto to keep the aspect ratio
              />
              <VStack>
                <Text fontSize={12} fontWeight="$medium" color="black">
                  Gratis cuci kering setrika - 3 kg
                </Text>
                <Text fontSize={12} fontWeight="$normal" color="#8d8d8d">
                  Senin, 17 Sept 2023{" "}
                </Text>
              </VStack>
              <VStack
                alignItems="flex-end"
                // make this vstack to the end of the parent
                flex={1}
              >
                <Text fontSize={14} fontWeight="$medium" color="red">
                  2500
                </Text>
                <Text fontSize={14} fontWeight="$medium" color="blue">
                  Poin Zala{" "}
                </Text>
              </VStack>
            </HStack>
            <Divider />
            <HStack
              space="md"
              flex={1}
              // make this hstack when the content is more than 1 line it will be a separator

              borderColor="#dedede"
            >
              <Image
                source={require("../../../assets/Images/Membership/kupon.png")}
                w={44}
                h={44}
                alt="Foto Laundry"
                borderRadius={10}
                // make sure the size of the image is 100% width and the height is auto to keep the aspect ratio
              />
              <VStack>
                <Text fontSize={12} fontWeight="$medium" color="black">
                  Gratis cuci kering setrika - 3 kg
                </Text>
                <Text fontSize={12} fontWeight="$normal" color="#8d8d8d">
                  Senin, 17 Sept 2023{" "}
                </Text>
              </VStack>
              <VStack
                alignItems="flex-end"
                // make this vstack to the end of the parent
                flex={1}
              >
                <Text fontSize={14} fontWeight="$medium" color="red">
                  2500
                </Text>
                <Text fontSize={14} fontWeight="$medium" color="blue">
                  Poin Zala{" "}
                </Text>
              </VStack>
            </HStack>
            <Divider />
            <HStack
              space="md"
              flex={1}
              // make this hstack when the content is more than 1 line it will be a separator

              borderColor="#dedede"
            >
              <Image
                source={require("../../../assets/Images/Membership/kupon.png")}
                w={44}
                h={44}
                alt="Foto Laundry"
                borderRadius={10}
                // make sure the size of the image is 100% width and the height is auto to keep the aspect ratio
              />
              <VStack>
                <Text fontSize={12} fontWeight="$medium" color="black">
                  Gratis cuci kering setrika - 3 kg
                </Text>
                <Text fontSize={12} fontWeight="$normal" color="#8d8d8d">
                  Senin, 17 Sept 2023{" "}
                </Text>
              </VStack>
              <VStack
                alignItems="flex-end"
                // make this vstack to the end of the parent
                flex={1}
              >
                <Text fontSize={14} fontWeight="$medium" color={hijauZala}>
                  2500
                </Text>
                <Text fontSize={14} fontWeight="$medium" color="blue">
                  Poin Zala{" "}
                </Text>
              </VStack>
            </HStack>
            <Divider />
            <HStack
              space="md"
              flex={1}
              // make this hstack when the content is more than 1 line it will be a separator

              borderColor="#dedede"
            >
              <Image
                source={require("../../../assets/Images/Membership/kupon.png")}
                w={44}
                h={44}
                alt="Foto Laundry"
                borderRadius={10}
                // make sure the size of the image is 100% width and the height is auto to keep the aspect ratio
              />
              <VStack>
                <Text fontSize={12} fontWeight="$medium" color="black">
                  Gratis cuci kering setrika - 3 kg
                </Text>
                <Text fontSize={12} fontWeight="$normal" color="#8d8d8d">
                  Senin, 17 Sept 2023{" "}
                </Text>
              </VStack>
              <VStack
                alignItems="flex-end"
                // make this vstack to the end of the parent
                flex={1}
              >
                <Text fontSize={14} fontWeight="$medium" color={hijauZala}>
                  2500
                </Text>
                <Text fontSize={14} fontWeight="$medium" color="blue">
                  Poin Zala{" "}
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
