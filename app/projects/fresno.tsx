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

export default function FresnoArco() {
  const projectOverview = [
    "Located in Fresno, CA, this project involved ground-up construction of a new AM/PM gas station designed for the high-traffic Central Valley market.",
    "The project was completed in 2010, with a construction timeline of 12 months.",
    "The scope included full site development, including foundation work, ARCO-standard canopy, pump islands, convenience store, and landscaping.",
    "Upon completion, this project became the largest AM/PM store in California’s Central Valley, offering enhanced customer amenities and operational efficiency."
  ];

  const projectHighlights = [
    "Built entirely from scratch to meet the needs of a high-traffic Central Valley market.",
    "Designed and constructed following ARCO brand standards for pump layout and canopy design to ensure consistency across locations.",
    "Expanded store footprint compared to regional AM/PM locations at the time to improve customer flow and convenience.",
    "Included full exterior landscaping to enhance curb appeal and create a welcoming environment for customers.",
    "Completed on schedule and fully compliant with all local building codes, ensuring a safe and operationally efficient site."
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* SEO Metadata for Web */}
      {Platform.OS === 'web' && Head && (
        <Head>
          <title>Fresno AM/PM | Central Valley Gas Station & Convenience Store Project</title>
          <meta
            name="description"
            content="Fresno AM/PM is a modern AM/PM gas station in Fresno, CA, completed in 2010. Features include an ARCO-standard canopy, pump islands, convenience store, full landscaping, and the largest AM/PM footprint in California's Central Valley."
          />
        </Head>
      )}

      {/* Hero Section */}
      <View style={globalStyles.heroBannerContainer}>
        <Image
          source={require('../../assets/images/projects/FresnoArco.jpg')}
          style={globalStyles.heroBannerImage}
          accessibilityLabel="Fresno AM/PM gas station with convenience store and ARCO-standard canopy"
        />
        <View style={globalStyles.heroBannerOverlay}>
          <Text style={globalStyles.heroBannerTitle}>
            Fresno AM/PM
          </Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={globalStyles.section}>
        <Text style={[globalStyles.sectionTitle]} accessibilityRole="header">
          Fresno AM/PM Gas Station & Convenience Store Project
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
