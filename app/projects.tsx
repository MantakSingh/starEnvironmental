import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/styles';

// ---------------- Types ----------------
type Project = {
  title: string;
  image: number;
  route: string;
};

// ---------------- Project Data ----------------
const projects: Project[] = [
  {
    title: 'Federal Way AM/PM',
    image: require('../assets/images/projects/FederalWayArco.jpg'),
    route: './projects/federalWay',
  },
  {
    title: 'Watsonville AM/PM',
    image: require('../assets/images/projects/WatsonvilleArco.jpg'),
    route: './projects/watsonville',
  },
  {
    title: 'Fresno AM/PM',
    image: require('../assets/images/projects/FresnoArco.jpg'),
    route: './projects/fresno',
  },
];

// ---------------- Component ----------------
export default function Projects() {
  const router = useRouter();

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Our Projects</Text>
      <Text style={[styles.sectionText, { marginBottom: 20 }]}>
        Our past work
      </Text>

      <View style={styles.projectGrid}>
        {projects.map((project, index) => (
          <TouchableOpacity
            key={index}
            style={styles.projectCard}
            onPress={() => router.push(project.route)}
            activeOpacity={0.8}
          >
            <View style={styles.projectImageContainer}>
              <Image
                source={project.image}
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
