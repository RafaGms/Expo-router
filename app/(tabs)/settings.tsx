import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Settings = () => {
   const router = useRouter();

   return (
      <View style={styles.container}>
         <Text style={styles.title}>Tela Settings</Text>

         <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/home")}
         >
            <Text style={styles.buttonText}>Ir para Home</Text>
         </TouchableOpacity>

         <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/dashboard")}
         >
            <Text style={styles.buttonText}>Ir para Dashboard</Text>
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
      backgroundColor: "#d3d3d3", // Fundo cinza claro
      padding: 10,
      borderRadius: 30, // Borda arredondada
      width: 200,
      alignItems: "center",
      marginVertical: 10,
   },
   buttonText: {
      color: "#696969", // Texto em cinza escuro
      fontSize: 16,
      fontWeight: "bold",
   },
});

export default Settings;