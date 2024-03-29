import React from "react";
import { View, Text, Button } from "react-native";
import "react-native-get-random-values";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "../OnBoarding";
import OnBoardingScreens from "../onBoarding/OnBoardingScreens";

function HomeScreen({ navigation }: { navigation: any }) {
  const handleClick = () => {
    console.log("Custom Click Log", navigation);
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>HomeScreen</Text>
      <Button
        title=" Button"
        onPress={() => navigation.navigate("Details Screen")}
      ></Button>
    </View>
  );
}
function DetailsScreen({ navigation }: { navigation: any }) {
  console.log(navigation);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title=" Go to details ... Again!"
        onPress={() => navigation.push("Details Screen")}
      ></Button>
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OnBoardingScreens" component={OnBoardingScreens} />
      <Stack.Screen
        name="Onboarding"
        component={OnBoarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        options={{ title: "First Page" }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
