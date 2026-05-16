import React, { useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Platform,
  StatusBar,
  Modal,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import BottomSheet, { BottomSheetScrollView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';

const COLORS = {
  primary: '#2ECC71',
  secondary: '#E89001',
  danger: '#E63946',
  white: '#FFFFFF',
  textDark: '#2C2C2C',
  textLight: '#8E8E8E',
  background: '#F9FAF7',
  border: '#E5E7EB',
};

const SCHEDULE = [
  {
    date: 'Today | 20 Jan 2026',
    lunch: { name: 'Comfort Cool Thali', price: '₹ 136 - 1:30' },
    dinner: { name: 'Awesome Some Thali', price: '₹ 106 - 9:30' },
  },
  {
    date: 'Tomorrow | 21 Jan 2026',
    lunch: { name: 'Comfort Cool Thali', price: '₹ 136 - 1:30 - 11:00' },
    dinner: { name: 'Awesome Some Thali', price: '₹ 136 - 2:30' },
  },
  {
    date: '23 Jan 2026',
    lunch: { name: 'Comfort Cool Thali', price: '₹ 136 - 1:30' },
    dinner: { name: 'Awesome Some Thali', price: '₹ 106 - 9:30' },
  },
];

type PopupTab = 'time' | 'address';

export default function CustomizeDeliveryScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const [localScheduleExpanded, setLocalScheduleExpanded] = useState(true);
  const [popupVisible, setPopupVisible] = useState(false);
  const [activePopupTab, setActivePopupTab] = useState<PopupTab>('time');

  // Time picker state
  const [hour, setHour] = useState(5);
  const [minute, setMinute] = useState(30);
  const [period, setPeriod] = useState<'AM' | 'PM'>('AM');
  const [foodType, setFoodType] = useState<'Lunch' | 'Dinner'>('Lunch');

  const openPopup = (tab: PopupTab) => {
    setActivePopupTab(tab);
    setPopupVisible(true);
  };

  return (
    <SafeAreaView
      style={[styles.container, { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={COLORS.textDark} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.pageTitle}>Customize Food Schedule</Text>

        {/* Global Schedule Button */}
        <TouchableOpacity style={styles.globalBtn}>
          <Text style={styles.globalBtnText}>Update Global Schedule</Text>
        </TouchableOpacity>

        {/* Local Schedule Accordion */}
        <TouchableOpacity
          style={styles.accordionHeader}
          onPress={() => setLocalScheduleExpanded(!localScheduleExpanded)}
        >
          <Text style={styles.accordionTitle}>Update Local Schedule</Text>
          <Ionicons
            name={localScheduleExpanded ? 'chevron-up' : 'chevron-down'}
            size={20}
            color={COLORS.textDark}
          />
        </TouchableOpacity>

        {localScheduleExpanded && (
          <View style={styles.scheduleList}>
            {SCHEDULE.map((day, index) => (
              <View key={index} style={styles.dayBlock}>
                <Text style={styles.dayDate}>{day.date}</Text>

                {/* Lunch Row */}
                <View style={styles.mealRow}>
                  <View style={styles.mealInfo}>
                    <Text style={styles.mealLabel}>Lunch</Text>
                    <Text style={styles.mealName}>{day.lunch.name}</Text>
                    <Text style={styles.mealMeta}>{day.lunch.price}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.customizeBtn}
                    onPress={() => openPopup('time')}
                  >
                    <Text style={styles.customizeBtnText}>CUSTOMIZE</Text>
                  </TouchableOpacity>
                </View>

                {/* Dinner Row */}
                <View style={[styles.mealRow, { marginBottom: 0 }]}>
                  <View style={styles.mealInfo}>
                    <Text style={styles.mealLabel}>Dinner</Text>
                    <Text style={styles.mealName}>{day.dinner.name}</Text>
                    <Text style={styles.mealMeta}>{day.dinner.price}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.customizeBtn}
                    onPress={() => openPopup('address')}
                  >
                    <Text style={styles.customizeBtnText}>CUSTOMIZE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Customize Popup Modal */}
      <Modal
        visible={popupVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setPopupVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            {/* Tabs */}
            <View style={styles.modalTabs}>
              <TouchableOpacity
                style={[styles.modalTab, activePopupTab === 'time' && styles.activeModalTab]}
                onPress={() => setActivePopupTab('time')}
              >
                <Text style={[styles.modalTabText, activePopupTab === 'time' && styles.activeTabText]}>
                  Time
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalTab, activePopupTab === 'address' && styles.activeModalTab]}
                onPress={() => setActivePopupTab('address')}
              >
                <Text
                  style={[styles.modalTabText, activePopupTab === 'address' && styles.activeTabText]}
                >
                  Address
                </Text>
              </TouchableOpacity>
            </View>

            {activePopupTab === 'time' ? (
              <View style={styles.timePickerContent}>
                {/* Time Picker */}
                <View style={styles.timePicker}>
                  <View style={styles.timeColumn}>
                    <TouchableOpacity onPress={() => setHour((h) => (h >= 12 ? 1 : h + 1))}>
                      <Ionicons name="chevron-up" size={20} color={COLORS.textLight} />
                    </TouchableOpacity>
                    <Text style={styles.timeValue}>{String(hour).padStart(2, '0')}</Text>
                    <TouchableOpacity onPress={() => setHour((h) => (h <= 1 ? 12 : h - 1))}>
                      <Ionicons name="chevron-down" size={20} color={COLORS.textLight} />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.timeSeparator}>:</Text>
                  <View style={styles.timeColumn}>
                    <TouchableOpacity onPress={() => setMinute((m) => (m >= 59 ? 0 : m + 1))}>
                      <Ionicons name="chevron-up" size={20} color={COLORS.textLight} />
                    </TouchableOpacity>
                    <Text style={styles.timeValue}>{String(minute).padStart(2, '0')}</Text>
                    <TouchableOpacity onPress={() => setMinute((m) => (m <= 0 ? 59 : m - 1))}>
                      <Ionicons name="chevron-down" size={20} color={COLORS.textLight} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.timeColumn}>
                    <TouchableOpacity onPress={() => setPeriod('AM')}>
                      <Text style={[styles.periodText, period === 'AM' && styles.activePeriod]}>AM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setPeriod('PM')}>
                      <Text style={[styles.periodText, period === 'PM' && styles.activePeriod]}>PM</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Food type selector */}
                <Text style={styles.foodTypeLabel}>Select Food Type</Text>
                <View style={styles.foodTypeRow}>
                  {(['Lunch', 'Dinner'] as const).map((type) => (
                    <TouchableOpacity
                      key={type}
                      style={styles.radioRow}
                      onPress={() => setFoodType(type)}
                    >
                      <View style={styles.radioOuter}>
                        {foodType === type && <View style={styles.radioInner} />}
                      </View>
                      <Text style={styles.radioLabel}>{type}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <TouchableOpacity
                  style={styles.updateBtn}
                  onPress={() => setPopupVisible(false)}
                >
                  <Text style={styles.updateBtnText}>UPDATE TIME</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.addressContent}>
                {/* Address list */}
                {[
                  { label: 'Home', address: 'ABC Street, XYZ Place, Somewhere', selected: true },
                  { label: 'Home', address: 'ABC Street, XYZ Place, Somewhere', selected: false },
                ].map((addr, i) => (
                  <TouchableOpacity key={i} style={styles.addressRow}>
                    <View style={[styles.addrRadio, addr.selected && styles.addrRadioSelected]}>
                      {addr.selected && <View style={styles.addrRadioInner} />}
                    </View>
                    <View style={styles.addrTextBlock}>
                      <Text style={styles.addrLabel}>{addr.label}</Text>
                      <Text style={styles.addrText}>{addr.address}</Text>
                    </View>
                  </TouchableOpacity>
                ))}

                {/* Food type selector */}
                <Text style={styles.foodTypeLabel}>Select Food Type</Text>
                <View style={styles.foodTypeRow}>
                  {(['Lunch', 'Dinner'] as const).map((type) => (
                    <TouchableOpacity
                      key={type}
                      style={styles.radioRow}
                      onPress={() => setFoodType(type)}
                    >
                      <View style={styles.radioOuter}>
                        {foodType === type && <View style={styles.radioInner} />}
                      </View>
                      <Text style={styles.radioLabel}>{type}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <TouchableOpacity
                  style={styles.updateBtn}
                  onPress={() => setPopupVisible(false)}
                >
                  <Text style={styles.updateBtnText}>UPDATE ADDRESS</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backButton: { flexDirection: 'row', alignItems: 'center' },
  backText: { fontSize: 16, color: COLORS.textDark, marginLeft: 4 },
  content: { flex: 1, padding: 16 },
  pageTitle: { fontSize: 20, fontWeight: 'bold', color: COLORS.textDark, marginBottom: 16 },
  globalBtn: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  globalBtnText: { color: COLORS.white, fontWeight: 'bold', fontSize: 14, letterSpacing: 0.5 },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 12,
  },
  accordionTitle: { fontSize: 15, fontWeight: '600', color: COLORS.textDark },
  scheduleList: { gap: 12 },
  dayBlock: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 14,
  },
  dayDate: { fontSize: 13, fontWeight: 'bold', color: COLORS.textDark, marginBottom: 12 },
  mealRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  mealInfo: { flex: 1 },
  mealLabel: { fontSize: 11, color: COLORS.textLight, fontWeight: '600', marginBottom: 2 },
  mealName: { fontSize: 14, color: COLORS.textDark, fontWeight: '500', marginBottom: 2 },
  mealMeta: { fontSize: 12, color: COLORS.textLight },
  customizeBtn: {
    backgroundColor: COLORS.danger,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  customizeBtnText: { color: COLORS.white, fontSize: 11, fontWeight: 'bold' },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalCard: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingBottom: 40,
  },
  modalTabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    marginBottom: 20,
  },
  modalTab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeModalTab: { borderBottomColor: COLORS.secondary },
  modalTabText: { fontSize: 15, color: COLORS.textLight, fontWeight: '600' },
  activeTabText: { color: COLORS.secondary },
  timePickerContent: {},
  timePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    gap: 16,
  },
  timeColumn: { alignItems: 'center', gap: 8 },
  timeValue: { fontSize: 36, fontWeight: 'bold', color: COLORS.textDark, minWidth: 50, textAlign: 'center' },
  timeSeparator: { fontSize: 36, fontWeight: 'bold', color: COLORS.textDark },
  periodText: { fontSize: 18, color: COLORS.textLight, fontWeight: '600', paddingVertical: 4 },
  activePeriod: { color: COLORS.textDark },
  foodTypeLabel: { fontSize: 14, fontWeight: '600', color: COLORS.textDark, marginBottom: 12 },
  foodTypeRow: { flexDirection: 'row', gap: 24, marginBottom: 24 },
  radioRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  radioOuter: {
    width: 18, height: 18, borderRadius: 9, borderWidth: 2,
    borderColor: COLORS.secondary, justifyContent: 'center', alignItems: 'center',
  },
  radioInner: { width: 9, height: 9, borderRadius: 5, backgroundColor: COLORS.secondary },
  radioLabel: { fontSize: 14, color: COLORS.textDark },
  updateBtn: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  updateBtnText: { color: COLORS.white, fontWeight: 'bold', fontSize: 14, letterSpacing: 0.5 },
  addressContent: {},
  addressRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 10,
    backgroundColor: COLORS.white,
  },
  addrRadio: {
    width: 18, height: 18, borderRadius: 9, borderWidth: 2,
    borderColor: COLORS.border, justifyContent: 'center', alignItems: 'center', marginTop: 2,
  },
  addrRadioSelected: { borderColor: COLORS.secondary },
  addrRadioInner: { width: 9, height: 9, borderRadius: 5, backgroundColor: COLORS.secondary },
  addrTextBlock: { flex: 1 },
  addrLabel: { fontSize: 13, fontWeight: 'bold', color: COLORS.textDark, marginBottom: 2 },
  addrText: { fontSize: 12, color: COLORS.textLight, lineHeight: 18 },
});
