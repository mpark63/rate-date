import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Button } from "react-native";

const LoginForm = () => {
  function onPressLogin() {
    alert('You tapped the button!')
  }
  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        placeholder="email..."
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        placeholder="password..."
        value={password}
      />
      <Button
        onPress={onPressLogin}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 250,
    margin: 5,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginForm;