import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

interface RiderInfoFooterProps {
  name: string;
  languages: string;
  onCallPress?: () => void;
  paddingBottom?: number;
}

const COLORS = {
  primary: '#2ECC71',
  white: '#FFFFFF',
  textDark: '#2C2C2C',
  textLight: '#8E8E8E',
  border: '#E5E7EB',
};

export default function RiderInfoFooter({ name, languages, onCallPress, paddingBottom = 16 }: RiderInfoFooterProps) {
  return (
    <View style={[styles.riderFooter, { paddingBottom: Math.max(paddingBottom, 16) }]}>
      <View style={styles.riderAvatarContainer}>
        <View style={styles.avatarPlaceholder}>
          <MaterialCommunityIcons name="bike" size={24} color={COLORS.white} />
        </View>
      </View>
      <View style={styles.riderInfo}>
        <Text style={styles.riderName}>{name}</Text>
        <Text style={styles.riderLang}>{languages}</Text>
      </View>
      <TouchableOpacity style={styles.callButton} onPress={onCallPress}>
        <Ionicons name="call" size={20} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  riderFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  riderAvatarContainer: {
    marginRight: 12,
  },
  avatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.textLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  riderInfo: {
    flex: 1,
  },
  riderName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  riderLang: {
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 2,
  },
  callButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
