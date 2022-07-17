import { Component } from "react";
import axios from "axios";
class Question_sheet extends Component{
    constructor() {
        super()
        this.state = {
          'year': '',
          'branch': '',
          'subject': '',
          'add_file':'',
          'message':'',
          'isloggedin': false
    
        }
        this.handleChangeFields = this.handleChangeFields.bind(this)
      }
      handleDemo = () => {
        const t1 = this.state.year;
        const t2 = this.state.branch;
        const t3 = this.state.subject;
        const t4 = this.state.add_file;
        const data = { t1, t2, t3,t4}
        axios.get('http://localhost/question.php', { params: data }).then(kalu => {
            console.log(kalu);
            this.setState({
                message: kalu.data.response,
            })
        }).catch(err => {
            console.log('failed')
        })
        // if (this.state.Year && this.state.Branch) {
        //   this.setState({ isloggedin: true })
        // }
        // else {
        //   alert("not logged in")
        // }
        // alert(this.state.Year)
        // alert(this.state.Branch)
        // alert(this.state.Subject)
        // alert(this.state.Add_file)
        // console.log(this.state.Year)
        // console.log(this.state.Branch)
        // console.log(this.state.Subject)
      }
      handleChangeFields = (event) => {
        this.setState({
          ...this.state,
          [event.target.name]: event.target.value
        })
        console.log(this.state, "formFilled")
      }
      render() {
        return (
          <div>
    
            <div class="main">
              <input type="checkbox" id="chk" aria-hidden="true" />
    
              <div class="signup">
              <form onSubmit={this.handleDemo}>
                  <label for="chk" aria-hidden="true">Question Sheet Upload</label>
                  <select name="year" value={this.state.year} onChange={this.handleChangeFields}  required="">
                        <option>Select Year</option>
                        <option>First Year</option>
                        <option>Second Year</option>
                        <option>Third Year</option>
                        <option>Final Year</option>
                    </select>
                    <select name="branch" value={this.state.branch} onChange={this.handleChangeFields}  required="">
                        <option>Select Branch</option>
                        <option>CS</option>
                        <option>EE</option>
                        <option>CE</option>
                        <option>EL</option>
                    </select>
                    <select name="subject" value={this.state.subject} onChange={this.handleChangeFields}  required="">
                        <option>Select Subject</option>
                        <option>Compiler Design</option>
                        <option>DBMS</option>
                        <option>DAA</option>
                        <option>Computer Graphics</option>
                        <option>Machine Learning</option>
                    </select>
                    <input type="file" name="add_file" value={this.state.add_file} onChange={this.handleChangeFields} required="" />    
                    <button>Submit</button>
                  </form>
                  {
                        this.state.message
                        }
    
              </div>
              <div class="login"/>	
	</div>
              
            </div>
            
        
        );
      }
    }
export default Question_sheet;
