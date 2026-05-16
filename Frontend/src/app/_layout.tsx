import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CartProvider } from '../context/CartContext';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CartProvider>
        <StatusBar style="dark" />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="restaurant-menu" options={{ presentation: 'modal' }} />
          <Stack.Screen name="cart" options={{ presentation: 'modal' }} />
        </Stack>
      </CartProvider>
    </GestureHandlerRootView>
  );
}
