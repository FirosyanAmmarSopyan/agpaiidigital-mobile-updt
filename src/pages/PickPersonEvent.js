import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import {
  StatusBar,
  HStack,
  IconButton,
  Heading,
  Icon,
  Input,
  Avatar,
  Divider,
} from "native-base";
import { Button } from "react-native-elements";
import { Ionicons , EvilIcons } from "@expo/vector-icons";
import PickedPerson from "../components/PickedPerson";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Header() {
  return (
    <>
      <StatusBar backgroundColor="grey" />
      <HStack>
        <HStack
          style={{
            justifyContent: "flex-start",
            backgroundColor: "white",
            borderBottomColor: "silver",
            borderBottomWidth: 1,
          }}
          width={windowWidth}
        >
          <HStack style={{ alignSelf: "center" }}>
            <IconButton
              style={{ width: "35%", marginTop: 5 }}
              icon={<Icon size="md" as={Ionicons} name="arrow-back" />}
            />
          </HStack>
          <HStack style={{ alignSelf: "center", marginLeft: -70 }}>
            {/* Center */}
            <Input
              size="lg"
              width="65%"
              variant="unstyled"
              placeholder="Tambah Orang"
              placeholderTextColor={"black"}

            />
            <Button
              containerStyle={{
                width: 70,
              }}
              title="selesai"
              type="clear"
              titleStyle={{ color:"#019F8F",marginTop:2 }}
            />
          </HStack>
        </HStack>
      </HStack>
    </>
  );
}

const PickPersonEvent = () => {
  return (
    <View>
      <Header />

      <PickedPerson />

      <PickedPerson />

      <Divider my="2" />
    </View>
  );
};

export default PickPersonEvent;
