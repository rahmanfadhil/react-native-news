import React, { useState, useEffect } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";

export default function HomePage(props) {
  const [sources, setSources] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/sources?apiKey=6c0296d4bd794341aa13ec8f0fcbaa23"
    )
      .then(response => response.json())
      .then(data => setSources(data.sources));
  }, []);

  return (
    <FlatList
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => props.navigation.navigate("News", { newsId: item.id })}
        >
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 24 }}>{item.name}</Text>
            <Text style={{ marginTop: 15 }}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      )}
      data={sources}
    />
  );
}
