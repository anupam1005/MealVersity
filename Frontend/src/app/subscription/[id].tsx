import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const COLORS = {
  primary: '#2ECC71',
  secondary: '#E89001',
  background: '#F9FAF7',
  white: '#FFFFFF',
  textDark: '#2C2C2C',
  textLight: '#8E8E8E',
  skeleton: '#E0E0E0',
};

const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function SubscriptionDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const details = {
    kitchenName: 'Sweet Express',
    title: 'Weekly Veg Lunch & Dinner Combo',
    rating: '4.7 (2.3k+) Ratings',
    price: '₹749',
    originalPrice: '₹949',
    tags: ['Pure Veg', 'Weekly', 'Lunch-Dinner'],
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop',
  };

  const [expandedSection, setExpandedSection] = useState<'lunch' | 'dinner' | null>('dinner');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={COLORS.textDark} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerKitchenName}>{details.kitchenName}</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.pageTitle}>Subscription Details</Text>

        {/* Hero Image Section */}
        <View style={styles.heroContainer}>
          <View style={styles.heroBackground}>
            <Image source={{ uri: details.image }} style={styles.heroImage} />
            <View style={styles.vegIcon}>
              <View style={styles.vegDot} />
            </View>
          </View>
        </View>

        {/* Details Section */}
        <View style={styles.contentContainer}>
          {/* Tags */}
          <View style={styles.tagsContainer}>
            {details.tags.map((tag, index) => (
              <View
                key={index}
                style={[styles.tagBadge, tag === 'Pure Veg' ? styles.vegBadge : {}]}
              >
                <Text style={[styles.tagText, tag === 'Pure Veg' ? styles.vegTagText : {}]}>
                  {tag}
                </Text>
              </View>
            ))}
          </View>

          {/* Title & Rating */}
          <Text style={styles.title}>{details.title}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={14} color={COLORS.primary} />
            <Text style={styles.ratingText}>{details.rating}</Text>
          </View>

          {/* Key Details */}
          <View style={styles.keyDetailsSection}>
            <View style={styles.keyDetailsLeft}>
              <Text style={styles.sectionHeading}>Key Details</Text>
              <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>• ₹99/Day</Text>
                <Text style={styles.bulletItem}>• Type B</Text>
                <Text style={styles.bulletItem}>• 7 Days</Text>
                <Text style={styles.bulletItem}>• Category</Text>
              </View>
            </View>
            <View style={styles.keyDetailsRight}>
              <Text style={styles.originalPrice}>{details.originalPrice}</Text>
              <Text style={styles.discountedPrice}>{details.price}</Text>
            </View>
          </View>

          {/* Meals Accordion */}
          <View style={styles.mealsSection}>
            <Text style={styles.sectionHeading}>Meals</Text>

            {/* Lunch Meals Toggle */}
            <TouchableOpacity
              style={styles.accordionHeader}
              onPress={() => setExpandedSection(expandedSection === 'lunch' ? null : 'lunch')}
            >
              <Text style={styles.accordionTitle}>Lunch Meals</Text>
              <Ionicons
                name={expandedSection === 'lunch' ? 'chevron-up' : 'chevron-down'}
                size={20}
                color={COLORS.textDark}
              />
            </TouchableOpacity>

            {expandedSection === 'lunch' && (
              <View style={styles.accordionContent}>
                {DAYS_OF_WEEK.map((day) => (
                  <View key={`lunch-${day}`} style={styles.dayRow}>
                    <Text style={styles.dayText}>{day}</Text>
                    <View style={styles.skeletonBox} />
                  </View>
                ))}
              </View>
            )}

            {/* Dinner Meals Toggle */}
            <TouchableOpacity
              style={styles.accordionHeader}
              onPress={() => setExpandedSection(expandedSection === 'dinner' ? null : 'dinner')}
            >
              <Text style={styles.accordionTitle}>Dinner Meals</Text>
              <Ionicons
                name={expandedSection === 'dinner' ? 'chevron-up' : 'chevron-down'}
                size={20}
                color={COLORS.textDark}
              />
            </TouchableOpacity>

            {expandedSection === 'dinner' && (
              <View style={styles.accordionContent}>
                {DAYS_OF_WEEK.map((day) => (
                  <View key={`dinner-${day}`} style={styles.dayRow}>
                    <Text style={styles.dayText}>{day}</Text>
                    <View style={styles.skeletonBox} />
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* Action Buttons Section */}
          <View style={styles.actionSection}>
            <Text style={styles.sectionHeading}>Manage Subscription</Text>

            <TouchableOpacity style={styles.actionRow} onPress={() => router.push('/account/orders')}>
              <View style={styles.actionIconBox}>
                <Ionicons name="receipt-outline" size={20} color={COLORS.primary} />
              </View>
              <Text style={styles.actionText}>My Orders</Text>
              <Ionicons name="chevron-forward" size={18} color={COLORS.textLight} />
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.actionRow}>
              <View style={styles.actionIconBox}>
                <Ionicons name="pause-circle-outline" size={20} color={COLORS.secondary} />
              </View>
              <Text style={styles.actionText}>Pause Subscription</Text>
              <Ionicons name="chevron-forward" size={18} color={COLORS.textLight} />
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.actionRow}>
              <View style={styles.actionIconBox}>
                <Ionicons name="calendar-outline" size={20} color={COLORS.primary} />
              </View>
              <Text style={styles.actionText}>Skip a Day</Text>
              <Ionicons name="chevron-forward" size={18} color={COLORS.textLight} />
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.actionRow}>
              <View style={[styles.actionIconBox, { backgroundColor: '#FFF0F0' }]}>
                <Ionicons name="close-circle-outline" size={20} color="#E63946" />
              </View>
              <Text style={[styles.actionText, { color: '#E63946' }]}>Cancel Subscription</Text>
              <Ionicons name="chevron-forward" size={18} color={COLORS.textLight} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Sticky Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.subscribeButton} activeOpacity={0.9}>
          <Text style={styles.subscribeButtonText}>SUBSCRIBE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: COLORS.background,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 60,
  },
  backText: {
    fontSize: 16,
    color: COLORS.textDark,
    marginLeft: 4,
  },
  headerKitchenName: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textLight,
  },
  headerSpacer: {
    width: 60,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginHorizontal: 20,
    marginBottom: 15,
  },
  heroContainer: {
    marginHorizontal: 20,
    marginBottom: 15,
  },
  heroBackground: {
    backgroundColor: '#F3A638',
    height: 160,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroImage: {
    width: 220,
    height: 220,
    borderRadius: 110,
    position: 'absolute',
    right: -20,
    bottom: -40,
    resizeMode: 'cover',
  },
  vegIcon: {
    position: 'absolute',
    top: 15,
    left: 15,
    width: 20,
    height: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#2ECC71',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vegDot: {
    width: 10,
    height: 10,
    backgroundColor: '#2ECC71',
    borderRadius: 5,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  tagBadge: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  vegBadge: {
    backgroundColor: '#E8F5E9',
    borderColor: '#2ECC71',
  },
  tagText: {
    fontSize: 10,
    color: '#555',
    fontWeight: 'bold',
  },
  vegTagText: {
    color: '#2ECC71',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 6,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingText: {
    fontSize: 12,
    color: COLORS.textLight,
    marginLeft: 4,
  },
  keyDetailsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    paddingBottom: 20,
  },
  keyDetailsLeft: {
    flex: 1,
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 10,
  },
  bulletList: {
    paddingLeft: 4,
  },
  bulletItem: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
  keyDetailsRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  originalPrice: {
    fontSize: 14,
    color: COLORS.textLight,
    textDecorationLine: 'line-through',
    marginBottom: 4,
  },
  discountedPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  mealsSection: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    paddingBottom: 20,
  },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 24,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  accordionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  accordionContent: {
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  dayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  dayText: {
    fontSize: 14,
    color: '#555',
    width: 100,
  },
  skeletonBox: {
    flex: 1,
    height: 36,
    backgroundColor: COLORS.skeleton,
    borderRadius: 8,
    marginLeft: 15,
  },
  actionSection: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  actionIconBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  actionText: {
    flex: 1,
    fontSize: 15,
    color: COLORS.textDark,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 30,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 10,
  },
  subscribeButton: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  subscribeButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
