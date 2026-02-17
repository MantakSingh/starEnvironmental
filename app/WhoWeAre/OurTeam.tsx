import React from 'react';
import { Platform, ScrollView, Text, View } from 'react-native';
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
      {/* Main Section */}
      <View style={globalStyles.section}>
        <Text style={[globalStyles.sectionTitle]} accessibilityRole="header">
          Our Team
        </Text>
      </View>
    </ScrollView>
    );
}
