import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";

type Props = {};

const index = ({ ...props }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.handleClick}>
      <Text style={styles.buttonText}>
        {props.title ? props.title : "title"}
      </Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  button: {
    // flex: 0.5,
    width: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    backgroundColor: "#9168F6",
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
