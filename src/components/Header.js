import { Component } from "react";
import "./Header.css";

// import "./Login.css";
class Header extends Component {
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
        <table class="style">
        <tr>
            <th> <button>Back</button></th>
            <th> <button>Student-Id:</button></th>
            <th> <button>Page_No</button></th>
            <th> <button>Time Taken</button></th>
          </tr>
        </table>
     
      </div>
    );
  }
}
export default Header;
