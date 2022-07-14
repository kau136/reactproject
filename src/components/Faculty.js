import { Component } from "react";
import './Login.css';
class Faculty extends Component{
    constructor(){
        super()
        this.state={

            'Name':'',
            'Phone_No':'',
            'Address':'',
            'Specialization':''
        }
    }
    render(){
        return (
            <div>
 
    <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				
					<label for="chk" aria-hidden="true">Faculty Details</label>
                    <input type="text" name="txt" placeholder="User name" required=""/>
					<input type="text" name="phone" placeholder="Phone No" required=""/>
                    <input type="text" name="address" placeholder="Address" required=""/>
                    <input type="text" name="specialization" placeholder="Specialization" required=""/>

					<button>Submit</button>
				
			</div>

			
			
		
	</div>

        
</div>
        )
    }
};
export default Faculty;
