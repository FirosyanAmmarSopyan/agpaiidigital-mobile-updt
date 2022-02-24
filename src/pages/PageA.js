import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Logo, LogoXml } from './../store/Assets'
import { SvgXml } from "react-native-svg";
import LogoSvg from './../assets/LogoXml.svg'

const PageA = () => {
    return (
        <View>
            <Image source={Logo}></Image>
            {/* <LogoSvg></LogoSvg> */}
            {/* <Svg source xml={LogoXml}></Svg> */}
        </View>
    )
}

export default PageA