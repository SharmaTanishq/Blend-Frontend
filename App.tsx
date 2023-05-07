import React from "react";
import { StyleSheet } from "react-native";
import ApplicationNavigator from "./src/screens/navigation/ApplicationNavigator";

const App = () => {
  return <ApplicationNavigator />;
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
