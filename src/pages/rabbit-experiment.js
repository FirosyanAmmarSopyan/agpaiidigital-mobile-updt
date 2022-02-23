import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const RabbitPage = () => {
    return (
        <View>
            <Text style={styles.baris1}>Ini baris Ke Satu</Text>
            <Text style={styles.baris2}>Ini baris Ke Dua</Text>
            <Text style={styles.baris3}>Ini baris Ke Tiga</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    baris2 : {
        marginTop : 10,
        fontSize : 25,
        color : '#ff0500'
    },
    baris3 : {
       
    },


});

export default RabbitPage