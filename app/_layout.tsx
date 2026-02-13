import { Slot } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Layout() {
  // List of sections/pages for task bar
  const pages = ['Home', 'About', 'Services', 'Projects', 'Testimonials', 'Contact'];

  return (
    <View style={{ flex: 1 }}>
      {/* Task Bar */}
      <View style={styles.taskBar}>
        {pages.map((page) => (
          <TouchableOpacity key={page} style={styles.button}>
            <Text style={styles.buttonText}>{page}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Page Content */}
      <ScrollView style={{ flex: 1 }}>
        {/* The Slot renders the content of the page currently loaded */}
        <Slot />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  taskBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#004aad',
    paddingVertical: 10,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
