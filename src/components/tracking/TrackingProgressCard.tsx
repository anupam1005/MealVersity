import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TrackingProgressCardProps {
  status: string;
  time: string;
  progress: number; // 0 to 100
  description: string;
}

const COLORS = {
  primary: '#2ECC71',
  white: '#FFFFFF',
  textDark: '#2C2C2C',
  textLight: '#8E8E8E',
  border: '#E5E7EB',
};

export default function TrackingProgressCard({ status, time, progress, description }: TrackingProgressCardProps) {
  return (
    <View style={styles.progressBlock}>
      <View style={styles.progressHeader}>
        <Text style={styles.progressStatus}>{status}</Text>
        <Text style={styles.progressTime}>{time}</Text>
      </View>
      <View style={styles.progressBarBg}>
        <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
      </View>
      <Text style={styles.progressDesc}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
