import { Component } from "react";
class Upload extends Component{
    constructor(){
        super()
        this.state={
           
        }
    }
    render(){
        return (
            <div>
                     
<div class="main">  	
			<div class="signup">
            <label for="chk" aria-hidden="true">Upload</label>
                    <input type="text" name="year" placeholder="Year" required=""/>
					<input type="text" name="branch" placeholder="Branch Name" required=""/>
                    <input type="text" name="subject" placeholder="Subject" required=""/>
					<button>Upload</button>
			
                
			
				
			</div>

			<div class="login"/>
				
					
		
	</div>
            </div>
        )
    }
};
export default Upload;
