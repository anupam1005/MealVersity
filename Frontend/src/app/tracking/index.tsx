import React, { useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Platform, StatusBar } from 'react-native';
import AppMap, { Marker, PROVIDER_DEFAULT } from '../../components/common/AppMap';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BillDetails from '../../components/cart/BillDetails';

import TrackingProgressCard from '../../components/tracking/TrackingProgressCard';
import RiderInfoFooter from '../../components/tracking/RiderInfoFooter';

const COLORS = {
  primary: '#2ECC71',
  white: '#FFFFFF',
  textDark: '#2C2C2C',
  textLight: '#8E8E8E',
  background: '#F9FAF7',
  border: '#E5E7EB',
};

export default function LiveTrackingScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const sheetRef = useRef<BottomSheet>(null);
  
  const snapPoints = useMemo(() => ['45%', '85%'], []);
  const [deliveredModalVisible, setDeliveredModalVisible] = useState(false);

  const handleSimulateDelivery = () => {
    setDeliveredModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Map View */}
      <AppMap
        provider={PROVIDER_DEFAULT}
        style={styles.map}
        initialRegion={{
          latitude: 28.6139,
          longitude: 77.2090,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker coordinate={{ latitude: 28.6139, longitude: 77.2090 }} />
      </AppMap>

      {/* Floating Back Button */}
      <View style={[styles.headerSafeArea, { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : insets.top }]}>
         <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
           <Ionicons name="chevron-back" size={24} color={COLORS.textDark} />
         </TouchableOpacity>
      </View>

      {/* Tracking Bottom Sheet */}
      <BottomSheet
        ref={sheetRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
      >
        <BottomSheetScrollView style={styles.sheetContent} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
          {/* Progress Bar Block */}
          <TrackingProgressCard 
            status="ORDER PREPARING"
            time="Arriving in 25 mins"
            progress={40}
            description="Your food is being prepared at Maya Restaurant."
          />

          {/* Need Help Button */}
          <TouchableOpacity style={styles.helpButton}>
            <Ionicons name="help-circle-outline" size={20} color={COLORS.textDark} />
            <Text style={styles.helpButtonText}>Need Help with your order?</Text>
            <Ionicons name="chevron-forward" size={20} color={COLORS.textLight} />
          </TouchableOpacity>

          {/* Items Summary */}
          <View style={styles.itemsSummary}>
            <Text style={styles.sectionTitle}>Items Summary</Text>
            <View style={styles.itemRow}>
              <View style={[styles.vegIcon, { borderColor: '#2ECC71' }]}>
                <View style={[styles.vegInner, { backgroundColor: '#2ECC71' }]} />
              </View>
              <Text style={styles.itemName}>1x Paneer Butter Masala</Text>
            </View>
            <View style={styles.itemRow}>
              <View style={[styles.vegIcon, { borderColor: '#2ECC71' }]}>
                <View style={[styles.vegInner, { backgroundColor: '#2ECC71' }]} />
              </View>
              <Text style={styles.itemName}>2x Garlic Naan</Text>
            </View>
          </View>

          {/* Bill Details */}
          <BillDetails />
          
          <TouchableOpacity style={styles.simulateBtn} onPress={handleSimulateDelivery}>
             <Text style={styles.simulateBtnText}>Simulate Delivery</Text>
          </TouchableOpacity>
        </BottomSheetScrollView>
      </BottomSheet>

      {/* Sticky Rider Info Footer */}
      <RiderInfoFooter 
        name="Rahul Kumar"
        languages="Speaks Hindi, English"
        paddingBottom={insets.bottom}
      />

      {/* Delivered Modal */}
      <Modal visible={deliveredModalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Ionicons name="checkmark-circle" size={80} color={COLORS.primary} />
            <Text style={styles.modalTitle}>YOUR ORDER HAS BEEN DELIVERED!</Text>
            <Text style={styles.modalDesc}>Enjoy your meal from MealVersity.</Text>
            <TouchableOpacity 
              style={styles.modalBtn} 
              onPress={() => {
                setDeliveredModalVisible(false);
                router.dismissAll();
                router.replace('/(tabs)');
              }}
            >
              <Text style={styles.modalBtnText}>GO BACK TO MENU</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: '50%',
  },
  headerSafeArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    backgroundColor: COLORS.white,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  sheetContent: {
    flex: 1,
    paddingHorizontal: 16,
  },
  helpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 20,
  },
  helpButtonText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: COLORS.textDark,
    fontWeight: '500',
  },
  itemsSummary: {
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 12,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  vegIcon: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  vegInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  itemName: {
    fontSize: 14,
    color: COLORS.textDark,
  },
  simulateBtn: {
    marginTop: 20,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  simulateBtnText: {
    color: COLORS.textDark,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    width: '100%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginTop: 16,
    textAlign: 'center',
  },
  modalDesc: {
    fontSize: 14,
    color: COLORS.textLight,
    marginTop: 8,
    marginBottom: 24,
    textAlign: 'center',
  },
  modalBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  modalBtnText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
