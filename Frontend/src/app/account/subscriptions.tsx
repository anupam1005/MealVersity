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
  softGreen: '#E8F5E9',
};

const MY_SUBSCRIPTIONS = [
  {
    id: '1',
    kitchenName: 'Sweet Express',
    title: 'Monthly Veg Lunch & Dinner Combo',
    rating: '4.7',
    tags: ['Pure Veg', 'Monthly', 'Lunch-Dinner'],
    status: 'ACTIVE',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop',
    nextDelivery: 'Today – Lunch – 12 pm | Home / ABC Street, Colony, Bazaar',
    lastDelivery: 'Yesterday – Dinner – 9:03 pm | Home / ABC Street, Colony, Bazaar',
    startDate: '12 Dec 2025',
    daysRemaining: 18,
    totalDays: 30,
  },
];

const RECOMMENDED = [
  {
    id: '2',
    kitchenName: 'Maa Ki Rasoi',
    title: 'Monthly Non-Veg Lunch',
    rating: '4.3',
    tags: ['Non-Veg', 'Monthly', 'Lunch'],
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?w=800&auto=format&fit=crop',
    originalPrice: '₹3,999',
    price: '₹3,199',
  },
];

export default function MySubscriptionsScreen() {
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
        <Text style={styles.headerTitle}>My Subscriptions</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {MY_SUBSCRIPTIONS.map((sub) => (
          <View key={sub.id} style={styles.subCard}>
            {/* Active badge */}
            <View style={styles.activeBadge}>
              <Text style={styles.activeBadgeText}>{sub.status}</Text>
            </View>

            {/* Hero image */}
            <View style={styles.subHero}>
              <Image source={{ uri: sub.image }} style={styles.subImage} />
            </View>

            {/* Tags */}
            <View style={styles.tagsRow}>
              {sub.tags.map((tag, i) => (
                <View key={i} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>

            {/* Title & Rating */}
            <Text style={styles.subTitle}>{sub.title}</Text>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={13} color={COLORS.primary} />
              <Text style={styles.ratingText}>{sub.rating} Ratings</Text>
            </View>

            <View style={styles.deliveryDivider} />

            {/* Delivery Info */}
            <View style={styles.deliveryRow}>
              <Ionicons name="time-outline" size={15} color={COLORS.textLight} />
              <View style={styles.deliveryTextBlock}>
                <Text style={styles.deliveryLabel}>Next Delivery</Text>
                <Text style={styles.deliveryValue}>{sub.nextDelivery}</Text>
              </View>
            </View>

            <View style={styles.deliveryRow}>
              <Ionicons name="checkmark-circle-outline" size={15} color={COLORS.primary} />
              <View style={styles.deliveryTextBlock}>
                <Text style={styles.deliveryLabel}>Last Delivery</Text>
                <Text style={styles.deliveryValue}>{sub.lastDelivery}</Text>
              </View>
            </View>

            {/* Progress bar */}
            <View style={styles.progressSection}>
              <Text style={styles.startDate}>{sub.startDate}</Text>
              <Text style={styles.daysLeft}>{sub.daysRemaining} Days Remaining</Text>
            </View>
            <View style={styles.progressBg}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${((sub.totalDays - sub.daysRemaining) / sub.totalDays) * 100}%` },
                ]}
              />
            </View>

            {/* Support */}
            <TouchableOpacity style={styles.supportBtn}>
              <Ionicons name="headset-outline" size={14} color={COLORS.textLight} />
              <Text style={styles.supportText}>Call for Support – 1234567789</Text>
            </TouchableOpacity>

            {/* Customize Button */}
            <TouchableOpacity
              style={styles.customizeBtn}
              onPress={() => router.push(`/subscription/customize?id=${sub.id}`)}
            >
              <Text style={styles.customizeBtnText}>CUSTOMIZE DELIVERY</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Recommendations */}
        <Text style={styles.sectionTitle}>Recommendation</Text>
        {RECOMMENDED.map((rec) => (
          <TouchableOpacity
            key={rec.id}
            style={styles.recCard}
            onPress={() => router.push(`/subscription/${rec.id}`)}
          >
            <Image source={{ uri: rec.image }} style={styles.recImage} />
            <View style={styles.recInfo}>
              <View style={styles.tagsRow}>
                {rec.tags.map((tag, i) => (
                  <View key={i} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
              <Text style={styles.recTitle}>{rec.title}</Text>
              <View style={styles.ratingRow}>
                <Ionicons name="star" size={13} color={COLORS.primary} />
                <Text style={styles.ratingText}>{rec.rating} Ratings</Text>
              </View>
              <View style={styles.priceRow}>
                <Text style={styles.recOriginalPrice}>{rec.originalPrice}</Text>
                <Text style={styles.recPrice}>{rec.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
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
  backButton: { padding: 4 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.textDark },
  content: { flex: 1 },
  subCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 16,
    marginBottom: 24,
    overflow: 'hidden',
  },
  activeBadge: {
    position: 'absolute',
    top: 12,
    right: 0,
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    zIndex: 2,
  },
  activeBadgeText: { color: COLORS.white, fontSize: 11, fontWeight: 'bold' },
  subHero: {
    height: 160,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
    backgroundColor: '#F3A638',
  },
  subImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  tagsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginBottom: 8 },
  tag: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  tagText: { fontSize: 11, color: '#555', fontWeight: '600' },
  subTitle: { fontSize: 16, fontWeight: 'bold', color: COLORS.textDark, marginBottom: 4 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 12 },
  ratingText: { fontSize: 12, color: COLORS.textLight },
  deliveryDivider: { height: 1, backgroundColor: COLORS.border, marginBottom: 12 },
  deliveryRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 8, marginBottom: 10 },
  deliveryTextBlock: { flex: 1 },
  deliveryLabel: { fontSize: 11, color: COLORS.textLight, fontWeight: '600', marginBottom: 2 },
  deliveryValue: { fontSize: 12, color: COLORS.textDark, lineHeight: 18 },
  progressSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 6,
  },
  startDate: { fontSize: 11, color: COLORS.textLight },
  daysLeft: { fontSize: 11, color: COLORS.textLight },
  progressBg: {
    height: 6,
    backgroundColor: COLORS.border,
    borderRadius: 3,
    marginBottom: 12,
    overflow: 'hidden',
  },
  progressFill: { height: '100%', backgroundColor: COLORS.primary, borderRadius: 3 },
  supportBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 14,
  },
  supportText: { fontSize: 12, color: COLORS.textLight },
  customizeBtn: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  customizeBtnText: { color: COLORS.white, fontWeight: 'bold', fontSize: 14, letterSpacing: 0.5 },
  sectionTitle: { fontSize: 17, fontWeight: 'bold', color: COLORS.textDark, marginBottom: 12 },
  recCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    flexDirection: 'row',
    overflow: 'hidden',
    marginBottom: 12,
  },
  recImage: { width: 100, height: 110, resizeMode: 'cover' },
  recInfo: { flex: 1, padding: 12 },
  recTitle: { fontSize: 14, fontWeight: 'bold', color: COLORS.textDark, marginBottom: 4 },
  priceRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 6 },
  recOriginalPrice: {
    fontSize: 13,
    color: COLORS.textLight,
    textDecorationLine: 'line-through',
  },
  recPrice: { fontSize: 15, fontWeight: 'bold', color: COLORS.secondary },
});
