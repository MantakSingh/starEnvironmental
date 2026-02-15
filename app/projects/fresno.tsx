import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import BulletPoint from '../styles/bulletPoints';
import { styles as globalStyles } from '../styles/styles';

export default function FresnoArco() {
  const projectOverview = [
    "Location: Fresno, CA",
    "Type: New construction – built from the ground up",
    "Scope: Complete site development including foundation, canopy, pump islands, convenience store, and landscaping"
  ];

  const projectHighlights = [
    "Constructed entirely from scratch, delivering a modern, high-traffic station",
    "Custom canopy and pump island layout to maximize efficiency and safety",
    "Energy-efficient lighting and materials implemented throughout the site",
    "Landscaping and exterior design tailored for an inviting customer experience",
    "Project completed on schedule and fully compliant with local building codes"
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* Hero Section */}
      <View style={globalStyles.heroBannerContainer}>
        <Image
          source={require('../../assets/images/projects/FresnoArco.jpg')}
          style={globalStyles.heroBannerImage}
        />

        <View style={globalStyles.heroBannerOverlay}>
          <Text style={globalStyles.heroBannerTitle}>
            Fresno AM/PM
          </Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={globalStyles.section}>
        <Text style={globalStyles.sectionTitle}>
          Fresno AM/PM
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
