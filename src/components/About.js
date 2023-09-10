
import UserName from "./UserClass.js";
import { Component } from "react";


class About extends Component {
    constructor(props) {
        super(props)

        console.log(
            "Parent constructor"
        )
    }

    componentDidMount() {
        console.log(
            "push parent"
        )
    }



    render() {
        console.log("Render parent")
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste react webseries</h2>
                <UserName name={"class Aryan"} location={"Mumbai class"} contact={"8928199213 (class)"} />

            </div>
        )
    }
}





export default About;