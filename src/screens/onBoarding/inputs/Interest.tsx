import { StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { Box, Text, theme } from "../../../atoms";
import { screenWidth } from "../../../constants/Utils";
import Header from "./components/Header";
import CommonOptionsSelector from "../../../components/Atoms/CommonOptionsSelector/CommonOptionsSelector";

const Interest = () => {

  const OCCUPATION_DATA = [
    {
      title: "Men",
      value: "Men",
    },
    {
      title: "Women",
      value: "Women",
    },
    {
      title: "Everyone",
      value: "Everyone",
    },
  ];

  const [selectedOccupationIndex, setSelectedOccupationIndex] = useState<
    number | null
  >(-1);

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
          heading="Who are you interested in?"
          subHeading="Beatmatch is an inclusive community. Everyone is welcome here."
        />
       <Box flex={1} mt="s48">
          <CommonOptionsSelector
            DATA={OCCUPATION_DATA}
            selectedIndex={selectedOccupationIndex}
            setSelectedIndex={setSelectedOccupationIndex}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Interest;

const styles = StyleSheet.create({});
