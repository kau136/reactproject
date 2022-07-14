import { Component } from "react";
import './Login.css';
class Login extends Component{
    constructor(){
        super()
        this.state={
            'userName':'',
            'password':'',
            'Date of birth':''
        }
    }
    render(){
        return (
            <div>
               
                <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				    
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
                    <input type="text" name="DOB" placeholder="Date Of Birth" required=""/>
					<button>Login</button>
			
				
			</div>
            <div class="login"/>	
	</div>
  
            </div>
        )
    }
};
export default Login;
