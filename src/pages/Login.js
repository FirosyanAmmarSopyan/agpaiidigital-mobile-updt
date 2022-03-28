import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import { Button } from "react-native-elements";
import AGPAII from "../assets/agpaii(1).svg";
import {SvgXml} from "react-native-svg"
import footer from "../assets/MasjidFooter.svg"


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const LogiN = ({navigation}) => {
  return (
    <View style={{height: "100%"}}>
      <SvgXml style={styles.logo} xml={AGPAII}/>
      <View>
        <Text style={styles.masuk}>MASUK</Text>
      </View>
      <View>
        <TextInput
          placeholderTextColor="black"
          style={styles.email}
          placeholder="Email"
        ></TextInput>
        <TextInput
          placeholderTextColor="black"
          style={styles.password}
          placeholder="Password"  
        ></TextInput>
        <TouchableOpacity>
          <Text style={styles.lupakatasandi}>Lupa Kata Sandi</Text>
        </TouchableOpacity>
        <Button
          onPress={() => navigation.navigate("Beranda")}
          title={"MASUK"}
          buttonStyle={{ width: 360, alignSelf: "center", marginTop: 30 , backgroundColor: "#009788"}}
          titleStyle={{fontSize: 25 , fontWeight: "bold"}}
        />
        <TouchableOpacity>
          <Text style={styles.belumpunyaakun}>Belum Punya Akun?</Text>
        </TouchableOpacity>

        <Button
          onPress={() => navigation.navigate("daftar")}
          title={"DAFTAR"}
          buttonStyle={{ width: 360, alignSelf: "center", marginTop: 20 , backgroundColor: "transparent" , borderColor: "#3E3E3E" , borderWidth: 3}}
          titleStyle={{fontSize: 25 , fontWeight: "bold" , color: "#3E3E3E"}}
        />
      </View>

      <View style={{flex: 1,
            justifyContent: 'flex-end',
            height: '100%',}}>
      <SvgXml style={styles.footer} xml={footer}/>
      </View>
    </View>
  );
};
export default LogiN;

const styles = StyleSheet.create({
  masuk: {
    fontWeight: "bold",
    marginLeft: 27,
    fontSize: 35,
    marginTop: 50,
  },
  logo: {
    width: 100,
    height: 80,
    alignSelf: "center",
    marginTop: 100,
  },
  email: {
    width: 360,
    borderBottomWidth: 3,
    marginTop: 27,
    marginRight: 27,
    marginLeft: 27,
    color: "black",
    fontSize: 19,
    paddingBottom: 10,
  },
  password: {
    width: 360,
    borderBottomWidth: 3,
    marginTop: 30,
    marginLeft: 27,
    marginRight: 27,
    color: "black",
    fontSize: 19,
    paddingBottom: 5,
  },
  lupakatasandi: {
    color: "#009788",
    marginLeft: 25,
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  belumpunyaakun: {
      color: "#3E3E3E",
      alignSelf: "center",
      marginTop: 20,
      fontWeight: "bold"
  },
  footer: {
    position: "absolute",
    left: 0,
    height: 200,
    marginTop: windowHeight - 190,
    width: windowWidth,
    // backgroundColor: "red",
  },
});
