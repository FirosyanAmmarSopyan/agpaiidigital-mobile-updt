import React    from 'react';
import {View, Text} from 'react-native';

function Header() {
    return (
      <>
        <StatusBar backgroundColor="grey" barStyle="light-content" />
        <Box safeAreaTop bg="white" />
        <HStack
          style={{ borderBottomWidth: 3, borderBottomColor: "#e6e6e6" }}
          bg="white"
          px="1"
          py="1"
          justifyContent="space-between"
          alignItems="center"
          borderBottomRadius="30"
          width={windowWidth}
        >
          <HStack alignItems="center">
            <IconButton
              icon={<Icon size="7" as={Ionicons} name="ios-arrow-back" />}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: "#3E3E3E",
                marginHorizontal: 10,
              }}
            >
              Buat acara
            </Text>
          </HStack>
        </HStack>
      </>
    );
  }

const AddPeopleEvent = () => {
    return (
        <View>
            <Header />
            <Text>AddPeopleEvent</Text>
        </View>
    );
}


export default AddPeopleEvent;