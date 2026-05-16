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

const STATS = [
  { label: 'Happy Customers', value: '50,000+' },
  { label: 'Menu Items', value: '500+' },
  { label: 'Deliveries', value: '100,000+' },
  { label: 'Average Rating', value: '4.8/5' },
];

const MISSIONS = [
  {
    title: 'Provide Time & Mental Space',
    desc: 'No more stress about cooking, cleaning, groceries. You get fresh home like food straight from our kitchen.',
  },
  {
    title: 'Guilt Free Eating',
    desc: 'Fresh ingredients, Planet-friendly packaging. No compromise on food quality and freshness.',
  },
  {
    title: 'Impact In Society',
    desc: 'We empower local chefs and delivery partners, creating a sustainable ecosystem for everyone.',
  },
];

export default function AboutUsScreen() {
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
        <Text style={styles.pageTitle}>About Us</Text>

        <View style={styles.introCard}>
          <Text style={styles.introHighlight}>
            Not just another food delivery service, we're delivering peace of mind
          </Text>
          <Text style={styles.introText}>
            MealVersity here to give you back your time, your energy, and your joy around food — with meals crafted thoughtfully and delivered respectfully.
          </Text>
          <Text style={styles.introText}>
            We bring you food that's fresh, flavorful, and made with the kind of care you'd only expect at home.
          </Text>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          {STATS.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Our Mission */}
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <View style={styles.missionContainer}>
          {MISSIONS.map((mission, index) => (
            <View key={index} style={styles.missionCard}>
              <View style={styles.missionIndicator} />
              <View style={styles.missionInfo}>
                <Text style={styles.missionTitle}>{mission.title}</Text>
                <Text style={styles.missionDesc}>{mission.desc}</Text>
              </View>
            </View>
          ))}
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
    marginBottom: 20,
  },
  introCard: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 24,
  },
  introHighlight: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 16,
    lineHeight: 24,
  },
  introText: {
    fontSize: 14,
    color: COLORS.textLight,
    lineHeight: 22,
    marginBottom: 12,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
    marginBottom: 32,
  },
  statCard: {
    width: '48%',
    backgroundColor: COLORS.primary,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 16,
  },
  missionContainer: {
    gap: 12,
  },
  missionCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: 'hidden',
  },
  missionIndicator: {
    width: 6,
    backgroundColor: COLORS.primary,
  },
  missionInfo: {
    flex: 1,
    padding: 16,
  },
  missionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 6,
  },
  missionDesc: {
    fontSize: 13,
    color: COLORS.textLight,
    lineHeight: 18,
  },
});
