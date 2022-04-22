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
import PenilaianPaketSoal from "../pages/PenilaianPaketSoal";
import PaketSoalDetail from "../pages/PaketSoalDetail";
import ButirSoal from "../pages/ButirSoal";
import DetailPenilaianButirSoal from "../pages/DetailPenilaianButirSoal";
import PackageSoal from "../pages/PackageSoal";
import PenilaianMenu from "../pages/PenilaianMenu";
import CreatePackageQuestion from "../pages/CreatePackageQuestion";
import MakeQuestion from "../pages/MakeQuestion";

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
import PaketSoalPremium from "../components/PaketSoalPremium";
import PaketSoalBiasa from "../components/PaketSoalBiasa";
import DetailPaketSoal from "../components/DetailPaketSoal";
import PaketSoalSiswaKosong from "../components/PaketSoalSiswaKosong";
import PaketSoalSiswa from "../components/PaketSoalSiswa";
import PaketSoalKomentarKosong from "../components/PaketSoalKomentarKosong";
import PaketSoalKomentar from "../components/PaketSoalKomentar";
import PenilaianButirSoalBiasa from "../components/PenilaianButirSoalBiasa";
import PenilaianButirSoalPremium from "../components/PenilaianButirSoalPremium";
import DetailButirSoal from "../components/DetailButirSoal";
import IndikatorButirSoal from "../components/IndikatorButirSoal";
import DetailCreatePackageQuestion from "../components/DetailCreatePackageQuestion";
import MakePackageQuestionStandar from "../components/MakePackageQuestionStandar";
import DropdownClass from "../components/DropdownClass";
import DropdownKompetensi from "../components/DropdownKompetensi";
import DropdownSemester from "../components/DropdownSemester";
import MakePackageQuestionPremium from "../components/MakePackageQuestionPremium";




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
          name="DetailButirSoal"
          component={DetailButirSoal}
        />
        <Stack.Screen
        options={{ headerShown: false }}
          name="IndikatorButirSoal"
          component={IndikatorButirSoal}
        />
         <Stack.Screen
        options={{ headerShown: false }}
          name="PenilaianMenu"
          component={PenilaianMenu}
        />
        <Stack.Screen
        options={{ headerShown: false }}
          name="PackageSoal"
          component={PackageSoal}
        />
        <Stack.Screen
        options={{ headerShown: false }}
          name="PaketSoalDetail"
          component={PaketSoalDetail}
        />
        <Stack.Screen
        options={{ headerShown: false }}
          name="DetailPenilaianButirSoal"
          component={DetailPenilaianButirSoal}
        />
        <Stack.Screen
        options={{ headerShown: false }}
          name="PaketSoalKomentarKosong"
          component={PaketSoalKomentarKosong}
        />
        <Stack.Screen
        options={{ headerShown: false }}
          name="PenilaianButirSoalBiasa"
          component={PenilaianButirSoalBiasa}
        />
        <Stack.Screen
        options={{ headerShown: false }}
          name="PenilaianButirSoalPremium"
          component={PenilaianButirSoalPremium}
        />
         <Stack.Screen
        options={{ headerShown: false }}
          name="PaketSoalKomentar"
          component={PaketSoalKomentar}
        />
        <Stack.Screen
        options={{ headerShown: false }}
          name="PaketSoalSiswa"
          component={PaketSoalSiswa}
        />
       <Stack.Screen
        options={{ headerShown: false }}
          name="DetailPaketSoal"
          component={DetailPaketSoal}
        />
        <Stack.Screen
        options={{ headerShown: false }}
          name="JoinMeetingSchedule"
          component={JoinMeetingSchedule}
        />
        <Stack.Screen
        options={{ headerShown: false }}
          name="PaketSoalSiswaKosong"
          component={PaketSoalSiswaKosong}
        />
        <Stack.Screen
        options={{ headerShown: false }}
          name="PenilaianPaketSoal"
          component={PenilaianPaketSoal}
        />
         <Stack.Screen
        options={{ headerShown: false }}
          name="PaketSoalPremium"
          component={PaketSoalPremium}
        />
         <Stack.Screen
        options={{ headerShown: false }}
          name="PaketSoalBiasa"
          component={PaketSoalBiasa}
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
         <Stack.Screen
          options={{ headerShown: false }}
          name="ButirSoal"
          component={ButirSoal}
        />
         <Stack.Screen
          options={{ headerShown: false }}
          name="CreatePackageQuestion"
          component={CreatePackageQuestion}
        />
         <Stack.Screen
          options={{ headerShown: false }}
          name="DetailCreatePackageQuestion"
          component={DetailCreatePackageQuestion}
        />
         <Stack.Screen
          options={{ headerShown: false }}
          name="MakeQuestion"
          component={MakeQuestion}
        />
         <Stack.Screen
          options={{ headerShown: false }}
          name="MakePackageQuestionStandar"
          component={MakePackageQuestionStandar}
        />
         <Stack.Screen
          options={{ headerShown: false }}
          name="DropdownClass"
          component={DropdownClass}
        />
         <Stack.Screen
          options={{ headerShown: false }}
          name="DropdownKompetensi"
          component={DropdownKompetensi}
        />
         <Stack.Screen
          options={{ headerShown: false }}
          name="DropdownSemester"
          component={DropdownSemester}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MakePackageQuestionPremium"
          component={MakePackageQuestionPremium}
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
