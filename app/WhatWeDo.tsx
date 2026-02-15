import React from 'react';
import { Text, View } from 'react-native';
import BulletPoint from './styles/bulletPoints';
import { styles as globalStyles } from './styles/styles';

export default function Index() {
  const services = [
    "Ground-up commercial construction",
    "Site development and concrete work",
    "Fuel system installation and upgrades",
    "Underground storage tank work",
    "Canopy installation",
    "Remodels and tenant improvements",
    "Maintenance and repair services"
  ];

  return (
    <View style={[globalStyles.section, { height: 400 }]}>
      <Text style={globalStyles.sectionTitle}>
        Commercial Construction with Specialized Experience
      </Text>

      <Text style={globalStyles.sectionText}>
        We provide full-service construction solutions for commercial properties. Our project history has primarily involved gas station and convenience store facilities, giving us extensive experience in fuel systems, site development, and regulatory compliance.
      </Text>

      <Text style={[globalStyles.sectionText, { marginTop: 10 }]}>
        Our services include:
      </Text>

      <View style={{ marginTop: 8 }}>
        {services.map((service, index) => (
          <BulletPoint key={index} text={service} />
        ))}
      </View>

      <Text style={[globalStyles.sectionText, { marginTop: 10 }]}>
        Although much of our completed work has been in the petroleum sector, our team is fully equipped to take on a variety of commercial construction projects. The same precision, safety standards, and attention to detail apply to every job we undertake.
      </Text>
    </View>
  );
}
