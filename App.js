import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import DetailPage from "./components/DetailPage";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: {
        title: "Home"
      }
    },
    Login: {
      screen: LoginPage,
      navigationOptions: {
        title: "Log In",
        headerLeft: null
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
