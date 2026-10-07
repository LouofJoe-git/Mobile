import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { router } from "expo-router";

export default function AddTask() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Tambah Tugas
      </Text>

      <Text style={styles.label}>
        Mata Kuliah
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Contoh: Pemrograman Mobile"
      />

      <Text style={styles.label}>
        Nama Tugas
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Contoh: Membuat UI"
      />

      <Text style={styles.label}>
        Deadline
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Contoh: 20 Oktober 2026"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>
          Simpan Tugas
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => router.back()}
      >
        <Text style={styles.cancelText}>
          Batal
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#EFF6FF",
    padding: 24,
    paddingTop: 70,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 30,
  },

  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#334155",
    marginBottom: 8,
    marginTop: 12,
  },

  input: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    fontSize: 15,
  },

  button: {
    backgroundColor: "#3B82F6",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 30,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  cancelButton: {
    padding: 16,
    alignItems: "center",
    marginTop: 10,
  },

  cancelText: {
    color: "#64748B",
    fontWeight: "600",
  },

});