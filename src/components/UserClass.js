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



        return <div className="flex m-auto my-5 bg-green-300 rounded-lg">
            <div className="w-8/12 p-4 m-auto">
                <h2>Name: {name}</h2>
                <br />
                <h2>Location: {location} </h2>
                <br />
                <h4>Bio: {bio} </h4>
            </div>
            <div className="w-4/12 m-auto   rounded-xl">
                <img className="border border-y-black rounded-lg" src={avatar_url} />
            </div>


        </div>
    }

};


export default UserName;