// import axios from "axios";
import { Component } from "react";
import Axios from "axios";
class Maindv extends Component {
    constructor() {
        super()
        this.state = {
            kalu: [],
        }
        // this.handleChangeFields = this.handleChangeFields.bind(this)
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
        return (
            <div>
                {this.state.kalu.map((ag)=>(<div>{ag.year},{ag.branch},{ag.subject},</div>))}
            </div>
        )
    }
};
export default Maindv;
