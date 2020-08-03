import React, { Component } from "react";
import AppContainer from "./components/AppContainer";
import "./styles.css";

interface AppProps {}
interface AppState {
  appstatestring: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      appstatestring: "appx"
    };
  }

  render() {
    return (
      <div>
        <AppContainer />
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

export default App;
