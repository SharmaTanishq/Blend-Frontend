import { Alert } from "react-native";
import React from "react";
import {
  Button,
  Input,
  RegistrationDesc,
  RegistrationHeader,
} from "../components/index";
import { Box, theme } from "../atoms";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
const AddEmail = ({ ...props }) => {
  const insets = useSafeAreaInsets();
  console.log("insets: ", insets);
  const [value, setValue] = React.useState("");
  const handleClick = () => {
    value
      ? props.navigation.navigate("AddName")
      : Alert.alert("Please Enter Value");
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      edges={["bottom"]}
    >
      <Box
        backgroundColor="background"
        flex={1}
        paddingHorizontal="paddingHorizontal"
      >
        <RegistrationHeader value={"What's your email?"} />
        <RegistrationDesc
          value={
            "This will not be shown to others. You will be able to change this later."
          }
        />
        <Input
          func={setValue}
          value={value}
          placeholder={"Email"}
          placeHolderColor={"#808080"}
        />
        <Box
          backgroundColor="background"
          justifyContent="flex-end"
          pb="s16"
          flex={1}
        >
          <Button title={"Next"} handleClick={handleClick} />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default AddEmail;
