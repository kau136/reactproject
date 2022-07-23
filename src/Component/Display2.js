
import { Component } from "react";
import Axios from "axios";
import Displaydata from "./Displaydata";
import { Link } from "react-router-dom";
class Display2 extends Component {
    constructor() {
        super()
        this.state = {
            action:0,
            isloggedin: false,
            kalu: [],
        }
    }
    handleDemo=(e)=>{
        this.setState({ isloggedin: true });
        this.setState({action:1})
        const t1 = this.state.id;
        const data = {t1}
        Axios.get('http://localhost/display.php', { params: data }).then(kalu => {
            console.log(kalu);
            this.setState({
                message: kalu.data.response,
            })
        }).catch(err => {
            console.log('failed')
        })
        e.preventDefault();
    }
    abc=()=>
    {
        alert("welcome");
    }
    componentDidMount() {
        Axios.get("http://localhost/display.php")
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
        return (this.state.isloggedin?<Displaydata/>:
            <div>
                <body>
                    <section class="ftco-section">
                        <div class="container">
                            <div class="row justify-content-center">
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <h4 class="text-center mb-4"><h2>Display Bundle Lists</h2></h4>
                                    <div class="table-wrap">
                                        <table class="table">
                                            <thead class="thead-primary">
                                                <tr>
                                                    <th>ID</th>
                                                    <th>year</th>
                                                    <th>branch</th>
                                                    <th>subject</th>
                                                    <th>FILE</th>
                                                    <th>EVALUATE</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.kalu.map((ag) =>
                                                    <tr>
                                                        <th scope="row" class="scope" >{ag.id}</th>
                                                        <td>{ag.year}</td>
                                                        <td>{ag.branch}</td>
                                                        <td>{ag.subject}</td>
                                                        <td>{ag.add_file}</td>
                                                        {/* <td><Displaydata name={ag.id}/><a className="btn btn-info" onClick={this.handleDemo}>Select</a></td> */}
                                                        {/* <Link to={{ pathname: "/evalu",  state:this.state.id }}>Register</Link> */}
                                                      
                                                        <td><Displaydata name={ag.id} /></td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <script src="js/main.js"></script>
                </body>
            </div>
        )
    }
};
export default Display2;
