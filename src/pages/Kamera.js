import React from "react";
import { View,StyleSheet } from "react-native";
import { IconButton , Icon} from "native-base"
import { Tab,Text ,TabView } from "react-native-elements";
import { SvgXml } from "react-native-svg";
import IsiCamera from "../assets/IsiCamera.svg";
import { Entypo } from "@expo/vector-icons";

export default () => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "#009387",
        }}
        variant="white"
      >
        <Tab.Item
          title="Ambil gambar"
          titleStyle={{
            fontSize: 15,
            textTransform: "capitalize",
            color: "#000",
          }}
        />
        <Tab.Item
          title="Ambil Video"
          titleStyle={{
            fontSize: 15,
            textTransform: "capitalize",
            color: "#000",
          }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: "100%",backgroundColor:"blue" }}>
          {/* <SvgXml style={{backgroundColor:"red" , marginTop: -27 }} xml={IsiCamera} width="100%" /> */}
          <View>
            <IconButton style={{width:"15%"}}
              icon={<Icon as={Entypo} name="circle" size="lg" />}            
            />
          </View>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <Text h1>Favorite</Text>
        </TabView.Item>
      </TabView>
    </>
  );
};
