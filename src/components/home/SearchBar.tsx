import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const COLORS = {
  white: '#FFFFFF',
  textLight: '#8E8E8E',
  textDark: '#2C2C2C',
  border: '#E5E7EB',
};

export default function SearchBar() {
  return (
    <View style={styles.searchContainer}>
      <Feather name="search" size={20} color={COLORS.textLight} />
      <TextInput 
        placeholder="Search For 'Pizza'" 
        placeholderTextColor={COLORS.textLight}
        style={styles.searchInput}
      />
      <View style={styles.micDivider} />
      <Feather name="mic" size={20} color={COLORS.textLight} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: COLORS.textDark,
  },
  micDivider: {
    width: 1,
    height: 20,
    backgroundColor: COLORS.border,
    marginHorizontal: 10,
  },
});
