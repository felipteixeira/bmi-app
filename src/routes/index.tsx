import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AboutUs from "../pages/AboutUs";

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "#312e38" },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="AboutUs" component={AboutUs} />
  </Auth.Navigator>
);

export default AuthRoutes;
