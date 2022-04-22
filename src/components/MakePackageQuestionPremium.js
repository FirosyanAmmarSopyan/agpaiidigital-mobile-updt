import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Input } from "native-base";
import DropdownClass from "./DropdownClass";
import DropdownKompetensi from "./DropdownKompetensi";
import DropdownSemester from "./DropdownSemester";

const MakePackageQuestionPremium = () => {
    return (
        <View>
            <View style={{alignSelf: "center"}}>
            <DropdownClass/>
            <DropdownKompetensi/>
            <Input mt="3" borderRadius="20" bg="#F6F6F6" placeholder="Nama Kegiatan Penilaian" placeholderTextColor="black" fontWeight="bold" fontSize="13"/>
            <Input mt="3" borderRadius="20" bg="#F6F6F6" placeholder="Topik" placeholderTextColor="black" fontWeight="bold" fontSize="13"/>
            <DropdownSemester/>
            <Input mt="3" borderRadius="20" bg="#F6F6F6" placeholder="Harga" placeholderTextColor="black" fontWeight="bold" fontSize="13"/>
            </View>
        </View>
    )
}

export default MakePackageQuestionPremium;