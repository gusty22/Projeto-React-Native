# 📱 Projeto React Native com Expo

Este projeto foi desenvolvido utilizando **React Native com Expo**, permitindo rodar o aplicativo **tanto no navegador (Web)** quanto **no celular usando o aplicativo Expo Go**.

---

# ⚙️ Requisitos

Antes de começar, certifique-se de ter instalado no computador:

* **Node.js** (versão recomendada LTS)
* **npm** (geralmente já vem com o Node.js)
* **Expo Go** no celular (Android ou iOS)

---

# 📦 Instalação das Dependências

## 1. Instalação Base

Instala todas as dependências listadas no `package.json`.

```bash
npm install
```

---

## 2. Dependências de Navegação

Para garantir que o sistema de navegação funcione corretamente:

```bash
  npm install @react-navigation/native @react-navigation/native-stack
```

Instale também as dependências nativas utilizadas pelo Expo:

```bash
  npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler
```
'
```bash
  npx expo install @react-native-async-storage/async-storage
```
---

## 3. Dependências para Web

Como o React Native foi originalmente criado para celular, precisamos instalar adaptadores para que ele funcione no navegador.

```bash
npx expo install react-native-web react-dom @expo/metro-runtime
```

---

# 🚀 Rodando o Projeto

## 📱 Rodar no Celular (Rede da Faculdade)

Redes acadêmicas geralmente bloqueiam portas locais, impedindo que o celular encontre o computador na rede.
Para resolver isso, utilizamos um **túnel seguro pela internet**.

Inicie o projeto com:

```bash
npx expo start --tunnel
```

Se aparecer a mensagem para instalar o pacote:

```
@expo/ngrok
```

Digite:

```
y
```

e pressione **Enter**.

### Passos

1. Aguarde o **QR Code** aparecer no terminal.
2. Abra o aplicativo **Expo Go** no celular.
3. Escaneie o **QR Code**.
4. O aplicativo será aberto automaticamente no celular.

---

## 💻 Rodar no Navegador (Web)

Com o servidor já rodando (`npx expo start` ou `npx expo start --tunnel`):

1. Observe os atalhos disponíveis no terminal.
2. Pressione a tecla:

```
w
```

3. O Expo abrirá automaticamente o aplicativo no navegador padrão.

---

# 🛠 Tecnologias Utilizadas

* React Native
* Expo
* React Navigation
* JavaScript

---

# 📌 Observações

* O projeto foi configurado para funcionar **tanto no celular quanto no navegador**.
* Caso ocorra algum erro de dependência, execute novamente:

```bash
npm install
```

---

