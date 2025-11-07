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
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const discounts = [
  { courses: 'One course', discount: 'No discount' },
  { courses: 'Two courses', discount: '5% discount' },
  { courses: 'Three courses', discount: '10% discount' },
  { courses: 'More than three courses', discount: '15% discount' }
];

export default function DiscountsScreen({ navigation }: { navigation: any }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Discounts</Text>
      
      <View style={styles.discountsBox}>
        {discounts.map((d, idx) => (
          <Text key={idx} style={styles.discountItem}>
            {d.courses} – {d.discount}
          </Text>
        ))}
      </View>

      <Text style={styles.note}>
        Choose multiple courses to maximize your savings. Discounts are applied automatically in our Get a Quote form.
      </Text>

      {/* Get a Quote Button */}
      <TouchableOpacity style={styles.quoteButton} onPress={() => navigation.navigate('Quote')}>
        <Text style={styles.quoteButtonText}>Get a Quote</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1, 
    padding: 16, 
    backgroundColor: '#f4f8fa' // light soft neutral background
  },
  title: { 
    fontSize: 24, 
    fontWeight: '700', 
    color: '#0a4d68', 
    marginBottom: 16, 
    textAlign: 'center'
  },
  discountsBox: { 
    backgroundColor: '#d6effa', 
    padding: 16, 
    borderLeftWidth: 5, 
    borderLeftColor: '#0a4d68', 
    borderRadius: 8, 
    marginBottom: 16 
  },
  discountItem: { 
    color: '#0a4d68', 
    fontWeight: '600', 
    marginBottom: 8, 
    fontSize: 16 
  },
  note: { 
    color: '#135e7d', 
    fontSize: 14, 
    textAlign: 'center', 
    marginBottom: 24, 
    lineHeight: 20 
  },
  quoteButton: { 
    backgroundColor: '#0a4d68', 
    paddingVertical: 12, 
    paddingHorizontal: 28, 
    borderRadius: 8, 
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5
  },
  quoteButtonText: { 
    color: '#ffffff', 
    fontWeight: '700', 
    fontSize: 16, 
    textTransform: 'uppercase', 
    letterSpacing: 0.5 
  }
});
