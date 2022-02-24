import React, { Component } from "react";
import { View, Text, Button, ScrollView } from "react-native";

const Login = ({ navigation, route }) => {
  const user = JSON.parse(route.params.json);
  let skeleton = [];

  const buildSkeleton = () => {
    for (let index = 0; index < 99; index++) {
      skeleton.push(<Text>Halo {index}</Text>);
    }
  };

  buildSkeleton();

  return (
    <ScrollView>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>Selamat Datang {user.name}</Text>
        <Button
          title="Ke Beranda"
          onPress={() => navigation.navigate("Home")}
        />
        {skeleton}
      </View>
    </ScrollView>
  );
};

export default Login;
