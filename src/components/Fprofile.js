import { Component } from "react";
// import './Fprofile.css';
// import img1 from'./C:\Users\ASUS\bhalu\src\OIP.jpeg'
class Fprofile extends Component {
    constructor() {
        super()
        this.state = {
            'Name': '',
            'Specialization': '',
            'Bundles': '',
            'Evaluation_screen': ''
        }
    }
    render() {
        return (
            <body>
                <div class="container">
                    <div class="main">
                        <div class="row">
                            <div class="col-md-4 mt-1">
                                <div class="card text-center sidebar">
                                    <div class="card-body">
                                        <img src="DSC01256.JPG" class="rounded-circle" width="150" />
                                        <div class="card-body">
                                            <h1>Akash Maurya</h1>
                                            <h2>B.tech CSE</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8 mt-1">
                                <div class="card mb-3 content">
                                    <h1 class="m-3 pt-3">ABOUT US</h1>
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <h3>FULL NAME</h3>
                                            </div>
                                            <div class="col-md-9 text-secondary">
                                                <h4>Akash Maurya</h4>
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-3">
                                                <h3>EMAIL</h3>
                                            </div>
                                            <div class="col-md-9 text-secondary">
                                                <h4>abc@gmail.com</h4>
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-3">
                                                <h3>PHONE</h3></div>
                                            <div class="col-md-9 text-secondary">
                                                <h4>+918303252156</h4>
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-md-3">
                                                <h3>ADDRESS</h3>
                                            </div>
                                            <div class="col-md-9 text-secondary">
                                                <h4>xyz</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-mb-3 content">
                                    <h1 class="m-3">Recent Project</h1>
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <h5>Project Name</h5>
                                            </div>
                                            <div class="col-md-9 text-secondary">
                                                Project Description
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
};
export default Fprofile;
