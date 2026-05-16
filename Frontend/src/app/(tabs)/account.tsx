import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Platform, StatusBar, Alert, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ProfileMenuSection from '../../components/account/ProfileMenuSection';

const COLORS = {
  primary: '#2ECC71',
  white: '#FFFFFF',
  textDark: '#2C2C2C',
  textLight: '#8E8E8E',
  background: '#F9FAF7',
  border: '#E5E7EB',
};

export default function AccountScreen() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color={COLORS.textDark} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Account</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarPlaceholder} />
            <View style={styles.profileInfo}>
              <Text style={styles.userName}>ABC Username</Text>
              <Text style={styles.userEmail}>example@gmail.com</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>EDIT</Text>
          </TouchableOpacity>
        </View>

        {/* Sections */}
        <ProfileMenuSection 
          title="Account"
          items={[
            { title: 'My Orders', route: '/account/orders' },
            { title: 'Subscriptions', route: '/account/subscriptions' },
            { title: 'Addresses', route: '/account/addresses' },
            { title: 'Referral', route: '/account/referrals' },
            { title: 'Refunds', route: '/account/refunds' },
          ]}
        />

        <ProfileMenuSection 
          title="Support"
          items={[
            { title: 'Contact Us', route: '/account/contact' },
            { title: 'About Us', route: '/account/about' },
            { title: 'Rate Us / Share This App', onPress: () => Alert.alert('Rate Us', 'Thank you for using MealVersity! We appreciate your feedback.') },
            { title: 'Terms And Conditions', route: '/account/terms' },
          ]}
        />

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>LOGOUT</Text>
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
    backgroundColor: COLORS.background,
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
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 16,
    marginBottom: 24,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E0E0E0',
  },
  profileInfo: {},
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  userEmail: {
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 2,
  },
  editButton: {
    backgroundColor: COLORS.primary,
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    paddingHorizontal: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  editButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 12,
    transform: [{ rotate: '-90deg' }],
  },
  logoutButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  logoutText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
