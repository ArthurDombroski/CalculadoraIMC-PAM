import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


function classificarIMC(imc) {
  if (imc < 18.5) return "Abaixo do peso";
  else if (imc <= 24.9) return "Peso normal";
  else if (imc <= 29.9) return "Sobrepeso";
  else if (imc <= 34.9) return "Obesidade grau 1";
  else if (imc <= 39.9) return "Obesidade grau 2";
  else return "Obesidade grau 3 (obesidade mórbida)";
}

const Result = ({ imc }) => {
  const valorIMC = parseFloat(imc);
  const classificacao = classificarIMC(valorIMC);

  return (
    <View style={styles.container}>
      <Text style={styles.result}>Seu IMC é: {imc}</Text>
      <Text style={styles.classificacao}>Classificação: {classificacao}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  result: {
    fontSize: 24,
    color: '#333',
  },
  classificacao: {
    fontSize: 18,
    marginTop: 8,
    color: '#666',
  },
});

export default Result;