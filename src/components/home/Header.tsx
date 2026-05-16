import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const COLORS = {
  primary: '#2ECC71',
  secondary: '#E89001',
  white: '#FFFFFF',
  textDark: '#2C2C2C',
};

export default function Header() {
  return (
    <View style={styles.headerRow}>
      <View style={styles.locationContainer}>
        <Ionicons name="navigate-sharp" size={20} color={COLORS.white} />
        <View style={styles.locationTextContainer}>
          <View style={styles.locationTitleRow}>
            <Text style={styles.locationTitle}>Home</Text>
          </View>
          <View style={styles.locationDescRow}>
            <Text style={styles.locationDesc} numberOfLines={1}>Address Line, ABC Street, Barasat...</Text>
            <MaterialIcons name="keyboard-arrow-down" size={16} color={COLORS.white} style={{ marginLeft: 2 }} />
          </View>
        </View>
      </View>
      
      <View style={styles.headerRight}>
        <TouchableOpacity style={styles.iconCircle}>
          <Ionicons name="notifications-outline" size={18} color={COLORS.textDark} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.avatarCircle}>
          <Ionicons name="person" size={18} color={COLORS.textDark} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  locationTextContainer: {
    marginLeft: 8,
    flex: 1,
  },
  locationTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationDescRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  locationDesc: {
    color: COLORS.white,
    fontSize: 12,
    opacity: 0.9,
    maxWidth: '85%',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 32,
    height: 32,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarCircle: {
    width: 36,
    height: 36,
    backgroundColor: COLORS.white,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
