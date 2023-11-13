import { StyleSheet, TextInput } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { Box, Text, theme } from "../../../atoms";
import { screenWidth } from "../../../constants/Utils";
import Header from "./components/Header";
import DynamicSnapPointBottomSheet from "../../../components/Atoms/BottomSheet/DynamicSnapPointBottomSheet";
import CommonSolidButton from "../../../components/Atoms/CommonSolidButton/CommonSolidButton";
import CommonDatePicker from "../../../components/Atoms/CommonDatePicker/CommonDatePicker";

const Birthday = () => {
  const [birthday, setBirthday] = useState("");

  // DOB PICKER

  const dob = new Date();

  const [date, setDate] = useState(dob);

  const dobPickerSheetRef = useRef(null);
  const dobPickerHandleExpandPress = useCallback(() => {
    dobPickerSheetRef.current?.expand();
  }, []);
  const dobPickerHandleClosePress = useCallback(() => {
    dobPickerSheetRef.current?.close();
  }, []);

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
          heading="When's your birthday?"
          subHeading="We only show your age to potential matches, not your birthday."
        />
        <TextInput
          style={[theme.cardVariants.textInput, { marginTop: 24 }]}
          placeholder="john doe"
          value={birthday}
          onChangeText={(text) => {
            setBirthday(text);
          }}
          placeholderTextColor={theme.colors.lightGrey}
        />
        <CommonSolidButton
          title={"Submit"}
          onPress={dobPickerHandleExpandPress}
        />
      </Box>
      {/* DOB PICKER */}
      <DynamicSnapPointBottomSheet
        handleExpandPress={dobPickerHandleExpandPress}
        bottomSheetRef={dobPickerSheetRef}
        hideHandle
      >
        {/* <BottomSheetHeader
          title="Select Your Date Of Birth"
          onPress={() => {
            dobPickerHandleClosePress();
          }}
        /> */}
          <CommonDatePicker
            date={date}
            setDate={setDate}
            // maximumDate={new Date(getDate18YearsAgo())}
            maximumDate={new Date()}
          />
      </DynamicSnapPointBottomSheet>
    </Box>
  );
};

export default Birthday;

const styles = StyleSheet.create({});
