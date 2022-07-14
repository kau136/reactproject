import { Component } from "react";
class Reverse extends Component{
    constructor(props){
        super(props);
        this.state={
            a:'',
    };
    this.fun=this.fun.bind(this);
    this.change=this.change.bind(this);
}
fun(e){
    let k=this.state.a;
    let r=0;
    let f=0;
    while(Math.floor(k)>0)
    {
        r=k%10;
        f=f*10+r;
        k=Math.floor(k/10);
    }
    this.setState({a:f});
    alert(f);
    e.preventDefault();
}
change(e1){
    this.setState({a:e1.target.value});
}
    render(){
        return (
            <div>
                <form onSubmit={this.fun}>
					<input type="text" name="t1" value={this.state.a}   onChange={this.change} placeholder="Enter a Number" required=""/>
					<button>Submit</button>
                </form>
			
            </div>
        )
    }
};
export default Reverse;
