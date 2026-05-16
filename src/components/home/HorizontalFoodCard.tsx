import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const COLORS = {
  primary: '#2ECC71',
  secondary: '#E89001',
  white: '#FFFFFF',
  textDark: '#2C2C2C',
  textLight: '#8E8E8E',
  background: '#F9FAF7',
  border: '#E5E7EB',
};

interface HorizontalFoodCardProps {
  title: string;
  rating: string;
  reviews: string;
  description: string;
  originalPrice?: string;
  price: string;
  image: string;
  isVeg?: boolean;
}

export default function HorizontalFoodCard({
  title,
  rating,
  reviews,
  description,
  originalPrice,
  price,
  image,
  isVeg = true,
}: HorizontalFoodCardProps) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={12} color={COLORS.primary} />
          <Text style={styles.ratingText}>{rating}</Text>
          <Text style={styles.reviewsText}>({reviews})</Text>
        </View>

        <Text style={styles.description} numberOfLines={2}>{description}</Text>

        <View style={styles.priceRow}>
          {originalPrice && (
            <Text style={styles.originalPrice}>₹{originalPrice}</Text>
          )}
          <Text style={styles.price}>₹{price}</Text>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.typeTag}>
          <View style={[styles.typeDot, { backgroundColor: isVeg ? COLORS.primary : '#E63946' }]} />
        </View>
        
        {/* Quantity Controls */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.qtyBtn}>
            <Text style={styles.qtyBtnText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qtyText}>1</Text>
          <TouchableOpacity style={styles.qtyBtn}>
            <Text style={styles.qtyBtnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    borderStyle: 'dashed',
  },
  infoContainer: {
    flex: 1,
    paddingRight: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.textDark,
    marginLeft: 4,
  },
  reviewsText: {
    fontSize: 12,
    color: COLORS.textLight,
    marginLeft: 2,
  },
  description: {
    fontSize: 12,
    color: COLORS.textLight,
    lineHeight: 18,
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  originalPrice: {
    fontSize: 12,
    color: COLORS.textLight,
    textDecorationLine: 'line-through',
    marginBottom: 2,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  imageContainer: {
    width: 130,
    height: 100,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    resizeMode: 'cover',
  },
  typeTag: {
    position: 'absolute',
    top: 6,
    left: 6,
    backgroundColor: COLORS.white,
    padding: 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  typeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  quantityContainer: {
    position: 'absolute',
    bottom: -15,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  qtyBtn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  qtyBtnText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  qtyText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
});
