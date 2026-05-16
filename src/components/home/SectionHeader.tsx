import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const COLORS = {
  primary: '#2ECC71',
  textDark: '#2C2C2C',
};

interface SectionHeaderProps {
  title: string;
  onViewAll?: () => void;
  showViewAll?: boolean;
}

export default function SectionHeader({ title, onViewAll, showViewAll = true }: SectionHeaderProps) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {showViewAll && (
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
