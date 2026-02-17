import React from 'react';
import { Image, Platform, ScrollView, Text, View } from 'react-native';
import BulletPoint from './../../styles/bulletPoints';
import { styles as globalStyles, styles } from './../../styles/styles';

// Only import Head if on web
let Head;
if (Platform.OS === 'web') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  Head = require('expo-router').Head;
}

export default function FederalWay() {
  const projectOverview = [
    "Located in Federal Way, WA, this project involved ground-up construction of a modern ARCO gas station.",
    "The project was completed in 2018, with a construction timeline of nine months.",
    "The site measures 50 by 110 feet, accommodating a fuel canopy, convenience store, and car wash.",
    "The scope included full site development, including foundation work, an eight-pump fuel canopy, a convenience store, a car wash, and landscaping.",
    "This was the first ARCO built in Washington in over 20 years, marking a major milestone for the brand.",
    "Upon completion, it became the largest ARCO site in the Pacific Northwest."
  ];

  const projectHighlights = [
    "This was the first ARCO in Washington to feature an eight-pump fuel canopy configuration.",
    "The site includes a high-capacity, brushless drive-thru car wash system capable of handling peak volumes efficiently.",
    "The car wash system consistently achieved peak performance exceeding 200 car washes per day.",
    "The project was recognized with a Customer Excellence Award for quality and service.",
    "It received local media coverage highlighting its design and operational efficiency.",
    "The project was completed on schedule and within budget, meeting all client expectations."
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* SEO Metadata for Web */}
      {Platform.OS === 'web' && Head && (
        <Head>
          <title>Federal Way AM/PM | ARCO Gas Station & Car Wash Project</title>
          <meta
            name="description"
            content="Federal Way AM/PM is a modern ARCO gas station in Federal Way, WA featuring an eight-pump fuel canopy, brushless drive-thru car wash, and convenience store. Completed in 2018, it is the largest ARCO site in the Pacific Northwest."
          />
        </Head>
      )}

      {/* Hero Section */}
      <View style={globalStyles.heroBannerContainer}>
        <Image
          source={require('../../../assets/images/projects/FederalWayArco.jpg')}
          style={globalStyles.heroBannerImage}
          accessibilityLabel="Federal Way AM/PM ARCO gas station with car wash and convenience store"
        />
        <View style={globalStyles.heroBannerOverlay}>
          <Text style={globalStyles.heroBannerTitle}>
            Federal Way AM/PM
          </Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={globalStyles.section}>
        <Text style={[globalStyles.sectionTitle]} accessibilityRole="header">
          Federal Way AM/PM ARCO Gas Station Project
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

        <Text style={[globalStyles.sectionSubtitle, { marginTop: 20 }]} accessibilityRole="header">
          Customer Review
        </Text>
      </View>

      {/* Customer Review Card */}
      <View style={styles.card}>
        <Text style={styles.cardText}>
          “A nice, new ARCO gas station with a drive-thru car wash. The wash is 
          completely brushless, using high-pressure water jets, and includes a 
          drying option at the end. My vehicle was extremely dirty, and I was 
          surprised at how well it cleaned. The results were impressive. The 
          store interior was clean, and the employees were friendly and helpful. 
          I would return to this location again just for the car wash.”
        </Text>
      </View>
    </ScrollView>
  );
}
