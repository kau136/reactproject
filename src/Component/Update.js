import { Component } from "react";
import axios from "axios";
import Profile4 from "./Profile4";
import './Login.css';
// import 'C:/Users/Hemant Kaushik/kalu/node_modules/bootstrap/dist/css/bootstrap.min.css'
class Update extends Component {
    constructor() {
        super()
        this.state = {
            Name: '',
            Phone: '',
            Address: '',
            Specialization: '',
            message: '',
            kalu: [],
            isloggedin: false

        }
        this.handleChangeFields = this.handleChangeFields.bind(this)
    }

    // handleDemo = () => {
    //     const t1 = this.state.Name;
    //     const t2 = this.state.Phone;
    //     const t3 = this.state.Address;
    //     const t4 = this.state.Specialization;
    //     const data = { t1, t2, t3, t4 }
    //     axios.get('http://localhost/update.php', { params: data }).then(kalu => {
    //         console.log(kalu);
    //         this.setState({
    //             message: kalu.data.response,   
    //         })
    //     }).catch(err => {
    //         console.log('failed')
    //     })
    // }
    handleChangeFields = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
        // console.log(this.state, "formFilled")
    }
    componentDidMount() {
        axios.get("http://localhost/update.php")
            .then((response) => {
                console.log(response)
                this.setState({ kalu: response.data });
                
                console.log(this.state.kalu)
            })
            .catch((err) => {
                console.log("Failed");
            });
    }

    render() {
        return (this.state.isloggedin ? <Profile4 /> :
            <div>
                <div class="main">
                    <input type="checkbox" id="chk" aria-hidden="true" />
                    <div class="signup">
                        {
                            this.state.kalu.map((ag) =>
                                <form onSubmit={this.handleDemo}>
                                    <label for="chk" aria-hidden="true">Update Profile</label>
                                    <input type="text" name="Name" value={this.state.Name} onChange={this.handleChangeFields} placeholder={ag.name} required="" />
                                    <input type="text" name="Phone" value={this.state.Phone} onChange={this.handleChangeFields} placeholder={ag.phone} required="" />
                                    <input type="text" name="Address" value={this.state.Address} onChange={this.handleChangeFields} placeholder={ag.Address} required="" />
                                    <select name="Specialization" value={this.state.Specialization} onChange={this.handleChangeFields} required="">
                                        <option>{ag.Specialization}</option>
                                        <option>Compiler Design</option>
                                        <option>DBMS</option>
                                        <option>DAA</option>
                                        <option>Computer Graphics</option>
                                        <option>Machine Learning</option>
                                    </select>
                                    <button >Update</button>
                                </form>
                        )}
                    </div>
                </div>
            </div>
        )
    }
};
export default Update;
