import React, { Component, useState } from "react";
import {
  Box,
  Image,
  Text,
  Input,
  Button,
  ScrollView,
  Heading,
  FlatList,
  HStack,
  Spacer,
  VStack,
  Avatar,
} from "native-base";
// import { Logo, LogoSvg } from "./../store/Assets";
import { SvgXml } from "react-native-svg";
import StoreAuth from "./../store/Auth";
import { observer } from "remx";
import { LogoSvg2 } from "../store/Assets";
import LogoA from "./../components/Logo";
import { STORAGE_URL } from "./../store/Config";

const PageA = () => {
  const [credential, setCredential] = useState({
    username: "admin@admin.com",
    password: "bismillah",
  });
  const [JSON_RESULT, setJSON_RESULT] = useState(null);
  const [name, setName] = useState(StoreAuth.getName());
  const [Loading, setLoading] = useState(false);
  const [ListUser, setListUser] = useState([]);

  return (
    <ScrollView>
      <Box m={5}>
        <Box alignItems={"center"}>
          <Text color={"#009788"} bold>
            Selamat Datang {StoreAuth.getName()}
          </Text>
          <LogoA></LogoA>
          {/* <LogoSvg></LogoSvg> */}
          {/* <SvgXml width="100" height="100" xml={LogoSvg2} /> */}
          <Text color={"#009788"} bold>
            Dengan Tampilan Baru dan Ringan
          </Text>
        </Box>
        <Box marginY={5}>
          <Input
            placeholderTextColor="black"
            variant="underlined"
            placeholder="Email"
            type="email-address"
            onChangeText={(text) => {
              setCredential({
                ...credential,
                username: text,
              });
            }}
            value={credential.username}
          />
        </Box>
        <Box marginY={5}>
          <Input
            placeholderTextColor="black"
            variant="underlined"
            placeholder="Password"
            type="password"
            onChangeText={(text) => {
              setCredential({
                ...credential,
                password: text,
              });
            }}
            value={credential.password}
          />
        </Box>
        <Box marginY={5}>
          <Button
            isLoading={Loading}
            onPress={() => {
              setLoading(true);
              StoreAuth.doFetchData(credential)
                .then((res) => setJSON_RESULT(res.data))
                .finally(() => {
                  setLoading(false);
                });
            }}
          >
            Fetch Account
          </Button>
        </Box>
        <Box marginY={5}>
          <Button
            isLoading={Loading}
            onPress={() => {
              setLoading(true);
              StoreAuth.checkApi()
                .then((res) => {
                  setJSON_RESULT(res.data);
                  setListUser(res.data.data);
                })
                .finally(() => {
                  setLoading(false);
                });
            }}
          >
            Check Api
          </Button>
        </Box>
        {/* <JSON_AUTH payload={JSON_RESULT}></JSON_AUTH> */}
        <Box marginY={5}>
          <Input
            placeholderTextColor="black"
            variant="underlined"
            placeholder="Coba Ganti Nama"
            type="text"
            onChangeText={(text) => {
              setName(text);
            }}
            value={name}
          />
        </Box>
        <Box marginY={5}>
          <Button onPress={() => StoreAuth.setName(name)}>Ganti Nama</Button>
        </Box>
        <Text>{ListUser.length} data pengguna</Text>
        <ListUserComponent payload={ListUser}></ListUserComponent>
      </Box>
    </ScrollView>
  );
};

const JSON_AUTH = ({ payload }) => {
  if (payload) {
    return (
      <Box>
        <Text>Hasil Fetch Datanya {JSON.stringify(payload)}</Text>
      </Box>
    );
  } else {
    return (
      <Box>
        <Text>Belum ada Hasil</Text>
      </Box>
    );
  }
};

const ListUserComponent = ({ payload }) => {
  if (payload.length) {
    return (
      <Box>
        <Heading fontSize="xl" p="4" pb="3">
          List User
        </Heading>
        <FlatList
          data={payload}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: "gray.600",
              }}
              borderColor="coolGray.200"
              pl="4"
              pr="5"
              py="2"
            >
              <HStack space={3} justifyContent="space-between">
                <Avatar
                  size="48px"
                  source={{
                    uri: `${STORAGE_URL}/${item.avatar}`,
                  }}
                />
                <VStack>
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.name}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    {item.email}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  {item.kta_id}
                </Text>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
    );
  } else {
    return (
      <Box>
        <Text>Tidak ada data</Text>
      </Box>
    );
  }
};

export default observer(PageA);
