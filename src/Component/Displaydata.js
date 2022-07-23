import { Component } from "react";
// import './Login.css';
import Axios from "axios";
import Display2 from "./Display2";
import 'C:/Users/Hemant Kaushik/kalu/node_modules/bootstrap/dist/css/bootstrap.min.css'
class Displaydata extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.name,
            action: 0,
            isloggedin: false,
            kalu: [],
        }
    }
    handleDemo = () => {
        this.setState({ isloggedin: true });
        this.setState({action:1})

        const t1 = this.state.id;
        const data = { t1 }
        console.log(t1);
        Axios.get('http://localhost/displaydata.php', { params: data }).then(kalu => {
            console.log(kalu);
            this.setState({
                message: kalu.data.response,
            })
        }).catch(err => {
            console.log('failed')
        })
    }
    componentDidMount() {
        Axios.get("http://localhost/displaydata.php")
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
        return (
            // this.state.isloggedin?<Display2/>:

            <div>
                            {this.props.name},{this.props.id}
                {/* {this.state.kalu.map((ag) => (<div>{ag.year},{ag.branch},{ag.subject},</div>))} */}
                <a className="btn btn-info" onClick={this.handleDemo}>Select</a>
            </div>
        )
    }
};
export default Displaydata;
