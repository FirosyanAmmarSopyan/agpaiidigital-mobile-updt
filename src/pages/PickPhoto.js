import React from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import {
  Box,
  Text,
  HStack,
  ScrollView,
  Image,
  Fab,
  Icon,
  Center,
  Button,
  Modal,
} from "native-base";
import { useState } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import { AntDesign } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import { Camera } from "./../store/Assets";
import HeaderPickPhoto from "./../components/HeaderPickPhoto";




const windowHeight = Dimensions.get("screen").height;
const windowWidth = Dimensions.get("window").width;
const PickPhoto = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Box flex={1}>
      <HeaderPickPhoto />
      <ScrollView>
        <Box flex={1}>
          <Grid style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Col
            onPress={() => setShowModal(true)}
              style={{
                height: 120,
                //   backgroundColor: index % 2 == 0 ? "red" : "blue",
                width: "33%",
                alignItems: "center",
                justifyContent: "center",
                padding: 2,
                backgroundColor: "white",
              }}
            >
              <SvgXml xml={Camera}></SvgXml>
            </Col>
            <Items></Items>
          </Grid>
        </Box>
      </ScrollView>

      <Box>
        <Button style={{ backgroundColor: "#009788", height: 45 }}>
          Pilih Beberapa
        </Button>
      </Box>



      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Durasi video terlalu panjang</Modal.Header>
          <Modal.Body>
            Durasi video minimal 1 menit
          </Modal.Body>
        </Modal.Content>
      </Modal>


    </Box>
  );
};

const Items = () => {
  const lists = [];
  for (let index = 0; index < 16; index++) {
    lists.push(
      <Col
        style={{
          height: 120,
          //   backgroundColor: index % 2 == 0 ? "red" : "blue",
          width: "33%",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Image
          source={{
            uri: `https://source.unsplash.com/random/900×700/?family`,
          }}
          alt="Alternate Text"
          style={{ width: "100%", height: "100%" }}
        />
      </Col>
    );
  }
  return lists;
};

export default PickPhoto;
