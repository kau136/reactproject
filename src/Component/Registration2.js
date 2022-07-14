import { Component } from "react";
import './Login.css';
class Registration2 extends Component {
  constructor()
  {
      super()
      this.state={
          'email':'',
          'password':'',
          'Confirm_password':'',
          'Role':'',
          'isloggedin':true

      }
      this.handleChangeFields=this.handleChangeFields.bind(this)
  }
  handleDemo=()=>{
      if(this.state.email&&this.state.password){
          this.setState({isloggedin:true})
      }
      else{
          alert("not logged in")
      }
      alert(this.state.email)
      alert(this.state.password)
      alert(this.state.Role)
      // console.log(this.state.email)
      // console.log(this.state.password)
      // console.log(this.state.Role)
  }
  handleChangeFields=(event)=>{
      this.setState({
          ...this.state,
          [event.target.name]:event.target.value
      })
      console.log(this.state,"formFilled")
  }
  render(){
      return (
          <div>
             
              <div class="main">  	
  <input type="checkbox" id="chk" aria-hidden="true"/>

    <div class="signup">
          <form onSubmit={this.handleDemo}>
        <label for="chk" aria-hidden="true">Login</label>
        <input type="email" name="email" value={this.state.email} onChange={this.handleChangeFields} placeholder="Email" required=""/>
        <input type="email" name="password" value={this.state.password} onChange={this.handleChangeFields} placeholder="Password" required=""/>
        <input type="password" name="Conform_password" value={this.state.Confirm_password} onChange={this.handleChangeFields}  placeholder="Confirm Password" required=""/>
                  <input type="text" name="Role" value={this.state.Role} onChange={this.handleChangeFields} placeholder="Role" required=""/>
        <button>Login</button>
                  </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Registration2;
