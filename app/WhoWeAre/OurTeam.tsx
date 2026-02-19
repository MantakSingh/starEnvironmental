import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { styles as globalStyles } from '../styles/styles';

type TeamMember = {
  name: string;
  image: any; // require('../assets/images/member.jpg')
};

const teamMembers: TeamMember[] = [
    { name: 'Ken Singh', image: require('../../assets/images/TeamPlaceholderImage.jpg') },
    { name: 'Arshdeep', image: require('../../assets/images/TeamPlaceholderImage.jpg') },
    { name: 'Japnoor Grewal', image: require('../../assets/images/JapnoorPortraitCropped3.jpg') },
    { name: 'Mantak Singh', image: require('../../assets/images/TeamPlaceholderImage.jpg') },
];

export default function OurTeam() {
    return (
        <ScrollView contentContainerStyle={{ padding: 16 }}>
            <Text style={[globalStyles.sectionTitle]} accessibilityRole="header">
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
                            <Text style={globalStyles.teamNameOverlay}>{member.name}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}
