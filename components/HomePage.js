import React, { useState, useEffect } from "react";
import { Text, View, FlatList, TouchableOpacity, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

function HomePage(props) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-19&sortBy=publishedAt&apiKey=6c0296d4bd794341aa13ec8f0fcbaa23"
    )
      .then(response => response.json())
      .then(data => setNews(data.articles));
  }, []);

  return (
    <View>
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

function AboutPage() {
  return (
    <View>
      <Text>About Page</Text>
    </View>
  );
}

const DrawerNavigator = createDrawerNavigator({
  Home: { screen: HomePage },
  About: { screen: AboutPage }
});
export default createAppContainer(DrawerNavigator);
