import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/home/Header';
import SearchBar from '../../components/home/SearchBar';
import HeroBanner from '../../components/home/HeroBanner';
import CategoryList from '../../components/home/CategoryList';
import FilterChips from '../../components/home/FilterChips';
import SectionHeader from '../../components/home/SectionHeader';
import FoodCard from '../../components/home/FoodCard';
import RestaurantCard from '../../components/home/RestaurantCard';

const COLORS = {
  primary: '#2ECC71',
  background: '#F9FAF7',
  white: '#FFFFFF',
};

const SPECIAL_OFFERS = [
  { id: '1', title: 'Chole Bhature', price: '₹69', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&auto=format&fit=crop', tag: 'Bestseller' },
  { id: '2', title: 'Chicken Salad', price: '₹89', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop', tag: 'HOT' },
  { id: '3', title: 'Paneer Tikka', price: '₹120', image: 'https://images.unsplash.com/photo-1599487405270-8b438f42fa03?w=400&auto=format&fit=crop', tag: 'HOT' },
];

const RESTAURANTS = [
  { id: '1', name: 'MV Kitchen', rating: '4.7', reviews: '2.3k+', location: 'Chapa Dali, Barasat', type: 'Indian & South', costForOne: '200', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop', isOwn: true },
  { id: '2', name: 'Bhai Bon Biryani', rating: '4.4', reviews: '1.5k+', location: 'K Road, Barasat', type: 'North & Bengali', costForOne: '180', image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&auto=format&fit=crop', isOwn: false },
  { id: '3', name: 'The Rockers', rating: '4.6', reviews: '990', location: 'Dasunanda Pally, Barasat', type: 'Biryani', costForOne: '250', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop', isOwn: false },
];

export default function DeliveryScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Header Section with Green Background */}
        <View style={styles.headerBackground}>
          <Header />
          <SearchBar />
          <HeroBanner />
        </View>

        <CategoryList />
        <FilterChips />

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

        {/* Explore Banner */}
        <View style={styles.exploreBanner}>
          <Text style={styles.exploreBannerTitle}>EXPLOREEE....</Text>
          <View style={styles.exploreBannerRight}>
            <Text style={styles.exploreBannerText}>Celebration Package •</Text>
            <Text style={styles.exploreBannerText}>Bulk Orders •</Text>
            <Text style={styles.exploreBannerText}>More.... •</Text>
          </View>
        </View>

        {/* Discount Banner */}
        <View style={styles.discountBanner}>
          <View>
            <Text style={styles.discountTitle}>20% OFF</Text>
            <Text style={styles.discountSubtitle}>On All Orders Above ₹299</Text>
          </View>
          <View style={styles.promoCodeBox}>
            <Text style={styles.promoCodeText}>NEWUSER</Text>
          </View>
        </View>

        {/* Top restaurants */}
        <SectionHeader title="Top restaurants to explore" showViewAll={false} />

        <View style={styles.restaurantsList}>
          {RESTAURANTS.map(restaurant => (
            <RestaurantCard 
              key={restaurant.id}
              name={restaurant.name}
              rating={restaurant.rating}
              reviews={restaurant.reviews}
              location={restaurant.location}
              type={restaurant.type}
              costForOne={restaurant.costForOne}
              image={restaurant.image}
              isOwn={restaurant.isOwn}
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
  },
  horizontalList: {
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  exploreBanner: {
    marginHorizontal: 20,
    backgroundColor: '#E63946',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#E63946',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  exploreBannerTitle: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  exploreBannerRight: {
    alignItems: 'flex-end',
  },
  exploreBannerText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 2,
  },
  discountBanner: {
    marginHorizontal: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  discountTitle: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  discountSubtitle: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '600',
    marginTop: 4,
  },
  promoCodeBox: {
    borderWidth: 2,
    borderColor: COLORS.white,
    borderStyle: 'dashed',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  promoCodeText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  restaurantsList: {
    paddingHorizontal: 20,
  },
});
