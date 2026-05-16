import React, { useMemo, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, TextInput, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import BottomSheet, { BottomSheetScrollView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';

const COLORS = {
  primary: '#2ECC71',
  white: '#FFFFFF',
  textDark: '#2C2C2C',
  textLight: '#8E8E8E',
  background: '#F9FAF7',
  border: '#E5E7EB',
  secondary: '#E89001',
};

const SAVED_ADDRESSES = [
  {
    id: '1',
    type: 'Home',
    address: '123 Main Street, Downtown, City Center',
    icon: 'home-outline' as const,
  },
  {
    id: '2',
    type: 'Work',
    address: '456 Business Park, Sector 4',
    icon: 'briefcase-outline' as const,
  },
];

export default function AddressesScreen() {
  const router = useRouter();
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['90%'], []);

  const openAddAddressSheet = () => {
    sheetRef.current?.expand();
  };

  return (
    <SafeAreaView style={[styles.container, { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={COLORS.textDark} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Addresses</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content} contentContainerStyle={{ padding: 16 }}>
        {SAVED_ADDRESSES.map((item) => (
          <View key={item.id} style={styles.addressCard}>
            <View style={styles.iconContainer}>
              <Ionicons name={item.icon} size={24} color={COLORS.textDark} />
            </View>
            <View style={styles.addressInfo}>
              <Text style={styles.addressType}>{item.type}</Text>
              <Text style={styles.addressText}>{item.address}</Text>
            </View>
            <TouchableOpacity style={styles.optionsBtn}>
              <Ionicons name="ellipsis-vertical" size={20} color={COLORS.textLight} />
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity style={styles.addButton} onPress={openAddAddressSheet}>
          <Ionicons name="add" size={24} color={COLORS.primary} />
          <Text style={styles.addButtonText}>Add New Address</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Add Address Bottom Sheet */}
      <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        backdropComponent={(props) => (
          <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
        )}
      >
        <BottomSheetScrollView style={styles.sheetContent}>
          <Text style={styles.sheetTitle}>Add New Address</Text>
          
          <View style={styles.mapContainer}>
             <MapView
               provider={PROVIDER_DEFAULT}
               style={styles.map}
               initialRegion={{
                 latitude: 28.6139,
                 longitude: 77.2090,
                 latitudeDelta: 0.01,
                 longitudeDelta: 0.01,
               }}
             >
               <Marker coordinate={{ latitude: 28.6139, longitude: 77.2090 }} />
             </MapView>
             <View style={styles.mapOverlay}>
                <Text style={styles.mapOverlayText}>Move pin to exact location</Text>
             </View>
          </View>

          <View style={styles.formContainer}>
             <Text style={styles.inputLabel}>Full Address</Text>
             <TextInput 
               style={styles.input} 
               placeholder="House No., Building Name, Street"
               placeholderTextColor={COLORS.textLight}
             />

             <Text style={styles.inputLabel}>Landmark</Text>
             <TextInput 
               style={styles.input} 
               placeholder="e.g. Near Apollo Hospital"
               placeholderTextColor={COLORS.textLight}
             />

             <Text style={styles.inputLabel}>Save As</Text>
             <View style={styles.saveAsRow}>
               <TouchableOpacity style={[styles.saveAsChip, styles.saveAsChipActive]}>
                 <Text style={[styles.saveAsChipText, styles.saveAsChipTextActive]}>Home</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.saveAsChip}>
                 <Text style={styles.saveAsChipText}>Work</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.saveAsChip}>
                 <Text style={styles.saveAsChipText}>Other</Text>
               </TouchableOpacity>
             </View>

             <TouchableOpacity 
               style={styles.saveBtn}
               onPress={() => sheetRef.current?.close()}
             >
               <Text style={styles.saveBtnText}>SAVE ADDRESS</Text>
             </TouchableOpacity>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  content: {
    flex: 1,
  },
  addressCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  iconContainer: {
    marginRight: 16,
    marginTop: 2,
  },
  addressInfo: {
    flex: 1,
  },
  addressType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 4,
  },
  addressText: {
    fontSize: 14,
    color: COLORS.textLight,
    lineHeight: 20,
  },
  optionsBtn: {
    padding: 4,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderStyle: 'dashed',
    marginTop: 8,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginLeft: 8,
  },
  sheetContent: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 16,
    marginTop: 8,
  },
  mapContainer: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  map: {
    flex: 1,
  },
  mapOverlay: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  mapOverlayText: {
    color: COLORS.white,
    fontSize: 12,
  },
  formContainer: {
    marginBottom: 40,
  },
  inputLabel: {
    fontSize: 14,
    color: COLORS.textDark,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 14,
    fontSize: 14,
    color: COLORS.textDark,
    marginBottom: 16,
  },
  saveAsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  saveAsChip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
  },
  saveAsChipActive: {
    borderColor: COLORS.primary,
    backgroundColor: '#E8F5E9',
  },
  saveAsChipText: {
    fontSize: 14,
    color: COLORS.textDark,
    fontWeight: '500',
  },
  saveAsChipTextActive: {
    color: COLORS.primary,
  },
  saveBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveBtnText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
