import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
} from "react-native";

function CreateAccountScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>create account screen</Text>
      <Button
        title="finish"
        onPress={() => navigation.navigate("ChooseCauses")}
      />
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

export default CreateAccountScreen;
