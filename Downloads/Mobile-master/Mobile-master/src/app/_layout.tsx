import { Stack } from "expo-router";
import React from "react";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index"options={{headerShown: false,}}/>
      <Stack.Screen name="dashboard"options={{headerShown: false,}}/>
      <Stack.Screen name="add-task"options={{headerShown: false,}}/>
    </Stack>
  );
}