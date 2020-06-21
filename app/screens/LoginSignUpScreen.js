import React from "react";
import Swiper from "react-native-swiper";
import colors from "../config/colors";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

function LoginSignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.emptyStyleTop}></View>
      <Image source={require("../assets/logo.png")} />
      <View style={styles.emptyStyleTop}></View>
      <View>
        <Text style={styles.titleTextStyle}>Ethical Market</Text>
      </View>
      <Swiper showsButtons={false} loop={false} activeDotColor="#76e5a2ff">
        <View style={styles.swipperStyle}>
          <Text style={styles.subTitleTextStyle}>
            Shop products that support causes important to you
          </Text>

          <Image source={require("../assets/test.png")} />
          <View style={styles.emptyStyleMiddle}></View>
        </View>
        <View style={styles.swipperStyle}>
          <Text style={styles.subTitleTextStyle}>
            Search for products by cause
          </Text>
          <Image source={require("../assets/swipeScreenTwo.png")} />
          <View style={styles.emptyStyleMiddle}></View>
        </View>
        <View style={styles.swipperStyle}>
          <Text style={styles.subTitleTextStyle}>
            Vote with your dollar and let your voice be heard
          </Text>
          <Image source={require("../assets/swipeScreenThree.png")} />
          <View style={styles.emptyStyleMiddle}></View>
        </View>
      </Swiper>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
          <View style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Sign Up</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.centerTextStyle}>Already a user?</Text>
        <TouchableOpacity onPress={() => console.log("login pressed")}>
          <Text style={styles.loginTextStyle}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.emptyStyleBottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonStyle: {
    backgroundColor: colors.themeblue,
    borderRadius: 8,
    paddingVertical: "5%",
    width: 300,
    height: 60,
    margin: 5,
  },
  textStyle: {
    color: "#ffffff",
    fontSize: 24,
    textAlign: "center",
  },
  loginTextStyle: {
    color: colors.themeblue,
    textAlign: "center",
  },
  titleTextStyle: {
    fontSize: 34,
    textAlign: "center",
    fontWeight: "bold",
  },
  subTitleTextStyle: {
    paddingVertical: "2%",
    paddingHorizontal: "10%",
    fontSize: 18,
    textAlign: "center",
    color: "#666666ff",
  },
  centerTextStyle: {
    textAlign: "center",
  },
  swipperStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyStyleBottom: {
    height: "8%",
  },
  emptyStyleTop: {
    height: "3%",
  },
  emptyStyleMiddle: {
    height: "18%",
  },
});

export default LoginSignUpScreen;
