import { Component } from "react";
import "./Question.css";

// import "./Login.css";
class Answer extends Component {
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
        <table>
          <tr >
            <th colspan="2">Answers</th>
          </tr>
          <tr>
            <td>
              <button>Masks 1</button>
            </td>
            <td>
              <button>Marks 2</button>
            </td>
          </tr>
          <tr>
            <td>
              <button>Masks 3</button>
            </td>
            <td>
              <button>Marks 4</button>
            </td>
          </tr>
          <tr>
            <td>
              <button>Masks 5</button>
            </td>
            <td>
              <button>Marks 6</button>
            </td>
          </tr>
          <tr>
            <td>
              <button>Masks 7</button>
            </td>
            <td>
              <button>Marks 8</button>
            </td>
          </tr>
          <tr>
            <td>
              <button>Masks 9</button>
            </td>
            <td>
              <button>Marks 10</button>
            </td>
          </tr>
          <tr>
            <td>
              <button>Right</button>
            </td>
            <td>
              <button>Wrong</button>
            </td>
          </tr>
        </table>
     
      </div>
    );
  }
}
export default Answer;
