
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
            <div className="flex">

                <UserName name={"class Aryan"} location={"Mumbai class"} contact={"8928199213 (class)"} />

            </div>
        )
    }
}





export default About;