import { Ionicons } from "@expo/vector-icons";
import { useFonts } from 'expo-font';
import { Slot, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import Footer from './footer';
import { styles } from './styles/styles';

SplashScreen.preventAutoHideAsync();

type Page = { name: string; route: string };

const DROPDOWN_DATA: Record<string, Page[]> = {
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

export default function Layout() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 900;

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
  }) => {
    const isActive = activeDropdown === dropdownKey;

    const handlePress = () => {
      if (dropdownKey) {
        setActiveDropdown(isActive ? null : dropdownKey);
      } else if (route) {
        setMobileMenuOpen(false);
        router.push(route);
      }
    };

    return (
      <View style={{ position: 'relative' }}>
        <TouchableOpacity style={styles.taskButton} onPress={handlePress}>
          <Text style={styles.taskButtonText}>
            {label} {dropdownKey ? (isActive ? '▲' : '▼') : ''}
          </Text>
        </TouchableOpacity>

        {/* Desktop Dropdown */}
        {dropdownKey && isActive && !isMobile && (
          <View
            style={[
              styles.dropdownMenu,
              {
                position: 'absolute',
                top: '100%',
                left: 0,
                minWidth: '100%',
                zIndex: 200,
              },
            ]}
          >
            <ScrollView>
              {DROPDOWN_DATA[dropdownKey].map((item) => (
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
        )}
      </View>
    );
  };

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
            justifyContent: isMobile ? 'space-between' : 'flex-start',
          },
        ]}
      >
        {/* Logo */}
        <TouchableOpacity
          onPress={() => {
            setMobileMenuOpen(false);
            router.push('/');
          }}
          style={{
            width: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={require('../assets/images/StarLogoTestWhite.png')}
            style={{
              height: 70,
              aspectRatio: 1,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>

        {/* Desktop Navigation */}
        {!isMobile && (
          <View style={styles.pagesContainer}>
            <TaskButton label="Home" route="/" />
            <TaskButton label="Who We Are" dropdownKey="who" />
            <TaskButton label="What We Do" route="/WhatWeDo" />
            <TaskButton label="Projects" dropdownKey="projects" />
            <TaskButton label="Contact" route="/contact" />
          </View>
        )}

        {/* Mobile Menu Icon */}
        {isMobile && (
          <TouchableOpacity
            onPress={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ paddingRight: 20 }}
          >
            <Ionicons
              name={mobileMenuOpen ? "close" : "menu"}
              size={32}
              color="white"
            />
          </TouchableOpacity>
        )}
      </View>

      {/* ---------------- Mobile Dropdown ---------------- */}
      {isMobile && mobileMenuOpen && (
        <View
          style={[
            styles.dropdownMenu,
            {
              position: 'absolute',
              top: TASKBAR_HEIGHT,
              left: 0,
              right: 0,
              zIndex: 150,
            },
          ]}
        >
          {[
            { label: 'Home', route: '/' },
            { label: 'About Us', route: '/WhoWeAre/AboutUs' },
            { label: 'Our Team', route: '/WhoWeAre/OurTeam' },
            { label: 'What We Do', route: '/WhatWeDo' },
            { label: 'Current Projects', route: '/projects/currentProjects/lakewood' },
            { label: 'Past Projects', route: '/projects/pastProjects/pastProjects' },
            { label: 'Contact', route: '/contact' },
          ].map((item) => (
            <TouchableOpacity
              key={item.label}
              style={styles.dropdownItem}
              onPress={() => {
                setMobileMenuOpen(false);
                router.push(item.route);
              }}
            >
              <Text style={styles.dropdownText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* ---------------- Main Content ---------------- */}
      <View style={{ flex: 1, marginTop: TASKBAR_HEIGHT }}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
          onScrollBeginDrag={() => {
            setActiveDropdown(null);
            setMobileMenuOpen(false);
          }}
        >
          <Slot />
          <Footer />
        </ScrollView>
      </View>
    </View>
  );
}