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
        color: "#2DEA40",
      },
      {
        title: "Page A",
        page: "PageA",
      },
      {
        title: "AcaraSaya",
        page: "AcaraSaya",
        color: "#2DEA40",
      },
      {
        title: "OpsiBuatAcara",
        page: "OpsiBuatAcara",
        color: "#2DEA40",
      },
      {
        title: "AcaraLainnya",
        page: "AcaraLainnya",
        color: "#2DEA40",
      },
      {
        title: "MenuLainnya",
        page: "MenuLainnya",
        color: "#2DEA40",
      },
      {
        title: "RincianTransaksi",
        page: "RincianTransaksi",
        color: "#2DEA40",
      },
      {
        title: "MenuPemasukan",
        page: "MenuPemasukan",
        color: "#2DEA40",
      },
      {
        title: "MenuSharing",
        page: "MenuSharing",
        color: "#2DEA40",
      },
      {
        title: "PenilaianMenu",
        page: "PenilaianMenu",
        color: "#2DEA40",
      },
      {
        title: "PenilaianPenghasilan",
        page: "PenilaianPenghasilan",
      },
      {
        title: "Kamera",
        page: "Kamera",
        color: "#FF0000",
      },
      {
        title: "PackageSoal",
        page: "PackageSoal",
        color: "#2DEA40",
      },
      {
        title: "IndikatorButirSoal",
        page: "IndikatorButirSoal",
        color: "#FFD600",
      },
      {
        title: "DetailButirSoal",
        page: "DetailButirSoal",
        color: "#FFD600",
      },
      {
        title: "DetailPenilaianButirSoal",
        page: "DetailPenilaianButirSoal",
        color: "#2DEA40",
      },
      {
        title: "PaketSoalKomentarKosong",
        page: "PaketSoalKomentarKosong",
        color: "#FFD600",
      },
      {
        title: "PenilaianPaketSoal",
        page: "PenilaianPaketSoal",
        color: "#2DEA40",
      },
      {
        title: "PenilaianButirSoalBiasa",
        page: "PenilaianButirSoalBiasa",
        color: "#FFD600",
      },
      {
        title: "PenilaianButirSoalPremium",
        page: "PenilaianButirSoalPremium",
        color: "#FFD600",
      },
      {
        title: "PaketSoalDetail",
        page: "PaketSoalDetail",
        color: "#FF0000",
      },
      {
        title: "PaketSoalKomentar",
        page: "PaketSoalKomentar",
        color: "#FFD600",
      },
      {
        title: "SelectListMeeting",
        page: "SelectListMeeting",
        color: "#FF0000",
      },
      {
        title: "JoinMeeting",
        page: "JoinMeeting",
        color: "#FF0000",
      },
      {
        title: "JoinMeetingSchedule",
        page: "JoinMeetingSchedule",
        color: "#FF0000",
      },
      {
        title: "CreateScheduleMeetingEmpty",
        page: "CreateScheduleMeetingEmpty",
        color: "#2DEA40",
      },
      {
        title: "CreateScheduleMeeting",
        page: "CreateScheduleMeeting",
        color: "#2DEA40",
      },
      {
        title: "SelectListEvent",
        page: "SelectListEvent",
        color: "#FF0000",
      },
      {
        title: "CreateMeeting",
        page: "CreateMeeting",
        color: "#2DEA40",
      },
      {
        title: "RegisterPage",
        page: "RegisterPage",
        color: "#2DEA40",
      },
      {
        title: "Search Akun",
        page: "SearchAccount",
        color: "#2DEA40",
      },
      {
        title: "Notifikasi",
        page: "Notifikasi",
        color: "#2DEA40",
      },
      {
        title: "Buat Postingan",
        page: "MakePost",
        color: "#2DEA40",
      },
      {
        title: "Pilih Galeri",
        page: "PickPhoto",
        color: "#2DEA40",
      },
      {
        title: "LogiN",
        page: "LogiN",
      },
      {
        title: "Beranda",
        page: "Beranda",
        color: "#2DEA40",
      },
      {
        title: "Header",
        page: "Header",
        color: "#FFD600",
      },
      {
        title: "Komentar",
        page: "Komentar",
        color: "#FF0000",
      },
      {
        title: "ImageSlider",
        page: "ImageSlider",
        color: "#FFD600",
      },
      {
        title: "HeaderRapat",
        page: "HeaderRapat",
        color: "#FFD600",
      },
      {
        title: "Rapat",
        page: "Meeting",
        color: "#FF0000",
      },
      {
        title: "DetailEvent",
        page: "DetailEvent",
        color: "#2DEA40",
      },
      {
        title: "InvitationEmpty",
        page: "InvitationEmpty",
      },

      {
        title: "EmptyEvent",
        page: "EmptyEvent",
        color: "#2DEA40",
      },
      {
        title: "HeaderPickPhoto",
        page: "HeaderPickPhoto",
      },
      {
        title: "HomeEvent",
        page: "HomeEvent",
        color: "#2DEA40",
      },
      {
        title: "Invitation",
        page: "Invitation",
      },
      {
        title: "MeetingIsi",
        page: "MeetingIsi",
      },
      {
        title: "ButirSoal = (PaketSoalDetail)",
        page: "ButirSoal",
         color: "#FFD600",
      },
      {
        title: "CreatePackageQuestion",
        page: "CreatePackageQuestion",
        color: "#2DEA40",
      },
      {
        title: "DetailCreatePackageQuestion = (CreatePackageQuestion)",
        page: "DetailCreatePackageQuestion",
        color: "#FFD600",
      },
      {
        title: "MakeQuestion",
        page: "MakeQuestion",
        color: "#2DEA40",
      },
      {
        title: "MakePackageQuestionStandar = (MakeQuestion)",
        page: "MakePackageQuestionStandar",
        color: "#FFD600",
      },
      {
        title: "DropdownClass = (MakePackageQuestion)",
        page: "DropdownClass",
        color: "#FFD600",
      },
      {
        title: "DropdownKompetensi = (MakePackageQuestion)",
        page: "DropdownKompetensi",
        color: "#FFD600",
      },
      {
        title: "DropdownSemester = (MakePackageQuestion)",
        page: "DropdownSemester",
        color: "#FFD600",
      },
      {
        title: "MakePackageQuestionPremium = (MakeQuestion)",
        page: "MakePackageQuestionPremium",
        color: "#FFD600",
      },
    ];
    let Items = [];
    Items = lists.map((item, i) => (
      <Box style={{ marginVertical: 10 }} key={`menu-${i}`}>
        <Button
          style={{ backgroundColor: item.color ? item.color : "#075EAE" }}
          onPress={() => navigation.navigate(item.page)}
        >
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
          <Box style={{marginVertical:10,backgroundColor:"white",padding:10,borderRadius:10}}>
            <Text color="#2DEA40">Hijau tandanya selesai</Text>
            <Text color="#FF0000">Merah tandanya sudah jadi tetapi Pending</Text>
            <Text color="#FFD600">Kuning tandanya Hanya Component = (Nama Page)</Text>
          </Box>
        </Box>
        <ListMenu></ListMenu>
      </Box>
    </ScrollView>
  );
};

export default observer(Home);
