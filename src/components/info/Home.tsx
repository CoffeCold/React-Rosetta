import React, { Component } from "react";
import { Button, View, Text } from "react-native";

class Home extends React.Component {
  render() {
    return (
      <div>
        <tr>
          <td>Home works</td>
        </tr>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Privacy")}
        />
      </div>
    );
  }
}

export default Home;
