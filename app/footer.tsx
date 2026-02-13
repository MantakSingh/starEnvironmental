import React from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles/styles";

export default function Footer() {
  const openLink = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
  };

  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>© 2026 My Business</Text>

      <View style={styles.footerIcons}>
        <TouchableOpacity onPress={() => openLink("https://www.facebook.com/yourpage")}>
          <Text style={styles.footerIcon}>📘</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink("https://www.twitter.com/yourprofile")}>
          <Text style={styles.footerIcon}>🐦</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink("https://www.instagram.com/yourprofile")}>
          <Text style={styles.footerIcon}>📸</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink("https://www.linkedin.com/company/yourcompany")}>
          <Text style={styles.footerIcon}>💼</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
