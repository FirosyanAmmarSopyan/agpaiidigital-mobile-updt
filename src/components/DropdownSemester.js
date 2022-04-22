import React from "react";
import { Select, Box, CheckIcon, Center, NativeBaseProvider, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const DropdownSemester = () => {
  let [service, setService] = React.useState("");
  return <>
      <Box bg="#F6F6F6" w="360" maxW="360">
        <Select borderRadius="20" fontSize="14" dropdownCloseIcon={<Icon size="7" as={MaterialIcons} name="keyboard-arrow-down"/>} dropdownOpenIcon={<Icon size="7" as={MaterialIcons} name="keyboard-arrow-up"/>} selectedValue={service} minWidth="200" placeholder="Semester" fontWeight="bold" placeholderTextColor="black" mt={1.5} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Semester 1 "/>
          <Select.Item label="Semester 2 "/>
          <Select.Item label="Semester 3 "/>
          <Select.Item label="Semester 4 "/>
          <Select.Item label="Semester 5 "/>
        </Select>
      </Box>
      </>
      };

    export default DropdownSemester; 
    