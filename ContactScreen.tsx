import React from 'react';
import { ScrollView, View, Text, StyleSheet, Linking } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ContactScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Contact Us</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('mailto:info@empoweringthenation.co.za')}
        >
          info@empoweringthenation.co.za
        </Text>

        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.text}>+27 11 131 3436</Text>

        <Text style={styles.label}>Location:</Text>
        <Text style={styles.text}>39 Melrose Blvd, Birnam, Johannesburg, 2196</Text>
      </View>

      <Text style={[styles.label, { marginTop: 16 }]}>Our Location</Text>
      <View style={styles.mapContainer}>
        <WebView
          source={{
            uri: 'https://maps.app.goo.gl/E8aXXWB42Um5VsUz5',
          }}
          style={styles.map}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1,
    padding: 16, 
    backgroundColor: '#f4f8fa' // soft neutral background
  },
  title: { 
    fontSize: 24, 
    fontWeight: '700', 
    color: '#0a4d68', 
    marginBottom: 16, 
    textAlign: 'center' 
  },
  infoContainer: { 
    backgroundColor: '#d6effa', 
    padding: 16, 
    borderRadius: 10, 
    borderWidth: 2, 
    borderColor: '#0a4d68',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3
  },
  label: { 
    fontWeight: '700', 
    color: '#0a4d68', 
    marginTop: 8, 
    fontSize: 16 
  },
  text: { 
    color: '#135e7d', 
    marginTop: 2, 
    fontSize: 15 
  },
  link: { 
    color: '#0a4d68', 
    marginTop: 2, 
    textDecorationLine: 'underline', 
    fontWeight: '600' 
  },
  mapContainer: { 
    height: 400, 
    marginTop: 8, 
    borderRadius: 10, 
    overflow: 'hidden', 
    borderWidth: 2, 
    borderColor: '#0a4d68' 
  },
  map: { flex: 1 },
});
