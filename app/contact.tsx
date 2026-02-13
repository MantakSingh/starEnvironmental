// app/contact.tsx
import React, { useState } from "react";
import { Alert, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles as globalStyles } from './styles/styles';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert("Please fill out all fields");
      return;
    }
    // For demo, we just alert. In production, you might send this to a backend API.
    Alert.alert("Message Sent!", `Thank you, ${name}. We'll get back to you soon.`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={styles.heading}>Contact Us</Text>

      <View style={styles.infoSection}>
        <Text style={styles.infoText}>📞 Phone: (123) 456-7890</Text>
        <Text style={styles.infoText}>✉️ Email: info@mybusiness.com</Text>
        <Text
          style={[styles.infoText, styles.link]}
          onPress={() => Linking.openURL("https://www.mybusiness.com")}
        >
          🌐 Website: www.mybusiness.com
        </Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Your Message"
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

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  infoSection: {
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  link: {
    color: "#1e90ff",
    textDecorationLine: "underline",
  },
  form: {
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#1e90ff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
