import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles/styles";

export default function Contact() {
  // ---------- Form State ----------
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // ---------- Handlers ----------
  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    const { name, email, phone, subject, message } = form;

    if (!name || !email || !phone || !subject || !message) {
      Alert.alert("Please fill out all fields");
      return;
    }

    setLoading(true);

    try {
      // ---- Prepare both requests ----
      const notificationRequest = fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: "service_uw0m5w9",
            template_id: "template_b8j3ea9", // Company notification template
            user_id: "h9m0pVvbpjauIn6Te",
            template_params: { name, email, phone, subject, message },
          }),
        }
      );

      const confirmationRequest = fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: "service_uw0m5w9",
            template_id: "template_2yt5pyr", // Customer confirmation template
            user_id: "h9m0pVvbpjauIn6Te",
            template_params: { name, subject },
            reply_to: email, // send to customer
          }),
        }
      );

      // ---- Run both requests in parallel ----
      const [notifyResponse, confirmResponse] = await Promise.all([
        notificationRequest,
        confirmationRequest,
      ]);

      if (notifyResponse.status !== 200) {
        throw new Error("Failed to send notification email to company.");
      }
      if (confirmResponse.status !== 200) {
        throw new Error("Failed to send confirmation email to customer.");
      }

      // ---- Success ----
      Alert.alert(
        "Message Sent!",
        `Thank you, ${name}. We'll get back to you soon.`
      );

      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error: any) {
      console.error(error);
      Alert.alert("Error", error.message || "Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ---------- Render UI ----------
  const { name, email, phone, subject, message } = form;

  const fields: {
    key: keyof typeof form;
    label: string;
    keyboard?: "default" | "email-address" | "phone-pad";
    multiline?: boolean;
  }[] = [
    { key: "name", label: "Your Name" },
    { key: "email", label: "Your Email", keyboard: "email-address" },
    { key: "phone", label: "Your Phone", keyboard: "phone-pad" },
    { key: "subject", label: "Subject" },
    { key: "message", label: "Your Message", multiline: true },
  ];

  return (
    <View style={styles.section}>
      {/* Section Title & Description */}
      <Text style={styles.sectionTitle}>Contact Us</Text>
      <Text style={[styles.sectionText, { marginBottom: 25 }]}>
        Have a project in mind? Are you in need of a sub-contractor? Get in
        touch with our team today.
      </Text>

      {/* Contact Info Card */}
      <View style={styles.card}>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
          <Ionicons name="call-outline" size={18} color="#002f78" />
          <Text style={[styles.cardText, { marginLeft: 8 }]}>
            (253) 344-9113
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="mail-outline" size={18} color="#002f78" />
          <Text style={[styles.cardText, { marginLeft: 8 }]}>
            contact@StarEnvironmentalConstruction.com
          </Text>
        </View>
      </View>

      {/* Contact Form */}
      <View style={[styles.card, { marginTop: 20 }]}>
        {fields.map(({ key, label, keyboard, multiline }) => (
          <TextInput
            key={key}
            style={[styles.formInput, multiline ? { height: 120 } : {}]}
            placeholder={label}
            placeholderTextColor="#888"
            value={form[key]}
            onChangeText={(text) => handleChange(key, text)}
            keyboardType={keyboard || "default"}
            autoCapitalize={key === "email" ? "none" : "sentences"}
            multiline={multiline}
          />
        ))}

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Send Message</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
