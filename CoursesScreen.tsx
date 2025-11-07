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

const courses = [
  { id: 'FirstAid', title: 'First Aid (6 months) - R1500', purpose: 'First aid awareness and basic life support', topics: ['Wounds and bleeding', 'Burns and fractures', 'Emergency scene management', 'CPR', 'Respiratory distress'] },
  { id: 'Sewing', title: 'Sewing (6 months) - R1500', purpose: 'Alterations and new garment tailoring', topics: ['Types of stitches', 'Threading a sewing machine', 'Sewing buttons, zips, hems, seams', 'Alterations', 'Designing and sewing new garments'] },
  { id: 'Landscaping', title: 'Landscaping (6 months) - R1500', purpose: 'Landscaping for new and established gardens', topics: ['Indigenous and exotic plants', 'Fixed structures', 'Balancing plants and trees', 'Aesthetics of shapes and colours', 'Garden layout'] },
  { id: 'LifeSkills', title: 'Life Skills (6 months) - R1500', purpose: 'Skills for basic life necessities', topics: ['Opening a bank account', 'Basic labour law', 'Reading and writing literacy', 'Numeric literacy'] },
  { id: 'ChildMinding', title: 'Child Minding (6 weeks) - R750', purpose: 'Basic child and baby care', topics: ['Birth to six-month old needs', 'Seven-month to one year old needs', 'Toddler needs', 'Educational toys'] },
  { id: 'Cooking', title: 'Cooking (6 weeks) - R750', purpose: 'Prepare and cook nutritious meals', topics: ['Nutritional requirements', 'Types of protein, carbs, vegetables', 'Planning meals', 'Preparation and cooking'] },
  { id: 'GardenMaintenance', title: 'Garden Maintenance (6 weeks) - R750', purpose: 'Watering, pruning, planting in gardens', topics: ['Water restrictions and requirements', 'Pruning and propagation', 'Planting techniques'] }
];

export default function CoursesScreen({ navigation }: { navigation: any }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Our Courses</Text>
      {courses.map(course => (
        <View key={course.id} style={styles.courseCard}>
          <Text style={styles.courseTitle}>{course.title}</Text>
          <Text style={styles.purpose}>
            <Text style={{ fontWeight: '700' }}>Purpose:</Text> {course.purpose}
          </Text>
          {course.topics.map((topic, idx) => (
            <Text key={idx} style={styles.topic}>• {topic}</Text>
          ))}
        </View>
      ))}

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
    backgroundColor: '#f4f8fa' // light neutral background
  },
  title: { 
    fontSize: 24, 
    fontWeight: '700', 
    color: '#0a4d68', 
    marginBottom: 16, 
    textAlign: 'center'
  },
  courseCard: { 
    backgroundColor: '#d6effa', 
    padding: 16, 
    borderRadius: 10, 
    marginBottom: 16, 
    borderWidth: 2, 
    borderColor: '#0a4d68',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3
  },
  courseTitle: { 
    fontSize: 18, 
    fontWeight: '700', 
    color: '#0a4d68', 
    marginBottom: 6 
  },
  purpose: { 
    color: '#135e7d', 
    marginBottom: 8, 
    fontSize: 15 
  },
  topic: { 
    color: '#135e7d', 
    marginLeft: 8, 
    marginBottom: 4, 
    fontSize: 14 
  },
  quoteButton: { 
    backgroundColor: '#0a4d68', 
    paddingVertical: 12, 
    paddingHorizontal: 28, 
    borderRadius: 8, 
    alignSelf: 'center', 
    marginTop: 20, 
    marginBottom: 20,
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
