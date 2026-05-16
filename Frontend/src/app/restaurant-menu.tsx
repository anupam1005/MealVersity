import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RestaurantFilterChips from '../components/restaurant/RestaurantFilterChips';
import RestaurantMenuItemCard from '../components/restaurant/RestaurantMenuItemCard';
import { Image } from 'expo-image';
import FloatingCart from '../components/cart/FloatingCart';

const COLORS = {
  primary: '#2ECC71',
  secondary: '#E89001',
  white: '#FFFFFF',
  textDark: '#2C2C2C',
  textLight: '#8E8E8E',
  background: '#F9FAF7',
  border: '#E5E7EB',
  softGreen: '#E8F5E9',
};

export default function RestaurantMenuScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color={COLORS.textDark} />
          </TouchableOpacity>
          <View>
            <Text style={styles.restaurantName}>Maya Restaurant</Text>
            <Text style={styles.restaurantSubtext}>Downtown • 30 mins</Text>
          </View>
        </View>
        <View style={styles.ratingPill}>
          <Text style={styles.ratingText}>4.2</Text>
          <Ionicons name="star" size={12} color={COLORS.white} />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={COLORS.textLight} />
          <TextInput 
            placeholder="Search in menu" 
            placeholderTextColor={COLORS.textLight}
            style={styles.searchInput}
          />
        </View>

        {/* Filters */}
        <RestaurantFilterChips />

        {/* Discount Banner */}
        <View style={styles.discountBanner}>
          <View style={styles.discountBannerInner}>
            <Ionicons name="pricetag-outline" size={20} color={COLORS.primary} />
            <Text style={styles.discountText}>Flat ₹50 Off on orders above ₹299</Text>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Previously Ordered</Text>
          <RestaurantMenuItemCard 
            title="Paneer Butter Masala"
            rating="4.5"
            reviews="120+"
            description="Rich and creamy curry made with paneer, spices, onions, tomatoes, cashews and butter."
            price="240"
            image="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=400"
            isVeg={true}
          />
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Recommended</Text>
          <RestaurantMenuItemCard 
            title="Chicken Biryani"
            rating="4.8"
            reviews="500+"
            description="Aromatic basmati rice cooked with tender chicken and authentic spices."
            price="320"
            image="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=400"
            isVeg={false}
          />
          <RestaurantMenuItemCard 
            title="Garlic Naan"
            rating="4.6"
            reviews="300+"
            description="Soft Indian flatbread topped with garlic and butter."
            price="60"
            image="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=400"
            isVeg={true}
          />
        </View>
      </ScrollView>

      <FloatingCart bottomOffset={insets.bottom + 16} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 12,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  restaurantSubtext: {
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 2,
  },
  ratingPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  ratingText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 12,
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 12,
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: COLORS.textDark,
  },
  discountBanner: {
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderStyle: 'dashed',
    backgroundColor: COLORS.softGreen,
  },
  discountBannerInner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 8,
  },
  discountText: {
    color: COLORS.primary,
    fontWeight: '600',
    fontSize: 14,
  },
  sectionContainer: {
    marginTop: 16,
    backgroundColor: COLORS.white,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textDark,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  floatingCheckout: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
    paddingTop: 12,
    paddingHorizontal: 16,
  },
  floatingCheckoutInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 12,
  },
  cartInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cartAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
  },
  cartItemsText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  viewCartText: {
    fontSize: 12,
    color: COLORS.textLight,
  },
  cartActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  trashBtn: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#FFF0F0',
  },
  checkoutBtn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  checkoutBtnText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
