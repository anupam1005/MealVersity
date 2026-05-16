import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface AddressItem {
  id: string;
  type: string;
  address: string;
  icon: keyof typeof Ionicons.glyphMap;
}

interface AddressCardProps {
  item: AddressItem;
  onPressOptions?: () => void;
}

const COLORS = {
  white: '#FFFFFF',
  textDark: '#2C2C2C',
  textLight: '#8E8E8E',
  border: '#E5E7EB',
};

export default function AddressCard({ item, onPressOptions }: AddressCardProps) {
  return (
    <View style={styles.addressCard}>
      <View style={styles.iconContainer}>
        <Ionicons name={item.icon} size={24} color={COLORS.textDark} />
      </View>
      <View style={styles.addressInfo}>
        <Text style={styles.addressType}>{item.type}</Text>
        <Text style={styles.addressText}>{item.address}</Text>
      </View>
      <TouchableOpacity style={styles.optionsBtn} onPress={onPressOptions}>
        <Ionicons name="ellipsis-vertical" size={20} color={COLORS.textLight} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addressCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  iconContainer: {
    marginRight: 16,
    marginTop: 2,
  },
  addressInfo: {
    flex: 1,
  },
  addressType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 4,
  },
  addressText: {
    fontSize: 14,
    color: COLORS.textLight,
    lineHeight: 20,
  },
  optionsBtn: {
    padding: 4,
  },
});
