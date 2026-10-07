import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

import { router } from "expo-router";
import { useState } from "react";

type Task = {
  id: number;
  subject: string;
  title: string;
  deadline: string;
};

export default function Dashboard() {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      subject: "Pemrograman Mobile",
      title: "Membuat desain awal aplikasi",
      deadline: "10 Oktober 2026",
    },

    {
      id: 2,
      subject: "Pemrograman Web",
      title: "Menyelesaikan Tailwind CSS",
      deadline: "12 Oktober 2026",
    },

    {
      id: 3,
      subject: "Pemrograman Fungsional",
      title: "Membuat presentasi",
      deadline: "15 Oktober 2026",
    },
  ]);

  function finishTask(id: number) {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  }

  return (
    <View style={styles.container}>

      {/* Header */}

      <View style={styles.header}>

        <Text style={styles.appName}>
          MyDeadline
        </Text>

        <Text style={styles.greeting}>
          Halo, User 👋
        </Text>

      </View>

      <ScrollView
        contentContainerStyle={styles.content}
      >

        <Text style={styles.heading}>
          Tugas Saya
        </Text>

        <Text style={styles.description}>
          Jangan sampai ada deadline yang terlewat!
        </Text>

        {/* Daftar tugas */}

        {tasks.map((task) => (

          <View
            key={task.id}
            style={styles.taskCard}
          >

            <Text style={styles.subject}>
              {task.subject}
            </Text>

            <Text style={styles.taskTitle}>
              {task.title}
            </Text>

            <View style={styles.taskBottom}>

              <Text style={styles.deadline}>
                📅 {task.deadline}
              </Text>

              <TouchableOpacity
                style={styles.finishButton}
                onPress={() => finishTask(task.id)}
              >
                <Text style={styles.finishText}>
                  Selesai
                </Text>
              </TouchableOpacity>

            </View>

          </View>

        ))}

        {/* Kalau tugas habis */}

        {tasks.length === 0 && (

          <View style={styles.emptyContainer}>

            <Text style={styles.emptyIcon}>
              🎉
            </Text>

            <Text style={styles.emptyTitle}>
              Semua tugas selesai!
            </Text>

            <Text style={styles.emptyText}>
              Tidak ada deadline yang perlu dikerjakan.
            </Text>

          </View>

        )}

        {/* Tambah tugas */}

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push("./add-task")}
        >
          <Text style={styles.addButtonText}>
            + Tambah Tugas
          </Text>
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

  appName: {
    color: "#FFFFFF",
    fontSize: 30,
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