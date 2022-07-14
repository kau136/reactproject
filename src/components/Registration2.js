import { Component } from "react";
// import './Login.css';
class Registration2 extends Component {
  constructor() {
    super();
    this.state = {
      'userName': "",
      'password': "",
      'confirm password': "",
      'email': "",
      
    };
  }
  render() {
    return (
      <div>
        <div class="main">
          {/* <input type="checkbox" id="chk" aria-hidden="true"/> */}

          <div class="signup">
            <label for="chk" aria-hidden="true">
              Create New Account
            </label>
            <input type="text" name="txt" placeholder="User name" required="" />
            <input type="email" name="email" placeholder="Email" required="" />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <input
              type="password"
              name="cpswd"
              placeholder=" Confirm Password"
              required=""
            />
            <button>Register</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Registration2;
