import React from 'react';
import { Image, Platform, ScrollView, Text, View } from 'react-native';
import BulletPoint from '../styles/bulletPoints';
import { styles as globalStyles } from '../styles/styles';

// Only import Head if on web
let Head;
if (Platform.OS === 'web') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  Head = require('expo-router').Head;
}

export default function Watsonville() {
  const projectOverview = [
    "Located in Watsonville, CA, this project involved completing a bank-repossessed, partially constructed gas station.",
    "The project was completed in 2013, with a construction timeline of eight months.",
    "The scope included finishing the existing structure and building a fully operational site including a fuel canopy, pump islands, convenience store build-out, combo car wash, propane station, and landscaping.",
    "The project transformed a half-finished property into a modern, functional gas station serving local demand."
  ];

  const projectHighlights = [
    "Successfully revived a bank-repossessed, partially constructed project into a fully operational station.",
    "Installed a dual-option combo car wash system offering both laser touchless and soft-brush wash options for customer preference.",
    "Provided a customer-selectable wash experience to accommodate a diverse market and enhance satisfaction.",
    "Integrated an on-site propane filling station to expand fuel offerings and convenience.",
    "Delivered a fully modern, functional station designed to meet high local demand efficiently.",
    "Completed the project within the eight-month construction timeline, on schedule and within budget."
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* SEO Metadata for Web */}
      {Platform.OS === 'web' && Head && (
        <Head>
          <title>Watsonville AM/PM | Gas Station & Combo Car Wash Project</title>
          <meta
            name="description"
            content="Watsonville AM/PM is a modern gas station in Watsonville, CA, completed from a bank-repossessed, partially constructed site. Features include a dual-option combo car wash, convenience store, fuel canopy, propane station, and full landscaping."
          />
        </Head>
      )}

      {/* Hero Section */}
      <View style={globalStyles.heroBannerContainer}>
        <Image
          source={require('../../assets/images/projects/WatsonvilleArco.jpg')}
          style={globalStyles.heroBannerImage}
          accessibilityLabel="Watsonville AM/PM gas station with combo car wash and convenience store"
        />
        <View style={globalStyles.heroBannerOverlay}>
          <Text style={globalStyles.heroBannerTitle}>
            Watsonville AM/PM
          </Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={globalStyles.section}>
        <Text style={[globalStyles.sectionTitle]} accessibilityRole="header">
          Watsonville AM/PM Gas Station & Combo Car Wash Project
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
