import React from "react";
import { View, ScrollView, Image, StyleSheet } from "react-native";
import hisyam from "../assets/hisyam.jpeg";
import LDS from "../assets/Content.png";
const ImageSlider = () => {
  return (
    <View style={{ width: 290, height: 175, marginTop: 30, }}>
      <ScrollView horizontal style={{}}>
        <Image style={styles.imager} resizeMode="contain" source={LDS} />
        <Image style={styles.imager} resizeMode="contain" source={LDS} />
      </ScrollView>
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  imager: {
    height: 155,
    marginLeft:-7
  },
});
