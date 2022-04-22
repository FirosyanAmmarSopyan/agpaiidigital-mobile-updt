import React from 'react';
import {View } from 'react-native';
import {TextArea,Button} from 'native-base';
import KomentarComponent from "../components/KomentarComponent";


const PaketSoalKomentar = () => {
    return (
        <View>
            <View >
            <KomentarComponent />
            </View>
        </View>
    )
}

export default PaketSoalKomentar;