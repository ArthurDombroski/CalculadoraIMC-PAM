import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';

const FormIMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);

  const calcularIMC = () => {
    if (peso && altura) {
      const alturaMetros = parseFloat(altura) / 100;
      const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
      setImc(imcCalculado);
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular IMC" onPress={calcularIMC} />
      {imc && <Result imc={imc} />}

      <TouchableOpacity style={styles.cuidados} onPress={() => navigation.navigate('Cuidados')}>
        <Text style={styles.textocuidados}>Saiba como se Cuidar</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  cuidados: {
    marginTop: 30,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#2196F3',
    alignItems: 'center',
  },
  textocuidados: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default FormIMC;