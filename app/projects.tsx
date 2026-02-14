import React from 'react';
import {
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles/styles';

type Project = {
  title: string;
  image: string;
};

const projects: Project[] = [
  {
    title: 'Federal Way AM/PM',
    image: require('../assets/images/projects/FederalWayArco.jpg'),
  },
  {
    title: 'Watsonville AM/PM',
    image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231',
  },
  {
    title: 'Fresno AM/PM',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a',
  },
];

export default function Projects() {
  const handlePress = (title: string) => {
    Alert.alert(title);
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Our Projects</Text>
      <Text style={[styles.sectionText, { marginBottom: 20 }]}>
        A selection of recent environmental and industrial projects.
      </Text>

      <View style={styles.projectGrid}>
        {projects.map((project, index) => (
          <TouchableOpacity
            key={index}
            style={styles.projectCard}
            onPress={() => handlePress(project.title)}
            activeOpacity={0.8}
          >
            <View style={styles.projectImageContainer}>
              <Image
                source={{ uri: project.image }}
                style={styles.projectImage}
                resizeMode="cover"
              />
              <Text style={styles.projectTitleOverlay}>
                {project.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
