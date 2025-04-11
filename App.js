import { StyleSheet, View,  } from "react-native";
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  NavigationContainer  } from '@react-navigation/native';
import Title from './src/components/Title';
import FormIMC from "./src/components/FormIMC";
import CuidadosIMC from "./src/components/Cuidados";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FormIMC">
          <Stack.Screen name="FormIMC" component={FormIMC} />
          <Stack.Screen name="Cuidados" component={CuidadosIMC} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
});