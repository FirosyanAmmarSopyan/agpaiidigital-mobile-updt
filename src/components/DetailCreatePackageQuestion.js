import React from "react"
import {
    View,
    Text,
    Dimensions
} from "react-native"
import {
    Avatar,
    ScrollView,
} from "native-base"
import hisyam from "../assets/hisyam.jpeg"
import Diamond from "../assets/Diamond.svg"
import {SvgXml} from "react-native-svg"

const windowHeight = Dimensions.get("window").height;
function DetailCreatePackageQuestion() {
    return (
        <View style={{height: windowHeight - 300 , marginTop: 18}}>
            <ScrollView>
            <View style={{width: 380 , height: 205 , alignSelf: "center" , backgroundColor: "#F9F9F9" , paddingLeft: 20 , borderColor: "#E5E5E5" , borderWidth: 1}}>
                <View style={{flexDirection: "row" , marginTop: 10}}>
                <Avatar w="16" h="16" source={hisyam}/>
                <Text style={{color: "#A0A0A0" , textAlignVertical: "center" , fontWeight: "bold" , fontSize: 18 , marginLeft: 10 , textDecorationLine: "underline"}}>Bambang, S.Pd.I</Text>
                </View>
                <View style={{flexDirection: "row" , marginTop: 15}}>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Semester Gasal</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 45 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>6SD</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Pengetahuan</Text>
                    </View>
                </View>
                <Text style={{fontSize: 19}}>Penilaian Tengah Semester</Text>
                <Text style={{fontSize: 17}}>Aqidah Akhlak</Text>
                <SvgXml style={{marginTop: 10}} xml={Diamond} width="30" height="30"/>
            </View>

            <View style={{width: 380 , height: 180 , alignSelf: "center" , backgroundColor: "#F9F9F9" , paddingLeft: 20 , marginTop: 10 , borderColor: "#E5E5E5" , borderWidth: 1}}>
                <View style={{flexDirection: "row" , marginTop: 10}}>
                <Avatar w="16" h="16" source={hisyam}/>
                <Text style={{color: "#A0A0A0" , textAlignVertical: "center" , fontWeight: "bold" , fontSize: 18 , marginLeft: 10 , textDecorationLine: "underline"}}>Bambang, S.Pd.I</Text>
                </View>
                <View style={{flexDirection: "row" , marginTop: 15}}>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Semester Gasal</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 45 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>6SD</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Pengetahuan</Text>
                    </View>
                </View>
                <Text style={{fontSize: 19}}>Penilaian Tengah Semester</Text>
                <Text style={{fontSize: 17}}>Aqidah Akhlak</Text>
            </View>

            <View style={{width: 380 , height: 180 , alignSelf: "center" , backgroundColor: "#F9F9F9" , paddingLeft: 20 , marginTop: 10 , borderColor: "#E5E5E5" , borderWidth: 1}}>
                <View style={{flexDirection: "row" , marginTop: 10}}>
                <Avatar w="16" h="16" source={hisyam}/>
                <Text style={{color: "#A0A0A0" , textAlignVertical: "center" , fontWeight: "bold" , fontSize: 18 , marginLeft: 10 , textDecorationLine: "underline"}}>Bambang, S.Pd.I</Text>
                </View>
                <View style={{flexDirection: "row" , marginTop: 15}}>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Semester Gasal</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 45 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>6SD</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Pengetahuan</Text>
                    </View>
                </View>
                <Text style={{fontSize: 19}}>Penilaian Tengah Semester</Text>
                <Text style={{fontSize: 17}}>Aqidah Akhlak</Text>
            </View>

            <View style={{width: 380 , height: 180 , alignSelf: "center" , backgroundColor: "#F9F9F9" , paddingLeft: 20 , marginTop: 10 , borderColor: "#E5E5E5" , borderWidth: 1}}>
                <View style={{flexDirection: "row" , marginTop: 10}}>
                <Avatar w="16" h="16" source={hisyam}/>
                <Text style={{color: "#A0A0A0" , textAlignVertical: "center" , fontWeight: "bold" , fontSize: 18 , marginLeft: 10 , textDecorationLine: "underline"}}>Bambang, S.Pd.I</Text>
                </View>
                <View style={{flexDirection: "row" , marginTop: 15}}>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Semester Gasal</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 45 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>6SD</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Pengetahuan</Text>
                    </View>
                </View>
                <Text style={{fontSize: 19}}>Penilaian Tengah Semester</Text>
                <Text style={{fontSize: 17}}>Aqidah Akhlak</Text>
            </View>

            <View style={{width: 380 , height: 180 , alignSelf: "center" , backgroundColor: "#F9F9F9" , paddingLeft: 20 , marginTop: 10 , borderColor: "#E5E5E5" , borderWidth: 1}}>
                <View style={{flexDirection: "row" , marginTop: 10}}>
                <Avatar w="16" h="16" source={hisyam}/>
                <Text style={{color: "#A0A0A0" , textAlignVertical: "center" , fontWeight: "bold" , fontSize: 18 , marginLeft: 10 , textDecorationLine: "underline"}}>Bambang, S.Pd.I</Text>
                </View>
                <View style={{flexDirection: "row" , marginTop: 15}}>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Semester Gasal</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 45 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>6SD</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Pengetahuan</Text>
                    </View>
                </View>
                <Text style={{fontSize: 19}}>Penilaian Tengah Semester</Text>
                <Text style={{fontSize: 17}}>Aqidah Akhlak</Text>
            </View>

            <View style={{width: 380 , height: 180 , alignSelf: "center" , backgroundColor: "#F9F9F9" , paddingLeft: 20 , marginTop: 10 , borderColor: "#E5E5E5" , borderWidth: 1}}>
                <View style={{flexDirection: "row" , marginTop: 10}}>
                <Avatar w="16" h="16" source={hisyam}/>
                <Text style={{color: "#A0A0A0" , textAlignVertical: "center" , fontWeight: "bold" , fontSize: 18 , marginLeft: 10 , textDecorationLine: "underline"}}>Bambang, S.Pd.I</Text>
                </View>
                <View style={{flexDirection: "row" , marginTop: 15}}>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Semester Gasal</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 45 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>6SD</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Pengetahuan</Text>
                    </View>
                </View>
                <Text style={{fontSize: 19}}>Penilaian Tengah Semester</Text>
                <Text style={{fontSize: 17}}>Aqidah Akhlak</Text>
            </View>

            <View style={{width: 380 , height: 180 , alignSelf: "center" , backgroundColor: "#F9F9F9" , paddingLeft: 20 , marginTop: 10 , borderColor: "#E5E5E5" , borderWidth: 1}}>
                <View style={{flexDirection: "row" , marginTop: 10}}>
                <Avatar w="16" h="16" source={hisyam}/>
                <Text style={{color: "#A0A0A0" , textAlignVertical: "center" , fontWeight: "bold" , fontSize: 18 , marginLeft: 10 , textDecorationLine: "underline"}}>Bambang, S.Pd.I</Text>
                </View>
                <View style={{flexDirection: "row" , marginTop: 15}}>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Semester Gasal</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 45 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>6SD</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Pengetahuan</Text>
                    </View>
                </View>
                <Text style={{fontSize: 19}}>Penilaian Tengah Semester</Text>
                <Text style={{fontSize: 17}}>Aqidah Akhlak</Text>
            </View>

            <View style={{width: 380 , height: 180 , alignSelf: "center" , backgroundColor: "#F9F9F9" , paddingLeft: 20 , marginTop: 10 , borderColor: "#E5E5E5" , borderWidth: 1}}>
                <View style={{flexDirection: "row" , marginTop: 10}}>
                <Avatar w="16" h="16" source={hisyam}/>
                <Text style={{color: "#A0A0A0" , textAlignVertical: "center" , fontWeight: "bold" , fontSize: 18 , marginLeft: 10 , textDecorationLine: "underline"}}>Bambang, S.Pd.I</Text>
                </View>
                <View style={{flexDirection: "row" , marginTop: 15}}>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Semester Gasal</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 45 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>6SD</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Pengetahuan</Text>
                    </View>
                </View>
                <Text style={{fontSize: 19}}>Penilaian Tengah Semester</Text>
                <Text style={{fontSize: 17}}>Aqidah Akhlak</Text>
            </View>

            <View style={{width: 380 , height: 180 , alignSelf: "center" , backgroundColor: "#F9F9F9" , paddingLeft: 20 , marginTop: 10 , borderColor: "#E5E5E5" , borderWidth: 1}}>
                <View style={{flexDirection: "row" , marginTop: 10}}>
                <Avatar w="16" h="16" source={hisyam}/>
                <Text style={{color: "#A0A0A0" , textAlignVertical: "center" , fontWeight: "bold" , fontSize: 18 , marginLeft: 10 , textDecorationLine: "underline"}}>Bambang, S.Pd.I</Text>
                </View>
                <View style={{flexDirection: "row" , marginTop: 15}}>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Semester Gasal</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 45 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>6SD</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Pengetahuan</Text>
                    </View>
                </View>
                <Text style={{fontSize: 19}}>Penilaian Tengah Semester</Text>
                <Text style={{fontSize: 17}}>Aqidah Akhlak</Text>
            </View>

            <View style={{width: 380 , height: 180 , alignSelf: "center" , backgroundColor: "#F9F9F9" , paddingLeft: 20 , marginTop: 10 , borderColor: "#E5E5E5" , borderWidth: 1}}>
                <View style={{flexDirection: "row" , marginTop: 10}}>
                <Avatar w="16" h="16" source={hisyam}/>
                <Text style={{color: "#A0A0A0" , textAlignVertical: "center" , fontWeight: "bold" , fontSize: 18 , marginLeft: 10 , textDecorationLine: "underline"}}>Bambang, S.Pd.I</Text>
                </View>
                <View style={{flexDirection: "row" , marginTop: 15}}>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Semester Gasal</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 45 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>6SD</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Pengetahuan</Text>
                    </View>
                </View>
                <Text style={{fontSize: 19}}>Penilaian Tengah Semester</Text>
                <Text style={{fontSize: 17}}>Aqidah Akhlak</Text>
            </View>

            <View style={{width: 380 , height: 180 , alignSelf: "center" , backgroundColor: "#F9F9F9" , paddingLeft: 20 , marginTop: 10 , borderColor: "#E5E5E5" , borderWidth: 1}}>
                <View style={{flexDirection: "row" , marginTop: 10}}>
                <Avatar w="16" h="16" source={hisyam}/>
                <Text style={{color: "#A0A0A0" , textAlignVertical: "center" , fontWeight: "bold" , fontSize: 18 , marginLeft: 10 , textDecorationLine: "underline"}}>Bambang, S.Pd.I</Text>
                </View>
                <View style={{flexDirection: "row" , marginTop: 15}}>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Semester Gasal</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 45 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>6SD</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Pengetahuan</Text>
                    </View>
                </View>
                <Text style={{fontSize: 19}}>Penilaian Tengah Semester</Text>
                <Text style={{fontSize: 17}}>Aqidah Akhlak</Text>
            </View>

            <View style={{width: 380 , height: 180 , alignSelf: "center" , backgroundColor: "#F9F9F9" , paddingLeft: 20 , marginTop: 10 , borderColor: "#E5E5E5" , borderWidth: 1}}>
                <View style={{flexDirection: "row" , marginTop: 10}}>
                <Avatar w="16" h="16" source={hisyam}/>
                <Text style={{color: "#A0A0A0" , textAlignVertical: "center" , fontWeight: "bold" , fontSize: 18 , marginLeft: 10 , textDecorationLine: "underline"}}>Bambang, S.Pd.I</Text>
                </View>
                <View style={{flexDirection: "row" , marginTop: 15}}>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Semester Gasal</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 45 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>6SD</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Pengetahuan</Text>
                    </View>
                </View>
                <Text style={{fontSize: 19}}>Penilaian Tengah Semester</Text>
                <Text style={{fontSize: 17}}>Aqidah Akhlak</Text>
            </View>

            <View style={{width: 380 , height: 180 , alignSelf: "center" , backgroundColor: "#F9F9F9" , paddingLeft: 20 , marginTop: 10 , borderColor: "#E5E5E5" , borderWidth: 1}}>
                <View style={{flexDirection: "row" , marginTop: 10}}>
                <Avatar w="16" h="16" source={hisyam}/>
                <Text style={{color: "#A0A0A0" , textAlignVertical: "center" , fontWeight: "bold" , fontSize: 18 , marginLeft: 10 , textDecorationLine: "underline"}}>Bambang, S.Pd.I</Text>
                </View>
                <View style={{flexDirection: "row" , marginTop: 15}}>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Semester Gasal</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 45 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>6SD</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Pengetahuan</Text>
                    </View>
                </View>
                <Text style={{fontSize: 19}}>Penilaian Tengah Semester</Text>
                <Text style={{fontSize: 17}}>Aqidah Akhlak</Text>
            </View>

            <View style={{width: 380 , height: 180 , alignSelf: "center" , backgroundColor: "#F9F9F9" , paddingLeft: 20 , marginTop: 10 , borderColor: "#E5E5E5" , borderWidth: 1}}>
                <View style={{flexDirection: "row" , marginTop: 10}}>
                <Avatar w="16" h="16" source={hisyam}/>
                <Text style={{color: "#A0A0A0" , textAlignVertical: "center" , fontWeight: "bold" , fontSize: 18 , marginLeft: 10 , textDecorationLine: "underline"}}>Bambang, S.Pd.I</Text>
                </View>
                <View style={{flexDirection: "row" , marginTop: 15}}>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Semester Gasal</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 45 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>6SD</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Pengetahuan</Text>
                    </View>
                </View>
                <Text style={{fontSize: 19}}>Penilaian Tengah Semester</Text>
                <Text style={{fontSize: 17}}>Aqidah Akhlak</Text>
            </View>

            <View style={{width: 380 , height: 180 , alignSelf: "center" , backgroundColor: "#F9F9F9" , paddingLeft: 20 , marginTop: 10 , borderColor: "#E5E5E5" , borderWidth: 1}}>
                <View style={{flexDirection: "row" , marginTop: 10}}>
                <Avatar w="16" h="16" source={hisyam}/>
                <Text style={{color: "#A0A0A0" , textAlignVertical: "center" , fontWeight: "bold" , fontSize: 18 , marginLeft: 10 , textDecorationLine: "underline"}}>Bambang, S.Pd.I</Text>
                </View>
                <View style={{flexDirection: "row" , marginTop: 15}}>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Semester Gasal</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 45 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>6SD</Text>
                    </View>
                    <View style={{backgroundColor: "#009788" , borderRadius: 5 , width: 115 , height: 25 , marginLeft: 10 }}>
                    <Text style={{ color: "white" , alignSelf: "center" , fontSize: 17 , marginTop: 2}}>Pengetahuan</Text>
                    </View>
                </View>
                <Text style={{fontSize: 19}}>Penilaian Tengah Semester</Text>
                <Text style={{fontSize: 17}}>Aqidah Akhlak</Text>
            </View>
            </ScrollView>
        </View>
    )
}

export default DetailCreatePackageQuestion;