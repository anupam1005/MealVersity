import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
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
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={() => router.push('/account/order-detail')}
    >
      <View style={styles.cardHeader}>
        <Image source={{ uri: order.image }} style={styles.image} />
        <View style={styles.headerInfo}>
          <Text style={styles.restaurantName}>{order.restaurantName}</Text>
          <Text style={styles.timestamp}>{order.timestamp}</Text>
          <TouchableOpacity
            style={styles.viewMenuBtn}
            onPress={() => router.push('/account/order-detail')}
          >
            <Text style={styles.viewMenuText}>View Details</Text>
            <Ionicons name="chevron-forward" size={12} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.itemsList}>
        {order.items.map((item, index) => (
          <Text key={index} style={styles.itemText}>
            {item}
          </Text>
        ))}
      </View>

      {order.status === 'DELIVERED' && (
        <TouchableOpacity style={styles.reorderBtn}>
          <Ionicons name="refresh-outline" size={14} color={COLORS.primary} />
          <Text style={styles.reorderText}>REORDER</Text>
        </TouchableOpacity>
      )}

      <OrderStatusRibbon status={order.status} />
    </TouchableOpacity>
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
    paddingRight: 36,
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
    marginRight: 36,
  },
  itemsList: {
    paddingRight: 36,
    marginBottom: 12,
  },
  itemText: {
    fontSize: 14,
    color: COLORS.textDark,
    marginBottom: 4,
  },
  reorderBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingRight: 36,
  },
  reorderText: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
});
