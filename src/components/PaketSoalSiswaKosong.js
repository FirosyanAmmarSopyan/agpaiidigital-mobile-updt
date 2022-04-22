import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {SvgXml} from 'react-native-svg';
import IconTopi from "../assets/icon-topi.svg";

const PaketSoalSiswaKosong = () => {
    return (
        <View style={{backgroundColor:"white",height:"100%"}}>
            <SvgXml style={{alignSelf:"center",marginTop:"50%"}} xml={IconTopi} width="50%" />
            <Text style={{alignSelf:"center",fontWeight:"bold",fontSize:20,maxWidth:"70%",textAlign:"center"}}>belum ada siswa yang mengerjakan paket soal ini.</Text>
        </View>
    )
}



export default PaketSoalSiswaKosong;