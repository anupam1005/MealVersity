import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function SubscriptionBanner() {
  const router = useRouter();

  return (
    <TouchableOpacity 
      style={styles.container} 
      activeOpacity={0.9}
      onPress={() => router.push('/(tabs)/subscription')}
    >
      <View style={styles.leftContent}>
        <Text style={styles.title}>SAVE BIG ON</Text>
        <Text style={styles.subtitle}>SUBSCRIPTION</Text>
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.verticalText}>CHECKOUT</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: '#E89001',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    height: 100,
    marginBottom: 25,
    shadowColor: '#E89001',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  leftContent: {
    padding: 20,
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  rightContent: {
    backgroundColor: '#2ECC71',
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticalText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    transform: [{ rotate: '-90deg' }],
    width: 90, // Need width to accommodate rotated text
    textAlign: 'center',
    letterSpacing: 2,
  },
});
