import React, { useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

// Định nghĩa kiểu cho navigation
type RootStackParamList = {
  Intro: undefined;
  Home: undefined;
};

type IntroScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Intro"
>;

interface IntroScreenProps {
  navigation: IntroScreenNavigationProp;
}

const Stack = createStackNavigator<RootStackParamList>();

function IntroScreen({ navigation }: IntroScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 10000); // Chuyển trang sau 10 giây

    return () => clearTimeout(timer); // Dọn dẹp timer khi component bị unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/Anh1.png")}
        style={styles.avatar}
      />
      <Text style={styles.introText}>Hi, I'm Huỳnh Nguyễn Anh Trí!</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Homepage</Text>
      <Text style={styles.subtitle}>Welcome to the homepage!</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  introText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    marginTop: 10,
  },
});
