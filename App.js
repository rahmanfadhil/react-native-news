import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import DetailPage from "./components/DetailPage";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: props => {
        return {
          title: "Home",
          headerLeft: (
            <TouchableOpacity
              style={{ marginLeft: 15 }}
              onPress={() => {
                props.navigation.toggleDrawer();
              }}
            >
              <MaterialIcons size={28} name="menu" />
            </TouchableOpacity>
          )
        };
      }
    },
    Login: {
      screen: LoginPage,
      navigationOptions: {
        title: "Log In"
      }
    },
    Detail: {
      screen: DetailPage,
      navigationOptions: {
        title: "News"
      }
    }
  },
  { initialRouteName: "Home" }
);
export default createAppContainer(AppNavigator);
