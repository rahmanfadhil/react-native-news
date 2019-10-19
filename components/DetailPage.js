import React from "react";
import { View, Text } from "react-native";

export default function DetailPage(props) {
  return (
    <View>
      <Text>Author: {props.navigation.getParam("author")}</Text>
      <Text>{props.navigation.getParam("content")}</Text>
    </View>
  );
}
