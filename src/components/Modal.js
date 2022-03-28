import React from "react";
import { Button, Modal, Stack, FormControl, Input, Center, NativeBaseProvider , Icon, InputLeftAddon, View, InfoIcon } from "native-base";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { MaterialIcons , AntDesign , Ionicons , Feather }from "@expo/vector-icons"
import { Dimensions , Text } from "react-native";


const windowWidth = Dimensions.get("window").width;
const Modal1 = () => {
  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);

  const openModal = placement => {
    setOpen(true);
    setPlacement(placement);
  };

  return <>
      <Stack>
        <TouchableOpacity>
        <Icon as={MaterialIcons} name="more-vert" onPress={() => openModal("bottom")} size="sm" color="black" />
        </TouchableOpacity>
      </Stack>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <Modal.Content borderTopLeftRadius="50" borderTopRightRadius="50" width={windowWidth} {...styles[placement]}>
          <Modal.Body>
            <FormControl mt="55">
            
                  <TouchableOpacity>
                      <View style={{flexDirection: "row" , marginTop: 31}}>
                  <Icon as={AntDesign} size="md" name="adduser"></Icon>
                      <Text style={{fontSize: 20 , marginLeft: 15}}>Ikuti Hisyam Chuy</Text>
                      </View>
                  </TouchableOpacity>

                  <TouchableOpacity>
                      <View style={{flexDirection: "row" , marginTop: 31}}>
                  <Icon as={Ionicons} size="md" name="md-volume-mute"></Icon>
                      <Text style={{fontSize: 20 , marginLeft: 15}}>Bisukan Hisyam Chuy</Text>
                      </View>
                  </TouchableOpacity>

                  <TouchableOpacity>
                      <View style={{flexDirection: "row" , marginTop: 31}}>
                  <Icon as={MaterialIcons} size="md" name="block"></Icon>
                      <Text style={{fontSize: 20 , marginLeft: 15}}>Blokir Hisyam Chuy</Text>
                      </View>
                  </TouchableOpacity>

                  <TouchableOpacity>
                      <View style={{flexDirection: "row" , marginTop: 31}}>
                  <Icon as={Feather} size="md" name="alert-octagon"></Icon>
                      <Text style={{fontSize: 20 , marginLeft: 15}}>Laporkan Postingan</Text>
                      </View>
                  </TouchableOpacity>

                  
            </FormControl>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>;
};

const styles = {
  top: {
    marginBottom: "auto",
    marginTop: 0
  },
  bottom: {
    marginBottom: 0,
    marginTop: "auto"
  },
  left: {
    marginLeft: 0,
    marginRight: "auto"
  },
  right: {
    marginLeft: "auto",
    marginRight: 0
  },
  center: {}
};

    export default Modal1;