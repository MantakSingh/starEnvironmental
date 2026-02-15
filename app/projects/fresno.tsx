import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { styles as globalStyles } from '../styles/styles';

export default function Fresno() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

      {/* Hero Section */}
      <View
        style={{
          height: 320,              // Visible hero height
          width: '100%',
          overflow: 'hidden',       // Enables controlled cropping
          position: 'relative',
        }}
      >
        <Image
          source={require('../../assets/images/projects/FresnoArco.jpg')}
          style={{
            width: '100%',
            height: 420,            // Taller than container for crop control
            marginTop: -100,         // Shifts image up to show desired portion
          }}
          resizeMode="cover"
        />

        {/* Dark Overlay */}
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 34,
              fontWeight: 'bold',
              textAlign: 'center',
              letterSpacing: 1,
            }}
          >
            Fresno AM/PM
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
