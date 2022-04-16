import React from "react";
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
  ScrollView
} from "native-base";
import { View, StyleSheet } from "react-native";
import HeaderExploreEvent from "../components/HeaderExploreEvent";
import IsiAcara from "../components/IsiAcara";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const ExploreEvent = () => {
  return (
    <View style={{backgroundColor:"white"}}>
      <View>
        <HeaderExploreEvent />
      </View>
      <View style={{ alignSelf: "center", marginVertical: 20 }}>
        <Input
          placeholder="Cari acara"
          placeholderTextColor="black"
          variant="filled"
          width="90%"
          borderRadius="20"
          py="1"
          px="2"
          InputLeftElement={
            <Icon
              ml="2"
              size="4"
              color="gray.400"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
      </View>
      <View style={{ alignSelf: "center",marginBottom:10 }}>
        <Heading>Rekomendasi Acara</Heading>
      </View>
      <ScrollView syle={{marginBottom:50}}>
      <View style={{marginVertical:10,marginBottom:190}}>
          <IsiAcara />
          <IsiAcara />
          <IsiAcara />
      </View>
      </ScrollView>
    </View>
  );
};

export default ExploreEvent;
