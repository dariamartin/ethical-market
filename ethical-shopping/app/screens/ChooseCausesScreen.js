import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
} from "react-native";

function ChooseCausesScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Choose Causes</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498eb",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChooseCausesScreen;
