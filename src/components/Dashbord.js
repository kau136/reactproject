import { Component } from "react";
import "./Dashbord.css";
import 'C:/Users/Hemant Kaushik/kalu/node_modules/bootstrap/dist/css/bootstrap.min.css'
class Dashbord extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="logo">Kaushik</div>
          <ul>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/signup">SignUp</a>
            </li>
            <li>
              <a href="/dashbord">Dashbord</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Dashbord;
