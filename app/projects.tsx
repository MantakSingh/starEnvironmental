import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/styles';

// ---------------- Types ----------------
type Project = {
  title: string;
  image: number; // require() returns a number in React Native
};

// ---------------- Project Data ----------------
const projects: Project[] = [
  { title: 'Federal Way', image: require('../assets/images/projects/FederalWayArco.jpg') },
  { title: 'Watsonville', image: require('../assets/images/projects/WatsonvilleArco.jpg') },
  { title: 'Fresno', image: require('../assets/images/projects/FresnoArco.jpg') },
];

// ---------------- Routes ----------------
const projectPages: Record<string, string> = {
  'Federal Way': '/projects/federal-way',
  'Watsonville': '/projects/watsonville',
  'Fresno': '/projects/fresno',
};

// ---------------- Component ----------------
export default function Projects() {
  const router = useRouter();

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
            onPress={() => router.push(projectPages[project.title])}
            activeOpacity={0.8}
          >
            <View style={styles.projectImageContainer}>
              <Image
                source={project.image} // local require
                style={styles.projectImage}
                resizeMode="cover"
              />
              <Text style={styles.projectTitleOverlay}>{project.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
