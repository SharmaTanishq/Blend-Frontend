import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DatePicker from "react-native-date-picker";
import { Box, theme } from "../../../atoms";
import DateTimePicker from "@react-native-community/datetimepicker";

const CommonDatePicker = ({  maximumDate }) => {
  const [date, setDate] = useState(new Date());

  return (
    <Box backgroundColor="background">
      {/* <DatePicker
        date={date}
        onDateChange={setDate}
        mode="date"
        style={styles.datePicker}
        maximumDate={maximumDate}
        theme="dark"
        textColor="black"
      /> */}
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={"date"}
        is24Hour={true}
        // onChange={setDate}
        display='spinner'
        themeVariant='dark'

      />
    </Box>
  );
};

export default CommonDatePicker;

const styles = StyleSheet.create({
  datePicker: {
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    height: 200,
    alignSelf: "center",
  },
});
