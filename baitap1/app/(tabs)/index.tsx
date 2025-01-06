import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/Anh1.png")}
          style={styles.avatar}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hi, I'm Huỳnh Nguyễn Anh Trí!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.infoContainer}>
        <ThemedText type="subtitle">Về tôi:</ThemedText>
        <ThemedText>
          Là sinh viên năm 4 đang học tại trường ĐH Sư phạm Kỹ thuật TP.HCM.
        </ThemedText>
        <ThemedText>
          MSSV <ThemedText type="defaultSemiBold">21110330</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  infoContainer: {
    gap: 8,
    marginBottom: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  avatar: {
    height: 178,
    width: 178,
    borderRadius: 89,
    left: 0,
    position: "absolute",
  },
});
