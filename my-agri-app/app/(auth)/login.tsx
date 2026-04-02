import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');

  const handleFarmerLogin = () => {
    if (phone.trim().length < 10) {
      Alert.alert('Invalid number', 'Enter a valid mobile number');
      return;
    }
    router.replace('/(farmer)/farmer-home');
  };

  const handleConsumerLogin = () => {
    if (phone.trim().length < 10) {
      Alert.alert('Invalid number', 'Enter a valid mobile number');
      return;
    }
    router.replace('/(consumer)/consumer-home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter mobile number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        maxLength={10}
      />

      <TouchableOpacity style={styles.button} onPress={handleFarmerLogin}>
        <Text style={styles.buttonText}>Continue as Farmer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.consumerButton]}
        onPress={handleConsumerLogin}
      >
        <Text style={styles.buttonText}>Continue as Consumer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 10,
    padding: 14,
    marginBottom: 14,
    backgroundColor: '#FAFAFA',
  },
  button: {
    backgroundColor: '#2E7D32',
    padding: 14,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: 'center',
  },
  consumerButton: {
    backgroundColor: '#1565C0',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
