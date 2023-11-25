import React from "react";
class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo: {
              name: "Dummy",
              location: "Default",
            },
          };
        console.log(this.props.firstName+" Child Constructor")
        
    }

    async componentDidMount(){
        console.log(this.props.firstName+" child Component Did Mount")
       // console.log(this.props.name + "Child Component Did Mount");
    // Api call

    const data = await fetch("https://api.github.com/users/AnandMaurya24");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    }


    render(){
        console.log(this.props.firstName+" child render")
        const {firstName,education}=this.props;
        const{name,location}=this.state.userInfo
        return(
            <div>
                <h1>Profile class Component</h1>
                <h2>{firstName}</h2>
                <h3>{education}</h3>
                <h2>name : {name}</h2>
                <h3>location : {location}</h3>
            </div>
        )
    }

}

export default Profile;