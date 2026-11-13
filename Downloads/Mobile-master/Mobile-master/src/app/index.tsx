import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { router } from "expo-router";
import { useState } from "react";
import React from "react";

export default function Login() {
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (!name.trim()) {
      alert("Silakan masukkan nama terlebih dahulu!");
      return;
    }
    router.replace({
      pathname: "/dashboard",
      params: { name: name.trim() },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>MyDeadline</Text>
        <Text style={styles.subtitle}>Kelola tugas dan deadline bersama</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Selamat Datang 👋</Text>
        <Text style={styles.description}>Masukkan nama kamu untuk melanjutkan</Text>

        <Text style={styles.label}>Nama</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan nama"
          placeholderTextColor="#94A3B8"
          value={name}
          onChangeText={setName}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    padding: 24,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },

  logo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2563EB",
  },

  subtitle: {
    fontSize: 15,
    color: "#64748B",
    marginTop: 8,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 24,
    borderRadius: 24,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E293B",
  },

  description: {
    color: "#64748B",
    marginTop: 8,
    marginBottom: 24,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 8,
  },

  input: {
    backgroundColor: "#F1F5F9",
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#3B82F6",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});