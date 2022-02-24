import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet,Image } from 'react-native';
import {Logo} from './../store/Assets'
const LoginPage = () => {
    return (
      <View>
        <View style={{ padding: 20 }}>
          <View style={{ backgroundColor: 'blue'}}>
            <Image source={Logo} />
          </View>
        </View>
      </View>
    );
}

export default LoginPage;