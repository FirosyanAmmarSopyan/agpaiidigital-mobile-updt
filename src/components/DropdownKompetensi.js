import React from "react";
import { Select, Box, CheckIcon, Center, NativeBaseProvider, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const DropdownKompetensi = () => {
  let [service, setService] = React.useState("");
  return <>
      <Box bg="#F6F6F6" w="360" maxW="360">
        <Select borderRadius="20" fontSize="14" dropdownCloseIcon={<Icon size="7" as={MaterialIcons} name="keyboard-arrow-down"/>} dropdownOpenIcon={<Icon size="7" as={MaterialIcons} name="keyboard-arrow-up"/>} selectedValue={service} minWidth="200" placeholder="Kompetensi" fontWeight="bold" placeholderTextColor="black" mt={1.5} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="1 SD"/>
          <Select.Item label="2 SD"/>
          <Select.Item label="3 SD"/>
          <Select.Item label="4 SD"/>
          <Select.Item label="5 SD"/>
        </Select>
      </Box>
      </>
      };

    export default DropdownKompetensi; 