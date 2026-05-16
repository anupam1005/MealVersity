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
  white: '#FFFFFF',
  textDark: '#2C2C2C',
  textLight: '#8E8E8E',
  background: '#F9FAF7',
  border: '#E5E7EB',
};

const TERMS_SECTIONS = [
  {
    title: '1. Introduction',
    content: [
      'Welcome to MealVersity. These Terms and Conditions govern your use of our application and services.',
      'By using our app, you agree to these terms in full. If you disagree, please do not use the application.',
    ],
  },
  {
    title: '2. Subscription Services',
    content: [
      'Subscription plans are billed in advance based on the selected frequency (Weekly/Monthly).',
      'You can pause or skip deliveries through the app settings before the cutoff time (10:00 AM for Lunch, 4:00 PM for Dinner).',
      'Cancellations will be processed at the end of the current billing cycle.',
    ],
  },
  {
    title: '3. Delivery & Quality',
    content: [
      'We aim to deliver within the specified time windows, but delays may occur due to unforeseen circumstances.',
      'Food should be consumed within 2 hours of delivery for maximum freshness and safety.',
      'Any issues with food quality must be reported within 1 hour of delivery with photo evidence.',
    ],
  },
  {
    title: '4. Payments & Refunds',
    content: [
      'Payments are processed securely through our partners.',
      'Refunds for skipped meals or cancelled orders will be credited to your MealVersity wallet or original payment source within 5-7 business days.',
    ],
  },
];

export default function TermsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={[styles.container, { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={COLORS.textDark} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        <Text style={styles.pageTitle}>Terms & Conditions</Text>
        <Text style={styles.lastUpdated}>Last Updated: November 19, 2025</Text>

        <View style={styles.sectionsContainer}>
          {TERMS_SECTIONS.map((section, index) => (
            <View key={index} style={styles.termSection}>
              <View style={styles.indicatorRow}>
                <View style={styles.indicator} />
                <Text style={styles.sectionTitle}>{section.title}</Text>
              </View>
              <View style={styles.sectionContent}>
                {section.content.map((text, i) => (
                  <View key={i} style={styles.paragraphContainer}>
                    <View style={styles.bullet} />
                    <Text style={styles.paragraphText}>{text}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.footerInfo}>
          <Text style={styles.footerText}>
            For any questions regarding these terms, please contact us at legal@mealversity.com
          </Text>
        </View>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    color: COLORS.textDark,
    marginLeft: 4,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 4,
  },
  lastUpdated: {
    fontSize: 12,
    color: COLORS.textLight,
    marginBottom: 24,
  },
  sectionsContainer: {
    gap: 20,
  },
  termSection: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: 'hidden',
    padding: 16,
  },
  indicatorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  indicator: {
    width: 4,
    height: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 2,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  sectionContent: {
    gap: 12,
  },
  paragraphContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.primary,
    marginTop: 6,
  },
  paragraphText: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textLight,
    lineHeight: 20,
  },
  footerInfo: {
    marginTop: 32,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 12,
    color: COLORS.textLight,
    textAlign: 'center',
    lineHeight: 18,
  },
});
