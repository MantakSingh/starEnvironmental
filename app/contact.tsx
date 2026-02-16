import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { styles } from "./styles/styles";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert("Please fill out all fields");
      return;
    }

    Alert.alert(
      "Message Sent!",
      `Thank you, ${name}. We'll get back to you soon.`
    );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Contact Us</Text>
      <Text style={[styles.sectionText, { marginBottom: 25 }]}>
        Have a project in mind? Are you in need of a sub-contractor? Get in touch with our team today.
      </Text>

      <View style={styles.card}>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
          <Ionicons name="call-outline" size={18} color="#002f78" />
          <Text style={[styles.cardText, { marginLeft: 8 }]}>
            (253) 344-9113
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
          <Ionicons name="mail-outline" size={18} color="#002f78" />
          <Text style={[styles.cardText, { marginLeft: 8 }]}>
            kensinghb@gmail.com
          </Text>
        </View>
      </View>

      <View style={[styles.card, { marginTop: 20 }]}>
        <TextInput
          style={styles.formInput}
          placeholder="Your Name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.formInput}
          placeholder="Subject"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={[styles.formInput, { height: 120 }]}
          placeholder="Your Message"
          placeholderTextColor="#888"
          value={message}
          onChangeText={setMessage}
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
