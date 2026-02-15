import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles as globalStyles } from '../styles/styles';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* Main Section */}
      <View style={[globalStyles.section, { height: 400 }]}>
        <Text style={globalStyles.sectionTitle}>Watsonville</Text>
      </View>
    </ScrollView>
  );
}
