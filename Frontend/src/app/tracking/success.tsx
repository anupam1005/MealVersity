import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SuccessScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/tracking');
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <SafeAreaView style={[styles.container, { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}>
      <View style={styles.content}>
        <Ionicons name="rocket" size={120} color="#FFFFFF" />
        <Text style={styles.title}>Order Placed!</Text>
        <Text style={styles.address}>Delivering to: Home - 123 Main Street, Downtown</Text>
      </View>
      <TouchableOpacity style={styles.trackButton} onPress={() => router.replace('/tracking')}>
        <Text style={styles.trackButtonText}>Track Order</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ECC71',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 24,
    marginBottom: 12,
  },
  address: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: 24,
  },
  trackButton: {
    backgroundColor: '#FFFFFF',
    margin: 24,
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  trackButtonText: {
    color: '#2ECC71',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
