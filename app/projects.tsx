import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/styles';

// ---------------- Types ----------------
type Project = {
  title: string;
  image: number;
  route: string;
  status: 'current' | 'past';
};

// ---------------- Project Data ----------------
const projects: Project[] = [
  {
    title: 'Lakewood AM/PM',
    image: require('../assets/images/projects/lakewoodArco.jpg'),
    route: './projects/lakewood',
    status: 'current',
  },
  {
    title: 'Federal Way AM/PM',
    image: require('../assets/images/projects/FederalWayArco.jpg'),
    route: './projects/federalWay',
    status: 'past',
  },
  {
    title: 'Watsonville AM/PM',
    image: require('../assets/images/projects/WatsonvilleArco.jpg'),
    route: './projects/watsonville',
    status: 'past',
  },
  {
    title: 'Fresno AM/PM',
    image: require('../assets/images/projects/FresnoArco.jpg'),
    route: './projects/fresno',
    status: 'past',
  },
];

// ---------------- Component ----------------
export default function Projects() {
  const router = useRouter();

  const currentProjects = projects.filter(p => p.status === 'current');
  const pastProjects = projects.filter(p => p.status === 'past');

  const renderProjectGrid = (projectArray: Project[]) => (
    <View style={styles.projectGrid}>
      {projectArray.map((project, index) => (
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
  );

  return (
    <View style={styles.section}>
      {/* Current Projects */}
      {currentProjects.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>Current Projects</Text>
          <Text style={[styles.sectionText, { marginBottom: 20 }]}>
            Projects we are currently working on
          </Text>
          {renderProjectGrid(currentProjects)}
        </>
      )}

      {/* Past Projects */}
      {pastProjects.length > 0 && (
        <>
          <Text style={[styles.sectionTitle, { marginTop: 40 }]}>Past Projects</Text>
          <Text style={[styles.sectionText, { marginBottom: 20 }]}>
            Completed projects
          </Text>
          {renderProjectGrid(pastProjects)}
        </>
      )}
    </View>
  );
}
