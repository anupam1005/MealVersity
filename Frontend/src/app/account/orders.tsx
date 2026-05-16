import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import OrderHistoryCard from '../../components/account/OrderHistoryCard';

const COLORS = {
  primary: '#2ECC71',
  white: '#FFFFFF',
  textDark: '#2C2C2C',
  textLight: '#8E8E8E',
  background: '#F9FAF7',
  border: '#E5E7EB',
};

const DELIVERY_ORDERS = [
  {
    restaurantName: 'Maya Restaurant',
    timestamp: '12:54 pm',
    items: ['2x Chicken Egg Roll', '3x Caramel Pop Corn', '2x Veg Burger', '5x Special Lassi'],
    status: 'DELIVERED' as const,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=200',
  },
  {
    restaurantName: 'Bhai Bon Biryani',
    timestamp: '11:30 am',
    items: ['2x Chicken Biryani', '3x Mutton Biryani', '2x Coca Cola'],
    status: 'CANCELLED' as const,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93cb0?auto=format&fit=crop&q=80&w=200',
  },
];

const MV_KITCHEN_ORDERS = [
  {
    restaurantName: 'MV Kitchen',
    timestamp: '1:30 pm',
    items: ['2x Chole Bhature'],
    status: 'DELIVERED' as const,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b0?auto=format&fit=crop&q=80&w=200',
  },
  {
    restaurantName: 'MV Kitchen',
    timestamp: '12:04 pm',
    items: ['#Day2 - Lunch - ABC Plan'],
    status: 'DELIVERED' as const,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=200',
  },
  {
    restaurantName: 'MV Kitchen',
    timestamp: '1:10 pm',
    items: ['#Day1 - Lunch - ABC Plan'],
    status: 'DENIED' as const,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=200',
  },
];

export default function OrdersScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'delivery' | 'mv_kitchen'>('delivery');

  const activeOrders = activeTab === 'delivery' ? DELIVERY_ORDERS : MV_KITCHEN_ORDERS;

  return (
    <SafeAreaView style={[styles.container, { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={COLORS.textDark} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'delivery' && styles.activeTab]}
          onPress={() => setActiveTab('delivery')}
        >
          <Text style={[styles.tabText, activeTab === 'delivery' && styles.activeTabText]}>Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'mv_kitchen' && styles.activeTab]}
          onPress={() => setActiveTab('mv_kitchen')}
        >
          <Text style={[styles.tabText, activeTab === 'mv_kitchen' && styles.activeTabText]}>MV Kitchen</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 16 }}>
        {activeOrders.map((order, index) => (
          <OrderHistoryCard key={index} order={order} />
        ))}
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    color: COLORS.textLight,
    marginLeft: 4,
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: COLORS.primary,
  },
  tabText: {
    fontSize: 14,
    color: COLORS.textLight,
    fontWeight: '600',
  },
  activeTabText: {
    color: COLORS.primary,
  },
  content: {
    flex: 1,
  },
});
