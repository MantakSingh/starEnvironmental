import React, { useRef } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  // Create refs for each section
  const scrollRef = useRef<ScrollView>(null);
  const sections: { [key: string]: number } = {
    Home: 0,
    About: 1,
    Services: 2,
    Projects: 3,
    Testimonials: 4,
    Contact: 5,
  };

  // Placeholder heights for scrolling (adjust if real content is added)
  const sectionHeight = 400;

  const scrollToSection = (index: number) => {
    scrollRef.current?.scrollTo({ y: index * sectionHeight, animated: true });
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Task Bar / Top Navigation */}
      <View style={taskBarStyles.taskBar}>
        {Object.keys(sections).map((section) => (
          <TouchableOpacity
            key={section}
            style={taskBarStyles.button}
            onPress={() => scrollToSection(sections[section])}
          >
            <Text style={taskBarStyles.buttonText}>{section}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

// Task Bar Styles
const taskBarStyles = StyleSheet.create({
  taskBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#004aad',
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
