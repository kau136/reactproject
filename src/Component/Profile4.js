import { Component } from "react";
import Axios from "axios";
import './Profile4.css';
import Delete from "./Delete";
import Update from "./Update";
class Profile4 extends Component {
    constructor() {
        super()
        this.state = {
            action:0,
            isloggedin: false,
            kalu: [],
        }

    }
    handleDemoUpdate = (e) => {
        this.setState({ isloggedin: true });
        this.setState({action:1})
        e.preventDefault();
        // const t1 = this.state.Name;
        // const t2 = this.state.Phone;
        // const t3 = this.state.Address;
        // const t4 = this.state.Specialization;
        // const data = { t1 }
        // Axios.get('http://localhost/update.php', { params: data }).then(kalu => {
        //     console.log(kalu);
        //     this.setState({
        //         message: kalu.data.response,   
        //     })
        // }).catch(err => {
        //     console.log('failed')
        // })

    }
 

    componentDidMount() {
        Axios.get("http://localhost/profile.php")
            .then((response) => {
                // console.log(response)
                this.setState({ kalu: response.data });
                console.log(this.state.kalu)
            })
            .catch((err) => {
                console.log("Failed");
            });
    }
    render() {
        return (this.state.isloggedin?<Update/>:
            <div>
                {this.state.kalu.map((ag) =>
                    <form >
                        <div className="page-content page-container" id="page-content">
                            <div className="padding">
                                <div className="row container d-flex justify-content-center">
                                    <div className="col-xl-6 col-md-12">
                                        <div className="card user-card-full">
                                            <div className="row m-l-0 m-r-0">
                                                <div className="col-sm-4 bg-c-lite-green user-profile">
                                                    <div className="card-block text-center text-white">
                                                        <div className="m-b-25">
                                                            <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />
                                                        </div>
                                                        {/* <h6 className="f-w-600">Hemant Kaushik</h6>
                                                        <p>Web Designer</p> */}
                                                        <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                                    </div>
                                                </div>
                                                <div className="col-sm-8">
                                                    <div className="card-block">
                                                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">About Us</h6>
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <p className="m-b-10 f-w-600">Name</p>
                                                                <h6 className="text-muted f-w-500">{ag.name}</h6>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <p className="m-b-10 f-w-600">Email</p>
                                                                <h6 className="text-muted f-w-400">hkkaushik136@gmail.com</h6>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <p className="m-b-10 f-w-600">Phone</p>
                                                                <h6 className="text-muted f-w-400">{ag.phone}</h6>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <p className="m-b-10 f-w-600">Address</p>
                                                                <h6 className="text-muted f-w-400">{ag.Address}</h6>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <p className="m-b-10 f-w-600">Specialization</p>
                                                                <h6 className="text-muted f-w-400">{ag.specialization}</h6>
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <p className="m-b-10 f-w-600">Profile Id</p>
                                                                <h6 className="text-muted f-w-400">{ag.id}</h6>
                                                            </div>
                                                        </div>
                                                        <h6 className="m-b-40 m-t-40 p-b-5 b-b-default f-w-600"></h6>
                                                        <a className="btn btn-info " href=""  onClick={this.handleDemoUpdate}>Update Profile</a>
                                                        
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                )
                }
            </div>
        )
    }
};
export default Profile4;
