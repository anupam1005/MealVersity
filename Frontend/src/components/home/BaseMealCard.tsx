import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

interface BaseMealCardProps {
  title: string;
  price: string;
  image: string;
}

export default function BaseMealCard({ title, price, image }: BaseMealCardProps) {
  const router = useRouter();

  return (
    <TouchableOpacity 
      style={styles.cardContainer} 
      activeOpacity={0.8}
      onPress={() => router.push('/restaurant-menu')}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.atText}>at </Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
      <Image 
        source={{ uri: image }} 
        style={styles.image} 
        contentFit="cover"
        transition={300}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF3E8', // Soft peach/orange
    borderRadius: 16,
    width: 160,
    height: 90,
    marginRight: 15,
    flexDirection: 'row',
    overflow: 'hidden',
    position: 'relative',
  },
  textContainer: {
    padding: 12,
    zIndex: 2,
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  atText: {
    fontSize: 10,
    color: '#8E8E8E',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E89001',
  },
  image: {
    width: 80,
    height: 80,
    position: 'absolute',
    right: -10,
    bottom: -10,
    borderRadius: 40,
  },
});
