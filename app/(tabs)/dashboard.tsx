import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Dashboard = () => {
   const router = useRouter();

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Tela Dashboard</Text>

         <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/home")}
         >
            <Text style={styles.buttonText}>Ir para Home</Text>
         </TouchableOpacity>

         <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/settings")}
         >
            <Text style={styles.buttonText}>Ir para Settings</Text>
         </TouchableOpacity>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
   },
   button: {
      backgroundColor: "#d3d3d3",
      padding: 10,
      borderRadius: 30,
      width: 200,
      alignItems: "center",
      marginVertical: 10,
   },
   buttonText: {
      color: "#696969",
      fontSize: 16,
      fontWeight: "bold",
   },
});

export default Dashboard;