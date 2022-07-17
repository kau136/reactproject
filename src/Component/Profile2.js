import { Component } from "react";
// import './Profile2.css';
import 'C:/Users/Hemant Kaushik/kalu/node_modules/bootstrap/dist/css/bootstrap.min.css'
class Profile2 extends Component {

    render() {
        return (
            <div>
                <div class="container">
                    <div class="main-body">
                        <nav aria-label="breadcrumb" class="main-breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page">User Profile</li>
                            </ol>
                        </nav>
                        <div class="row gutters-sm">
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-flex flex-column align-items-center text-center">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" />
                                            <div class="mt-3">
                                                <h4>Kaushik</h4>
                                                <p class="text-secondary mb-1">Full Stack Developer</p>
                                                <button class="btn btn-primary">Follow</button>
                                                <button class="btn btn-outline-primary">Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-8">
                                <div class="card mb-3">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Full Name</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                Hemant Kaushik
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Email</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                hkkaushik136@gmail
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Phone</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                8954745517
                                            </div>
                                        </div>
                                        <hr/>
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <h6 class="mb-0">Mobile</h6>
                                                </div>
                                                <div class="col-sm-9 text-secondary">
                                                  952010920
                                                </div>
                                            </div>
                                            <hr/>
                                                <div class="row">
                                                    <div class="col-sm-3">
                                                        <h6 class="mb-0">Address</h6>
                                                    </div>
                                                    <div class="col-sm-9 text-secondary">
                                                        58,Bhagya jyoti enclave, Agra
                                                    </div>
                                                </div>
                                                <hr/>
                                                    <div class="row">
                                                        <div class="col-sm-12">
                                                            <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                    )
    }
}
export default Profile2;












