import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import BillDetails from '../../components/cart/BillDetails';

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

// Mock order data — in production, fetch by ID
const MOCK_ORDER = {
  id: '#MV-2034',
  restaurant: 'Maya Restaurant',
  timestamp: '12:54 pm — May 14, 2026',
  status: 'DELIVERED',
  image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400',
  items: [
    { name: '2x Chicken Egg Roll', price: '₹240' },
    { name: '3x Caramel Pop Corn', price: '₹150' },
    { name: '2x Veg Burger', price: '₹220' },
    { name: '5x Special Lassi', price: '₹250' },
  ],
};

export default function OrderDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const statusColor = MOCK_ORDER.status === 'DELIVERED' ? COLORS.primary : COLORS.danger;

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
        <Text style={styles.headerTitle}>Order Details</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Order Info Card */}
        <View style={styles.orderInfoCard}>
          <View style={styles.restaurantRow}>
            <Image source={{ uri: MOCK_ORDER.image }} style={styles.restaurantImage} />
            <View style={styles.restaurantInfo}>
              <Text style={styles.restaurantName}>{MOCK_ORDER.restaurant}</Text>
              <Text style={styles.orderId}>{MOCK_ORDER.id}</Text>
              <Text style={styles.orderTimestamp}>{MOCK_ORDER.timestamp}</Text>
            </View>
            <View style={[styles.statusBadge, { backgroundColor: statusColor + '20' }]}>
              <Text style={[styles.statusText, { color: statusColor }]}>{MOCK_ORDER.status}</Text>
            </View>
          </View>
        </View>

        {/* Items */}
        <View style={styles.itemsCard}>
          <Text style={styles.sectionTitle}>Items Ordered</Text>
          {MOCK_ORDER.items.map((item, index) => (
            <View key={index} style={styles.itemRow}>
              <View style={styles.vegDotContainer}>
                <View style={styles.vegDot} />
              </View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          ))}
        </View>

        {/* Bill Details */}
        <BillDetails />

        {/* Actions */}
        <View style={styles.actionsCard}>
          <Text style={styles.sectionTitle}>Actions</Text>

          <TouchableOpacity style={styles.actionRow}>
            <Ionicons name="refresh-outline" size={22} color={COLORS.primary} />
            <Text style={styles.actionText}>Reorder</Text>
            <Ionicons name="chevron-forward" size={18} color={COLORS.textLight} />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.actionRow}>
            <Ionicons name="star-outline" size={22} color={COLORS.secondary} />
            <Text style={styles.actionText}>Rate This Order</Text>
            <Ionicons name="chevron-forward" size={18} color={COLORS.textLight} />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.actionRow} onPress={() => router.push('/account/refunds')}>
            <Ionicons name="return-down-back-outline" size={22} color={COLORS.danger} />
            <Text style={[styles.actionText, { color: COLORS.danger }]}>Request Refund</Text>
            <Ionicons name="chevron-forward" size={18} color={COLORS.textLight} />
          </TouchableOpacity>
        </View>

        {/* Help */}
        <TouchableOpacity style={styles.helpButton}>
          <Ionicons name="headset-outline" size={20} color={COLORS.textDark} />
          <Text style={styles.helpButtonText}>Need Help with this Order?</Text>
          <Ionicons name="chevron-forward" size={18} color={COLORS.textLight} />
        </TouchableOpacity>
      </ScrollView>

      {/* Reorder Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.reorderBtn}>
          <Ionicons name="refresh" size={20} color={COLORS.white} />
          <Text style={styles.reorderBtnText}>REORDER</Text>
        </TouchableOpacity>
      </View>
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
  orderInfoCard: {
    backgroundColor: COLORS.white,
    padding: 16,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  restaurantRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
  },
  restaurantInfo: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 2,
  },
  orderId: {
    fontSize: 13,
    color: COLORS.primary,
    fontWeight: '600',
    marginBottom: 2,
  },
  orderTimestamp: {
    fontSize: 12,
    color: COLORS.textLight,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  itemsCard: {
    backgroundColor: COLORS.white,
    padding: 16,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 12,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  vegDotContainer: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  vegDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
  },
  itemName: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textDark,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textDark,
  },
  actionsCard: {
    backgroundColor: COLORS.white,
    padding: 16,
    marginBottom: 12,
    borderRadius: 0,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    gap: 14,
  },
  actionText: {
    flex: 1,
    fontSize: 15,
    color: COLORS.textDark,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
  },
  helpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    gap: 12,
  },
  helpButtonText: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textDark,
    fontWeight: '500',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 10,
  },
  reorderBtn: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 10,
  },
  reorderBtnText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
