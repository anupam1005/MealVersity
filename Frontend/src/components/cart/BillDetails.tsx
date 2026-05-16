import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const COLORS = {
  primary: '#2ECC71',
  white: '#FFFFFF',
  textDark: '#2C2C2C',
  textLight: '#8E8E8E',
  border: '#E5E7EB',
  background: '#F9FAF7',
};

export default function BillDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bill Details</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Item Total</Text>
        <View style={styles.amountGroup}>
          <Text style={styles.strikethrough}>₹320</Text>
          <Text style={styles.amount}>₹270</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Delivery Fee | 3.5 kms</Text>
        <Text style={styles.amount}>₹40</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.label}>Packing Charge</Text>
        <Text style={styles.amount}>₹25</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>GST & Restaurant Charges</Text>
        <Text style={styles.amount}>₹15</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Delivery Tip</Text>
        <Text style={styles.primaryText}>Add tip</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.totalLabel}>Total Amount</Text>
        <Text style={styles.totalAmount}>₹350</Text>
      </View>

      <View style={styles.savingsBox}>
        <Text style={styles.savingsText}>Your total savings ₹50</Text>
      </View>

      <View style={styles.cancellationBox}>
        <Text style={styles.cancellationTitle}>Cancellation Policy</Text>
        <Text style={styles.cancellationText}>
          Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 16,
    marginTop: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: COLORS.textLight,
  },
  amountGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  strikethrough: {
    fontSize: 14,
    color: COLORS.textLight,
    textDecorationLine: 'line-through',
  },
  amount: {
    fontSize: 14,
    color: COLORS.textDark,
    fontWeight: '500',
  },
  primaryText: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 12,
    borderStyle: 'dashed',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  savingsBox: {
    backgroundColor: '#E8F5E9',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  savingsText: {
    color: COLORS.primary,
    fontWeight: '600',
    fontSize: 14,
  },
  cancellationBox: {
    marginTop: 20,
    padding: 12,
    backgroundColor: COLORS.background,
    borderRadius: 8,
  },
  cancellationTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 4,
  },
  cancellationText: {
    fontSize: 12,
    color: COLORS.textLight,
    lineHeight: 18,
  },
});
