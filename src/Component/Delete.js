
import { Component } from "react";
import Axios from "axios";
class Delete extends Component {
    constructor() {
        super()
        this.state = {
            kalu: [],
        }
    }
    componentDidMount() {
        Axios.get("http://localhost/delete.php")
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
                <h1>Profile deleted successfully</h1>
            </div>
        )
    }
};
export default Delete;
