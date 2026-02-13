import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles as globalStyles } from './styles/styles';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={[globalStyles.section, { height: 400 }]}>
        <Text style={globalStyles.sectionTitle}>Welcome to Star Environmental</Text>
        <Text style={globalStyles.sectionText}>
          Your construction partner for residential and commercial projects.
        </Text>
      </View>
    </ScrollView>
  );
}
