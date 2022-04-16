import React from 'react';
import { Share, View, Button } from 'react-native';
import { IconButton, Icon, Box, Center, NativeBaseProvider } from "native-base";
import { Entypo, AntDesign } from "@expo/vector-icons";

const ShareButton = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{width:35 }}>
      <IconButton icon={<Icon size="xs" as={AntDesign} name="sharealt" />} borderRadius="full" onPress={onShare} />
    </View>
  );
};

export default ShareButton;