import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../../context/CartContext';

const COLORS = {
  primary: '#2ECC71',
  secondary: '#E89001',
  white: '#FFFFFF',
  textDark: '#2C2C2C',
  textLight: '#8E8E8E',
  background: '#F9FAF7',
  border: '#E5E7EB',
};

interface RestaurantMenuItemCardProps {
  title: string;
  rating: string;
  reviews: string;
  description: string;
  originalPrice?: string;
  price: string;
  image: string;
  isVeg?: boolean;
}

export default function RestaurantMenuItemCard({
  title,
  rating,
  reviews,
  description,
  originalPrice,
  price,
  image,
  isVeg = true,
}: RestaurantMenuItemCardProps) {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
    addToCart();
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.typeTag}>
          <View style={[styles.typeSquare, { borderColor: isVeg ? COLORS.primary : '#E63946' }]}>
            <View style={[styles.typeDot, { backgroundColor: isVeg ? COLORS.primary : '#E63946' }]} />
          </View>
        </View>

        <Text style={styles.title}>{title}</Text>
        
        <View style={styles.priceRow}>
          {originalPrice && (
            <Text style={styles.originalPrice}>₹{originalPrice}</Text>
          )}
          <Text style={styles.price}>₹{price}</Text>
        </View>

        <View style={styles.ratingRow}>
          <Ionicons name="star" size={12} color={COLORS.secondary} />
          <Text style={styles.ratingText}>{rating}</Text>
          <Text style={styles.reviewsText}>({reviews})</Text>
        </View>

        <Text style={styles.description} numberOfLines={2}>{description}</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        
        {/* Quantity Controls - Prominent Green */}
        <View style={styles.quantityContainerWrapper}>
          {quantity === 0 ? (
            <TouchableOpacity style={styles.addButton} onPress={handleIncrement}>
              <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.qtyBtn} onPress={handleDecrement}>
                <Text style={styles.qtyBtnText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.qtyText}>{quantity}</Text>
              <TouchableOpacity style={styles.qtyBtn} onPress={handleIncrement}>
                <Text style={styles.qtyBtnText}>+</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    borderStyle: 'solid',
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
  },
  infoContainer: {
    flex: 1,
    paddingRight: 15,
  },
  typeTag: {
    marginBottom: 6,
  },
  typeSquare: {
    width: 14,
    height: 14,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  typeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    gap: 6,
  },
  originalPrice: {
    fontSize: 14,
    color: COLORS.textLight,
    textDecorationLine: 'line-through',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.textDark,
    marginLeft: 4,
  },
  reviewsText: {
    fontSize: 12,
    color: COLORS.textLight,
    marginLeft: 2,
  },
  description: {
    fontSize: 13,
    color: COLORS.textLight,
    lineHeight: 18,
  },
  imageContainer: {
    width: 130,
    height: 120,
    position: 'relative',
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 100,
    borderRadius: 16,
    resizeMode: 'cover',
  },
  quantityContainerWrapper: {
    position: 'absolute',
    bottom: 4,
    shadowColor: '#2ECC71',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  addButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  addButtonText: {
    color: COLORS.white,
    fontWeight: '900',
    fontSize: 14,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#FFF',
    minWidth: 80,
    justifyContent: 'space-between',
  },
  qtyBtn: {
    paddingHorizontal: 8,
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
    marginHorizontal: 4,
  },
});
