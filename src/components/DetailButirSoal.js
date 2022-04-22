import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Heading, Icon, IconButton, Button, AlertDialog } from "native-base";
import { Entypo } from "@expo/vector-icons";

const DetailButirSoal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);
  return (
    <View
      style={{
        marginLeft: 15,
        marginTop: 25,
        backgroundColor: "white",
        paddingBottom: 30,
      }}
    >
      <Heading bold size="xl" style={{ color: "#009788" }}>
        01
      </Heading>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Heading style={{ maxWidth: "80%" }} size="md">
          Apakah minum pada saat puasa dapat membatalkan puasa?
        </Heading>
        <TouchableOpacity>
          <IconButton
            onPress={() => setIsOpen(!isOpen)}
            icon={<Icon as={Entypo} name="plus" />}
            style={{
              backgroundColor: "#e5e5e5",
              borderRadius: 1000,
              height: 40,
            }}
            _icon={{
              color: "black",
              size: "sm",
            }}
          />
          <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <AlertDialog.Content>
              <AlertDialog.Header>Menambahkan Butir Soal</AlertDialog.Header>
              <AlertDialog.Body>
                Apakah anda ingin menambahkan butir soal ini ? 
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group space={2}>
                  <Button
                    variant="unstyled"
                    colorScheme="coolGray"
                    onPress={onClose}
                    ref={cancelRef}
                  >
                    Batal
                  </Button>
                  <Button
                    variant="unstyled"
                    colorScheme="coolGray"
                    onPress={onClose}
                    ref={cancelRef}
                  >
                    Oke
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View
          style={{
            borderRadius: 5,
            marginTop: 20,
            marginBottom: 5,
            backgroundColor: "#e5e5e5",
            paddingVertical: 12,
            paddingLeft: 10,
          }}
        >
          <Text style={{ fontSize: 16, color: "#313131" }}>
            Iya, Karena menggoda iman
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            borderRadius: 5,
            marginVertical: 5,
            backgroundColor: "#e5e5e5",
            paddingVertical: 12,
            paddingLeft: 10,
          }}
        >
          <Text style={{ fontSize: 16, color: "#313131" }}>
            Iya, Karena menggoda iman
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            borderRadius: 5,
            marginVertical: 5,
            backgroundColor: "#e5e5e5",
            paddingVertical: 12,
            paddingLeft: 10,
          }}
        >
          <Text style={{ fontSize: 16, color: "#313131" }}>
            Iya, Karena menggoda iman
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            borderRadius: 5,
            marginVertical: 5,
            backgroundColor: "#e5e5e5",
            paddingVertical: 12,
            paddingLeft: 10,
          }}
        >
          <Text style={{ fontSize: 16, color: "#313131" }}>
            Iya, Karena menggoda iman
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DetailButirSoal;
