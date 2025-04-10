import React from 'react';
import { Text, StyleSheet } from 'react-native';

function classificarIMC(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    return "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    return "Sobrepeso";
  } else if (imc >= 30 && imc <= 34.9) {
    return "Obesidade grau 1";
  } else if (imc >= 35 && imc <= 39.9) {
    return "Obesidade grau 2";
  } else {
    return "Obesidade grau 3 (obesidade mórbida)";
  }
}

const Result = ({ imc }) => {
  return (
    <Text style={styles.result}>
      Seu IMC é: {imc}
    </Text>
  );
};

const Tabela = ({ imc }) => {
  return (
    <Text style={styles.result}>
      {classificarIMC}
    </Text>
  );
};

const styles = StyleSheet.create({
  result: {
    marginTop: 20,
    fontSize: 24,
    textAlign: 'center',
    color: '#333',
  },
});

export default Result;