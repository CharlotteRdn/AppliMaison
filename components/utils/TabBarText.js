import React from "react";
import { Text } from "react-native";
export default (props) => {
  return (
    <Text
      fontWeight="bold"
      style={{
        marginBottom: 5,
        color: "rgb(143, 155, 179)",
        fontSize: 10,
      }}
    >
      {props.title}
    </Text>
  );
};