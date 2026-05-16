import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar } from 'react-native';
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

export default function ReferralsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={[styles.container, { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={COLORS.textDark} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Refer & Earn</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.illustrationPlaceholder}>
          <Ionicons name="gift-outline" size={80} color={COLORS.primary} />
        </View>
        
        <Text style={styles.title}>Invite Friends & Earn</Text>
        <Text style={styles.description}>
          Share your referral code with your friends and both of you will get ₹100 off on your next order!
        </Text>

        <View style={styles.referralCard}>
          <Text style={styles.referralLabel}>Your Referral Code</Text>
          <View style={styles.codeRow}>
            <Text style={styles.codeText}>AXHDLS932HSK</Text>
            <TouchableOpacity style={styles.copyBtn}>
              <Ionicons name="copy-outline" size={24} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.shareBtn}>
          <Text style={styles.shareBtnText}>SHARE CODE</Text>
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
    padding: 24,
    alignItems: 'center',
  },
  illustrationPlaceholder: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: COLORS.textLight,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
    paddingHorizontal: 16,
  },
  referralCard: {
    backgroundColor: COLORS.primary,
    width: '100%',
    padding: 24,
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  referralLabel: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center',
  },
  codeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  codeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
    letterSpacing: 2,
  },
  copyBtn: {
    padding: 8,
  },
  shareBtn: {
    width: '100%',
    backgroundColor: COLORS.white,
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems: 'center',
  },
  shareBtnText: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
