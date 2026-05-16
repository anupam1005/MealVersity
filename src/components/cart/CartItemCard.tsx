import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const COLORS = {
  primary: '#2ECC71',
  secondary: '#E89001',
  white: '#FFFFFF',
  textDark: '#2C2C2C',
  textLight: '#8E8E8E',
  border: '#E5E7EB',
};

interface CartItemCardProps {
  title: string;
  price: string;
  isVeg?: boolean;
  initialQuantity?: number;
}

export default function CartItemCard({
  title,
  price,
  isVeg = true,
  initialQuantity = 1,
}: CartItemCardProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  return (
    <View style={styles.container}>
      <View style={styles.mainRow}>
        <View style={styles.infoCol}>
          <View style={[styles.typeSquare, { borderColor: isVeg ? COLORS.primary : '#E63946' }]}>
            <View style={[styles.typeDot, { backgroundColor: isVeg ? COLORS.primary : '#E63946' }]} />
          </View>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.actionsCol}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.qtyBtn} onPress={() => setQuantity(Math.max(0, quantity - 1))}>
              <Text style={styles.qtyBtnText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtyText}>{quantity}</Text>
            <TouchableOpacity style={styles.qtyBtn} onPress={() => setQuantity(quantity + 1)}>
              <Text style={styles.qtyBtnText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>₹{price}</Text>
        </View>
      </View>

      <View style={styles.footerRow}>
        <TouchableOpacity style={styles.outlineBtn}>
          <Ionicons name="add" size={14} color={COLORS.textDark} />
          <Text style={styles.outlineBtnText}>Add Items</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.outlineBtn}>
          <Ionicons name="chatbubble-outline" size={14} color={COLORS.textDark} />
          <Text style={styles.outlineBtnText}>Cooking Request</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  mainRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  infoCol: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    gap: 8,
  },
  typeSquare: {
    width: 14,
    height: 14,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 2,
  },
  typeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  title: {
    fontSize: 15,
    color: COLORS.textDark,
    fontWeight: '500',
    flex: 1,
  },
  actionsCol: {
    alignItems: 'flex-end',
    gap: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    minWidth: 80,
    justifyContent: 'space-between',
  },
  qtyBtn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  qtyBtnText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  qtyText: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textDark,
  },
  footerRow: {
    flexDirection: 'row',
    gap: 12,
    marginLeft: 22, // Align with text
  },
  outlineBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.border,
    gap: 4,
  },
  outlineBtnText: {
    fontSize: 12,
    color: COLORS.textDark,
    fontWeight: '500',
  },
});
