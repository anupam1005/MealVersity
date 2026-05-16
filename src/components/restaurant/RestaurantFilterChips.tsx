import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const COLORS = {
  primary: '#2ECC71',
  white: '#FFFFFF',
  textDark: '#2C2C2C',
  border: '#E5E7EB',
};

export default function RestaurantFilterChips() {
  const [activeFilters, setActiveFilters] = useState<string[]>(['Veg Only']);
  
  const filters = ['Veg Only', 'Chicken Only', 'Bestsellers', 'Spicy'];

  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersContainer}>
      {filters.map((filter, index) => {
        const isActive = activeFilters.includes(filter);
        return (
          <TouchableOpacity 
            key={index} 
            style={[styles.filterChip, isActive && styles.filterChipActive]}
            onPress={() => toggleFilter(filter)}
          >
            <Text style={[styles.filterText, isActive && styles.filterTextActive]}>{filter}</Text>
            {isActive && (
              <Ionicons name="close" size={14} color={COLORS.white} style={styles.closeIcon} />
            )}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  filtersContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginRight: 8,
  },
  filterChipActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  filterText: {
    fontSize: 13,
    color: COLORS.textDark,
    fontWeight: '600',
  },
  filterTextActive: {
    color: COLORS.white,
  },
  closeIcon: {
    marginLeft: 6,
  },
});
