import { Slot, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Footer from './footer';
import { styles } from './styles/styles';

type Page = { name: string; route: string };

export default function Layout() {
  const router = useRouter();
  const TASKBAR_HEIGHT = 70;
  const DROPDOWN_HEIGHT = 180;

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Dropdown for "Who We Are"
  const whoPages: Page[] = [
    { name: 'About Us', route: '/WhoWeAre/AboutUs' },
    { name: 'Our Team', route: '/WhoWeAre/OurTeam' },
  ];

  // Remaining header buttons
  const headerPages: Page[] = [
    { name: 'What We Do', route: '/WhatWeDo' },
    { name: 'Projects', route: '/projects' },
    { name: 'Contact', route: '/contact' },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* ---------------- Task Bar ---------------- */}
      <View
        style={[
          styles.taskBar,
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: TASKBAR_HEIGHT,
            zIndex: 100,
          },
        ]}
      >
        {/* Logo */}
        <View style={{ width: 70, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../assets/images/StarLogoTestWhite.png')}
            style={{
              height: 70,
              aspectRatio: 1,
              resizeMode: 'contain',
            }}
          />
        </View>

        {/* Navigation */}
        <View style={styles.pagesContainer}>
          {/* Home */}
          <TouchableOpacity
            style={styles.taskButton}
            onPress={() => router.push('/')}
          >
            <Text style={styles.taskButtonText}>Home</Text>
          </TouchableOpacity>

          {/* Who We Are (Dropdown) */}
          <TouchableOpacity
            style={styles.taskButton}
            onPress={() =>
              setActiveDropdown(activeDropdown === 'who' ? null : 'who')
            }
          >
            <Text style={styles.taskButtonText}>
              Who We Are {activeDropdown === 'who' ? '▲' : '▼'}
            </Text>
          </TouchableOpacity>

          {/* Other Header Buttons */}
          {headerPages.map((page) => (
            <TouchableOpacity
              key={page.name}
              style={styles.taskButton}
              onPress={() => router.push({ pathname: page.route })}
            >
              <Text style={styles.taskButtonText}>{page.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* ---------------- Dropdown Menu ---------------- */}
      {activeDropdown && (
        <TouchableWithoutFeedback onPress={() => setActiveDropdown(null)}>
          <View style={dropdownStyles.overlay}>
            <View
              style={[
                dropdownStyles.dropdownMenu,
                { top: TASKBAR_HEIGHT, height: DROPDOWN_HEIGHT },
              ]}
            >
              <ScrollView>
                {whoPages.map((item) => (
                  <TouchableOpacity
                    key={item.name}
                    style={dropdownStyles.dropdownItem}
                    onPress={() => {
                      setActiveDropdown(null);
                      router.push(item.route);
                    }}
                  >
                    <Text style={dropdownStyles.dropdownText}>{item.name}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}

      {/* ---------------- Main Content Area ---------------- */}
      <View style={{ flex: 1, marginTop: TASKBAR_HEIGHT }}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
        >
          <Slot />
          <Footer />
        </ScrollView>
      </View>
    </View>
  );
}

const dropdownStyles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 101,
  },
  dropdownMenu: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  dropdownText: {
    color: '#222',
    fontWeight: '500',
  },
});
