import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const COLORS = {
  primary: '#2ECC71',
  textDark: '#2C2C2C',
};

interface SectionHeaderProps {
  title: string;
  onViewAll?: () => void;
}

export default function SectionHeader({ title, onViewAll }: SectionHeaderProps) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {onViewAll && (
        <TouchableOpacity onPress={onViewAll}>
          <Text style={styles.viewAllText}>View All &gt;</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  viewAllText: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
  },
});
