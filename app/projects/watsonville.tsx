import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { styles as globalStyles } from '../styles/styles';

export default function Watsonville() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

      {/* Hero Section */}
      <View style={globalStyles.heroBannerContainer}>
        <Image
          source={require('../../assets/images/projects/WatsonvilleArco.jpg')}
          style={globalStyles.heroBannerImage}
        />

        <View style={globalStyles.heroBannerOverlay}>
          <Text style={globalStyles.heroBannerTitle}>
            Watsonville AM/PM
          </Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={globalStyles.section}>
        <Text style={globalStyles.sectionText}>
          Fill this out later
        </Text>
      </View>

    </ScrollView>
  );
}
