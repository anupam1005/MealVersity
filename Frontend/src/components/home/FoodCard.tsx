import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useCart } from '../../context/CartContext';

const COLORS = {
  primary: '#2ECC71',
  secondary: '#E89001',
  white: '#FFFFFF',
};

interface FoodCardProps {
  title: string;
  price: string;
  image: string;
  tag: string;
}

export default function FoodCard({ title, price, image, tag }: FoodCardProps) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(0);

  const handleAdd = (e: any) => {
    e.stopPropagation();
    setQuantity(prev => prev + 1);
    addToCart();
  };

  const handleFavorite = (e: any) => {
    e.stopPropagation();
    Alert.alert('Favorite', `${title} added to your favorites!`);
  };

  return (
    <TouchableOpacity 
      style={styles.specialCard} 
      activeOpacity={0.9}
      onPress={() => router.push('/restaurant-menu')}
    >
      <Image 
        source={{ uri: image }} 
        style={styles.specialImage} 
        contentFit="cover"
        transition={300}
      />
      
      {/* Gradient Overlay */}
      <View style={styles.overlay} />
      
      {/* Overlays */}
      <View style={styles.specialTag}>
        <Text style={styles.specialTagText}>{tag}</Text>
      </View>
      <TouchableOpacity style={styles.favoriteBtn} onPress={handleFavorite}>
        <Ionicons name="heart-outline" size={20} color={COLORS.white} />
      </TouchableOpacity>
      
      <View style={styles.specialContent}>
        <Text style={styles.specialTitle}>{title}</Text>
        <View style={styles.specialPriceRow}>
          <Text style={styles.specialPriceLabel}>at</Text>
          <Text style={styles.specialPrice}>{price}</Text>
        </View>
      </View>
      
      {/* Plus Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        {quantity > 0 ? (
          <Text style={styles.qtyText}>{quantity}</Text>
        ) : (
          <Ionicons name="add" size={24} color={COLORS.white} />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  specialCard: {
    width: 170,
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    marginRight: 15,
  },
  specialImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  specialTag: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    zIndex: 2,
  },
  specialTagText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
  favoriteBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 6,
    borderRadius: 20,
  },
  specialContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    paddingRight: 40,
    zIndex: 1,
  },
  specialTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  specialPriceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  specialPriceLabel: {
    color: COLORS.white,
    fontSize: 12,
    marginRight: 2,
  },
  specialPrice: {
    color: COLORS.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.primary,
    width: 44,
    height: 44,
    borderTopLeftRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
  },
  qtyText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
