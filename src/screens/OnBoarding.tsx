import { View, StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddEmail from "../pages/AddEmail";
import SvgComponent from "../assets/images/Icon";
import PageTwo from "../pages/PageTwo";
import PageThree from "../pages/PageThree";

function LogoTitle(props: any) {
  return (
    <View
      style={{
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "flex-start",
        display: "flex",
        maxWidth: 250,
      }}
    >
      <SvgComponent />
    </View>
  );
}

const OnBoarding = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#121212",
        },
        headerTitle: (props) => <LogoTitle {...props} />,
      }}
    >
      <Stack.Screen name="AddEmail" component={AddEmail}></Stack.Screen>
      <Stack.Screen name="AddName" component={PageTwo}></Stack.Screen>
      <Stack.Screen name="AddBirthday" component={PageThree}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
