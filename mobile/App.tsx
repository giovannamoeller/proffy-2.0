import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppStack from './src/routes/AppStack';
import { AppLoading } from 'expo';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold, Archivo_700Bold } from '@expo-google-fonts/archivo';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Archivo_400Regular, 
    Archivo_500Medium, 
    Archivo_600SemiBold, 
    Archivo_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack/>
        <StatusBar style="light" />
      </>
    );
  }
}
