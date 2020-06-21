import React from "react";
import colors from "../config/colors";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";

function CreateAccountScreen({ navigation }) {
  const [email, setEmail] = React.useState("Useless Placeholder");
  const [username, setUsername] = React.useState("Useless Placeholder");
  const [password, setPassword] = React.useState("Useless Placeholder");

  return (
    <View style={styles.container}>
      <View style={styles.topBarStyle}>
        <Text style={styles.titleTextStyle}>Create Account</Text>
        <Text style={styles.subTitleTextStyle}>Create a new account</Text>
      </View>

      <View style={styles.SectionStyle}>
        <Image
          source={require("../assets/email-icon.png")}
          style={styles.ImageStyle}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Email"
          onChangeText={(val) => setEmail(val)}
        ></TextInput>
      </View>
      <View style={styles.SectionStyle}>
        <Image
          source={require("../assets/username-icon.png")}
          style={styles.ImageStyle}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Username"
          onChangeText={(val) => setUsername(val)}
        ></TextInput>
      </View>
      <View style={styles.SectionStyle}>
        <Image
          source={require("../assets/password-icon.png")}
          style={styles.ImageStyle}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Password"
          onChangeText={(val) => setPassword(val)}
        ></TextInput>
      </View>
      <View style={styles.SectionStyle}>
        <Image
          source={require("../assets/password-icon.png")}
          style={styles.ImageStyle}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Re-Type Password"
          onChangeText={(val) => setPassword(val)}
        ></TextInput>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("ChooseCauses")}>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Next</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2ff",
    height: 60,
    borderRadius: 8,
    margin: 10,
  },
  ImageStyle: {
    marginLeft: 15,
    height: 25,
    width: 25,
    alignItems: "center",
    resizeMode: "contain",
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
  textInputStyle: {
    margin: 10,
    borderRadius: 8,
    width: 240,
    height: 60,
    backgroundColor: "#f2f2f2ff",
  },
  titleTextStyle: {
    fontSize: 34,
    fontWeight: "bold",
  },
  subTitleTextStyle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666666ff",
  },

  topBarStyle: {
    margin: 40,
    height: "8%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default CreateAccountScreen;
