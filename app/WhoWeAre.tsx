import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import BulletPoint from './styles/bulletPoints';
import { styles as globalStyles } from './styles/styles';

export default function Index() {
  const beliefs = [
    "Accountability",
    "Safety",
    "Precision",
    "Strong client relationships",
    "Quality that lasts",
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
      {/* Main Section */}
      <View style={[globalStyles.section, { minHeight: 400 }]}>
        <Text style={globalStyles.sectionTitle}>
          Built on Family Values. Driven by Experience.
        </Text>

        <Text style={[globalStyles.sectionText, { marginTop: 10 }]}>
          Star Environmental is a family-owned construction company specializing in gas station and petroleum facility construction. We built this company on hard work, integrity, and a commitment to doing things the right way.
        </Text>

        <Text style={[globalStyles.sectionText, { marginTop: 10 }]}>
          Our team brings years of hands-on experience in fuel site development, underground storage systems, site concrete, and commercial buildouts. We understand the unique demands of petroleum construction and the responsibility that comes with it.
        </Text>

        <Text style={[globalStyles.sectionText, { marginTop: 10 }]}>
          As a family business, every project is personal. Our name stands behind every job we complete. We focus on long-term partnerships, clear communication, and delivering work we are proud to put our name on.
        </Text>

        <Text style={[globalStyles.sectionText, { marginTop: 10 }]}>
          We believe in:
        </Text>

        <View style={{ marginTop: 8 }}>
          {beliefs.map((belief, index) => (
            <BulletPoint key={index} text={belief} />
          ))}
        </View>

        <Text style={[globalStyles.sectionText, { marginTop: 10 }]}>
          When you work with us, you are working directly with a team that cares about the outcome of your project.
        </Text>
      </View>
    </ScrollView>
  );
}
