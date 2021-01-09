import React from 'react';
import logo from './logo.svg';

import "./styleapp.scss";
import Loginpage from './components/login/Loginpage';
import Registerpagee from './components/login/Registerpagee';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './components/Home/HomePage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }
  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }
  changeState() {
    //ES6 Object Destructuring
    const { isLogginActive } = this.state;
  
    //We togglet component classes depending on the current active state 
    if (isLogginActive) {
      //Right side for login
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      //Left side for Register 
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    //Of course we need to toggel the isLogginActive by inversing it's previous state 
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }
  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Get Register" : "Login";
    return (
      <div className="App">
      <div>
      
      </div>
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Loginpage containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Registerpagee containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            containerRef={ref => (this.rightSide = ref)} onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
      
    );
  }
}
const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};
export default App;