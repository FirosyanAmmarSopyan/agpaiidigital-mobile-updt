import React from "react";
import {
  HStack,
  Button,
  IconButton,
  Icon,
  Box,
  StatusBar,
  View,
  useClipboard,
} from "native-base";
import {
    FontAwesome,
    MaterialIcons,
    Ionicons,
    AntDesign,
    Feather
} from "@expo/vector-icons";
import { Dimensions, Text , Image , ScrollView } from "react-native";
import {SvgXml} from "react-native-svg"
import hisyam from "../assets/hisyam.jpeg"
import pencil from "../assets/pencil.svg"
import desk from "../assets/description.svg"
import calender from "../assets/calendar.svg"
import vidcall from "../assets/vidcall.svg"
import location from "../assets/location.svg"
import maps from "../assets/maps.svg"
import eye from "../assets/eye.svg"
import lock from "../assets/gembok.svg"

function Header() {
  return (
    <>
 <StatusBar backgroundColor="grey" barStyle="light-content" />
      <Box safeAreaTop bg="white" />
      <HStack bg="white" px="1" py="3" justifyContent="space-between" alignItems="center" borderBottomRadius="30" width={windowWidth}>
        <HStack alignItems="center">
        <IconButton
                icon={<Icon size="7" as={Ionicons} name="ios-arrow-back" />}
              />
              <Text style={{fontWeight: "bold" , fontSize: 20 , color: "#3E3E3E" }}>Detail Event</Text>
        </HStack>
        <HStack>
        <IconButton
                icon={<Icon size="6" as={Feather} name="edit" />}
              />
        </HStack>
      </HStack>


            
              
    </>
  );
}
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const DetailEvent = () => {
  return (
    <View style={{height: "100%"}}>
        <View >
        <Header/>
        <Image source={hisyam} style={{width: windowWidth , height: 393 , position: "absolute" , zIndex: -1}}/>
        </View>
        <View style={{height: 100 , flex: 1}}>
            <View style={{
            position: "absolute",
            left: 0,
            height: 500,
            marginTop: windowHeight - 500,
            width: windowWidth,
            backgroundColor: "white",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30
            }}>
              <ScrollView>
              <View style={{flexDirection: "column" , marginBottom: 100}}>
                
                <View style={{flexDirection: "row" , marginTop: 29 , marginLeft: 15}}>
                  <SvgXml style={{margin: 5}} xml={pencil} width="30" height="30" />
                  <Text style={{marginLeft: 17 , fontWeight: "bold" , color: "#313131" , fontSize: 15 , textAlignVertical: "center"}}>Rapat Rencana Pembulian Hisyam</Text>
                </View>

                <View style={{flexDirection: "row" , marginTop: 18 , marginLeft: 15}}>
                  <SvgXml style={{margin: 5}} xml={desk} width="30" height="30" />
                  <Text style={{width: 260 , marginLeft: 17 , fontWeight: "bold" , color: "#313131" , fontSize: 15 , textAlignVertical: "center"}}>Semoga Hisyam Tetap Menjadi Anak Umi Sehidup Semati Bersama Umi</Text>
                </View>

                <View style={{flexDirection: "row" , marginTop: 18 , marginLeft: 15}}>
                  <SvgXml style={{margin: 5}} xml={calender} width="30" height="30" />
                  <Text style={{width: 260 , marginLeft: 17 , fontWeight: "bold" , color: "#313131" , fontSize: 15 , textAlignVertical: "center"}}>30 Desember 2055 Pukul 25:70</Text>
                </View>

                <View style={{flexDirection: "row" , marginTop: 18 , marginLeft: 15}}>
                  <SvgXml style={{margin: 5}} xml={vidcall} width="30" height="30" />
                  <Text style={{width: 260 , marginLeft: 17 , fontWeight: "bold" , color: "#313131" , fontSize: 15 , textAlignVertical: "center"}}>Rebahin.xyz</Text>
                  <IconButton pt="4" icon={<Icon as={FontAwesome} size="5" name="copy"/>} /> 
                </View>

                <View style={{flexDirection: "row" , marginTop: 18 , marginLeft: 15}}>
                  <SvgXml style={{margin: 5}} xml={location} width="30" height="30" />
                  <SvgXml style={{marginLeft: 17}} xml={maps}/>
              </View>
                <View style={{flexDirection: "row" , marginTop: 18 , marginLeft: 15}}>
                  <SvgXml style={{margin: 5}} xml={eye} width="30" height="30" />
                  <View style={{flexDirection: "column" }}>
                    <View style={{flexDirection: "row" , marginLeft: 17}}>
                      <SvgXml width="25" height="25" xml={lock}/>
                      <View style={{flexDirection: "column" , marginLeft: 20}}>
                        <View style={{flexDirection: "row" , justifyContent: "space-between"}}>
                      <Text style={{fontWeight: "bold" , fontSize: 15 , }}>Private</Text>
                      <Icon style={{marginTop: -5}} as={AntDesign} name="check" color="#019F8F" size="6"/>
                      </View>
                      <Text>Acara akan terliaht pada orang yang di undang</Text>
                      </View>
                      <View>
                      </View>
                    </View>
                    <View style={{flexDirection: "row" , marginTop: 10 , marginLeft: 20}}>
                      <Icon size="6" borderBottomRadius="100" as={FontAwesome} name="user"/>
                      <Text style={{fontWeight: "bold" , fontSize: 15 , marginLeft: 20 , textAlignVertical: "center" , color: "#313131" }}>AbuBambangHisyam,Spd</Text>
                    </View>
                    <View style={{flexDirection: "row" , marginTop: 10 , marginLeft: 20}}>
                      <Icon size="6" borderBottomRadius="100" as={FontAwesome} name="user"/>
                      <Text style={{fontWeight: "bold" , fontSize: 15 , marginLeft: 20 , textAlignVertical: "center" , color: "#313131" }}>AbuBambangHisyam,Spd</Text>
                    </View>
                    <View style={{flexDirection: "row" , marginTop: 10 , marginLeft: 20}}>
                      <Icon size="6" borderBottomRadius="100" as={FontAwesome} name="user"/>
                      <Text style={{fontWeight: "bold" , fontSize: 15 , marginLeft: 20 , textAlignVertical: "center" , color: "#313131" }}>AbuBambangHisyam,Spd</Text>
                    </View>
                    <View style={{flexDirection: "row" , marginTop: 10 , marginLeft: 20}}>
                      <Icon size="6" borderBottomRadius="100" as={FontAwesome} name="user"/>
                      <Text style={{fontWeight: "bold" , fontSize: 15 , marginLeft: 20 , textAlignVertical: "center" , color: "#313131" }}>AbuBambangHisyam,Spd</Text>
                    </View>
                  </View>
              </View>
              </View>
              </ScrollView>  
            </View>

        </View>
    </View>
  );
};

export default DetailEvent;
