import React,{ Component } from "react";
// import Registration2 from "./Registration2";
// import About from "./About";
// import Upload from "./Upload";
// import Login from "./Login";


class Navdev extends Component{
    render(){
        return (
            <div>
                <li>
                    {/* <a href="/about">About</a>  */}
                    <a href="/login">Login</a> 
                     <a href="/signup">Signup</a> 
                    {/* <a href="/upload">Upload</a> */}
                </li>
            </div>
        )
    }
};
export default Navdev;
