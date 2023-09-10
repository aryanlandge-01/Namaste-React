import React from "react";



class UserName extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userInfo: {
                name: "Dummy name",
                location: "default",
                bio: "SDE-1",



            },
        }
    }

    // async componentDidMount() {

    //     const data = await fetch("https://api.github.com/users/aryanlandge-01?");
    //     const json = data.json();


    //     console.log(json);

    // }

    async componentDidMount() {
        try {
            const response = await fetch("https://api.github.com/users/aryanlandge-01");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const json = await response.json();

            this.setState({
                userInfo: json,
            });
            console.log(json);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


    render() {

        const { name, location, bio, avatar_url } = this.state.userInfo;



        return <div className="user-card">
            <img src={avatar_url} />
            <h2>Name: {name}</h2>
            <h2>Location: {location} </h2>
            <h4>Bio: {bio} </h4>
        </div>
    }

};


export default UserName;