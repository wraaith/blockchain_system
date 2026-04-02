import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function FarmerHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Farmer Home</Text>

      <TouchableOpacity
        style={styles.tile}
        onPress={() => router.push('/(farmer)/register-harvest')}
      >
        <Text style={styles.tileText}>Register Harvest</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tile}
        onPress={() => router.push('/(farmer)/my-batches')}
      >
        <Text style={styles.tileText}>My Batches</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tile}
        onPress={() => router.push('/(farmer)/payment-status')}
      >
        <Text style={styles.tileText}>Payment Status</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tile}
        onPress={() => router.push('/(farmer)/profile')}
      >
        <Text style={styles.tileText}>Profile</Text>
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
  tileText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E1E1E',
  },
});
