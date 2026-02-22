import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { styles } from "../styles/styles";

const TASKBAR_HEIGHT = 70;
const COLOR_BLUE = "#002f78"; // match your brand blue

type MenuItem = {
  label: string;
  route?: string;
  children?: { label: string; route: string }[];
};

const MENU_DATA: MenuItem[] = [
  { label: "Home", route: "/" },
  {
    label: "Who We Are",
    children: [
      { label: "About Us", route: "/WhoWeAre/AboutUs" },
      { label: "Our Team", route: "/WhoWeAre/OurTeam" },
    ],
  },
  { label: "What We Do", route: "/WhatWeDo" },
  {
    label: "Projects",
    children: [
      { label: "Current Projects", route: "/projects/currentProjects/lakewood" },
      { label: "Past Projects", route: "/projects/pastProjects/pastProjects" },
    ],
  },
  { label: "Contact", route: "/contact" },
];

export default function MobileTaskbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const navigate = (route: string) => {
    setMenuOpen(false);
    setActiveSubmenu(null);
    router.push(route);
  };

  return (
    <>
      {/* ---------------- TOP BAR ---------------- */}
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

      {/* ---------------- FULL SCREEN MENU ---------------- */}
      {menuOpen && (
        <View
          style={{
            position: "absolute",
            top: TASKBAR_HEIGHT,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: COLOR_BLUE,
            zIndex: 200,
          }}
        >
          <ScrollView
            contentContainerStyle={{
              paddingTop: 40,
              paddingRight: 30,
              alignItems: "flex-end", // right-align everything
            }}
          >
            {MENU_DATA.map((item) => {
              const isOpen = activeSubmenu === item.label;

              return (
                <View key={item.label} style={{ width: "100%" }}>
                  {/* Main Item */}
                  <TouchableOpacity
                    onPress={() => {
                      if (item.children) {
                        setActiveSubmenu(isOpen ? null : item.label);
                      } else if (item.route) {
                        navigate(item.route);
                      }
                    }}
                    style={{ marginBottom: 25 }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 26,
                        fontFamily: "Exo2-Bold",
                        textAlign: "right",
                      }}
                    >
                      {item.label}
                    </Text>
                  </TouchableOpacity>

                  {/* Submenu */}
                  {item.children && isOpen && (
                    <View style={{ marginBottom: 25 }}>
                      {item.children.map((sub) => (
                        <TouchableOpacity
                          key={sub.label}
                          onPress={() => navigate(sub.route)}
                          style={{ marginBottom: 15 }}
                        >
                          <Text
                            style={{
                              color: "white",
                              fontSize: 20,
                              fontFamily: "Exo2-Regular",
                              textAlign: "right",
                              opacity: 0.85,
                            }}
                          >
                            {sub.label}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                </View>
              );
            })}
          </ScrollView>
        </View>
      )}
    </>
  );
}