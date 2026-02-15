import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import BulletPoint from './styles/bulletPoints';
import { styles as globalStyles } from './styles/styles';

// Completed gas stations
const gasStations = [
  { title: 'Federal Way AM/PM', image: require('../assets/images/projects/FederalWayArco.jpg') },
  { title: 'Watsonville AM/PM', image: require('../assets/images/projects/WatsonvilleArco.jpg') },
  { title: 'Fresno Arco', image: require('../assets/images/projects/FresnoArco.jpg') },
];

export default function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    "Ground-up commercial and residential construction",
    "Remodels and tenant improvements",
    "Site development and concrete work",
    "Fuel system installation and upgrades",
    "Underground storage tank work",
    "Canopy installation",
    "Maintenance and repair services",
  ];

  // Auto-rotate banner every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % gasStations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentStation = gasStations[currentIndex];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* Rotating Hero Banner */}
      <View style={globalStyles.heroBannerContainer}>
        <Image
          source={currentStation.image}
          style={globalStyles.heroBannerImage} // <-- exact style from other pages
        />
        <View style={globalStyles.heroBannerOverlay}>
          <Text style={globalStyles.heroBannerTitle}>
            Building A Brighter Tomorrow
          </Text>
        </View>
      </View>

      {/* About Section */}
      <View style={globalStyles.section}>
        <Text style={globalStyles.sectionTitle}>Who We Are</Text>
        <Text style={[globalStyles.sectionText, { marginTop: 8 }]}>
          We are a family-owned construction company delivering high-quality commercial and residential projects. From new gas stations to home remodels, we bring precision, safety, and attention to detail to every build.
        </Text>
      </View>

      {/* Services Section */}
      <View style={globalStyles.section}>
        <Text style={globalStyles.sectionTitle}>Our Services</Text>
        <Text style={[globalStyles.sectionText, { marginTop: 8 }]}>
          We provide a wide range of construction solutions, including:
        </Text>
        <View style={{ marginTop: 8 }}>
          {services.map((service, index) => (
            <BulletPoint key={index} text={service} />
          ))}
        </View>
      </View>

      {/* Call to Action Section */}
      <View style={globalStyles.section}>
        <Text style={globalStyles.sectionTitle}>Ready to Build Your Next Project?</Text>
        <Text style={[globalStyles.sectionText, { marginTop: 8, marginBottom: 12 }]}>
          Whether it's a commercial or residential project, we deliver quality and reliability from start to finish. Contact us today to discuss your next build.
        </Text>
      </View>
    </ScrollView>
  );
}
