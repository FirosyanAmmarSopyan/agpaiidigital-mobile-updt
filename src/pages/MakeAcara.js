import React from "react";
import { View, Text, TouchableOpacity, Dimensions ,  } from "react-native";
import { LinearGradient, SvgXml } from "react-native-svg";
import logo from "../assets/VeectorAcara.svg";
import { Icon, IconButton, StatusBar, Fab , ScrollView  } from "native-base";
import { MaterialIcons, Feather, AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import logo2 from "../assets/VectorJadwal.svg";

const windowHeight = Dimensions.get("window").height;
const MakeAcara = () => {
  return (
    <View style={{ backgroundColor: "white", height: windowHeight }}>
      <StatusBar backgroundColor="grey" barStyle="light-content" />
      <View>
        <TouchableOpacity>
          <Icon
            style={{ alignItems: "center" }}
            size="7"
            mt={11}
            ml={11}
            as={Feather}
            name="arrow-left"
          />
        </TouchableOpacity>
        <SvgXml
          style={{ position: "absolute", zIndex: -100 }}
          xml={logo}
          width="100%"
        />
      </View>

      <View style={{ alignSelf: "center", marginTop: 130 }}>
        <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 30 }}>
          Acara AGPAII
        </Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Button
            title={"Explore"}
            titleStyle={{ fontSize: 15, color: "white" }}
            buttonStyle={{
              width: 132,
              height: 38,
              backgroundColor: "#009788",
              borderRadius: 10,
            }}
          />
          <Button
            title={"Undangan"}
            titleStyle={{ fontSize: 15, color: "#009788" }}
            buttonStyle={{
              marginLeft: 9,
              width: 132,
              borderRadius: 10,
              height: 38,
              borderColor: "#009788",
              borderWidth: 1,
              backgroundColor: "transparent",
            }}
          />
        </View>
      </View>
      <ScrollView>
      <View>
        <SvgXml
          style={{ marginTop: 50 }}
          xml={logo2}
          width="100%"
          height="200"
        />
        <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 20 }}>
          Belum ada acara yang kamu buat
        </Text>
        <Text
          style={{
            alignSelf: "center",
            textAlign: "center",
            marginTop: 5,
            color: "#B8B8B8",
            width: 347,
          }}
        >
          Buat acara anda dan terhubung dengan pengguna lain. acara yang adan
          buat akan muncul disini
        </Text>
        <Button
          icon={<MaterialIcons name="add" color={"white"} size={35} />}
          buttonStyle={{
            backgroundColor: "#06A999",
            width: 50,
            height: 50,
            borderRadius: 1000,
            alignSelf: "center",
            marginTop: 27,
          }}
        />
      </View>
      </ScrollView>
    </View>
  );
};

export default MakeAcara;
