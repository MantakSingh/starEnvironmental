import React from 'react';
import { Dimensions, Image, Platform, ScrollView, Text, View } from 'react-native';
import BulletPoint from './styles/bulletPoints';
import { styles as globalStyles } from './styles/styles';

// Import Head only if on web
let Head;
if (Platform.OS === 'web') {
  // Use require to avoid errors on native platforms
  Head = require('expo-router').Head;
}

// Get the screen width
const { width: screenWidth } = Dimensions.get('window');
const HERO_ASPECT_RATIO = 9 / 16;
const heroHeight = screenWidth * HERO_ASPECT_RATIO;

export default function WhatWeDo() {
  const services = [
    "Providing ground-up commercial and residential construction with a focus on quality and efficiency",
    "Performing complete site development and concrete work for durable, long-lasting structures",
    "Installing and upgrading fuel systems for gas stations and petroleum facilities",
    "Handling underground storage tank installation, maintenance, and compliance",
    "Expert canopy installation for commercial fuel sites",
    "Executing remodels, tenant improvements, and custom build-outs"
  ];

  return (
    <ScrollView
      style={[globalStyles.section, { backgroundColor: '#fff', padding: 0 }]}
      contentContainerStyle={{ padding: 0 }}
    >
      {/* SEO Metadata for Web */}
      {Platform.OS === 'web' && Head && (
        <Head>
          <title>What We Do | Star Environmental Construction Services</title>
          <meta
            name="description"
            content="Star Environmental provides full-service commercial and residential construction, specializing in gas stations, convenience stores, site development, fuel systems, underground storage tanks, canopy installation, and remodels."
          />
        </Head>
      )}

      {/* Hero Section */}
      <View style={[globalStyles.heroBannerContainer, { padding: 0, margin: 0 }]}>
        <Image
          source={require('../assets/images/ExampleWhatWeDo.jpg')}
          style={[globalStyles.heroBannerImage, { width: '100%', height: heroHeight, resizeMode: 'cover' }]}
          accessibilityLabel="Star Environmental construction services hero image"
        />
        <View
          style={[
            globalStyles.heroBannerOverlay,
            { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }
          ]}
        >
          <Text style={globalStyles.heroBannerTitle}>What We Do</Text>
        </View>
      </View>

      {/* Page Content */}
      <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
        <Text style={[globalStyles.sectionTitle]} accessibilityRole="header">
          Comprehensive Construction Services for Commercial and Residential Projects
        </Text>

        <Text style={[globalStyles.sectionText, { marginTop: 8 }]}>
          Star Environmental provides full-service construction solutions for both commercial and residential properties. While our project history primarily includes gas stations and convenience store facilities, our team is fully equipped to handle projects of all types and sizes, from single-family homes to complex commercial builds.
        </Text>

        <Text style={[globalStyles.sectionSubtitle, { marginTop: 10 }]} accessibilityRole="header">
          Our Services Include:
        </Text>

        <View style={{ marginTop: 4 }}>
          {services.map((service, index) => (
            <BulletPoint key={index} text={service} />
          ))}
        </View>

        <Text style={[globalStyles.sectionText, { marginTop: 10 }]}>
          Regardless of the project type, our team applies the same standards of precision, safety, and attention to detail to every job. From ground-up construction to remodels and tenant improvements, we ensure high-quality results that meet client expectations and stand the test of time.
        </Text>
      </View>
    </ScrollView>
  );
}
