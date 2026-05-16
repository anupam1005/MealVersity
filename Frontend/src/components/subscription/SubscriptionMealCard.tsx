import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

interface SubscriptionMealCardProps {
  id: string;
  image: string;
  kitchenName: string;
  rating: string;
  title: string;
  description: string;
  tags: string[];
  originalPrice: string;
  discountedPrice: string;
}

export default function SubscriptionMealCard({
  id,
  image,
  kitchenName,
  rating,
  title,
  description,
  tags,
  originalPrice,
  discountedPrice,
}: SubscriptionMealCardProps) {
  const router = useRouter();

  return (
    <TouchableOpacity 
      style={styles.cardContainer} 
      activeOpacity={0.9}
      onPress={() => router.push(`/subscription/${id}`)}
    >
      <Image 
        source={{ uri: image }} 
        style={styles.image} 
        contentFit="cover"
        transition={300}
      />
      
      <View style={styles.contentContainer}>
        {/* Kitchen Name & Rating */}
        <View style={styles.headerRow}>
          <Text style={styles.kitchenName}>{kitchenName}</Text>
          <View style={styles.ratingBadge}>
            <Text style={styles.ratingText}>{rating}</Text>
            <Ionicons name="star" size={10} color="#FFFFFF" />
          </View>
        </View>
        
        {/* Tags */}
        <View style={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <View key={index} style={[styles.tagBadge, tag === 'Pure Veg' ? styles.vegBadge : {}]}>
              <Text style={[styles.tagText, tag === 'Pure Veg' ? styles.vegTagText : {}]}>{tag}</Text>
            </View>
          ))}
        </View>

        {/* Title & Description */}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>{description}</Text>

        {/* Price Row */}
        <View style={styles.priceRow}>
          <Text style={styles.originalPrice}>{originalPrice}</Text>
          <Text style={styles.discountedPrice}>{discountedPrice}</Text>
          <Text style={styles.durationText}>/ month</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
  },
  contentContainer: {
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  kitchenName: {
    fontSize: 14,
    color: '#8E8E8E',
    fontWeight: '600',
  },
  ratingBadge: {
    backgroundColor: '#2ECC71',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  ratingText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 2,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  tagBadge: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 6,
  },
  vegBadge: {
    backgroundColor: '#E8F5E9',
    borderWidth: 1,
    borderColor: '#2ECC71',
  },
  tagText: {
    fontSize: 10,
    color: '#555',
    fontWeight: 'bold',
  },
  vegTagText: {
    color: '#2ECC71',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 6,
  },
  description: {
    fontSize: 12,
    color: '#777',
    marginBottom: 12,
    lineHeight: 18,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  originalPrice: {
    fontSize: 14,
    color: '#A0A0A0',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  discountedPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E89001',
    marginRight: 4,
  },
  durationText: {
    fontSize: 12,
    color: '#8E8E8E',
  },
});
