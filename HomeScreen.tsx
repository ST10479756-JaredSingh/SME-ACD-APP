/**
 * 1. W3Schools - https://www.w3schools.com/
 * 2. MDN Web Docs (Mozilla Developer Network) - https://developer.mozilla.org/
 * 3. FreeCodeCamp - https://www.freecodecamp.org/
 * 4. Codecademy (Free Tier) - https://www.codecademy.com/
 * 5. The Odin Project - https://www.theodinproject.com/
 * 6. GeeksforGeeks - https://www.geeksforgeeks.org/web-development/
 * 7. TutorialsPoint - https://www.tutorialspoint.com/web_development_tutorials.htm
 * 8. Coursera (Free HTML/CSS/JS Courses) - https://www.coursera.org/
 * 9. Khan Academy - https://www.khanacademy.org/computing/computer-programming
 * 10. JavaScript.info - https://javascript.info/
 */
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

const logoUri = 'https://i.pinimg.com/736x/10/6f/7e/106f7e5908a670d0d20537c13c774161.jpg'; 

const reasons = [
  { title: '🌟 Accredited Training', description: 'All our courses meet national training standards and are designed to give you practical, job-ready skills.' },
  { title: '🤝 Community Support', description: 'We believe in uplifting communities by providing accessible, affordable, and effective learning opportunities.' },
  { title: '💼 Career Growth', description: 'Graduates leave our programs with the confidence and qualifications to find employment or start a business.' },
];

const testimonials = [
  { quote: 'The training helped me start my own catering business. I am forever grateful!', author: 'Thandi M., Cooking Graduate' },
  { quote: 'I got a new job as a gardener thanks to the landscaping course. My life changed!', author: 'Sibusiso L., Landscaping Graduate' },
  { quote: 'I learned valuable child care skills and found steady work. Highly recommend!', author: 'Lerato P., Child Minding Graduate' },
];

