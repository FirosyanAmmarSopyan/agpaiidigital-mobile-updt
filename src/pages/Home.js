import React, { Component } from "react";
import { Box, Button, Text, Heading, ScrollView } from "native-base";

const Home = ({ navigation }) => {
  const [user, onChangeText] = React.useState({
    name: "Azwar",
  });

  const ListMenu = () => {
    const lists = [
      {
        title: "Login",
        page: "LoginPage",
      },
      {
        title: "Beranda",
        page: "Beranda",
      },
      {
        title: "Splash Screen",
        page: "PageA",
      },
      {
        title: "RegisterPage",
        page: "RegisterPage",
      },
      {
        title: "Komentar",
        page: "PageA",
      },
      {
        title: "Search Akun",
        page: "PageA",
      },
      {
        title: "Notifikasi",
        page: "PageA",
      },
      {
        title: "Buat Postingan",
        page: "PageA",
      },
      {
        title: "Pilih Galeri",
        page: "PickPhoto",
      },
      {
        title: "Ambil Foto",
        page: "PageA",
      },
      {
        title: "Ambil Video",
        page: "PageA",
      },
      {
        title: "Pilih Rapat di Halaman Buat Postingan",
        page: "PageA",
      },
      {
        title: "Pilih Acara di Halaman Buat Postingan",
        page: "PageA",
      },
      {
        title: "Pilih File di Halaman Buat Postingan",
        page: "PageA",
      },
    ];
    let Items = [];

    Items = lists.map((item) => (
      <Box style={{ marginVertical: 10 }}>
        <Button onPress={() => navigation.navigate(item.page)}>
          <Text style={{ color: "white" }}>Ke Halaman {item.title}</Text>
        </Button>
      </Box>
    ));
    return Items;
  };

  return (
    <ScrollView>
      <Box style={{ margin: 30 }}>
        <Box style={{ alignItems: "center" }}>
          <Heading size="sm">Demo Halaman Agpaii</Heading>
        </Box>
        <ListMenu></ListMenu>
      </Box>
    </ScrollView>
  );
};

export default Home;
