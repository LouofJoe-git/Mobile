import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { fetchExternalDeadlines } from "./program";
import { TaskItem } from "./task";

export default function Dashboard() {
  const { name } = useLocalSearchParams();
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchExternalDeadlines()
      .then((data: any) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  function finishTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.appName}>MyDeadline</Text>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => router.replace("/")}
          >
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.greeting}>Halo, {name || "User"} 👋</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Tugas dari External API</Text>
        <Text style={styles.description}>
          Mengambil data langsung menggunakan fetch API!
        </Text>

        {loading && (
          <Text style={{ textAlign: "center", color: "#64748B", marginTop: 20 }}>
            Memuat data dari API...
          </Text>
        )}

        {tasks.map((task) => (
          <View key={task.id} style={styles.taskCard}>
            <Text style={styles.subject}>{task.subject}</Text>
            <Text style={styles.taskTitle}>{task.title}</Text>
            <View style={styles.taskBottom}>
              <Text style={styles.deadline}>📅 {task.deadline}</Text>
              <TouchableOpacity
                style={styles.finishButton}
                onPress={() => finishTask(task.id)}
              >
                <Text style={styles.finishText}>Selesai</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {tasks.length === 0 && !loading && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🎉</Text>
            <Text style={styles.emptyTitle}>Semua tugas selesai!</Text>
            <Text style={styles.emptyText}>Tidak ada deadline dari API.</Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push("./add-task")}
        >
          <Text style={styles.addButtonText}>+ Tambah Tugas</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF6FF",
  },
  header: {
    backgroundColor: "#3B82F6",
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 24,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appName: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  logoutText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  greeting: {
    color: "#DBEAFE",
    fontSize: 15,
    marginTop: 6,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1E293B",
  },
  description: {
    color: "#64748B",
    marginTop: 6,
    marginBottom: 20,
  },
  taskCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
  },
  subject: {
    color: "#3B82F6",
    fontSize: 14,
    fontWeight: "bold",
  },
  taskTitle: {
    color: "#1E293B",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 6,
  },
  taskBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 18,
  },
  deadline: {
    color: "#64748B",
    fontSize: 13,
  },
  finishButton: {
    backgroundColor: "#DBEAFE",
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  finishText: {
    color: "#2563EB",
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#3B82F6",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 8,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  emptyContainer: {
    backgroundColor: "#FFFFFF",
    padding: 30,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 15,
  },
  emptyIcon: {
    fontSize: 40,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
    marginTop: 10,
  },
  emptyText: {
    color: "#64748B",
    textAlign: "center",
    marginTop: 6,
  },
});