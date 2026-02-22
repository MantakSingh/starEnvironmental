import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { styles } from "../styles/styles";

const TASKBAR_HEIGHT = 70;

export default function MobileTaskbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (route: string) => {
    setMenuOpen(false);
    router.push(route);
  };

  return (
    <>
      {/* ---------------- Top Bar ---------------- */}
      <View
        style={[
          styles.taskBar,
          {
            height: TASKBAR_HEIGHT,
            justifyContent: "space-between",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
          },
        ]}
      >
        {/* Logo */}
        <TouchableOpacity
          onPress={() => navigate("/")}
          style={{
            width: 70,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/StarLogoTestWhite.png")}
            style={{
              height: 70,
              aspectRatio: 1,
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>

        {/* Menu Icon */}
        <TouchableOpacity
          onPress={() => setMenuOpen(!menuOpen)}
          style={{ paddingRight: 20 }}
        >
          <Ionicons
            name={menuOpen ? "close" : "menu"}
            size={32}
            color="white"
          />
        </TouchableOpacity>
      </View>

      {/* ---------------- Dropdown Menu ---------------- */}
      {menuOpen && (
        <View
          style={[
            styles.dropdownMenu,
            {
              position: "absolute",
              top: TASKBAR_HEIGHT,
              left: 0,
              right: 0,
              zIndex: 150,
            },
          ]}
        >
          {[
            { label: "Home", route: "/" },
            { label: "About Us", route: "/WhoWeAre/AboutUs" },
            { label: "Our Team", route: "/WhoWeAre/OurTeam" },
            { label: "What We Do", route: "/WhatWeDo" },
            { label: "Current Projects", route: "/projects/currentProjects/lakewood" },
            { label: "Past Projects", route: "/projects/pastProjects/pastProjects" },
            { label: "Contact", route: "/contact" },
          ].map((item) => (
            <TouchableOpacity
              key={item.label}
              style={styles.dropdownItem}
              onPress={() => navigate(item.route)}
            >
              <Text style={styles.dropdownText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
}