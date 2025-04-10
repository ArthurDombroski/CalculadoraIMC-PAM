import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function CuidadosIMC() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>
                O que fazer em cada caso?
            </Text>
            <Text style={styles.sub}>
                O que fazer caso eu esteja abaixo do peso?
            </Text>
            <Text style={styles.texto}>O que fazer caso eu esteja abaixo do peso?
                Se você esta abaixo do peso e deseja engordar de forma saudável você deve, comer mais calorias, preferir alimentos naturais, além também de praticar exercícios físicos.
                Procure também um nutricionista, para que ele possa te auxiliar e acompanhar sua evolução.
            </Text>


            <Text style={styles.sub}>
                O que fazer caso eu esteja no peso ideal?
            </Text>
            <Text style={styles.texto}>
                Se você ja está no peso ideal, o que você deve fazer é manter sua mesma rotina saudável, tomando cuidado com o que come e praticando exercícios físicos.
            </Text>

            <Text style={styles.sub}>
                O que fazer caso eu esteja com sobrepeso?
            </Text>
            <Text style={styles.texto}>
                Se você estiver sobrepeso, você pode adotar hábitos saudáveis de alimentação e atividade física, e procurar acompanhamento médico para que ele possa te auxiliar e montar
                uma rotina de alimentação ideal para seu organismo.
            </Text>

            <Text style={styles.sub}>
                O que fazer caso eu esteja com obesidade grau 1?
            </Text>
            <Text style={styles.texto}>
                Se você está com obesidade grau 1, o primeiro passo é procurar ajuda médica especializada. O tratamento pode incluir: Mudança na alimentação, Prática regular de exercícios
                físicos, Suporte psicológico, Medicamentos prescritos por um profissional.
            </Text>

            <Text style={styles.sub}>
                O que fazer caso eu esteja com obesidade grau 2?
            </Text>
            <Text style={styles.texto}>
                Se você tem obesidade grau 2, deve procurar ajuda profissional, como um médico, nutricionista ou psicólogo. O tratamento envolve mudanças no estilo de vida, como
                alimentação e atividade física, e pode incluir medicamentos ou cirurgia.
            </Text>

            <Text style={styles.sub}>
                O que fazer caso eu esteja com obesidade grau 3?
            </Text>
            <Text style={styles.texto}>
                O tratamento para obesidade grau 3 geralmente envolve uma abordagem multidisciplinar, incluindo mudanças na dieta, aumento da atividade física, terapias comportamentais e,
                em alguns casos, cirurgia bariátrica. Para isso, é fundamental buscar orientação de profissionais de saúde especializados.
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 25,
      backgroundColor: '#fff',
    },
    titulo: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 12,
      color:'#FF0000',
    },
    sub: {
      fontSize: 18,
      fontWeight: '600',
      marginTop: 16,
      marginBottom: 6,
      color:'#A020F0',
      
    },
    texto: {
      fontSize: 16,
      marginBottom: 6,
      color: '#333',
    },
  });

