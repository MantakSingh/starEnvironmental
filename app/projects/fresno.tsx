import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import BulletPoint from '../styles/bulletPoints';
import { styles as globalStyles } from '../styles/styles';

export default function FresnoArco() {
  const projectOverview = [
    "Location: Fresno, CA",
    "Year Completed: 2010",
    "Construction Timeline: 12 months",
    "Type: Ground-up new construction",
    "Scope: Complete site development including foundation, ARCO-standard canopy, pump islands, convenience store, and landscaping",
    "At Completion: Largest AM/PM store in California’s Central Valley"
  ];

  const projectHighlights = [
    "Built entirely from scratch to serve a high-traffic Central Valley market",
    "Designed and constructed using ARCO brand standards for pumps and canopy layout",
    "Expanded store footprint compared to regional locations at the time",
    "Full exterior landscaping to enhance curb appeal and customer experience",
    "Completed on schedule and in full compliance with all local building codes"
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
