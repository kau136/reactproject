import { Component } from "react";
import "./Question.css";
// import "./Login.css";
class Question extends Component {
  constructor() {
    super();
    this.state = {
     
    };
  }
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Questions</th>
            <th>Out of</th>
            <th>Score</th>
          </tr>
          <tr>
            <td><button>Question 1</button></td>
            <td>10</td>
            <td></td>
          </tr>
          
          <tr>
            <td><button>Question 2</button></td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td><button>Question 3</button></td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td><button>Question 4</button></td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td><button>Question 5</button></td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td><button>Question 6</button></td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td><button>Question 7</button></td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td><button>Question 8</button></td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td><button>Question 9</button></td>
            <td>10</td>
            <td></td>
          </tr>
          <tr>
            <td><button>Question 10</button></td>
            <td>10</td>
            <td></td>
          </tr>
        </table>
             <button>Submit</button>
            <button>Save And Next</button>
           
      </div>
    );
  }
}
export default Question;
