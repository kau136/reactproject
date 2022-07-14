import { Component } from "react";
// import "./Abc.css";

// import "./Login.css";
class Abc extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      "Date of birth": "",
    };
  }
  render() {
    return (
      <div>
    
    <frameset cols="25%,50%,25%">  
    <frame src="frame1.html"/>
    <frame src="frame2.html"/>   
    <frame src="frame3.html"/>  
  </frameset>
      </div>
    );
  }
}
export default Abc;
