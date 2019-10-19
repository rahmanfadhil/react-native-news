import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
  Button
} from "react-native";

export default function HomePage(props) {
  const [news, setNews] = useState([]);

  async function checkUser() {
    const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      props.navigation.navigate("Login");
    }
  }

  useEffect(() => {
    checkUser();

    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-19&sortBy=publishedAt&apiKey=6c0296d4bd794341aa13ec8f0fcbaa23"
    )
      .then(response => response.json())
      .then(data => setNews(data.articles));
  }, []);

  return (
    <View>
      <Button
        title="Log Out"
        onPress={() => {
          AsyncStorage.setItem("isLoggedIn", "false");
          props.navigation.navigate("Login");
        }}
      />
      <FlatList
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Detail", item)}
          >
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 24 }}>{item.title}</Text>
              <Text style={{ marginTop: 15 }}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
        data={news}
      />
    </View>
  );
}
