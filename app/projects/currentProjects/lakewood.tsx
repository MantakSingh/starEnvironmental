import React from 'react';
import { Image, Platform, ScrollView, Text, View } from 'react-native';
import BulletPoint from './../../styles/bulletPoints';
import { styles as globalStyles } from './../../styles/styles';

// Only import Head if on web
let Head;
if (Platform.OS === 'web') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  Head = require('expo-router').Head;
}

export default function Lakewood() {
  const projectOverview = [
    "Located in Lakewood, WA, this project combines a Quick Service Restaurant (QSR) and a convenience store with a double car wash for customer convenience.",
    "The car wash system is manufactured by PDQ, providing reliable, high-performance service.",
    "The site features a fast charger station with 180 Amp output and two chargers for electric vehicles.",
    "Customers have access to six modern fuel pumps, including clear ethanol-free fuel suitable for race and high-performance cars.",
    "The convenience store spans 2,900 square feet and includes customer amenities to enhance the shopping experience.",
    "The Quick Service Restaurant covers 1,800 square feet, offering a variety of food options in a comfortable layout.",
    "The project goal was to build on past successes with car washes and continue that momentum with a modern, high-efficiency site."
  ];

  const projectHighlights = [
    "The double car wash system is designed for high throughput, efficiently serving a large number of customers daily.",
    "The integrated QSR and convenience store layout improves customer flow and overall operational efficiency.",
    "The fast charger station supports sustainable transportation by enabling quick charging for electric vehicles.",
    "The site’s modern design prioritizes customer comfort, safety, and accessibility.",
    "Operational performance and efficiency were a focus throughout the project, resulting in a smooth and effective workflow.",
    "The project was completed on schedule and within budget, meeting all client expectations."
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* SEO Metadata for Web */}
      {Platform.OS === 'web' && Head && (
        <Head>
          <title>Lakewood AM/PM | Modern Gas Station & Car Wash Project</title>
          <meta
            name="description"
            content="Lakewood AM/PM is a modern gas station and convenience store project in Lakewood, WA, featuring a double car wash, fast chargers, ethanol-free fuel, and an integrated Quick Service Restaurant."
          />
        </Head>
      )}

      {/* Hero Section */}
      <View style={globalStyles.heroBannerContainer}>
        <Image
          source={require('../../../assets/images/projects/lakewoodArco.jpg')}
          style={[globalStyles.heroBannerImage, { marginTop: 0 }]}
          accessibilityLabel="Lakewood AM/PM gas station and double car wash"
        />
        <View style={globalStyles.heroBannerOverlay}>
          <Text style={globalStyles.heroBannerTitle}>
            Lakewood AM/PM
          </Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={globalStyles.section}>
        <Text style={[globalStyles.sectionTitle]} accessibilityRole="header">
          Lakewood AM/PM Gas Station & QSR Project
        </Text>

        <Text style={[globalStyles.sectionSubtitle, { marginTop: 10 }]} accessibilityRole="header">
          Project Overview
        </Text>
        <View style={{ marginTop: 8 }}>
          {projectOverview.map((item, index) => (
            <BulletPoint key={index} text={item} />
          ))}
        </View>

        <Text style={[globalStyles.sectionSubtitle, { marginTop: 20 }]} accessibilityRole="header">
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
