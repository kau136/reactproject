import { Component } from "react";
import Login from "./Login";
class Logout extends Component {
    constructor() {
        super()
        this.state = {
            'isloggedin': false
        }
    }
    handleDemo = (e) => {
        this.setState({ isloggedin: true })
        e.preventDefault();
    }

    render() {
        return (this.state.isloggedin ? <Login /> :
            <div>
                <form onSubmit={this.handleDemo}>
                    <h1>Log out successfully</h1>
                    <button>BACK TO LOGIN</button>
                </form>

            </div>
        )
    }
};
export default Logout;
