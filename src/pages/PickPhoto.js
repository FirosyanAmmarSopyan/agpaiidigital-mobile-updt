import React from "react";
import { Box, Text, HStack, ScrollView, Image } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { SvgXml } from "react-native-svg";
import { Camera } from "./../store/Assets";

const PickPhoto = ({ navigation }) => {
  return (
    <ScrollView>
      <Box>
        <Grid style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
          <Col
            style={{
              height: 200,
              //   backgroundColor: index % 2 == 0 ? "red" : "blue",
              width: "50%",
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
  );
};

const Items = () => {
  const lists = [];
  for (let index = 0; index < 60; index++) {
    lists.push(
      <Col
        style={{
          height: 200,
          //   backgroundColor: index % 2 == 0 ? "red" : "blue",
          width: "50%",
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
