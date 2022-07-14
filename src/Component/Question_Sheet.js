import { Component } from "react";
class Question_sheet extends Component{
    constructor() {
        super()
        this.state = {
          Year: '',
          Branch: '',
          Subject: '',
          Add_file:'',
          isloggedin: false
    
        }
        this.handleChangeFields = this.handleChangeFields.bind(this)
      }
      handleDemo = () => {
        // if (this.state.Year && this.state.Branch) {
        //   this.setState({ isloggedin: true })
        // }
        // else {
        //   alert("not logged in")
        // }
        alert(this.state.Year)
        alert(this.state.Branch)
        alert(this.state.Subject)
        alert(this.state.Add_file)
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
                  <select name="Year" value={this.state.Year} onChange={this.handleChangeFields}  required="">
                        <option>Select Year</option>
                        <option>First Year</option>
                        <option>Second Year</option>
                        <option>Third Year</option>
                        <option>Final Year</option>
                    </select>
                    <select name="Branch" value={this.state.Branch} onChange={this.handleChangeFields}  required="">
                        <option>Select Branch</option>
                        <option>CS</option>
                        <option>EE</option>
                        <option>CE</option>
                        <option>EL</option>
                    </select>
                    <select name="Subject" value={this.state.Subject} onChange={this.handleChangeFields}  required="">
                        <option>Select Subject</option>
                        <option>Compiler Design</option>
                        <option>DBMS</option>
                        <option>DAA</option>
                        <option>Computer Graphics</option>
                        <option>Machine Learning</option>
                    </select>
                    <input type="file" name="Add_file" value={this.state.Add_file} onChange={this.handleChangeFields} required="" />    
                    <button>Submit</button>
                   </form>
                
              </div>
              <div class="login"/>	
	</div>
            
          </div>
        );
      }
    }
export default Question_sheet;
