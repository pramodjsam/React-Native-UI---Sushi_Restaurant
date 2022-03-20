import React from "react";
import { useFonts } from "@use-expo/font";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigation";
import AppLoading from "expo-app-loading";

const customFonts = {
  "AvenirLTStd-Book": require("./src/assets/fonts/AvenirLTStd-Book.otf"),
  "AvenirLTStd-Medium": require("./src/assets/fonts/AvenirLTStd-Medium.otf"),
  "AvenirLTStd-Roman": require("./src/assets/fonts/AvenirLTStd-Roman.otf"),
};

const App = () => {
  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
