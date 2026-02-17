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

export default function WhoWeAre() {
  const beliefs = [
    "Accountability in every project we undertake",
    "Prioritizing safety for our team and clients",
    "Precision in construction and attention to detail",
    "Building strong, long-term client relationships",
    "Delivering quality that stands the test of time"
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* SEO Metadata for Web */}
      {Platform.OS === 'web' && Head && (
        <Head>
          <title>Who We Are | Star Environmental Construction</title>
          <meta
            name="description"
            content="Star Environmental is a family-owned construction company specializing in gas station and petroleum facility construction. We focus on safety, accountability, quality, and strong client relationships."
          />
        </Head>
      )}

      {/* Hero Section */}
      <View style={globalStyles.heroBannerContainer}>
        <Image
          source={require('../../assets/images/ExampleWhoWeAre.jpg')}
          style={globalStyles.heroBannerImage}
          accessibilityLabel="Star Environmental family-owned construction company team"
        />
        <View style={globalStyles.heroBannerOverlay}>
          <Text style={globalStyles.heroBannerTitle}>About Us</Text>
        </View>
      </View>

      {/* Main Section */}
      <View style={globalStyles.section}>
        <Text style={[globalStyles.sectionTitle]} accessibilityRole="header">
          Built on Family Values. Driven by Experience.
        </Text>

        <Text style={[globalStyles.sectionText, { marginTop: 10 }]}>
          Star Environmental is a family-owned construction company specializing in gas station and petroleum facility construction. Our company was built on hard work, integrity, and a commitment to doing things the right way.
        </Text>

        <Text style={[globalStyles.sectionText, { marginTop: 10 }]}>
          Our team brings years of hands-on experience in fuel site development, underground storage systems, site concrete, and commercial buildouts. We understand the unique demands of petroleum construction and the responsibility that comes with every project.
        </Text>

        <Text style={[globalStyles.sectionText, { marginTop: 10 }]}>
          As a family business, every project is personal. Our name stands behind every job we complete. We focus on long-term partnerships, clear communication, and delivering work we are proud to put our name on.
        </Text>

        <Text style={[globalStyles.sectionSubtitle, { marginTop: 10 }]} accessibilityRole="header">
          Our Core Beliefs
        </Text>

        <View style={{ marginTop: 8 }}>
          {beliefs.map((belief, index) => (
            <BulletPoint key={index} text={belief} />
          ))}
        </View>

        <Text style={[globalStyles.sectionText, { marginTop: 10 }]}>
          When you work with Star Environmental, you are working directly with a team that cares about the outcome of your project and the lasting impact it has on your business.
        </Text>
      </View>
    </ScrollView>
  );
}
