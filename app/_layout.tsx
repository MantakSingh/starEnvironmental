import { Ionicons } from '@expo/vector-icons';
import { Slot, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/styles';

type Page = {
  name: string;
  route: string;
};

export default function Layout() {
  const router = useRouter();

  const pages: Page[] = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    { name: 'Services', route: '/services' },
    { name: 'Projects', route: '/projects' },
    { name: 'Contact', route: '/contact' },
  ];

  const TASKBAR_HEIGHT = 70;

  return (
    <View style={{ flex: 1 }}>
      {/* Fixed Task Bar */}
      <View
        style={[
          styles.taskBar,
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
          },
        ]}
      >
        {/* White star icon */}
        <View style={styles.faviconContainer}>
          <Ionicons name="star" size={28} color="#fff" />
        </View>

        {/* Page buttons */}
        <View style={styles.pagesContainer}>
          {pages.map((page) => (
            <TouchableOpacity
              key={page.name}
              style={styles.taskButton}
              onPress={() => router.push({ pathname: page.route })} // TypeScript safe
            >
              <Text style={styles.taskButtonText}>{page.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Scrollable Page Content */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: TASKBAR_HEIGHT + 10 }}
      >
        <Slot />
      </ScrollView>
    </View>
  );
}
