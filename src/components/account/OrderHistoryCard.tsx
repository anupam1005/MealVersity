import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import OrderStatusRibbon from './OrderStatusRibbon';

interface OrderHistoryItem {
  restaurantName: string;
  timestamp: string;
  items: string[];
  status: 'DELIVERED' | 'CANCELLED' | 'DENIED' | 'REFUNDED';
  image: string;
}

interface OrderHistoryCardProps {
  order: OrderHistoryItem;
}

const COLORS = {
  primary: '#2ECC71',
  white: '#FFFFFF',
  textDark: '#2C2C2C',
  textLight: '#8E8E8E',
  border: '#E5E7EB',
};

export default function OrderHistoryCard({ order }: OrderHistoryCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image source={{ uri: order.image }} style={styles.image} />
        <View style={styles.headerInfo}>
          <Text style={styles.restaurantName}>{order.restaurantName}</Text>
          <Text style={styles.timestamp}>{order.timestamp}</Text>
          <TouchableOpacity style={styles.viewMenuBtn}>
            <Text style={styles.viewMenuText}>View Menu</Text>
            <Ionicons name="chevron-forward" size={12} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.itemsList}>
        {order.items.map((item, index) => (
          <Text key={index} style={styles.itemText}>{item}</Text>
        ))}
      </View>
      
      <OrderStatusRibbon status={order.status} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 16,
    marginBottom: 16,
    position: 'relative',
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingRight: 32, // make space for ribbon
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  headerInfo: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  timestamp: {
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 2,
  },
  viewMenuBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  viewMenuText: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginBottom: 12,
    marginRight: 32,
  },
  itemsList: {
    paddingRight: 32,
  },
  itemText: {
    fontSize: 14,
    color: COLORS.textDark,
    marginBottom: 4,
  },
});
