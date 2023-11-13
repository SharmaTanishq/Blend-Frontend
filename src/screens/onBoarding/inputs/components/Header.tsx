import { StyleSheet } from "react-native";
import React from "react";
import { Box, Text } from "../../../../atoms";

interface ButtonProps {
  heading: string;
  subHeading: string;
}

const Header: React.FC<ButtonProps> = ({ heading, subHeading }) => {
  return (
    <Box>
      <Text variant="bold28">{heading}</Text>
      <Text variant="regular16" mt="s16">
        {subHeading}
      </Text>
    </Box>
  );
};

export default Header;

const styles = StyleSheet.create({});
