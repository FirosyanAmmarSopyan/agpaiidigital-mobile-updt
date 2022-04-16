import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./../pages/Home";
import LoginPage from "./../pages/LoginPage";
import RegisterPage from "./../pages/RegisterPage";
import PageA from "./../pages/PageA";
import React from "react";
import PickPhoto from "../pages/PickPhoto";
import InvitationEmpty from "../pages/InvitationEmpty";
import ExploreEvent from "../pages/ExploreEvent";
import Beranda from "../pages/Beranda";
import Meeting from "../pages/Meeting";
import SearchAccount from "../pages/SearchAccount";
import LogiN from "../pages/Login";
import MakePost from "../pages/MakePost";
import MakeEvent from "../pages/MakeEvent";
import MakeEventEmpty from "../pages/MakeEventEmpty";
import DetailEvent from "../pages/DetailEvent";
import EmptyEvent from "../pages/EmptyEvent";
import Notifikasi from "../pages/Notifikasi";
import HomeEvent from "../pages/HomeEvent";
import Invitation from "../pages/Invitation";
import CreateEventAddPerson from "../pages/CreateEventAddPerson";
import MeetingIsi from "../pages/MeetingIsi";
import PickPersonEvent from "../pages/PickPersonEvent";
import CreateEvent from "../pages/CreateEvent";
import Komentar from "../pages/Komentar";
import Kosong from "../pages/Kosong";
import Kamera from "../pages/Kamera";
import SelectListMeeting from "../pages/SelectListMeeting";
import SelectListEvent from "../pages/SelectListEvent";
import CreateMeeting from "../pages/CreateMeeting";
import JoinMeeting from "../pages/JoinMeeting";
import JoinMeetingSchedule from "../pages/JoinMeetingSchedule";
import CreateScheduleMeeting from "../pages/CreateScheduleMeeting";
import CreateScheduleMeetingEmpty from "../pages/CreateScheduleMeetingEmpty";
// import component
import Header from "./../components/Header";
import KomentarComponent from "./../components/KomentarComponent";
import ShareButton from "./../components/ShareButton";
import Modal from "./../components/Modal";
import HeaderExploreEvent from "./../components/HeaderExploreEvent";
import ImageSlider from "./../components/ImageSlider";
import HeaderRapat from "./../components/HeaderRapat";
import HeaderMakePost from "./../components/HeaderMakePost";
import HeaderPickPhoto from "./../components/HeaderPickPhoto";
import IsiAcara from "./../components/IsiAcara";
import IsiListRapat from "../components/IsiListRapat";
import IsiListEvent from "../components/IsiListEvent";

const Stack = createNativeStackNavigator();
const router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "Beranda" }}
        />
        <Stack.Screen
        options={{ headerShown: false }}
          name="IsiListRapat"
          component={IsiListRapat}
        />
       
        <Stack.Screen
        options={{ headerShown: false }}
          name="JoinMeetingSchedule"
          component={JoinMeetingSchedule}
        />
        <Stack.Screen
        options={{ headerShown: false }}
          name="CreateScheduleMeeting"
          component={CreateScheduleMeeting}
        />
        <Stack.Screen
        options={{ headerShown: false }}
          name="CreateScheduleMeetingEmpty"
          component={CreateScheduleMeetingEmpty}
        />
        <Stack.Screen
        options={{ headerShown: false }}
          name="JoinMeeting"
          component={JoinMeeting}
        />
        <Stack.Screen
        options={{ headerShown: false }}
          name="CreateMeeting"
          component={CreateMeeting}
        />
           <Stack.Screen
        options={{ headerShown: false }}
          name="SelectListEvent"
          component={SelectListEvent}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginPage"
          component={LoginPage}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="RegisterPage"
          component={RegisterPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Header"
          component={Header}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="Komentar"
          component={Komentar}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="KomentarComponent"
          component={KomentarComponent}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Modal"
          component={Modal}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ImageSlider"
          component={ImageSlider}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Beranda"
          component={Beranda}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HeaderRapat"
          component={HeaderRapat}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Meeting"
          component={Meeting}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="LogiN"
          component={LogiN}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MakePost"
          component={MakePost}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MakeEvent"
          component={MakeEvent}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MakeEventEmpty"
          component={MakeEventEmpty}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DetailEvent"
          component={DetailEvent}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="ExploreEvent"
          component={ExploreEvent}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="InvitationEmpty"
          component={InvitationEmpty}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ShareButton"
          component={ShareButton}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="EmptyEvent"
          component={EmptyEvent}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SearchAccount"
          component={SearchAccount}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="Notifikasi"
          component={Notifikasi}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HeaderMakePost"
          component={HeaderMakePost}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HeaderPickPhoto"
          component={HeaderPickPhoto}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="IsiAcara"
          component={IsiAcara}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeEvent"
          component={HomeEvent}
        />
         <Stack.Screen
          options={{ headerShown: false }}
          name="Invitation"
          component={Invitation}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CreateEventAddPerson"
          component={CreateEventAddPerson}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MeetingIsi"
          component={MeetingIsi}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PickPersonEvent"
          component={PickPersonEvent}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CreateEvent"
          component={CreateEvent}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Kosong"
          component={Kosong}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="Kamera"
          component={Kamera}
        />
         <Stack.Screen
          options={{ headerShown: false }}
          name="SelectListMeeting"
          component={SelectListMeeting}
        />
        


        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Beranda"
          component={Beranda}
          options={{ header: (props) => <HeaderHome /> }}
        /> */}
        <Stack.Screen name="PageA" component={PageA} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PickPhoto"
          component={PickPhoto}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default router;
