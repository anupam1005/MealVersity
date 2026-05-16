import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/home/Header';
import SearchBar from '../../components/home/SearchBar';
import SectionHeader from '../../components/home/SectionHeader';
import FoodCard from '../../components/home/FoodCard';
import BaseMealCard from '../../components/home/BaseMealCard';
import SubscriptionBanner from '../../components/home/SubscriptionBanner';
import FilterChips from '../../components/home/FilterChips';
import HorizontalFoodCard from '../../components/home/HorizontalFoodCard';

const COLORS = {
  primary: '#2ECC71',
  secondary: '#E89001',
  background: '#F9FAF7',
  white: '#FFFFFF',
};

const SPECIAL_OFFERS = [
  { id: '1', title: 'Chole Bhature', price: '₹69', image: 'https://images.unsplash.com/photo-1589302168068-964664d93cb0?w=400&auto=format&fit=crop', tag: 'Bestseller' },
  { id: '2', title: 'Chicken Salad', price: '₹89', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&auto=format&fit=crop', tag: 'HOT' },
];

const BASE_MEALS = [
  { id: '1', title: 'Veg Thali', price: '₹69', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&auto=format&fit=crop' },
  { id: '2', title: 'Non-Veg Thali', price: '₹129', image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=400&auto=format&fit=crop' },
];

const TOP_FOODS = [
  {
    id: '1',
    title: 'Chole Bhature',
    rating: '4.7',
    reviews: '2.3K+',
    description: '4 Bhature served with rich, thick, masaledar chole ...',
    originalPrice: '89',
    price: '69',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93cb0?w=400&auto=format&fit=crop',
    isVeg: true,
  },
  {
    id: '2',
    title: 'Chole Bhature',
    rating: '4.7',
    reviews: '2.3K+',
    description: '4 Bhature served with rich, thick, masaledar chole ...',
    originalPrice: '89',
    price: '69',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93cb0?w=400&auto=format&fit=crop',
    isVeg: true,
  },
  {
    id: '3',
    title: 'Chole Bhature',
    rating: '4.7',
    reviews: '2.3K+',
    description: '4 Bhature served with rich, thick, masaledar chole ...',
    originalPrice: '89',
    price: '69',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93cb0?w=400&auto=format&fit=crop',
    isVeg: false,
  },
];

export default function KitchenScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Header Section */}
        <View style={styles.headerBackground}>
          <Header />
          <SearchBar />
        </View>

        {/* Today's Special & Offers */}
        <SectionHeader title="Today's Special & Offers" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
          {SPECIAL_OFFERS.map(offer => (
            <FoodCard 
              key={offer.id}
              title={offer.title}
              price={offer.price}
              image={offer.image}
              tag={offer.tag}
            />
          ))}
        </ScrollView>

        {/* Base Meals */}
        <SectionHeader title="Base Meals" showViewAll={false} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
          {BASE_MEALS.map(meal => (
            <BaseMealCard 
              key={meal.id}
              title={meal.title}
              price={meal.price}
              image={meal.image}
            />
          ))}
        </ScrollView>

        {/* Subscription Banner */}
        <SubscriptionBanner />

        {/* Filters */}
        <FilterChips />

        {/* Top foods to explore */}
        <SectionHeader title="Top foods to explore" showViewAll={false} />
        <View style={styles.verticalList}>
          {TOP_FOODS.map(food => (
            <HorizontalFoodCard 
              key={food.id}
              title={food.title}
              rating={food.rating}
              reviews={food.reviews}
              description={food.description}
              originalPrice={food.originalPrice}
              price={food.price}
              image={food.image}
              isVeg={food.isVeg}
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
    backgroundColor: COLORS.secondary,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    marginBottom: 20,
  },
  horizontalList: {
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  verticalList: {
    paddingHorizontal: 20,
  },
});
