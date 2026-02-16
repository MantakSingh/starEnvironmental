import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import BulletPoint from '../styles/bulletPoints';
import { styles as globalStyles } from '../styles/styles';

export default function Watsonville() {
  const projectOverview = [
    "Location: Watsonville, CA",
    "Year Completed: 2013",
    "Construction Timeline: 8 months",
    "Type: Bank-repossessed, half-finished project completed from existing structure",
    "Scope: Full site completion including fuel canopy, pump islands, convenience store build-out, combo car wash, propane station, and landscaping"
  ];

  const projectHighlights = [
    "Successfully revived and completed a bank-repossessed, partially constructed project",
    "Installed a dual-option combo car wash system offering both laser touchless and soft-brush wash options",
    "Customer-selectable wash experience to serve diverse market preferences",
    "Integrated on-site propane filling station",
    "Delivered a fully operational, modern station tailored to high local demand",
    "Completed efficiently within an 8-month construction timeline"
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
          Project Overview
        </Text>
        <View style={{ marginTop: 8 }}>
          {projectOverview.map((item, index) => (
            <BulletPoint key={index} text={item} />
          ))}
        </View>

        <Text style={[globalStyles.sectionSubtitle, { marginTop: 20 }]}>
          Project Highlights
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
