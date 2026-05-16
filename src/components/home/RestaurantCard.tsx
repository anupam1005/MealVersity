import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const COLORS = {
  primary: '#2ECC71',
  white: '#FFFFFF',
  textDark: '#2C2C2C',
  textLight: '#8E8E8E',
};

interface RestaurantCardProps {
  name: string;
  rating: string;
  reviews: string;
  location: string;
  type: string;
  costForOne: string;
  image: string;
  isOwn: boolean;
}

export default function RestaurantCard({ name, rating, reviews, location, type, costForOne, image, isOwn }: RestaurantCardProps) {
  const router = useRouter();
  
  return (
    <TouchableOpacity style={styles.restaurantCard} onPress={() => router.push('/restaurant-menu')}>
      <View style={styles.restaurantImageContainer}>
        <Image source={{ uri: image }} style={styles.restaurantImage} />
        <View style={styles.paginationDots}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
      
      <View style={styles.restaurantInfo}>
        <View style={styles.titleRow}>
          <Text style={styles.restaurantName} numberOfLines={1}>{name}</Text>
        </View>
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={18} color={COLORS.primary} />
          <Text style={styles.ratingText}>{rating}</Text>
          <Text style={styles.reviewsText}>({reviews}) Ratings</Text>
        </View>
        
        <View style={styles.restaurantDetails}>
          <Text style={styles.detailText}>{location}</Text>
          <Text style={styles.detailText}>{type} • ₹{costForOne} For one</Text>
        </View>
      </View>
      
      {isOwn && (
        <View style={styles.ownKitchenBadge}>
          <Text style={styles.ownKitchenText}>Our Own Kitchen</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  restaurantCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 20,
    marginHorizontal: 2, // Slight margin for shadow
  },
  restaurantImageContainer: {
    height: 180,
    width: '100%',
    position: 'relative',
  },
  restaurantImage: {
    width: '100%',
    height: '100%',
  },
  paginationDots: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  dotActive: {
    backgroundColor: COLORS.white,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  restaurantInfo: {
    padding: 15,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textDark,
    flex: 1,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginLeft: 4,
    marginRight: 6,
  },
  reviewsText: {
    fontSize: 14,
    color: COLORS.textLight,
  },
  restaurantDetails: {
    marginTop: 4,
  },
  detailText: {
    fontSize: 13,
    color: COLORS.textLight,
    marginBottom: 4,
  },
  ownKitchenBadge: {
    position: 'absolute',
    top: 24,
    right: -32,
    backgroundColor: COLORS.primary,
    paddingVertical: 6,
    paddingHorizontal: 30,
    transform: [{ rotate: '45deg' }], // Usually corner ribbons are 45deg
    zIndex: 10,
  },
  ownKitchenText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});
