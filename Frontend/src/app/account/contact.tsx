import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
  StatusBar,
  Linking,
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

export default function ContactUsScreen() {
  const router = useRouter();

  const handleCall = () => Linking.openURL('tel:+918900099783');
  const handleWhatsapp = () => Linking.openURL('whatsapp://send?phone=+918900099783');
  const handleEmail = () => Linking.openURL('mailto:support@mealversity.com');

  return (
    <SafeAreaView style={[styles.container, { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={COLORS.textDark} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        <Text style={styles.pageTitle}>Contact Us</Text>

        {/* Contact Options */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionCard} onPress={handleCall}>
            <View style={styles.optionIcon}>
              <Ionicons name="call-outline" size={20} color={COLORS.textDark} />
            </View>
            <View style={styles.optionInfo}>
              <Text style={styles.optionLabel}>Call Us</Text>
              <Text style={styles.optionValue}>+91 89000 99783</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionCard} onPress={handleWhatsapp}>
            <View style={styles.optionIcon}>
              <Ionicons name="logo-whatsapp" size={20} color={COLORS.textDark} />
            </View>
            <View style={styles.optionInfo}>
              <Text style={styles.optionLabel}>Whatsapp</Text>
              <Text style={styles.optionValue}>Instant Replies</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionCard} onPress={handleEmail}>
            <View style={styles.optionIcon}>
              <Ionicons name="mail-outline" size={20} color={COLORS.textDark} />
            </View>
            <View style={styles.optionInfo}>
              <Text style={styles.optionLabel}>Email</Text>
              <Text style={styles.optionValue}>support@mealversity.com</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Message Form */}
        <View style={styles.formCard}>
          <Text style={styles.formTitle}>Send us a message</Text>
          <Text style={styles.formSubtitle}>we'll respond as soon as possible</Text>

          <View style={styles.inputGroup}>
            <TextInput 
              style={styles.input} 
              placeholder="Your name *" 
              placeholderTextColor={COLORS.textLight}
            />
          </View>

          <View style={styles.inputGroup}>
            <TextInput 
              style={styles.input} 
              placeholder="Your email address *" 
              placeholderTextColor={COLORS.textLight}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputGroup}>
            <TextInput 
              style={styles.input} 
              placeholder="What can we help you with? *" 
              placeholderTextColor={COLORS.textLight}
            />
          </View>

          <View style={styles.inputGroup}>
            <TextInput 
              style={[styles.input, styles.textArea]} 
              placeholder="Your message" 
              placeholderTextColor={COLORS.textLight}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitBtnText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>

        {/* Office Info */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Visit Our Office</Text>
          <Text style={styles.infoText}>
            MealVersity HQ, Ground Floor, Building V, Brainware University, Barasat, West Bengal - 700125.
          </Text>
        </View>

        {/* Social Connect */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Connect With Us</Text>
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialIcon}>
              <Ionicons name="logo-facebook" size={24} color={COLORS.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Ionicons name="logo-instagram" size={24} color={COLORS.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Ionicons name="logo-twitter" size={24} color={COLORS.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Ionicons name="logo-linkedin" size={24} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
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
  optionsContainer: {
    gap: 12,
    marginBottom: 24,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  optionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  optionInfo: {
    flex: 1,
  },
  optionLabel: {
    fontSize: 14,
    color: COLORS.textLight,
    marginBottom: 2,
  },
  optionValue: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textDark,
  },
  formCard: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 24,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 4,
  },
  formSubtitle: {
    fontSize: 13,
    color: COLORS.textLight,
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: COLORS.textDark,
  },
  textArea: {
    height: 100,
  },
  submitBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  submitBtnText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  infoCard: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: COLORS.textLight,
    lineHeight: 20,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 8,
  },
  socialIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F0FDF4',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
