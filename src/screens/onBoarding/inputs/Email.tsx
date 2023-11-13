import { StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { Box, Text, theme } from "../../../atoms";
import { screenWidth } from "../../../constants/Utils";
import Header from "./components/Header";

const Email = () => {
  const [userEmail, setUserEmail] = useState("");

  return (
    <Box
      backgroundColor="background"
      flex={1}
      style={{
        width: screenWidth,
      }}
    >
      <Box mt="s48" paddingHorizontal="paddingHorizontal" flex={1}>
        <Header
          heading="What's your email?"
          subHeading="This will not be shown to others. You will be able to change this
          later."
        />
        <TextInput
          style={[theme.cardVariants.textInput, { marginTop: 24 }]}
          placeholder="john.doe@example.com"
          value={userEmail}
          onChangeText={(text) => {
            setUserEmail(text);
          }}
          keyboardType="email-address"
          placeholderTextColor={theme.colors.lightGrey}
        />
      </Box>
    </Box>
  );
};

export default Email;

const styles = StyleSheet.create({});
