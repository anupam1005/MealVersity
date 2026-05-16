import React, { useRef, useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import CartItemCard from '../components/cart/CartItemCard';
import BillDetails from '../components/cart/BillDetails';
import FoodCard from '../components/home/FoodCard';

const COLORS = {
  primary: '#2ECC71',
  secondary: '#E89001',
  white: '#FFFFFF',
  textDark: '#2C2C2C',
  textLight: '#8E8E8E',
  background: '#F9FAF7',
  border: '#E5E7EB',
  softGreen: '#E8F5E9',
};

export default function CartScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // Bottom Sheet Refs
  const couponSheetRef = useRef<BottomSheet>(null);
  const paymentSheetRef = useRef<BottomSheet>(null);

  // Snap Points
  const snapPoints = useMemo(() => ['50%', '80%'], []);
  const paymentSnapPoints = useMemo(() => ['45%'], []);

  const [paymentMethod, setPaymentMethod] = useState('online');

  const openCouponSheet = () => couponSheetRef.current?.expand();
  const openPaymentSheet = () => paymentSheetRef.current?.expand();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color={COLORS.textDark} />
        </TouchableOpacity>
        <View style={styles.headerAddress}>
          <Text style={styles.deliveringTo}>Delivering to</Text>
          <View style={styles.addressRow}>
            <Text style={styles.addressText} numberOfLines={1}>Home - 123 Main Street, Downtown</Text>
            <Ionicons name="chevron-down" size={16} color={COLORS.textDark} />
          </View>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Cart Items */}
        <View style={styles.section}>
          <CartItemCard title="Paneer Butter Masala" price="240" isVeg={true} initialQuantity={1} />
          <CartItemCard title="Garlic Naan" price="60" isVeg={true} initialQuantity={2} />
        </View>

        {/* Upsell Carousel */}
        <View style={styles.upsellSection}>
          <Text style={styles.sectionTitle}>Also Check Out</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.upsellCarousel}>
            <FoodCard 
              title="Mango Lassi" 
              price="₹90" 
              image="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400" 
              tag="Best Seller" 
            />
            <FoodCard 
              title="Gulab Jamun" 
              price="₹60" 
              image="https://images.unsplash.com/photo-1599544747209-40898555e12f?auto=format&fit=crop&q=80&w=400" 
              tag="Dessert" 
            />
          </ScrollView>
        </View>

        {/* Coupon Button */}
        <TouchableOpacity style={styles.couponButton} onPress={openCouponSheet}>
          <Ionicons name="pricetag" size={20} color={COLORS.primary} />
          <Text style={styles.couponButtonText}>Apply Coupon</Text>
          <Ionicons name="chevron-forward" size={20} color={COLORS.textLight} />
        </TouchableOpacity>

        {/* Bill Details */}
        <BillDetails />
      </ScrollView>

      {/* Sticky Payment Footer */}
      <View style={[styles.paymentFooter, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        <View style={styles.paymentFooterInner}>
          <TouchableOpacity style={styles.payUsingBtn} onPress={openPaymentSheet}>
            <Text style={styles.payUsingLabel}>Pay Using</Text>
            <View style={styles.payUsingValueRow}>
              <Text style={styles.payUsingValue}>Debit Card</Text>
              <Ionicons name="chevron-up" size={16} color={COLORS.textDark} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.payBtn} onPress={() => router.push('/tracking/success')}>
            <Text style={styles.payBtnText}>Pay ₹350</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Coupon Bottom Sheet */}
      <BottomSheet
        ref={couponSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        backdropComponent={(props) => (
          <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
        )}
      >
        <BottomSheetView style={styles.sheetContent}>
          <Text style={styles.sheetTitle}>Apply Coupon</Text>
          <View style={styles.sheetSearchContainer}>
            <TextInput placeholder="Enter coupon code" style={styles.sheetSearchInput} />
            <TouchableOpacity>
              <Text style={styles.applyBtnText}>APPLY</Text>
            </TouchableOpacity>
          </View>

          {/* Coupon Cards */}
          <ScrollView style={styles.couponsList}>
            <View style={styles.couponCard}>
              <View style={styles.couponRibbon}>
                <Text style={styles.couponRibbonText}>LAUNCHFUN3000</Text>
              </View>
              <View style={styles.couponCardBody}>
                <Text style={styles.couponSaveText}>Save ₹120</Text>
                <Text style={styles.couponDescText}>Use code LAUNCHFUN3000 & get 30% off on orders above ₹299.</Text>
                <TouchableOpacity>
                  <Text style={styles.applyCouponLink}>TAP TO APPLY</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.couponCard}>
              <View style={styles.couponRibbon}>
                <Text style={styles.couponRibbonText}>WELCOME50</Text>
              </View>
              <View style={styles.couponCardBody}>
                <Text style={styles.couponSaveText}>Save ₹50</Text>
                <Text style={styles.couponDescText}>Flat ₹50 off on your first order. No minimum value.</Text>
                <TouchableOpacity>
                  <Text style={styles.applyCouponLink}>TAP TO APPLY</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </BottomSheetView>
      </BottomSheet>

      {/* Payment Methods Bottom Sheet */}
      <BottomSheet
        ref={paymentSheetRef}
        index={-1}
        snapPoints={paymentSnapPoints}
        enablePanDownToClose
        backdropComponent={(props) => (
          <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
        )}
      >
        <BottomSheetView style={styles.sheetContent}>
          <View style={styles.paymentSummaryBlock}>
            <Text style={styles.paymentSummaryLabel}>Total Amount To Pay</Text>
            <Text style={styles.paymentSummaryAmount}>₹350</Text>
          </View>

          <View style={styles.paymentMethodsList}>
            <TouchableOpacity 
              style={styles.paymentMethodRow}
              onPress={() => {
                setPaymentMethod('online');
                paymentSheetRef.current?.close();
              }}
            >
              <View style={styles.paymentMethodLeft}>
                <Ionicons name="card-outline" size={24} color={COLORS.textDark} />
                <Text style={styles.paymentMethodText}>Online Mode (UPI/Debit Card)</Text>
              </View>
              <View style={styles.radioOuter}>
                {paymentMethod === 'online' && <View style={styles.radioInner} />}
              </View>
            </TouchableOpacity>

            <View style={styles.paymentMethodDivider} />

            <TouchableOpacity 
              style={styles.paymentMethodRow}
              onPress={() => {
                setPaymentMethod('cod');
                paymentSheetRef.current?.close();
              }}
            >
              <View style={styles.paymentMethodLeft}>
                <Ionicons name="wallet-outline" size={24} color={COLORS.textDark} />
                <Text style={styles.paymentMethodText}>Cash On Delivery</Text>
              </View>
              <View style={styles.radioOuter}>
                {paymentMethod === 'cod' && <View style={styles.radioInner} />}
              </View>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backButton: {
    marginRight: 16,
  },
  headerAddress: {
    flex: 1,
  },
  deliveringTo: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  addressText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  content: {
    flex: 1,
  },
  section: {
    backgroundColor: COLORS.white,
  },
  upsellSection: {
    marginTop: 12,
    backgroundColor: COLORS.white,
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textDark,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  upsellCarousel: {
    paddingHorizontal: 16,
  },
  couponButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  couponButtonText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textDark,
  },
  paymentFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 12,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  },
  paymentFooterInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  payUsingBtn: {
    flex: 1,
  },
  payUsingLabel: {
    fontSize: 12,
    color: COLORS.textLight,
  },
  payUsingValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  payUsingValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  payBtn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 8,
  },
  payBtnText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  // Bottom Sheet Styles
  sheetContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 16,
  },
  sheetSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 12,
    height: 48,
    marginBottom: 20,
  },
  sheetSearchInput: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textDark,
  },
  applyBtnText: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
  couponsList: {
    flex: 1,
  },
  couponCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderStyle: 'dashed',
    marginBottom: 16,
    overflow: 'hidden',
  },
  couponRibbon: {
    backgroundColor: COLORS.primary,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  couponRibbonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 12,
    transform: [{ rotate: '-90deg' }],
    width: 100,
    textAlign: 'center',
  },
  couponCardBody: {
    flex: 1,
    padding: 16,
  },
  couponSaveText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 4,
  },
  couponDescText: {
    fontSize: 13,
    color: COLORS.textLight,
    lineHeight: 18,
    marginBottom: 12,
  },
  applyCouponLink: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 13,
  },
  // Payment Sheet
  paymentSummaryBlock: {
    backgroundColor: COLORS.primary,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  paymentSummaryLabel: {
    color: COLORS.white,
    fontSize: 14,
    opacity: 0.9,
    marginBottom: 4,
  },
  paymentSummaryAmount: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: 'bold',
  },
  paymentMethodsList: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  paymentMethodRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  paymentMethodLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  paymentMethodText: {
    fontSize: 16,
    color: COLORS.textDark,
    fontWeight: '500',
  },
  paymentMethodDivider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginHorizontal: 16,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },
});
