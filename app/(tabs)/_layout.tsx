import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

export default function TabLayout() {
   return (
      <Tabs>
         <Tabs.Screen
            name="home"
            options={{
               title: "Home",
               tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="home" color={color} size={size} />
               ),
            }}
         />
         <Tabs.Screen
            name="dashboard"
            options={{
               title: "Dashboard",
               tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="dashboard" color={color} size={size} />
               ),
            }}
         />
         <Tabs.Screen
            name="settings"
            options={{
               title: "Settings",
               tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="settings" color={color} size={size} />
               ),
            }}
         />
      </Tabs>
   );
}