const partners = [
  { src: 'https://tse1.mm.bing.net/th/id/OIP.OL3xFStg6RKMH8mDCFMyQgAAAA?cb=12&w=400&h=400&rs=1&pid=ImgDetMain&o=7&rm=3', alt: 'UNISA' },
  { src: 'https://th.bing.com/th/id/R.4729ce3a464be6ef95adb25695d15a05?rik=3zji0SxQy84IYQ&riu=http%3a%2f%2fsalearnership.co.za%2fwp-content%2fuploads%2f2015%2f06%2fdepartment-of-labour.jpg&ehk=jEBG64W4djldQ3FPNaSR%2f6g2p4h2K87MUFHV77vFynY%3d&risl=&pid=ImgRaw&r=0', alt: 'Department of Labour' },
  { src: 'https://th.bing.com/th/id/R.282d3a01616e7a1f764256f5333ef361?rik=ndMIdHXfLFyqhA&riu=http%3a%2f%2fwww.govpage.co.za%2fuploads%2f2%2f4%2f0%2f5%2f24052997%2fseda-logo_orig.jpg&ehk=HRbzibwhpdwgWlKZnlvr6BOQdJ3vR1ReM2UCZlM5SQE%3d&risl=&pid=ImgRaw&r=0', alt: 'SEDA' },
];

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: logoUri }} style={styles.logo} />
        <Text style={styles.headerText}>Empowering the Nation</Text>
      </View>

      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Transform Skills. Transform Lives.</Text>
        <Text style={styles.heroSubtitle}>Join hundreds of South Africans who have gained valuable skills through our accredited training programs.</Text>

        {/* Hero Buttons */}
        <View style={styles.heroButtonContainer}>
          <TouchableOpacity style={styles.heroButton} onPress={() => navigation.navigate('Courses')}>
            <Text style={styles.heroButtonText}>View Courses</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.heroButton} onPress={() => navigation.navigate('Discounts')}>
            <Text style={styles.heroButtonText}>Discounts</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.heroButton} onPress={() => navigation.navigate('Quote')}>
            <Text style={styles.heroButtonText}>Get a Quote</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.heroButton} onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.heroButtonText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Us</Text>
        <Text style={styles.sectionText}>
          Founded in 2022 in Johannesburg, Empowering the Nation offers quality training programs for domestic workers, gardeners, and individuals seeking personal or professional growth. Our mission is to create opportunity, independence, and empowerment through skills development and education.
        </Text>
      </View>

      {/* Why Choose Us */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Choose Empowering the Nation?</Text>
        {reasons.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardText}>{item.description}</Text>
          </View>
        ))}
      </View>

      {/* Testimonials */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What Our Students Say</Text>
        {testimonials.map((item, index) => (
          <View key={index} style={styles.testimonial}>
            <Text style={styles.testimonialText}>"{item.quote}"</Text>
            <Text style={styles.testimonialAuthor}>- {item.author}</Text>
          </View>
        ))}
      </View>

      {/* Partners */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Partners</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.partnerContainer}>
          {partners.map((partner, index) => (
            <Image key={index} source={{ uri: partner.src }} style={styles.partnerImage} />
          ))}
        </ScrollView>
      </View>

      {/* Call to Action */}
      <View style={styles.cta}>
        <Text style={styles.ctaTitle}>Ready to Empower Your Future?</Text>
        <Text style={styles.ctaText}>Register today and start your journey toward independence and success!</Text>

        {/* CTA Buttons */}
        <View style={styles.heroButtonContainer}>
          <TouchableOpacity style={styles.heroButton} onPress={() => navigation.navigate('Quote')}>
            <Text style={styles.heroButtonText}>Enroll Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#f4f8fa', padding: 16 },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 16,
    backgroundColor: '#eaf7fc',
    borderRadius: 12,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logo: { width: 40, height: 40, resizeMode: 'contain', marginRight: 12 },
  headerText: { fontSize: 20, fontWeight: '700', color: '#0a4d68' },

  /* Hero Section */
  hero: {
    backgroundColor: '#0a4d68',
    borderRadius: 12,
    padding: 28,
    marginBottom: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  heroTitle: { color: '#cce5f6', fontSize: 26, fontWeight: '800', textAlign: 'center', marginBottom: 10 },
  heroSubtitle: { color: '#fff', textAlign: 'center', fontSize: 16, marginBottom: 20, lineHeight: 22 },

  heroButtonContainer: { width: '100%', gap: 12 },
  heroButton: {
    backgroundColor: '#cce5f6',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  heroButtonText: { color: '#0a4d68', fontWeight: '700', fontSize: 16 },

  /* Sections */
  section: { marginBottom: 24 },
  sectionTitle: { color: '#0a4d68', fontSize: 22, fontWeight: '700', marginBottom: 12 },
  sectionText: { color: '#333', lineHeight: 24, fontSize: 16 },

  /* Cards */
  card: {
    backgroundColor: '#eaf7fc',
    padding: 18,
    borderRadius: 10,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#0a4d68',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  cardTitle: { color: '#0a4d68', fontWeight: '700', fontSize: 18, marginBottom: 6 },
  cardText: { color: '#0a4d68', fontSize: 15 },

  /* Testimonials */
  testimonial: {
    backgroundColor: '#cce5f6',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  testimonialText: { color: '#0a4d68', fontStyle: 'italic', fontSize: 15, marginBottom: 6 },
  testimonialAuthor: { color: '#0a4d68', fontWeight: '700', textAlign: 'right', fontSize: 14 },

  /* Partners */
  partnerContainer: { flexDirection: 'row', marginTop: 12 },
  partnerImage: { width: 100, height: 100, marginRight: 16, resizeMode: 'contain' },

  /* CTA */
  cta: {
    backgroundColor: '#0a4d68',
    padding: 28,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  ctaTitle: { color: '#cce5f6', fontSize: 24, fontWeight: '800', marginBottom: 10, textAlign: 'center' },
  ctaText: { color: '#fff', textAlign: 'center', marginBottom: 20, fontSize: 16, lineHeight: 22 },
});
