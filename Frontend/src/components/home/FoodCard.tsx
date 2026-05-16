import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
  return (
    <TouchableOpacity style={styles.specialCard}>
      <Image source={{ uri: image }} style={styles.specialImage} />
      
      {/* Gradient Overlay */}
      <View style={styles.overlay} />
      
      {/* Overlays */}
      <View style={styles.specialTag}>
        <Text style={styles.specialTagText}>{tag}</Text>
      </View>
      <TouchableOpacity style={styles.favoriteBtn}>
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
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={24} color={COLORS.white} />
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
  },
  specialContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    paddingRight: 40,
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
  },
});
