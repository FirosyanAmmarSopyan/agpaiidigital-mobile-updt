import React from "react";
import { Text, Avatar, Heading, StatusBar, AlertDialog } from "native-base";
import { Button } from "react-native-elements";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import LogoPremi from "../assets/logo-premi.svg";

const ComponentPackageSoalPremium = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);
  return (
    <View>
      <StatusBar />

      <TouchableOpacity>
        <View
          style={{
            backgroundColor: "white",
            width: "95%",
            alignSelf: "center",
            borderRadius: 5,
            borderColor: "#E5E5E5",
            borderWidth: 2,
          }}
        >
          <View
            style={{
              marginHorizontal: 10,
              marginVertical: 10,
              flexDirection: "row",
            }}
          >
            <Avatar
              bg="transparent"
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            ></Avatar>
            <Text
              underline
              fontSize="lg"
              alignSelf="center"
              ml="4"
              color="grey"
            >
              Sulimin,S.Pd.I
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: "#009788",
                marginLeft: 10,
                padding: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
              }}
            >
              <Text fontSize="md" color="white">
                Semester gasal
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#009788",
                marginLeft: 10,
                padding: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
              }}
            >
              <Text fontSize="md" color="white">
                6 SD
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#009788",
                marginLeft: 10,
                padding: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
              }}
            >
              <Text fontSize="md" color="white">
                Pengetahuan
              </Text>
            </View>
          </View>
          <View style={{ marginLeft: 10, marginTop: 5, maxWidth: 220 }}>
            <Text fontSize="xl">
              Penilaian tengah semester Akidah dan Akhlak
            </Text>
          </View>
          <View style={{ marginLeft: 10, marginVertical: 10 }}>
            <SvgXml xml={LogoPremi} width="25" height="25" />
          </View>
          <View>
            <Button
              // onPress={() => setIsOpen(!isOpen)}
              title="Tambahkan"
              buttonStyle={{
                backgroundColor: "#009788",
                borderRadius: 10,
              }}
              titleStyle={{
                fontSize: 16,
                marginTop: -3,
              }}
              containerStyle={{
                width: 150,
                height: 30,
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            />
            {/* <AlertDialog
              leastDestructiveRef={cancelRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <AlertDialog.Content>
                <AlertDialog.Header>Sukses</AlertDialog.Header>
                <AlertDialog.Body>
                  Butir soal berhasil ditambahkan di paket soal
                </AlertDialog.Body>
                <AlertDialog.Footer>
                  <Button.Group space={2}>
                    <Button
                      variant="unstyled"
                      colorScheme="coolGray"
                      onPress={onClose}
                      ref={cancelRef}
                    >
                      Oke
                    </Button>
                  </Button.Group>
                </AlertDialog.Footer>
              </AlertDialog.Content>
            </AlertDialog> */}

            {/*  Untuk Button Telah Ditambahkan */}
            {/* <Button
              title="Telah ditambahkan"
              buttonStyle={{
                backgroundColor: '#A0A0A0',
                borderRadius: 10,
              }}
              titleStyle={{
                fontSize: 16,
                marginTop:-3
              }}
              containerStyle={{
                width: 150,
                height: 30,
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            /> */}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ComponentPackageSoalPremium;
