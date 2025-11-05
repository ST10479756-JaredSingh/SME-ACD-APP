import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import CoursesScreen from './CoursesScreen';
import DiscountsScreen from './DiscountsScreen';
import ContactScreen from './ContactScreen';
import QuoteScreen from './QuoteScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Courses" component={CoursesScreen} />
        <Stack.Screen name="Discounts" component={DiscountsScreen} />
        <Stack.Screen name="Quote" component={QuoteScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
