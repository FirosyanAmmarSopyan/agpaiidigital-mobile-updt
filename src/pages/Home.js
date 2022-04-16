import React, { Component } from "react";
import { Box, Button, Text, Heading, ScrollView } from "native-base";
import StoreAuth from "./../store/Auth";
import { observer } from "remx";

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
        title: "Page A",
        page: "PageA",
      },
      {
        title: "Kamera",
        page: "Kamera",
      },
      {
        title: "SelectListMeeting",
        page: "SelectListMeeting",
      },
      {
        title: "JoinMeeting",
        page: "JoinMeeting",
      },
      {
        title: "JoinMeetingSchedule",
        page: "JoinMeetingSchedule",
      },
      {
        title: "CreateScheduleMeetingEmpty",
        page: "CreateScheduleMeetingEmpty",
      },
      {
        title: "CreateScheduleMeeting",
        page: "CreateScheduleMeeting",
      },
      {
        title: "SelectListEvent",
        page: "SelectListEvent",
      },
      {
        title: "CreateMeeting",
        page: "CreateMeeting",
      },
      {
        title: "RegisterPage",
        page: "RegisterPage",
      },
      {
        title: "Search Akun",
        page: "SearchAccount",
      },
      {
        title: "Notifikasi",
        page: "Notifikasi",
      },
      {
        title: "Buat Postingan",
        page: "MakePost",
      },
      {
        title: "Pilih Galeri",
        page: "PickPhoto",
      },
      {
        title: "LogiN",
        page: "LogiN",
      },
      {
        title: "Beranda",
        page: "Beranda",
      },
      { 
        title: "Header",
        page: "Header",        
      },
      {
        title: "Komentar",
        page: "Komentar",
      },
      {
        title: "ImageSlider",
        page: "ImageSlider",
      },
      {
        title: "HeaderRapat",
        page: "HeaderRapat",
      },
      {
        title: "Rapat",
        page: "Meeting",
      },
      {
        title: "Login",
        page: "LogiN",
      },
      {
        title: "MakeEvent",
        page: "MakeEvent",
      },
      {
        title: "DetailEvent",
        page: "DetailEvent",
      },
      {
        title: "ExploreEvent",
        page: "ExploreEvent",
      },
      {
        title: "InvitationEmpty",
        page: "InvitationEmpty",
      },
      {
        title:"EmptyEvent",
        page:"EmptyEvent",
      },
      {
        title:"HeaderPickPhoto",
        page:"HeaderPickPhoto",
      },
      {
        title:"HomeEvent",
        page:"HomeEvent",
      },
      {
        title:"Invitation",
        page:"Invitation",
      },
      {
        title:"CreateEventAddPerson",
        page:"CreateEventAddPerson",
      },
      {
        title:"MeetingIsi",
        page:"MeetingIsi",
      },
      {
        title:"PickPersonEvent",
        page:"PickPersonEvent",
      },
      {
        title:"CreateEvent",
        page:"CreateEvent",
      },
      {
        title:"Kosong",
        page:"Kosong",
      },
    
    
    ];
    let Items = [];
    Items = lists.map((item, i) => (
      <Box style={{ marginVertical: 10 }} key={`menu-${i}`}>
        <Button onHoverIn={{backgroundColor: "white"}} onPress={() => navigation.navigate(item.page)}>
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
          <Text>Halo {StoreAuth.getName()}</Text>
        </Box>
        <ListMenu></ListMenu>
      </Box>
    </ScrollView>
  );
};

export default observer(Home);
