import React from "react";
import colors from "../config/colors";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { ScreenStackHeaderConfig } from "react-native-screens";

function ChooseCausesScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Choose up to three causes most important to you</Text>
      <TouchableOpacity onPress={() => navigation.navigate("ChooseCauses")}>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Finish</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: colors.themeblue,
    borderRadius: 8,
    paddingVertical: "4%",
    width: 300,
    height: 60,
    margin: 50,
  },
  buttonTextStyle: {
    color: colors.white,
    fontSize: 24,
    textAlign: "center",
  },
});

export default ChooseCausesScreen;
