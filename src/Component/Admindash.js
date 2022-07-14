import { Component } from "react";
import "./Dashbord.css";
class Admindash extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="logo">Admin</div>
          <ul>
            {/* <li>
              <a href="/"></a>
            </li> */}
            <li>
              <a href="/admin/faculty">Facultydetails</a>
            </li>
            <li>
              <a href="/admin/question">Question Paper</a>
            </li>
            <li>
              <a href="/admin/answer">Answer Sheet</a>
            </li>
            {/* <li>
              <a href="/result">View Result</a>
            </li> */}
            <li>
              <a href="/logout">Log Out</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Admindash;
