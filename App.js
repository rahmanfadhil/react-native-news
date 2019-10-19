import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import DetailPage from "./components/DetailPage";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import NewsPage from "./components/NewsPage";

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
        title: "Log In"
      }
    },
    News: {
      screen: NewsPage,
      navigationOptions: {
        title: "News"
      }
    },
    Detail: {
      screen: DetailPage,
      navigationOptions: {
        title: "Detail"
      }
    }
  },
  { initialRouteName: "Home" }
);
export default createAppContainer(AppNavigator);
