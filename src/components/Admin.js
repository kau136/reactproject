import { Component } from "react";
import './Login.css';
class Admin extends Component{
    constructor(){
        super()
        this.state={
            'Login':'',
            'Registration':'',
            'faculty Details':''
        }
    }
    render(){
        return (
            <div>

                     
<div class="main">  	


			<div class="signup">
				    
					<label for="chk" aria-hidden="true">Admin</label>
					
					<button>Login</button>
					<button>Registration</button>
                    <button>Faculty Details</button>
				
			</div>
            <div class="login"/>

		
	</div>
            </div>
        )
    }
};
export default Admin;
