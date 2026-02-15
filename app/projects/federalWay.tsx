import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import BulletPoint from '../styles/bulletPoints';
import { styles as globalStyles } from '../styles/styles';

export default function FederalWay() {
  const projectOverview = [
    "Location: Federal Way, WA",
    "Type: New construction – built from the ground up",
    "Scope: Full site development including foundation, canopy, pump islands, convenience store, and landscaping"
  ];
  const projectHighlights = [
    "Completed on schedule and within budget, demonstrating our commitment to timely project delivery",
    "Implemented sustainable construction practices, including efficient waste management and use of eco-friendly materials",
    "Collaborated closely with the client and local authorities to ensure compliance with all regulations and standards"
  ];
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* Hero Section */}
      <View style={globalStyles.heroBannerContainer}>
        <Image
          source={require('../../assets/images/projects/FederalWayArco.jpg')}
          style={globalStyles.heroBannerImage}
        />

        <View style={globalStyles.heroBannerOverlay}>
          <Text style={globalStyles.heroBannerTitle}>
            Federal Way AM/PM
          </Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={globalStyles.section}>
        <Text style={globalStyles.sectionTitle}>
          Federal Way AM/PM
        </Text>
        <Text style={[globalStyles.sectionSubtitle, { marginTop: 10 }]}>
          Project Overview:
        </Text>
        <View style={{ marginTop: 8 }}>
          {projectOverview.map((projects, index) => (
            <BulletPoint key={index} text={projects} />
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
