import { useFonts } from 'expo-font';
import { Slot, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Footer from './footer';
import { styles } from './styles/styles';

SplashScreen.preventAutoHideAsync();

type Page = { name: string; route: string };

const DROPDROPDOWN_DATA: Record<string, Page[]> = {
  who: [
    { name: 'About Us', route: '/WhoWeAre/AboutUs' },
    { name: 'Our Team', route: '/WhoWeAre/OurTeam' },
  ],
  projects: [
    { name: 'Current Projects', route: '/projects/currentProjects/lakewood' },
    { name: 'Past Projects', route: '/projects/pastProjects/pastProjects' },
  ],
};

const TASKBAR_HEIGHT = 70;
const DROPDOWN_HEIGHT = 180;

export default function Layout() {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const [fontsLoaded] = useFonts({
    'Exo2-Regular': require('../assets/fonts/Exo2-Regular.otf'),
    'Exo2-Bold': require('../assets/fonts/Exo2-Bold.otf'),
    'Exo2-Black': require('../assets/fonts/Exo2-Black.otf'),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  const TaskButton = ({
    label,
    dropdownKey,
    route,
  }: {
    label: string;
    dropdownKey?: string;
    route?: string;
  }) => (
    <TouchableOpacity
      style={styles.taskButton}
      onPress={() =>
        dropdownKey
          ? setActiveDropdown(activeDropdown === dropdownKey ? null : dropdownKey)
          : route
          ? router.push(route)
          : null
      }
    >
      <Text style={styles.taskButtonText}>
        {label} {dropdownKey ? (activeDropdown === dropdownKey ? '▲' : '▼') : ''}
      </Text>
    </TouchableOpacity>
  );

  const DropdownMenu = () => {
    if (!activeDropdown) return null;

    return (
      <TouchableWithoutFeedback onPress={() => setActiveDropdown(null)}>
        <View style={styles.dropdownOverlay}>
          <View
            style={[
              styles.dropdownMenu,
              { top: TASKBAR_HEIGHT, height: DROPDOWN_HEIGHT },
            ]}
          >
            <ScrollView>
              {DROPDROPDOWN_DATA[activeDropdown].map((item) => (
                <TouchableOpacity
                  key={item.name}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setActiveDropdown(null);
                    router.push(item.route);
                  }}
                >
                  <Text style={styles.dropdownText}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* ---------------- Task Bar ---------------- */}
      <View
        style={[
          styles.taskBar,
          { position: 'absolute', top: 0, left: 0, right: 0, height: TASKBAR_HEIGHT, zIndex: 100 },
        ]}
      >
        {/* Logo */}
        <View style={{ width: 70, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../assets/images/StarLogoTestWhite.png')}
            style={{ height: 70, aspectRatio: 1, resizeMode: 'contain' }}
          />
        </View>

        {/* Navigation */}
        <View style={styles.pagesContainer}>
          <TaskButton label="Home" route="/" />
          <TaskButton label="Who We Are" dropdownKey="who" />
          <TaskButton label="What We Do" route="/WhatWeDo" />
          <TaskButton label="Projects" dropdownKey="projects" />
          <TaskButton label="Contact" route="/contact" />
        </View>
      </View>

      {/* Dropdown */}
      <DropdownMenu />

      {/* Main Content */}
      <View style={{ flex: 1, marginTop: TASKBAR_HEIGHT }}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
        >
          <Slot />
          <Footer />
        </ScrollView>
      </View>
    </View>
  );
}
