import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const COLORS = {
  primary: '#2ECC71',
  white: '#FFFFFF',
  textDark: '#2C2C2C',
  border: '#E5E7EB',
};

type MenuItem = {
  title: string;
  route?: string;
  onPress?: () => void;
};

interface ProfileMenuSectionProps {
  title: string;
  items: MenuItem[];
}

export default function ProfileMenuSection({ title, items }: ProfileMenuSectionProps) {
  const router = useRouter();

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.titleContainer}>
        <View style={styles.titleLine} />
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      <View style={styles.card}>
        {items.map((item, index) => (
          <View key={index}>
            <TouchableOpacity 
              style={styles.menuItem} 
              onPress={() => {
                if (item.onPress) item.onPress();
                else if (item.route) router.push(item.route as any);
              }}
            >
              <Text style={styles.menuItemText}>{item.title}</Text>
            </TouchableOpacity>
            {index < items.length - 1 && <View style={styles.divider} />}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  titleLine: {
    width: 4,
    height: 16,
    backgroundColor: COLORS.primary,
    borderRadius: 2,
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 16,
  },
  menuItem: {
    paddingVertical: 16,
  },
  menuItemText: {
    fontSize: 14,
    color: COLORS.textDark,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
  },
});
