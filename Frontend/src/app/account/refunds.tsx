import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const COLORS = {
  primary: '#2ECC71',
  secondary: '#E89001',
  danger: '#E63946',
  white: '#FFFFFF',
  textDark: '#2C2C2C',
  textLight: '#8E8E8E',
  background: '#F9FAF7',
  border: '#E5E7EB',
};

const MOCK_REFUNDS = [
  {
    id: 'R001',
    orderId: '#MV-2034',
    restaurant: 'Maya Restaurant',
    amount: '₹240',
    reason: 'Item not delivered',
    date: 'May 12, 2026',
    status: 'PROCESSED',
  },
  {
    id: 'R002',
    orderId: '#MV-1987',
    restaurant: 'Bhai Bon Biryani',
    amount: '₹349',
    reason: 'Wrong item delivered',
    date: 'May 8, 2026',
    status: 'PENDING',
  },
  {
    id: 'R003',
    orderId: '#MV-1832',
    restaurant: 'MV Kitchen',
    amount: '₹120',
    reason: 'Order cancelled',
    date: 'Apr 29, 2026',
    status: 'PROCESSED',
  },
];

const statusColors: Record<string, string> = {
  PROCESSED: COLORS.primary,
  PENDING: COLORS.secondary,
  REJECTED: COLORS.danger,
};

export default function RefundsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={[
        styles.container,
        { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
      ]}
    >
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={COLORS.textDark} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Refunds</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Summary Banner */}
        <View style={styles.summaryBanner}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>3</Text>
            <Text style={styles.summaryLabel}>Total Refunds</Text>
          </View>
          <View style={styles.summaryDivider} />
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>₹709</Text>
            <Text style={styles.summaryLabel}>Total Refunded</Text>
          </View>
          <View style={styles.summaryDivider} />
          <View style={styles.summaryItem}>
            <Text style={[styles.summaryValue, { color: COLORS.secondary }]}>₹349</Text>
            <Text style={styles.summaryLabel}>Pending</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Refund History</Text>

        {MOCK_REFUNDS.map((refund) => (
          <View key={refund.id} style={styles.refundCard}>
            <View style={styles.cardTop}>
              <View style={styles.cardLeft}>
                <Text style={styles.orderId}>{refund.orderId}</Text>
                <Text style={styles.restaurantName}>{refund.restaurant}</Text>
                <Text style={styles.reason}>{refund.reason}</Text>
                <Text style={styles.date}>{refund.date}</Text>
              </View>
              <View style={styles.cardRight}>
                <Text style={styles.refundAmount}>{refund.amount}</Text>
                <View
                  style={[
                    styles.statusBadge,
                    { backgroundColor: (statusColors[refund.status] || COLORS.textLight) + '20' },
                  ]}
                >
                  <Text
                    style={[
                      styles.statusText,
                      { color: statusColors[refund.status] || COLORS.textLight },
                    ]}
                  >
                    {refund.status}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.contactBtn}>
          <Ionicons name="headset-outline" size={20} color={COLORS.primary} />
          <Text style={styles.contactBtnText}>Contact Support for Refund Help</Text>
          <Ionicons name="chevron-forward" size={18} color={COLORS.textLight} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  content: {
    flex: 1,
  },
  summaryBanner: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    marginBottom: 24,
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  summaryLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.85)',
  },
  summaryDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 12,
  },
  refundCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 16,
    marginBottom: 12,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLeft: {
    flex: 1,
  },
  cardRight: {
    alignItems: 'flex-end',
    gap: 8,
  },
  orderId: {
    fontSize: 13,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  restaurantName: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textDark,
    marginBottom: 4,
  },
  reason: {
    fontSize: 13,
    color: COLORS.textLight,
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: COLORS.textLight,
  },
  refundAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  contactBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginTop: 8,
  },
  contactBtnText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    color: COLORS.textDark,
    fontWeight: '500',
  },
});
