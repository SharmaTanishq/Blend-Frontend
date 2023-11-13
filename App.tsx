import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import ApplicationNavigator from "./src/screens/navigation/ApplicationNavigator";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Metropolis-Black": require("./src/assets/fonts/Metropolis-Black.otf"),
    "Metropolis-Bold": require("./src/assets/fonts/Metropolis-Bold.otf"),
    "Metropolis-SemiBold": require("./src/assets/fonts/Metropolis-SemiBold.otf"),
    "Metropolis-Regular": require("./src/assets/fonts/Metropolis-Regular.otf"),
    "Metropolis-Medium": require("./src/assets/fonts/Metropolis-Medium.otf"),
    "Metropolis-Light": require("./src/assets/fonts/Metropolis-Light.otf"),
    "Metropolis-ExtraLight": require("./src/assets/fonts/Metropolis-ExtraLight.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{flex: 1}} onLayout={onLayoutRootView}>
      <ApplicationNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  ParentContainer: {
    flex: 1,
    paddingTop: 35,
  },
  ParentText: {
    color: "darkslateblue",
    fontSize: 30,
  },
  parentImage: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
});

export default App;
