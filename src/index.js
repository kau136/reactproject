import React from "react";
import ReactDOM from "react-dom/client";
import Admindash from "./Component/Admindash";
import Teacherdash from "./Component/Teacherdash";
import Login from "./Component/Login";
import "./index.css";
import Question_sheet from "./Component/Question_Sheet";
import Display from "./Component/Display";
import Fprofile from "./Component/Fprofile";

import Faculty from "./Component/Faculty";
// import Swap from './Swap';
// import Dashbord3 from './Dashbord3'
// import Profile from "./Profile";
import MainFile from "./MainFile";
import reportWebVitals from "./reportWebVitals";
import Answer_Sheet from "./Component/Answer_Sheet";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Faculty/> 
    {/* <Fprofile/> */}
    {/* <Display/> */}
    <MainFile/>
    {/* <Teacherdash/> */}
    {/* <Admindash/> */}
    {/* <Question_sheet/>
    <Answer_Sheet/>
    <Login/>
    <Faculty/> */}
    {/* <Profile/>
    <Dashbord3/>
    <Swap/>
    <Reverse/>
    <Prime/>
    <Header/>
    <Question/>
    <Answer/>
    <Abc/>
    <Evaluation />
    <Dashbord/>
    <Admin/>
    <Teacher/>
    
    <Registration2/> 
   
    <Upload/>
    <Display/>
    <Result/>  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
