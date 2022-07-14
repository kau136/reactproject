import { Component } from "react";
import Admindash from "./Admindash";
// import './Login.css';
import Teacherdash from "./Teacherdash";
class Login extends Component{
    constructor()
    {
        super()
        this.state={
            'email':'',
            'password':'',
            'Role':'',
            'isloggedin':false

        }
        this.handleChangeFields=this.handleChangeFields.bind(this)
    }
    handleDemo=()=>{
        if(this.state.Role==='Admin'){
            this.setState({isloggedin:true})
        }
        else if(this.state.Role==='Teacher')
        {
            this.setState({isloggedin:true})
        }
        else {
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
        return (this.state.isloggedin?(this.state.Role==='Teacher'?<Teacherdash/>:<Admindash/>):
            <div>
            <div class="main">  	
		    <input type="checkbox" id="chk" aria-hidden="true"/>
                <div class="signup">
				    <form onSubmit={this.handleDemo}>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" value={this.state.email} onChange={this.handleChangeFields} placeholder="Email" required=""/>
					<input type="password" name="password" value={this.state.password} onChange={this.handleChangeFields}  placeholder="Password" required=""/>
					<select name="Role" value={this.state.Role} onChange={this.handleChangeFields}  required="">
                        <option>Select Role</option>
                        <option>Admin</option>
                        <option>Teacher</option>
                    </select>
                    <button>Login</button>
                    </form>
			    </div>
            <div class="login"/>	
	</div>
  
            </div>
        )
    }
};
export default Login;
