// index.tsx
import React from 'react';
import { Image, Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles/styles'; // <-- import the styles

export default function Home() {
  // Sample data
  const services = [
    { title: 'Residential Construction', description: 'High-quality homes built on time and on budget.' },
    { title: 'Commercial Projects', description: 'Office spaces, retail, and industrial construction services.' },
    { title: 'Remodeling & Renovations', description: 'Transforming your existing space with care and precision.' },
  ];

  const projects = [
    { title: 'Modern Villa', image: require('./assets/villa.jpg') },
    { title: 'Downtown Office', image: require('./assets/office.jpg') },
    { title: 'Kitchen Renovation', image: require('./assets/kitchen.jpg') },
  ];

  const testimonials = [
    { name: 'John Doe', text: 'They exceeded our expectations! Professional and on schedule.' },
    { name: 'Sarah Lee', text: 'Our dream home came true thanks to this amazing team.' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Hero */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Smith Construction Co.</Text>
        <Text style={styles.heroSubtitle}>Building quality spaces since 2005</Text>
      </View>

      {/* About */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Us</Text>
        <Text style={styles.sectionText}>
          Smith Construction has over 15 years of experience delivering residential and commercial projects. 
          Licensed, insured, and committed to excellence.
        </Text>
      </View>

      {/* Services */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Services</Text>
        {services.map((service, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{service.title}</Text>
            <Text style={styles.cardText}>{service.description}</Text>
          </View>
        ))}
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        {projects.map((project, index) => (
          <View key={index} style={styles.card}>
            <Image source={project.image} style={styles.projectImage} />
            <Text style={styles.cardTitle}>{project.title}</Text>
          </View>
        ))}
      </View>

      {/* Testimonials */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Testimonials</Text>
        {testimonials.map((t, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardText}>"{t.text}"</Text>
            <Text style={styles.cardAuthor}>- {t.name}</Text>
          </View>
        ))}
      </View>

      {/* Contact */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.sectionText}>Phone: (555) 123-4567</Text>
        <Text style={styles.sectionText}>Email: info@smithconstruction.com</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => Linking.openURL('mailto:info@smithconstruction.com')}
        >
          <Text style={styles.buttonText}>Email Us</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
