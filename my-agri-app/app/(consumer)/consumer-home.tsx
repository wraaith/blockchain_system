import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function ConsumerHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consumer Home</Text>

      <TouchableOpacity
        style={styles.tile}
        onPress={() => {
          // QR scan functionality
          alert('QR Scan - Coming Soon');
        }}
      >
        <Text style={styles.tileText}>Scan QR Code</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tile, styles.tile2]}
        onPress={() => {
          // Product journey
          alert('Product Journey - Coming Soon');
        }}
      >
        <Text style={styles.tileText}>Product Journey</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8F3',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
  },
  tile: {
    backgroundColor: '#E8F3E4',
    padding: 20,
    borderRadius: 14,
    marginBottom: 14,
  },
  tile2: {
    backgroundColor: '#E3F2FD',
  },
  tileText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E1E1E',
  },
});
