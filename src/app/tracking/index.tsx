import React, { useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Platform, StatusBar } from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BillDetails from '../../components/cart/BillDetails';

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
      <MapView
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
      </MapView>

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
          <View style={styles.progressBlock}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressStatus}>ORDER PREPARING</Text>
              <Text style={styles.progressTime}>Arriving in 25 mins</Text>
            </View>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '40%' }]} />
            </View>
            <Text style={styles.progressDesc}>Your food is being prepared at Maya Restaurant.</Text>
          </View>

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
      <View style={[styles.riderFooter, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        <View style={styles.riderAvatarContainer}>
          <View style={styles.avatarPlaceholder}>
             <MaterialCommunityIcons name="bike" size={24} color={COLORS.white} />
          </View>
        </View>
        <View style={styles.riderInfo}>
          <Text style={styles.riderName}>Rahul Kumar</Text>
          <Text style={styles.riderLang}>Speaks Hindi, English</Text>
        </View>
        <TouchableOpacity style={styles.callButton}>
          <Ionicons name="call" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>

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
  progressBlock: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  progressTime: {
    fontSize: 14,
    color: COLORS.textDark,
    fontWeight: '600',
  },
  progressBarBg: {
    height: 8,
    backgroundColor: COLORS.border,
    borderRadius: 4,
    marginBottom: 12,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 4,
  },
  progressDesc: {
    fontSize: 13,
    color: COLORS.textLight,
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
  riderFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  riderAvatarContainer: {
    marginRight: 12,
  },
  avatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.textLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  riderInfo: {
    flex: 1,
  },
  riderName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  riderLang: {
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 2,
  },
  callButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
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
