import React, { useState } from "react";
import {
  ScrollView,
  Dimensions,
  StatusBar,
  ImageBackground,
  Pressable,
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
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  ButtonText,
  Heading,
} from "@gluestack-ui/themed";

import { Eye, Coins, Copy, Ticket } from "lucide-react-native";

export default function MembershipScreen() {
  const { width, height } = Dimensions.get("window");
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const ref = React.useRef(null);

  const hijauZala = "#00A1FF";
  return (
    <ScrollView>
      <StatusBar animated={true} backgroundColor={hijauZala} />
      <VStack space="md" bgColor={"#fafbfb"} mb={"$4"}>
        <Box
          bg={hijauZala}
          px={"$6"}
          py={"$3"}
          borderBottomRightRadius={15}
          borderBottomLeftRadius={15}
        >
          <HStack flex={1} alignItems="center">
            <HStack space="xs" flex={1}>
              <Text color="white" bold fontSize={"$xl"}>
                Zala membership
              </Text>
            </HStack>
          </HStack>
        </Box>
        <Box px={"$6"}>
          <HStack
            bgColor="$white"
            p={"$3"}
            rounded={10}
            borderWidth={1}
            borderColor="#f4f4f4"
          >
            <VStack space="xs">
              <Text fontSize={18}>Saldo akun anda</Text>
              <HStack space={"md"}>
                <Text bold fontSize={16}>
                  Rp12,345
                </Text>
                <Eye color="#8e8e8e" />
              </HStack>
            </VStack>
            <Text
              bold
              color="$blue700"
              fontSize={18}
              flex={1}
              textAlign="right"
            >
              Premium
            </Text>
          </HStack>
        </Box>
        <VStack px={"$6"} py={"$3"} space="md">
          <Text bold fontSize={22}>
            Membership Card
          </Text>
          <Image
            source={require("../../../assets/Images/Membership/kartumember.png")}
            alt="FOto kartu member"
            // make sure the size of the image is 100% width and the height is auto to keep the aspect ratio
            style={{ width: "100%", height: undefined, aspectRatio: 1.7 }}
          />
          <Text bold fontSize={16} color={hijauZala}>
            1234 5678 9012 3456
          </Text>
        </VStack>
        <Box px={"$6"} py={"$3"}>
          <HStack
            p={"$3"}
            space="md"
            bgColor={"$white"}
            borderRadius={20}
            borderWidth={1}
            borderColor="#f4f4f4"
            // align the children to start to end to make the items fill the space
            justifyContent="space-between"
          >
            <HStack space="sm">
              <Center bg={hijauZala} p={"$3"} borderRadius={10}>
                <Coins color="#ffffff" />
              </Center>
              <VStack space="xs">
                <Text fontSize={16}>Poin anda</Text>
                <Text fontSize={18} bold color="black">
                  5000
                </Text>
              </VStack>
            </HStack>
            <HStack space="sm">
              <Center bg={hijauZala} p={"$3"} borderRadius={10}>
                <Coins color="#ffffff" />
              </Center>
              <VStack space="xs">
                <Text fontSize={16}>Total Penukaran</Text>
                <Text fontSize={18} bold color="black">
                  120
                </Text>
              </VStack>
            </HStack>
          </HStack>
        </Box>
        <VStack px={"$6"} space="sm">
          <HStack justifyContent="space-between" alignItems="center">
            <Text bold color="$black" fontSize={20}>
              Gunakan Kupon
            </Text>
            <Pressable>
              {({ pressed }) => (
                <Box
                  py={"$1"}
                  px={"$3"}
                  bgColor={"#b2e2fe"}
                  borderRadius={20}
                  opacity={pressed ? 0.5 : 1}
                >
                  <Text color={hijauZala} fontSize={16}>
                    Riwayat Penukaran
                  </Text>
                </Box>
              )}
            </Pressable>
          </HStack>
          {/*  KUPON STACK*/}
          <HStack
            bgColor="$white"
            borderRadius={20}
            borderWidth={1}
            borderColor="#f4f4f4"
            space="sm"
          >
            <Image
              source={require("../../../assets/Images/Membership/kupon.png")}
              alt="Foto kupon"
              // make the height of the image fill the container
              style={{ width: 100, height: "100%" }}
              borderTopLeftRadius={20}
              borderBottomLeftRadius={20}
            />
            <VStack p={"$2"} flex={1} space="xs">
              <VStack>
                <Text bold color="$black" fontSize={14}>
                  Gratis cuci kering setrika - 3 kg
                </Text>
                <Text color="$trueGray600" fontSize={12}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </VStack>
              <HStack justifyContent="space-between" alignItems="flex-end">
                <Box>
                  <VStack>
                    <Text bold color="$black" fontSize={12}>
                      Berlaku hingga
                    </Text>
                    <Text color="$trueGray600" fontSize={12}>
                      30 Desember 2021
                    </Text>
                  </VStack>
                </Box>
                <Pressable onPress={() => setShowModal1(true)} ref={ref}>
                  {({ pressed }) => (
                    <Center
                      // make the height of the button 75% of the parent
                      h={"$8"}
                      px={"$4"}
                      bg={hijauZala}
                      rounded={12}
                      opacity={pressed ? 0.5 : 1}
                    >
                      <Text fontWeight="$medium" color="$white" fontSize={12}>
                        Gunakan
                      </Text>
                    </Center>
                  )}
                </Pressable>
                <Modal
                  isOpen={showModal1}
                  onClose={() => {
                    setShowModal1(false);
                  }}
                  finalFocusRef={ref}
                >
                  <ModalBackdrop />
                  <ModalContent p={"$1"} px={"$2"} borderRadius={20}>
                    <ModalHeader justifyContent="center">
                      <Heading textAlign="center">
                        Selamat Poin anda berhasil ditukarkan
                      </Heading>
                    </ModalHeader>
                    <ModalBody px={"$6"}>
                      <Image
                        w={240}
                        h={240}
                        alignSelf="center"
                        source={require("../../../assets/Images/Membership/berhasil.png")}
                        alt="Foto sorry"
                      />
                      <Text
                        fontSize={12}
                        textAlign="center"
                        color="$coolGray600"
                      >
                        Salin Kode Voucher berikut pada halaman transaksi anda
                        sesuai dengan syarat dan ketentuan yang berlaku.
                      </Text>
                      <Box>
                        <HStack space="sm">
                          <HStack
                            w={190}
                            borderWidth={1}
                            borderRadius={10}
                            borderColor="#e4e4e4"
                            alignItems="center"
                            space="sm"
                            px={"$3"}
                          >
                            <Ticket size={22} color="black" />
                            <Text
                              color="$trueGray600"
                              fontWeight="$semibold"
                              fontSize={16}
                            >
                              CGK767PKUTW
                            </Text>
                          </HStack>
                          <Pressable>
                            {({ pressed }) => (
                              <Box
                                opacity={pressed ? 0.5 : 1}
                                bgColor="$white"
                                borderRadius={10}
                                shadowOffset={{ width: 2, height: 2 }}
                                shadowOpacity={0.75}
                                shadowRadius={2}
                                elevation={2}
                                p={"$1"}
                                px={"$3"}
                                alignItems="center"
                              >
                                <Copy color={hijauZala} size={20} />
                                <Text color={hijauZala} fontSize={12}>
                                  Salin
                                </Text>
                              </Box>
                            )}
                          </Pressable>
                        </HStack>
                      </Box>
                      <Text fontSize={12} textAlign="center" color="$red">
                        Berlaku hingga 20 Desember 2023
                      </Text>
                    </ModalBody>
                    <ModalFooter justifyContent="center">
                      <Button
                        size="sm"
                        action="positive"
                        borderRadius={40}
                        borderWidth="$0"
                        onPress={() => {
                          setShowModal1(false);
                        }}
                      >
                        <ButtonText>Selesai</ButtonText>
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </HStack>
            </VStack>
          </HStack>
          <HStack
            bgColor="$white"
            borderRadius={20}
            borderWidth={1}
            borderColor="#f4f4f4"
            space="sm"
          >
            <Image
              source={require("../../../assets/Images/Membership/kupon.png")}
              alt="Foto kupon"
              // make the height of the image fill the container
              style={{ width: 100, height: "100%" }}
              borderTopLeftRadius={20}
              borderBottomLeftRadius={20}
            />
            <VStack p={"$2"} flex={1} space="xs">
              <VStack>
                <Text bold color="$black" fontSize={14}>
                  Gratis cuci kering setrika - 3 kg
                </Text>
                <Text color="$trueGray600" fontSize={12}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </VStack>
              <HStack justifyContent="space-between" alignItems="flex-end">
                <Box>
                  <VStack>
                    <Text bold color="$black" fontSize={12}>
                      Berlaku hingga
                    </Text>
                    <Text color="$trueGray600" fontSize={12}>
                      30 Desember 2021
                    </Text>
                  </VStack>
                </Box>
                <Pressable onPress={() => setShowModal(true)} ref={ref}>
                  {({ pressed }) => (
                    <Center
                      // make the height of the button 75% of the parent
                      h={"$8"}
                      px={"$4"}
                      bg={hijauZala}
                      rounded={12}
                      opacity={pressed ? 0.5 : 1}
                    >
                      <Text fontWeight="$medium" color="$white" fontSize={12}>
                        Gunakan
                      </Text>
                    </Center>
                  )}
                </Pressable>
                <Modal
                  isOpen={showModal}
                  onClose={() => {
                    setShowModal(false);
                  }}
                  finalFocusRef={ref}
                >
                  <ModalBackdrop />
                  <ModalContent p={"$1"} px={"$2"} borderRadius={20}>
                    <ModalHeader justifyContent="center">
                      <Heading>Poin tidak cukup</Heading>
                    </ModalHeader>
                    <ModalBody>
                      <Image
                        w={240}
                        h={240}
                        alignSelf="center"
                        source={require("../../../assets/Images/Membership/sorry.png")}
                        alt="Foto sorry"
                      />
                      <Text fontSize={16} textAlign="center" color="$black">
                        Jumlah Poin anda tidak mencukupi untuk melakukan
                        penukaran ini.
                      </Text>
                    </ModalBody>
                    <ModalFooter justifyContent="center">
                      <Button
                        size="sm"
                        action="positive"
                        borderRadius={40}
                        borderWidth="$0"
                        onPress={() => {
                          setShowModal(false);
                        }}
                      >
                        <ButtonText>Mengerti</ButtonText>
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </HStack>
            </VStack>
          </HStack>
          <HStack
            bgColor="$white"
            borderRadius={20}
            borderWidth={1}
            borderColor="#f4f4f4"
            space="sm"
          >
            <Image
              source={require("../../../assets/Images/Membership/kupon.png")}
              alt="Foto kupon"
              // make the height of the image fill the container
              style={{ width: 100, height: "100%" }}
              borderTopLeftRadius={20}
              borderBottomLeftRadius={20}
            />
            <VStack p={"$2"} flex={1} space="xs">
              <VStack>
                <Text bold color="$black" fontSize={14}>
                  Gratis cuci kering setrika - 3 kg
                </Text>
                <Text color="$trueGray600" fontSize={12}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </VStack>
              <HStack justifyContent="space-between" alignItems="flex-end">
                <Box>
                  <VStack>
                    <Text bold color="$black" fontSize={12}>
                      Berlaku hingga
                    </Text>
                    <Text color="$trueGray600" fontSize={12}>
                      30 Desember 2021
                    </Text>
                  </VStack>
                </Box>
                <Pressable>
                  {({ pressed }) => (
                    <Center
                      // make the height of the button 75% of the parent
                      h={"$8"}
                      px={"$4"}
                      bg={hijauZala}
                      rounded={12}
                      opacity={pressed ? 0.5 : 1}
                    >
                      <Text fontWeight="$medium" color="$white" fontSize={12}>
                        Gunakan
                      </Text>
                    </Center>
                  )}
                </Pressable>
              </HStack>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
