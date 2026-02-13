import React from 'react';
import { Text, View } from 'react-native';
import { styles as globalStyles } from './styles/styles';

export default function Index() {
  return (
    <View style={[globalStyles.section, { height: 400 }]}>
      <Text style={globalStyles.sectionTitle}>Welcome to Star Environmental</Text>
      <Text style={globalStyles.sectionText}>
        Projects
      </Text>
    </View>
  );
}
