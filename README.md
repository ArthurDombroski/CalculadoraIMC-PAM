# CalculadoraIMC-PAM

Uma aplicação de calculo de índice de massa corporal. Abaixo, você encontrará uma explicação detalhada sobre o projeto, sua estrutura, funcionalidades e instruções para execução.

---

## Objetivos do Projeto

O projeto tem como objetivo ser uma calculadora de IMC funcional. Esse projeto também conta com uma página de instruções de como se cuidar em cada caso.

## Funcionalidades Principais

- Cálculo do IMC.
- Classificação de em que categoria o usuário está.
- Como se cuidar em cada caso.

---

## Como Clonar o Projeto

git clone https://github.com/ArthurDombroski/CalculadoraIMC-PAM.git

# Acesse a pasta do projeto
CalculadoraIMC

##  Estrutura do Código

O código está organizado em três arquivos principais:

- **[App.js]**: Arquivo raiz que renderiza toda a aplicação.

- **[FormIMC.js]**: Recebe dados do peso e altura do usuário para calcular o IMC e o peso ideal, caso haja algum dado inválido exibe um erro na aplicação.

- **[Result.js]**: Responsável por exibir os resultados calculados.

- **[Cuidados.js]**: Onde está listado como o usuário pode se cuidar em cada caso.

---

## Nota

Durante testes do aplicativo, foi possível se notar que em dispositivos Iphone o teclado cobre o resultado do imc do usuário, por isso o campo de preenchimento foi para cima e não está centralizado na tela.

##  Tecnologias Utilizadas

- **Linguagem de Programação**: JavaScript
- **Bibliotecas/Frameworks**: `React Native`



