import React from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import BulletPoint from './styles/bulletPoints';
import { styles as globalStyles } from './styles/styles';

// Get the screen width
const { width: screenWidth } = Dimensions.get('window');

// Choose an aspect ratio for your hero image (height / width)
const HERO_ASPECT_RATIO = 9 / 16;
const heroHeight = screenWidth * HERO_ASPECT_RATIO;

export default function Index() {
  const services = [
    "Ground-up commercial and residential construction",
    "Site development and concrete work",
    "Fuel system installation and upgrades",
    "Underground storage tank work",
    "Canopy installation",
    "Remodels and tenant improvements",
    "Maintenance and repair services"
  ];

  return (
    <ScrollView
      style={[globalStyles.section, { backgroundColor: '#fff', padding: 0 }]}
      contentContainerStyle={{ padding: 0 }}
    >
      {/* Hero Section */}
      <View style={[globalStyles.heroBannerContainer, { padding: 0, margin: 0 }]}>
        <Image
          source={require('../assets/images/ExampleWhatWeDo.jpg')}
          style={[globalStyles.heroBannerImage, { width: '100%', height: heroHeight, resizeMode: 'cover' }]}
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
        <Text style={globalStyles.sectionTitle}>
          Commercial and Residential Construction with Specialized Experience
        </Text>

        <Text style={[globalStyles.sectionText, { marginTop: 8 }]}>
          We provide full-service construction solutions for both commercial and residential properties. While our project history has primarily involved gas stations and convenience store facilities, our team is equipped to handle projects of all types and sizes, from homes to complex commercial builds.
        </Text>

        <Text style={[globalStyles.sectionSubtitle, { marginTop: 10 }]}>
          Our services include:
        </Text>

        <View style={{ marginTop: 4 }}>
          {services.map((service, index) => (
            <BulletPoint key={index} text={service} />
          ))}
        </View>

        <Text style={[globalStyles.sectionText, { marginTop: 10 }]}>
          Whether commercial or residential, our team applies the same precision, safety standards, and attention to detail to every project. From ground-up construction to remodels and maintenance, we ensure high-quality results for every client.
        </Text>
      </View>
    </ScrollView>
  );
}
