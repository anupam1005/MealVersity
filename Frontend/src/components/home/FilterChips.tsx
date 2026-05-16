import React from 'react';
import { Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const COLORS = {
  white: '#FFFFFF',
  textDark: '#2C2C2C',
  border: '#E5E7EB',
};

export default function FilterChips() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersContainer}>
      <TouchableOpacity style={[styles.filterChip, styles.filterChipActive]}>
        <Ionicons name="options-outline" size={16} color={COLORS.textDark} />
        <Text style={styles.filterText}>Filters</Text>
        <MaterialIcons name="keyboard-arrow-down" size={16} color={COLORS.textDark} />
      </TouchableOpacity>
      {['Great Offers', 'Something New', 'Near & Fast'].map((filter, index) => (
        <TouchableOpacity key={index} style={styles.filterChip}>
          <Text style={styles.filterText}>{filter}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  filtersContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 10,
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginRight: 10,
  },
  filterChipActive: {
    gap: 5,
  },
  filterText: {
    fontSize: 13,
    color: COLORS.textDark,
    fontWeight: '500',
  },
});
