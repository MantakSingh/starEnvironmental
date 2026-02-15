import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles as globalStyles } from './styles/styles';

// Reusable bullet point component, now aligned with globalStyles
const BulletPoint = ({ text }: { text: string }) => (
  <View style={localStyles.bulletItem}>
    <Text style={localStyles.bullet}>•</Text>
    <Text style={[globalStyles.sectionText, localStyles.bulletText]}>{text}</Text>
  </View>
);

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

const localStyles = StyleSheet.create({
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 4,       // spacing between bullet items
    paddingLeft: 10,         // indents bullet relative to parent text
  },
  bullet: {
    fontSize: 16,
    lineHeight: 22,
    marginRight: 6,
  },
  bulletText: {
    flex: 1,
    lineHeight: 22,
  },
});
