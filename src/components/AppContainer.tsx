import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./info/Home";
import Privacy from "./info/Privacy";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, View, Text } from "react-native";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Privacy")}
      />
    </View>
  );
}

class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={HomeScreen} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/" component={HomeScreen} />
          </Switch>
        </BrowserRouter>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </div>
    );
  }
}

export default AppContainer;
