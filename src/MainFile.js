import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fprofile from './Component/Fprofile';
import Display from './Component/Display';
import Faculty from "./Component/Faculty"
import Question_sheet from "./Component/Question_Sheet";
import Answer_sheet from "./Component/Answer_Sheet";
import Teacherdash from "./Component/Teacherdash";
import Login from './Component/Login';
import Logout from "./Component/Logout";
import Admindash from "./Component/Admindash";


class MainFile extends Component {
    render() {
        return (
            <BrowserRouter>
                {/* <Login /> */}
                {/* <Admindash/> */}

                {/* <Teacherdash/> */}
                <Routes>
                    <Route path="/admin/answer" element={<Answer_sheet />} />
                    <Route path="/admin/faculty" element={<Faculty />} />
                    <Route path="/admin/question" element={<Question_sheet />} />
                    <Route path="/display" element={<Display />} />
                    <Route path="/profile" element={<Fprofile />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </BrowserRouter>
        )
    }
};
export default MainFile;