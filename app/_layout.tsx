import { Slot, useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Footer from './footer';
import DropdownButton from './styles/DropdownButton';
import { styles } from './styles/styles';

type Page = {
  name: string;
  route: string;
};

export default function Layout() {
  const router = useRouter();
  const TASKBAR_HEIGHT = 70;

  // Pages AFTER Who We Are
  const headerPages: Page[] = [
    { name: 'What We Do', route: '/WhatWeDo' },
    { name: 'Projects', route: '/projects' },
    { name: 'Contact', route: '/contact' },
  ];

  const whoPages: Page[] = [
    { name: 'Our Story', route: '/WhoWeAre#story' },
    { name: 'Leadership', route: '/WhoWeAre#leadership' },
    { name: 'Mission', route: '/WhoWeAre#mission' },
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

          {/* Home FIRST */}
          <TouchableOpacity
            style={styles.taskButton}
            onPress={() => router.push('/')}
          >
            <Text style={styles.taskButtonText}>
              Home
            </Text>
          </TouchableOpacity>

          {/* Who We Are SECOND (Dropdown) */}
          <DropdownButton
            label="Who We Are"
            items={whoPages}
          />

          {/* Remaining Buttons */}
          {headerPages.map((page) => (
            <TouchableOpacity
              key={page.name}
              style={styles.taskButton}
              onPress={() => router.push({ pathname: page.route })}
            >
              <Text style={styles.taskButtonText}>
                {page.name}
              </Text>
            </TouchableOpacity>
          ))}

        </View>
      </View>

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
