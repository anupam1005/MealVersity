import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

const COLORS = {
  secondary: '#E89001',
  white: '#FFFFFF',
};

export default function HeroBanner({ backgroundColor = '#1E9A53' }: { backgroundColor?: string }) {
  const router = useRouter();

  return (
    <View style={[styles.heroBanner, { backgroundColor }]}>
      <View style={styles.heroTextContent}>
        <Text style={styles.heroTitle}>Bhook Lagi He ?</Text>
        <Text style={styles.heroSubtitle}>Biriyani Khao Na .. !</Text>
        <View style={styles.heroOfferBadge}>
          <Text style={styles.heroOfferText}>20% OFF | FREE DELIVERY</Text>
        </View>
        <TouchableOpacity 
          style={styles.orderNowBtn} 
          onPress={() => router.push('/restaurant-menu')}
        >
          <Text style={styles.orderNowText}>ORDER NOW</Text>
        </TouchableOpacity>
      </View>
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop' }} 
        style={styles.heroImage} 
        contentFit="cover"
        transition={300}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heroBanner: {
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
    height: 160,
  },
  heroTextContent: {
    flex: 1,
    zIndex: 2,
    justifyContent: 'center',
  },
  heroTitle: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  heroSubtitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '700',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  heroOfferBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 15,
  },
  heroOfferText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
  orderNowBtn: {
    backgroundColor: COLORS.secondary,
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
  },
  orderNowText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  heroImage: {
    position: 'absolute',
    right: -30,
    top: -10,
    width: 180,
    height: 180,
    borderRadius: 90,
  },
});
