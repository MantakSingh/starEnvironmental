import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import BulletPoint from '../styles/bulletPoints';
import { styles as globalStyles, styles } from '../styles/styles';

export default function FederalWay() {
  const projectOverview = [
    "Location: Federal Way, WA",
    "Year Completed: 2018",
    "Construction Timeline: 9 months",
    "Type: Ground-up new construction",
    "Site Size: 50 x 110 ft",
    "Scope: Full site development including foundation, 8-pump fuel canopy, convenience store, car wash, and landscaping",
    "Milestone: First ARCO built in Washington in over 20 years",
    "At Completion: Largest ARCO site in the Pacific Northwest"
  ];

  const projectHighlights = [
    "First ARCO in Washington featuring an 8-pump fuel canopy configuration",
    "High-capacity brushless drive-thru car wash system",
    "Peak performance exceeding 200 car washes per day",
    "Recognized with a Customer Excellence Award",
    "Featured in local newspaper coverage",
    "Completed on schedule and within budget"
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* Hero Section */}
      <View style={globalStyles.heroBannerContainer}>
        <Image
          source={require('../../assets/images/projects/FederalWayArco.jpg')}
          style={globalStyles.heroBannerImage}
        />
        <View style={globalStyles.heroBannerOverlay}>
          <Text style={globalStyles.heroBannerTitle}>
            Federal Way AM/PM
          </Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={globalStyles.section}>
        <Text style={globalStyles.sectionTitle}>
          Federal Way AM/PM
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

        <Text style={[globalStyles.sectionSubtitle, { marginTop: 20 }]}>
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
