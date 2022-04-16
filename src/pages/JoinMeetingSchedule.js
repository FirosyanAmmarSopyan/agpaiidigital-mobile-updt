import React, { useState } from "react";
import {
  View,
  Picker,
  StyleSheet,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import { Button } from "react-native-elements";
import {
  Icon,
  Heading,
  StatusBar,
  Input,
  Select,
  CheckIcon,
  IconButton,
  Text,
  FormControl,
} from "native-base";
import { Entypo, Ionicons, FontAwesome5 } from "@expo/vector-icons";

function Header({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        backgroundColor: "white",
        elevation: 5,
      }}
    >
      <View>
        <Button
          title="Batal"
          buttonStyle={{
            backgroundColor: "#009788",
            borderRadius: 30,
            height: 30,
            marginLeft: 10,
          }}
          onPress={() => navigation.navigate("home")}
          containerStyle={{
            width: 80,
          }}
          titleStyle={{ marginTop: -3, fontSize: 15 }}
        />
      </View>
      <View style={{ alignSelf: "center", marginLeft: -40 }}>
        <Heading bold size="md">
          Gabung Rapat
        </Heading>
      </View>
      <View></View>
    </View>
  );
}

const JoinMeetingSchedule = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");
  const [value, setValue] = React.useState("");
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Header />
      <View style={{ backgroundColor: "white" }}>
        <View
          style={{
            width: "95%",
            elevation: 3,
            borderRadius: 20,
            alignSelf: "center",
            marginTop: 30,
            marginBottom: 15,
            backgroundColor: "white",
            padding: 10,
          }}
        >
          <Input
            fontSize="15"
            height={30}
            variant="unstyled"
            placeholder="Masukkan kode rapat"
            placeholderTextColor={"black"}
          />
        </View>
        <View
          style={{
            width: "95%",
            elevation: 3,
            borderRadius: 20,
            alignSelf: "center",
            marginBottom: 15,
            backgroundColor: "white",
            padding: 10,
          }}
        >
          <Input
            fontSize="15"
            height={30}
            variant="unstyled"
            placeholder="Nama anda"
            placeholderTextColor={"black"}
          />
        </View>
        <View
          style={{
            width: "95%",
            elevation: 3,
            borderRadius: 20,
            alignSelf: "center",
            marginBottom: 15,
            backgroundColor: "white",
            padding: 10,
          }}
        >
          <Heading style={{ marginLeft: 10 }} size="sm">
            Rapat dimulai pada 30 Januari 2022, 12.00
          </Heading>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Heading>Pengingat</Heading>
              <Text style={{marginVertical:5}}>Rapat akan diingatkan di kalender perangkat anda</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>OKE</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Ingatkan Saya</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default JoinMeetingSchedule;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#009788",
  },
  buttonClose: {
    backgroundColor: "#009788",
    alignSelf:"flex-end"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal:10
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    textAlign: "center",

  },
});
