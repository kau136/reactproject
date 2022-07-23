import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile4 from './Component/Profile4';
import Display2 from './Component/Display2';
import Faculty from "./Component/Faculty"
import Question_sheet from "./Component/Question_Sheet";
import Answer_sheet from "./Component/Answer_Sheet";
import Teacherdash from "./Component/Teacherdash";
import Login from './Component/Login';
import Logout from "./Component/Logout";
import Admindash from "./Component/Admindash";
import Displaydata from "./Component/Displaydata";


class MainFile extends Component {
    render() {
        return (
            <BrowserRouter>
                {/* <Login /> */}
                {/* <Admindash/> */}
                <Teacherdash/>
                <Routes>
                <Route excet path="/" element={<Answer_sheet />} /> 
                    <Route path="/admin/answer" element={<Answer_sheet />} />
                    <Route excet path="/admin/faculty" element={<Faculty />} />
                    <Route path="/admin/question" element={<Question_sheet />} />
                    <Route path="/display" element={<Display2 />} />
                    <Route path="/profile" element={<Profile4/>} />
                    
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </BrowserRouter>
        )
    }
};
export default MainFile;