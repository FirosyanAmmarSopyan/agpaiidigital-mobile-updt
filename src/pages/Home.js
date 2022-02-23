import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {

  const [user, onChangeText] = React.useState({
    name: "Azwar"
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TextInput
        style={styles.input}
        value={user.name}
        onChangeText={(value) => onChangeText({
          name: value
        })}
      />
      <Button
        title="Ke Halaman Login"
        onPress={() => navigation.navigate('Login', {
          json: JSON.stringify(user)
        })}
      />
      
      <Button
        title="Ke Halaman rabbit"
        onPress={() => navigation.navigate('rabbit-experiments', {

        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width:200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Home;
