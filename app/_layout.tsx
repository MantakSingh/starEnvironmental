import { Ionicons } from '@expo/vector-icons';
import { Slot, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Footer from './footer';
import { styles } from './styles/styles';

type Page = {
  name: string;
  route: string;
};

export default function Layout() {
  const router = useRouter();

  // ---------------- Pages ----------------
  const headerPages: Page[] = [
    { name: 'Home', route: '/' },
    { name: 'Who We Are', route: '/WhoWeAre' },
    { name: 'What We Do', route: '/WhatWeDo' },
    { name: 'Projects', route: '/projects' },
    { name: 'Contact', route: '/contact' },
  ];
  const projectPages: Page[] = [
    { name: 'Federal Way', route: '/projects/federal-way' },
    { name: 'Watsonville', route: '/projects/watsonville' },
    { name: 'Fresno', route: '/projects/fresno' },
  ];
  const TASKBAR_HEIGHT = 70;

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
        <View style={styles.faviconContainer}>
          <Ionicons name="star" size={28} color="#fff" />
        </View>

        <View style={styles.pagesContainer}>
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

      {/* ---------------- Main Content Area ---------------- */}
      <View style={{ flex: 1, marginTop: TASKBAR_HEIGHT }}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
        >
          {/* Page Content */}
          <Slot />

          {/* Footer */}
          <Footer />
        </ScrollView>
      </View>
    </View>
  );
}
