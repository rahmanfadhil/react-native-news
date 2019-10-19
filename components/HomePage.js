import React, { useState, useEffect } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";

export default function HomePage(props) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-19&sortBy=publishedAt&apiKey=6c0296d4bd794341aa13ec8f0fcbaa23"
    )
      .then(response => response.json())
      .then(data => setNews(data.articles));
  }, []);

  return (
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
  );
}
