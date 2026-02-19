import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles/styles";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    const { name, email, phone, subject, message } = form;

    setError(null);
    setSuccess(null);

    if (!name || !email || !phone || !subject || !message) {
      setError("Please fill out all fields.");
      return;
    }

    setLoading(true);

    try {
      // 🔹 Send company notification
      const notifyResponse = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: "service_uw0m5w9",
            template_id: "template_b8j3ea9",
            user_id: "h9m0pVvbpjauIn6Te",
            template_params: {
              name,
              email,
              phone,
              subject,
              message,
            },
          }),
        }
      );

      if (!notifyResponse.ok) {
        const errorText = await notifyResponse.text();
        throw new Error(`Company email failed: ${errorText}`);
      }

      // 🔹 Send customer confirmation
      const confirmResponse = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: "service_uw0m5w9",
            template_id: "template_2yt5pyr",
            user_id: "h9m0pVvbpjauIn6Te",
            template_params: {
              name,
              email, // IMPORTANT: must match {{email}} in template
              subject,
            },
          }),
        }
      );

      if (!confirmResponse.ok) {
        const errorText = await confirmResponse.text();
        throw new Error(`Confirmation email failed: ${errorText}`);
      }

      // 🔹 Success
      setSuccess(`Thank you, ${name}. We'll get back to you soon.`);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
      <Text style={styles.sectionTitle}>Contact Us</Text>
      <Text style={[styles.sectionText, { marginBottom: 25 }]}>
        Have a project in mind? Are you in need of a sub-contractor? Get in
        touch with our team today.
      </Text>

      {/* Contact Info */}
      <View style={styles.card}>
        <View style={styles.contactRow}>
          <Ionicons name="call-outline" size={18} color="#002f78" />
          <Text style={styles.cardText}>(253) 344-9113</Text>
        </View>

        <View style={styles.contactRow}>
          <Ionicons name="mail-outline" size={18} color="#002f78" />
          <Text style={styles.cardText}>
            contact@StarEnvironmentalConstruction.com
          </Text>
        </View>
      </View>

      {/* Form */}
      <View style={[styles.card, { marginTop: 20 }]}>
        {fields.map(({ key, label, keyboard, multiline }) => (
          <TextInput
            key={key}
            style={[
              styles.formInput,
              multiline ? { height: 120, textAlignVertical: "top" } : {},
            ]}
            placeholder={label}
            placeholderTextColor="#888"
            value={form[key]}
            onChangeText={(text) => handleChange(key, text)}
            keyboardType={keyboard || "default"}
            autoCapitalize={key === "email" ? "none" : "sentences"}
            multiline={multiline}
          />
        ))}

        {error && <Text style={styles.errorText}>{error}</Text>}
        {success && <Text style={styles.successText}>{success}</Text>}

        <TouchableOpacity
          style={[styles.button, loading && { opacity: 0.7 }]}
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