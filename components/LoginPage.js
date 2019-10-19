import React, { useState } from "react";
import { View, TextInput, Button, Alert, AsyncStorage } from "react-native";

export default function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        style={{
          padding: 15,
          backgroundColor: "#eeeeee",
          marginBottom: 15,
          width: "100%"
        }}
        placeholder="Email"
      />
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        style={{
          padding: 15,
          backgroundColor: "#eeeeee",
          marginBottom: 15,
          width: "100%"
        }}
        placeholder="Password"
      />
      <Button
        title="Log In"
        onPress={async () => {
          if (email === "rhmnfadhil@gmail.com" && password === "12345") {
            await AsyncStorage.setItem("isLoggedIn", "true");
            props.navigation.navigate("Home");
          } else {
            Alert.alert("Login Gagal", "Email atau password anda salah!");
          }
        }}
      />
    </View>
  );
}
