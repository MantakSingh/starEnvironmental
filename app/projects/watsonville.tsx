import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import BulletPoint from '../styles/bulletPoints';
import { styles as globalStyles } from '../styles/styles';

export default function Watsonville() {
  const projectOverview = [
    "Location: Watsonville, CA",
    "Type: New construction – built from the ground up",
    "Scope: Complete site development including foundation, canopy, pump islands, convenience store, and landscaping"
  ];

  const projectHighlights = [
    "Built entirely from scratch, delivering a modern, efficient station tailored for high traffic and local needs",
    "Custom-designed canopy and pump layout to ensure smooth vehicle flow and safety",
    "Implemented energy-efficient lighting and materials throughout the site",
    "Full landscaping and exterior design to create an inviting customer experience",
    "Project completed on time and in full compliance with local building codes"
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* Hero Section */}
      <View style={globalStyles.heroBannerContainer}>
        <Image
          source={require('../../assets/images/projects/WatsonvilleArco.jpg')}
          style={globalStyles.heroBannerImage}
        />

        <View style={globalStyles.heroBannerOverlay}>
          <Text style={globalStyles.heroBannerTitle}>
            Watsonville AM/PM
          </Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={globalStyles.section}>
        <Text style={globalStyles.sectionTitle}>
          Watsonville AM/PM
        </Text>
        <Text style={[globalStyles.sectionSubtitle, { marginTop: 10 }]}>
          Project Overview:
        </Text>
        <View style={{ marginTop: 8 }}>
          {projectOverview.map((item, index) => (
            <BulletPoint key={index} text={item} />
          ))}
        </View>
        <Text style={[globalStyles.sectionSubtitle, { marginTop: 10 }]}>
          Project Highlights:
        </Text>
        <View style={{ marginTop: 8 }}>
          {projectHighlights.map((highlight, index) => (
            <BulletPoint key={index} text={highlight} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
