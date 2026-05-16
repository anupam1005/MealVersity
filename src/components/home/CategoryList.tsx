import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const COLORS = {
  white: '#FFFFFF',
  textDark: '#2C2C2C',
};

const CATEGORIES = [
  { id: '1', title: 'Biryani', image: 'https://images.unsplash.com/photo-1589302168068-964664d93cb0?w=200&auto=format&fit=crop' },
  { id: '2', title: 'Noodles', image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=200&auto=format&fit=crop' },
  { id: '3', title: 'Sandwich', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=200&auto=format&fit=crop' },
  { id: '4', title: 'Momos', image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=200&auto=format&fit=crop' },
  { id: '5', title: 'Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&auto=format&fit=crop' },
];

export default function CategoryList() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesContainer}>
      {CATEGORIES.map(cat => (
        <TouchableOpacity key={cat.id} style={styles.categoryItem}>
          <View style={styles.categoryImageContainer}>
            <Image source={{ uri: cat.image }} style={styles.categoryImage} />
          </View>
          <Text style={styles.categoryText}>{cat.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryImageContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 8,
  },
  categoryImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  categoryText: {
    fontSize: 13,
    color: COLORS.textDark,
    fontWeight: '600',
  },
});
