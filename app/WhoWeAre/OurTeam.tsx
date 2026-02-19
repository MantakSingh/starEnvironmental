import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { styles as globalStyles } from '../styles/styles';

type TeamMember = {
  name: string;
  title: string;
  image: any;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Ken Singh',
    title: 'President',
    image: require('../../assets/images/KenSinghPortraitCropped2.jpg'),
  },
  {
    name: 'Arshdeep Bhandal',
    title: 'Operations Manager',
    image: require('../../assets/images/ArshdeepPortrait.jpg'),
  },
  {
    name: 'Japnoor Grewal',
    title: 'Project Coordinator',
    image: require('../../assets/images/JapnoorPortraitCropped3.jpg'),
  },
  {
    name: 'Mantak Singh',
    title: 'Development & Strategy',
    image: require('../../assets/images/TeamPlaceholderImage.jpg'),
  },
];

export default function OurTeam() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text
        style={globalStyles.sectionTitle}
        accessibilityRole="header"
      >
        Our Team
      </Text>

      <View style={globalStyles.teamGrid}>
        {teamMembers.map((member) => (
          <View key={member.name} style={globalStyles.teamCard}>
            <View style={globalStyles.teamImageContainer}>
              <Image
                source={member.image}
                style={globalStyles.teamImage}
              />
            </View>

            <View style={globalStyles.teamInfoContainer}>
              <Text style={globalStyles.teamName}>
                {member.name}
              </Text>
              <Text style={globalStyles.teamTitle}>
                {member.title}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
