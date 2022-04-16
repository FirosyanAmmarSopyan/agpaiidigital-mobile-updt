import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  Icon,
  IconButton,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
  Heading,
  AspectRatio,
  HStack,
  Stack,
  ScrollView,
  Avatar,
  Fab
} from "native-base";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import { FAB } from 'react-native-elements';

const MakeEvent = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <ScrollView>
    <View>
    <Box>
      <Fab
        renderInPortal={true}
        shadow={2}
        bg="#f0c14b"
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
      />
    </Box>
      <View style={{backgroundColor: "white"}}>
       <Heading size="md" ml="5" my="3">Acara kamu</Heading>
      </View>
    </View>
    </ScrollView>
  );
};

export default MakeEvent;
