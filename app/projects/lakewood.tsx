import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import BulletPoint from '../styles/bulletPoints';
import { styles as globalStyles } from '../styles/styles';

export default function Lakewood() {
  const projectOverview = [
    "Location: Lakewood, WA",
    "Type: Combo Quick Service Restaurant (QSR) and Convenience Store with double car wash",
    "Manufacturer: PDQ",
    "Fast Charger: 180 Amp, 2 chargers",
    "Fuel Pumps: 6",
    "Convenience Store: 2900 sqft",
    "QSR: 1800 sqft",
    "Clear Gas: Ethanol-free for race/super cars",
    "Goal: After our past successes with car washes, we wanted to continue that momentum"
  ];

  const projectHighlights = [
    "Double car wash system for high throughput",
    "Integrated QSR and convenience store layout",
    "Fast charger station for electric vehicles",
    "Modern, customer-friendly design",
    "Focus on performance and efficiency",
    "Completed on schedule and within budget"
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* Hero Section */}
      <View style={globalStyles.heroBannerContainer}>
        <Image
          source={require('../../assets/images/projects/lakewoodArco.jpg')}
          style={[globalStyles.heroBannerImage, { marginTop: 0 }]}
        />
        <View style={globalStyles.heroBannerOverlay}>
          <Text style={globalStyles.heroBannerTitle}>
            Lakewood AM/PM
          </Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={globalStyles.section}>
        <Text style={globalStyles.sectionTitle}>
          Lakewood AM/PM
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
          {projectHighlights.map((item, index) => (
            <BulletPoint key={index} text={item} />
          ))}
        </View>
        </View>
    </ScrollView>
  );
}
