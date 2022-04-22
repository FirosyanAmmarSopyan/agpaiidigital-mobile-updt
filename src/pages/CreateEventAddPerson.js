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
import Person from "../components/Person";


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
              width="70%"
              variant="unstyled"
              placeholder="Tambah Orang"
              placeholderTextColor={"black"}

            />
            <IconButton
            style={{marginLeft:7}}
              icon={<Icon as={EvilIcons} name="search" />}
              borderRadius="full"
              _icon={{
                color: "black",
                size: "md",
              }}
              _pressed={{
                bg: "coolGray.800:alpha.20",
                _icon: {
                  name: "search",
                },
              }}
            />
          </HStack>
        </HStack>
      </HStack>
    </>
  );
}

const CreateEventAddPerson = () => {
  return (
    <View>
      <Header />

      <Person />

      <Person />

      <Divider my="2" />
    </View>
  );
};

export default CreateEventAddPerson;
