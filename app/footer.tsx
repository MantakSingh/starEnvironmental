import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles/styles";

export default function Footer() {
  const openLink = (url: string) => {
    Linking.openURL(url).catch(err =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>
        © 2026 Star Environmental
      </Text>

      <View style={styles.footerIcons}>
        <TouchableOpacity onPress={() => openLink("https://www.facebook.com/yourpage")}>
          <Ionicons name="logo-facebook" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink("https://www.twitter.com/yourprofile")}>
          <Ionicons name="logo-twitter" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink("https://www.instagram.com/yourprofile")}>
          <Ionicons name="logo-instagram" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink("https://www.linkedin.com/company/yourcompany")}>
          <Ionicons name="logo-linkedin" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
