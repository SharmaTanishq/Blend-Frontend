import { FlatList, StyleSheet, TextInput } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CommonHeader from "../../components/Atoms/CommonHeader/CommonHeader";
import { Box, FONT, Text, theme } from "../../atoms";
import CommonSolidButton from "../../components/Atoms/CommonSolidButton/CommonSolidButton";
import Email from "./inputs/Email";
import { useNavigation } from "@react-navigation/native";
import Name from "./inputs/Name";
import Identity from "./inputs/Identity";
import Interest from "./inputs/Interest";
import Birthday from "./inputs/Birthday";
import ProgressBar from "../../components/Atoms/ProgressBar/ProgressBar";

const OnBoardingScreens = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const flatListRef = useRef();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSelected, setIsSelected] = useState([]);

  const ViewData = ["Email", "Name", "Birthday", "Identity", "Interest"];

  const changeIndexPositive = useCallback(() => {
    setCurrentIndex((index) => {
      const newIndex = index < ViewData.length - 1 ? index + 1 : index;
      const dummyIndex = index + 1;
      if (dummyIndex !== ViewData.length) {
        flatListRef.current?.scrollToIndex({
          index: newIndex,
        });
      } else {
        console.log("last");
      }
      return newIndex;
    });
  }, [currentIndex]);

  const changeIndexNegative = useCallback(() => {
    setCurrentIndex((index) => {
      const newIndex = index - 1;
      flatListRef.current?.scrollToIndex({
        index: newIndex,
      });
      return newIndex;
    });
  }, [currentIndex]);

  const onPressBack = () => {
    if (currentIndex == 0) {
      console.log("GO BACK");
      navigation.goBack();
    } else {
      changeIndexNegative();
    }
  };

  const renderScreens = useCallback(
    ({ item, index }) => {
      switch (item) {
        case "Email":
          return <Email />;

        case "Name":
          return <Name />;

        case "Birthday":
          return <Birthday />;

        case "Identity":
          return <Identity />;

        case "Interest":
          return <Interest />;

        default:
          return <></>;
      }
    },
    [ViewData]
  );

  return (
    <Box flex={1}>
      <StatusBar style="light" />
      <Box
        flex={1}
        style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
        backgroundColor="background"
      >
        <CommonHeader onPressBack={onPressBack} />
        <ProgressBar progress={(Number(currentIndex + 1) / Number(ViewData.length)) * 100} />
        {/* <Email /> */}
        <FlatList
          data={ViewData}
          renderItem={renderScreens}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            backgroundColor: theme.colors.background,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          bounces={false}
          ref={(ref) => (flatListRef.current = ref)}
          onScrollToIndexFailed={() => {
            setTimeout(() => {
              if (flatListRef) {
                flatListRef?.current?.scrollToIndex({
                  index: 1,
                  animated: true,
                });
              }
            }, 100);
          }}
          ListEmptyComponent={<></>}
        />
        <Box justifyContent="flex-end" padding="s16">
          <CommonSolidButton title={"Next"} onPress={changeIndexPositive} />
        </Box>
      </Box>
    </Box>
  );
};

export default OnBoardingScreens;

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.inputGrey,
    height: 54,
    width: "100%",
    borderRadius: 8,
    paddingLeft: 16,
    fontSize: 16,
    fontFamily: FONT.Primary,
  },
});
