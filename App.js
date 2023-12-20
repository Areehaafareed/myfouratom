// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Screens/Login";
import SignUp from "./src/Screens/SignUp";
import Detail from "./src/Screens/Detail";
import Home from "./src/Screens/Home";
import BottomTabNavigation from "./src/Components/BottomTabNavigation";
import MyCart from "./src/Screens/MyCart";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";
import OrderPlaced from "./src/Screens/OrderPlaced";

import { ViewPropTypes } from "deprecated-react-native-prop-types";
import Otp from "./src/Screens/Otp";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="BottomTabNavigation"
            component={BottomTabNavigation}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="MyCart" component={MyCart} />
          <Stack.Screen name="OrderPlaced" component={OrderPlaced} />
          <Stack.Screen name="Otp" component={Otp} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
