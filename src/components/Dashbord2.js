import { Component } from "react";
import "./Dashbord2.css";
class Dashbord2 extends Component {
  render() {
    return (
    
        <div class="wrapper">
		<nav class="navbar">
			<img class="logo" src="logo.png"/>
			<ul>
				<li><a class="active" href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Services</a></li>
				<li><a href="#">Contact</a></li>
				<li><a href="#">Feedback</a></li>
			</ul>
		</nav>
		<div class="center">
			<h1>Welcome To Cascade</h1>
			<h2>Create Something New</h2>
			<div class="buttons">
				<button>Explore More</button>
				<button class="btn2">Subscribe Us</button>
			</div>
		</div>
      </div>
    );
  }
}
export default Dashbord2;
