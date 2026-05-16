import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface OrderStatusRibbonProps {
  status: 'DELIVERED' | 'CANCELLED' | 'DENIED' | 'REFUNDED';
}

const COLORS = {
  DELIVERED: '#2ECC71',
  CANCELLED: '#E63946',
  DENIED: '#E63946',
  REFUNDED: '#E89001',
  white: '#FFFFFF',
};

export default function OrderStatusRibbon({ status }: OrderStatusRibbonProps) {
  const backgroundColor = COLORS[status] || COLORS.DELIVERED;

  return (
    <View style={[styles.ribbon, { backgroundColor }]}>
      <Text style={styles.ribbonText}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ribbon: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  ribbonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 12,
    width: 100,
    textAlign: 'center',
    transform: [{ rotate: '-90deg' }],
  },
});
