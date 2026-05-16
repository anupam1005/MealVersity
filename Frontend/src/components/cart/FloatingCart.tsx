import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useCart } from '../../context/CartContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const COLORS = {
  primary: '#2ECC71',
  white: '#FFFFFF',
};

export default function FloatingCart({ bottomOffset }: { bottomOffset?: number }) {
  const { cartCount } = useCart();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  if (cartCount === 0) return null;

  const finalBottom = bottomOffset !== undefined ? bottomOffset : insets.bottom + 80;

  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        { bottom: finalBottom }
      ]}
      activeOpacity={0.9}
      onPress={() => router.push('/cart')}
    >
      <View style={styles.leftContent}>
        <View style={styles.iconBadge}>
          <Ionicons name="cart" size={20} color={COLORS.primary} />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cartCount}</Text>
          </View>
        </View>
        <Text style={styles.itemsText}>{cartCount} Item{cartCount > 1 ? 's' : ''} added</Text>
      </View>
      
      <View style={styles.rightContent}>
        <Text style={styles.viewCartText}>VIEW CART</Text>
        <Ionicons name="chevron-forward" size={16} color={COLORS.white} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 20,
    right: 20,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    zIndex: 1000,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#E63946',
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
  itemsText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewCartText: {
    color: COLORS.white,
    fontWeight: '900',
    fontSize: 14,
    letterSpacing: 0.5,
  },
});
