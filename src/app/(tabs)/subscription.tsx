import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/home/Header';
import SearchBar from '../../components/home/SearchBar';
import HeroBanner from '../../components/home/HeroBanner';
import SubscriptionMealCard from '../../components/subscription/SubscriptionMealCard';

const COLORS = {
  primary: '#2ECC71',
  background: '#F9FAF7',
  white: '#FFFFFF',
};

const SUBSCRIPTION_MEALS = [
  {
    id: '1',
    kitchenName: 'Sweet Express',
    rating: '4.8',
    title: 'Premium North Indian Thali',
    description: 'A complete daily meal plan with 2 Rotis, Dal Makhani, Paneer dish, Rice, and sweet. Perfect for lunch and dinner.',
    tags: ['Pure Veg', 'Weekly', 'Lunch-Dinner'],
    originalPrice: '₹3,500',
    discountedPrice: '₹2,999',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    kitchenName: 'Maa Ki Rasoi',
    rating: '4.5',
    title: 'Homestyle Bengali Fish Meal',
    description: 'Authentic Bengali thali with Rice, Dal, Bhaja, Fish Curry, and Chutney. Like home cooked food.',
    tags: ['Non-Veg', 'Monthly', 'Lunch'],
    originalPrice: '₹4,200',
    discountedPrice: '₹3,499',
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=800&auto=format&fit=crop',
  },
];

export default function SubscriptionScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Header Section */}
        <View style={styles.headerBackground}>
          <Header />
          <SearchBar />
          <HeroBanner backgroundColor="#E89001" />
        </View>

        {/* Subscription Meals List */}
        <View style={styles.listContainer}>
          <Text style={styles.sectionTitle}>Top Subscription Meals</Text>
          {SUBSCRIPTION_MEALS.map(meal => (
            <SubscriptionMealCard 
              key={meal.id}
              id={meal.id}
              kitchenName={meal.kitchenName}
              rating={meal.rating}
              title={meal.title}
              description={meal.description}
              tags={meal.tags}
              originalPrice={meal.originalPrice}
              discountedPrice={meal.discountedPrice}
              image={meal.image}
            />
          ))}
        </View>

        {/* Spacer for bottom tab bar */}
        <View style={{ height: 110 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  headerBackground: {
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    marginBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 15,
  },
});
