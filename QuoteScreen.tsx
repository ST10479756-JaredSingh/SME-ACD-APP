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
import React, { useState } from 'react';
import { Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

type CoursePrices = {
  'First Aid': number;
  'Sewing': number;
  'Landscaping': number;
  'Life Skills': number;
  'Child Minding': number;
  'Cooking': number;
  'Garden Maintenance': number;
};

const coursePrices: CoursePrices = {
  'First Aid': 1500,
  'Sewing': 1500,
  'Landscaping': 1500,
  'Life Skills': 1500,
  'Child Minding': 750,
  'Cooking': 750,
  'Garden Maintenance': 750,
};

const coursesList = Object.keys(coursePrices) as (keyof CoursePrices)[];

export default function QuoteScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedCourses, setSelectedCourses] = useState<(keyof CoursePrices)[]>([]);
  const [quoteResult, setQuoteResult] = useState('');

  const toggleCourse = (course: keyof CoursePrices) => {
    setSelectedCourses(prev =>
      prev.includes(course) ? prev.filter(c => c !== course) : [...prev, course]
    );
  };

  const calculateQuote = () => {
    if (!name.trim() || !email.trim() || !email.includes('@')) {
      Alert.alert(
        'Required Fields Missing',
        'Please enter your full name and a valid email address before calculating your quote.',
        [{ text: 'OK', style: 'default' }]
      );
      return;
    }

    let total = selectedCourses.reduce((sum, course) => sum + coursePrices[course], 0);
    let discount = 0;
    if (selectedCourses.length === 2) discount = 0.05;
    else if (selectedCourses.length === 3) discount = 0.10;
    else if (selectedCourses.length > 3) discount = 0.15;
    let discountedTotal = total * (1 - discount);

    let result = `Selected courses: ${selectedCourses.join(', ')}\nTotal: R${total}`;
    if (discount > 0) {
      result += `\nDiscount: ${discount * 100}%\nDiscounted Total: R${discountedTotal.toFixed(2)}`;
    }
    setQuoteResult(result);

    Alert.alert('Quote Ready', 'Scroll down to see your quote!', [{ text: 'OK', style: 'default' }]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Get a Quote</Text>

      <Text style={styles.label}>Your Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>Your Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Select Courses</Text>
      {coursesList.map((course, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.courseOption,
            selectedCourses.includes(course) && styles.courseOptionSelected,
          ]}
          onPress={() => toggleCourse(course)}
        >
          <Text
            style={[
              styles.courseText,
              selectedCourses.includes(course) && styles.courseTextSelected,
            ]}
          >
            {course} (R{coursePrices[course]})
          </Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.label}>Additional Information</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        value={message}
        onChangeText={setMessage}
        placeholder="Enter any message"
        multiline
      />

      <TouchableOpacity style={styles.calculateButton} onPress={calculateQuote}>
        <Text style={styles.calculateButtonText}>Calculate Quote</Text>
      </TouchableOpacity>

      {quoteResult ? <Text style={styles.result}>{quoteResult}</Text> : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 16, backgroundColor: '#f4f8fa' },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0a4d68',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontWeight: '700',
    marginTop: 12,
    marginBottom: 6,
    color: '#135e7d',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderColor: '#0a4d68',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
    color: '#135e7d',
  },
  courseOption: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#d6effa',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  courseOptionSelected: { backgroundColor: '#0a4d68' },
  courseText: { color: '#0a4d68', fontWeight: '600', fontSize: 16 },
  courseTextSelected: { color: '#d6effa', fontWeight: '700' },
  calculateButton: {
    backgroundColor: '#0a4d68',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  calculateButtonText: { color: '#d6effa', fontWeight: '800', fontSize: 18 },
  result: {
    marginTop: 16,
    fontWeight: '700',
    color: '#135e7d',
    fontSize: 16,
    backgroundColor: '#d6effa',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0a4d68',
    lineHeight: 22,
  },
});
