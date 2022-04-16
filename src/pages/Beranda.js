import { Icon, ScrollView, Divider, Button } from "native-base";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { Avatar } from "native-base";
import Header from "../components/Header";
import hisyam from "../assets/hisyam.jpeg";
import Modall from "../components/Modal";
import ImageSlider from "../components/ImageSlider";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import PDF from "../assets/PDF.png";
import { SvgXml } from "react-native-svg";
import Jadwal from "../assets/jadwal.svg";
import ShareButton from "../components/ShareButton";

const windowHeight = Dimensions.get("window").height;
const coljabatans = 290;
const coldesk = 290;
const Beranda = () => {
  return (
    <View style={{ height: "100%", paddingRight: 6 }}>
      <Header />
      <ScrollView>
        <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 10 }}>
          <Avatar source={hisyam} size={60}></Avatar>
          <View style={{ flexDirection: "column" }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.name}>Bryan Andika Hisyam </Text>
              <Modall />
            </View>
            <View>
              <Text style={styles.jabatans}>
                Guru Bhs.Inggris di SMK Raden Umar Said Kudus
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  width: coldesk,
                  marginTop: 5,
                  fontSize: 15,
                  paddingRight: 10,
                  textAlign: "left",
                  fontWeight: "100",
                  fontFamily: "Roboto",
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum iure quasi possimus! Possimus delectus laborum
                excepturi, neque quisquam, maiores exercitationem vitae eos quis
                itaque, nesciunt fuga quo quaerat voluptates molestiae
              </Text>
              <View>
                <ImageSlider />
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 3,
                    marginLeft: 5,

                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={{ color: "red" }}>
                      <Icon
                        size="xs"
                        as={FontAwesome5}
                        name="heart"
                        style={{ marginRight: 5 }}
                      />
                    </TouchableOpacity>
                    <Text>1rb</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Icon
                      size="xs"
                      as={FontAwesome5}
                      name="comment-alt"
                      style={{ marginRight: 5 }}
                    />
                    <Text>1rb</Text>
                  </View>
                  <View style={{ marginTop: -8 }}>
                    <ShareButton />
                  </View>
                  <View style={{ marginRight: 20 }}>
                    <Text>21 Menit</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Divider mt={5} height={1} />
        <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 15 }}>
          <Avatar source={hisyam} size={60}></Avatar>
          <View style={{ flexDirection: "column" }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.name}>Bryan Andika Hisyam </Text>
              <Modall />
            </View>
            <View>
              <Text style={styles.jabatans}>
                Guru Bhs.Inggris di SMK Raden Umar Said Kudus
              </Text>
              <Text
                style={{
                  paddingRight: 10,
                  marginLeft: 10,
                  width: coldesk,
                  marginTop: 5,
                  fontSize: 15,
                  textAlign: "left",
                  fontWeight: "300",
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum iure quasi possimus! Possimus delectus laborum
                excepturi, neque quisquam, maiores exercitationem vitae eos quis
                itaque, nesciunt fuga quo quaerat voluptates molestiae
                praesentium? Doloremque beatae quia rerum quo veniam possimus
                provident quas et iure dolorum ullam, doloribus eligendi
                molestiae ex aspernatur voluptates nostrum quod corrupti minus
                sed fugit, asperiores sunt deleniti. Cumque error architecto nam
                ducimus omnis id suscipit voluptatum consectetur laboriosam
                maiores officiis harum, vitae deleniti, ut necessitatibus
                mollitia enim optio eaque laudantium recusandae molestias ipsam?
                Laudantium dignissimos molestiae, asperiores recusandae expedita
                consequatur ipsum perspiciatis illo similique officia nulla
                excepturi inventore?
              </Text>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    marginLeft: 5,

                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={{ color: "red" }}>
                      <Icon
                        size="xs"
                        as={FontAwesome5}
                        name="heart"
                        style={{ marginRight: 5 }}
                      />
                    </TouchableOpacity>
                    <Text>1rb</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Icon
                      size="xs"
                      as={FontAwesome5}
                      name="comment-alt"
                      style={{ marginRight: 5 }}
                    />
                    <Text>1rb</Text>
                  </View>
                  <View style={{ marginTop: -8 }}>
                    <ShareButton />
                  </View>
                  <View style={{ marginRight: 20 }}>
                    <Text>21 Menit</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Divider mt={5} height={1} />
        <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 15 }}>
          <Avatar source={hisyam} size={60}></Avatar>
          <View style={{ flexDirection: "column" }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.name}>Bryan Andika Hisyam </Text>
              <Modall />
            </View>
            <View>
              <Text style={styles.jabatans}>
                Guru Bhs.Inggris di SMK Raden Umar Said Kudus
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  width: coldesk,
                  marginTop: 5,
                  fontSize: 15,
                  textAlign: "left",
                  fontWeight: "300",
                }}
              ></Text>
              <View>
                <Button
                  backgroundColor="#E3E3E3"
                  justifyContent="space-between"
                  leftIcon={<Image source={PDF} />}
                  rightIcon={
                    <Icon
                      color="black"
                      ml={140}
                      as={Ionicons}
                      name="cloud-download-outline"
                      size="sm"
                    />
                  }
                >
                  <Text style={{ fontWeight: "bold" }}>File.PDF </Text>
                </Button>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    marginLeft: 5,

                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={{ color: "red" }}>
                      <Icon
                        size="xs"
                        as={FontAwesome5}
                        name="heart"
                        style={{ marginRight: 5 }}
                      />
                    </TouchableOpacity>
                    <Text>1rb</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Icon
                      size="xs"
                      as={FontAwesome5}
                      name="comment-alt"
                      style={{ marginRight: 5 }}
                    />
                    <Text>1rb</Text>
                  </View>
                  <View style={{ marginTop: -8 }}>
                    <ShareButton />
                  </View>
                  <View style={{ marginRight: 20 }}>
                    <Text>21 Menit</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Divider mt={5} height={1} />
        <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 15 }}>
          <Avatar source={hisyam} size={60}></Avatar>
          <View style={{ flexDirection: "column" }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.name}>Bryan Andika Hisyam </Text>
              <Modall />
            </View>
            <View>
              <Text style={styles.jabatans}>
                Guru Bhs.Inggris di SMK Raden Umar Said Kudus
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  width: coldesk,
                  marginTop: 5,
                  fontSize: 15,
                  textAlign: "left",
                  fontWeight: "300",
                }}
              ></Text>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#E3E3E3",
                    height: 61,
                  }}
                >
                  <Avatar
                    mt="15"
                    ml="14"
                    width="35"
                    height="35"
                    source={hisyam}
                  />
                  <View style={{ flexDirection: "column", marginLeft: 12 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                      Acara Bully Hisyam
                    </Text>
                    <Text style={{ color: "#586369" }}>
                      Bambang Sudarmo, S.Pd.I
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Icon
                        as={AntDesign}
                        name="clockcircle"
                        size="xs"
                        color="#586369"
                      />
                      <Text style={{ color: "#586369", marginLeft: 5 }}>
                        30 Januari 2022, 12.00
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    marginLeft: 5,

                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={{ color: "red" }}>
                      <Icon
                        size="xs"
                        as={FontAwesome5}
                        name="heart"
                        style={{ marginRight: 5 }}
                      />
                    </TouchableOpacity>
                    <Text>1rb</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Icon
                      size="xs"
                      as={FontAwesome5}
                      name="comment-alt"
                      style={{ marginRight: 5 }}
                    />
                    <Text>1rb</Text>
                  </View>
                  <View style={{ marginTop: -8 }}>
                    <ShareButton />
                  </View>
                  <View style={{ marginRight: 20 }}>
                    <Text>21 Menit</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Divider mt={5} height={1} />
        <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 15 }}>
          <Avatar source={hisyam} size={60}></Avatar>
          <View style={{ flexDirection: "column" }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.name}>Bryan Andika Hisyam </Text>
              <Modall />
            </View>
            <View>
              <Text style={styles.jabatans}>
                Guru Bhs.Inggris di SMK Raden Umar Said Kudus
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  width: coldesk,
                  marginTop: 5,
                  fontSize: 15,
                  textAlign: "left",
                  fontWeight: "300",
                }}
              ></Text>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#E3E3E3",
                    height: 60,
                    marginRight: 4,
                  }}
                >
                  <SvgXml
                    style={{
                      marginTop: 10,
                      marginLeft: 13,
                      width: 40,
                      height: 40,
                    }}
                    xml={Jadwal}
                  />
                  <View style={{ flexDirection: "column", marginLeft: 12 }}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        marginTop: 10,
                      }}
                    >
                      Pengurus DPD Agpaii
                    </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                      Kab Bogor
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    marginLeft: 5,

                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={{ color: "red" }}>
                      <Icon
                        size="xs"
                        as={FontAwesome5}
                        name="heart"
                        style={{ marginRight: 5 }}
                      />
                    </TouchableOpacity>
                    <Text>1rb</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Icon
                      size="xs"
                      as={FontAwesome5}
                      name="comment-alt"
                      style={{ marginRight: 5 }}
                    />
                    <Text>1rb</Text>
                  </View>
                  <View style={{ marginTop: -8 }}>
                    <ShareButton />
                  </View>
                  <View style={{ marginRight: 20 }}>
                    <Text>21 Menit</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Divider mt={5} height={1} />
      </ScrollView>
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  name: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
    color: "#3E3E3E",
  },
  jabatans: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 10,
    color: "#586369",
    width: coljabatans,
  },
});
