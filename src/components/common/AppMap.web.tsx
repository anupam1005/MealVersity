import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Marker = ({ children }: any) => <View>{children}</View>;
export const PROVIDER_DEFAULT = 'default';
export const PROVIDER_GOOGLE = 'google';

const AppMap = ({ style, initialRegion, children }: any) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.placeholder}>
        <Text style={styles.text}>Map View</Text>
        <Text style={styles.subtext}>
          {initialRegion ? `${initialRegion.latitude}, ${initialRegion.longitude}` : 'No coordinates'}
        </Text>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    overflow: 'hidden',
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
  },
  subtext: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 4,
  },
});

export default AppMap;
