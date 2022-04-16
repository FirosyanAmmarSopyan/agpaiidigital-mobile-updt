import React from "react";
import { View, Picker, Text, TouchableOpacity } from "react-native";
import { StatusBar, Heading, Icon, IconButton, Input , Switch} from "native-base";
import { Button } from "react-native-elements";
import { SvgXml } from "react-native-svg";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import JadwalKalender3 from "../assets/jadwal-kalender3.svg";

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
          Buat Jadwal Rapat
        </Heading>
      </View>
      <View></View>
    </View>
  );
}

const CreateScheduleMeeting = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = React.useState("00");
  const [value, setValue] = React.useState("00");
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
            placeholder="Nama rapat"
            placeholderTextColor={"black"}
          />
        </View>
        <View
          style={{
            width: "95%",
            elevation: 3,
            borderRadius: 20,
            alignSelf: "center",
            marginTop: 5,
            marginBottom: 15,
            backgroundColor: "white",
            padding: 10,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 30, width: "100%" }}
              onValueChange={(itemValue) => {
                setValue(itemValue);
              }}
            >
              <Picker.Item
                style={{ fontWeight: "bold" }}
                label="Publik"
                bold
                value="Siapa saja dapat mengikuti rapat ini"
              />
              <Picker.Item
                style={{ fontWeight: "bold" }}
                label="Diundang"
                value="Tidak terlihat umum , hanya orang yang anda undang saja"
              />
            </Picker>

            <Text style={{ marginLeft: 10 }}>{value}</Text>
          </View>
        </View>

        <TouchableOpacity>
          <View
            style={{
              width: "95%",
              elevation: 3,
              borderRadius: 20,
              alignSelf: "center",
              marginTop: 5,
              marginBottom: 15,
              backgroundColor: "white",
              padding: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Heading
              style={{ marginLeft: 5, alignSelf: "center" }}
              semibold
              size="md"
            >
              Tanggal
            </Heading>
            <Icon as={AntDesign} name="right" size="sm" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              width: "95%",
              elevation: 3,
              borderRadius: 20,
              alignSelf: "center",
              marginTop: 5,
              marginBottom: 15,
              backgroundColor: "white",
              padding: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Heading
              style={{ marginLeft: 5, alignSelf: "center" }}
              semibold
              size="md"
            >
              Mulai Pada jam
            </Heading>
            <Icon as={AntDesign} name="right" size="sm" />
          </View>
        </TouchableOpacity>

        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:-10}}>
            <Heading size="md" style={{marginLeft:15,alignSelf:"center"}}>
                Tambahkan ke kalender
            </Heading>
            <Switch onTrackColor="#7ED63E" onThumbColor="white"  size="lg" />

        </View>

        <View style={{marginHorizontal:10}}>
          <Button
            title="Buat Jadwal"
            buttonStyle={{
              backgroundColor: "#009788",
              height: 50,
              marginLeft: 10,
            }}
            onPress={() => navigation.navigate("Home")}
            containerStyle={{
              width: "100%",
            }}
            titleStyle={{ marginTop: -3, fontSize: 18 }}
          />
        </View>
      </View>
    </View>
  );
};

export default CreateScheduleMeeting;
