import { Component } from "react";
class Prime extends Component{
    constructor(props){
        super(props);
        this.state={
            a:'',
    };
    this.fun=this.fun.bind(this);
    this.change=this.change.bind(this);
}
fun(e){
    let n=this.state.a;
    let cn=0;
    for(let i=1;i<=n;i++)
    {
        if(n%i==0){
            cn=cn+1;
        }
        
    }
    this.setState({a:cn});
    if(cn==2){
       alert("Prime Number");
       this.setState({a:"Prime Number"});
    }
    else{
        alert("Not a prime number");
        this.setState({a:"Not A Prime Number"});
    }
    e.preventDefault();
}
change(e1){
    this.setState({a:e1.target.value});
}
    render(){
        return (
            <div>
                <form onSubmit={this.fun}>
					<input type="text" name="t1" onChange={this.change} value={this.state.a} placeholder="Enter a Number" required=""/>
					<button>Submit</button>
                </form>
			
            </div>
        )
    }
};
export default Prime;
