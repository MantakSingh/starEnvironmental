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
    title: 'Water Treatment Facility',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
  },
  {
    title: 'Soil Remediation Site',
    image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231',
  },
  {
    title: 'Industrial Waste Cleanup',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a',
  },
  {
    title: 'Environmental Monitoring',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e',
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
