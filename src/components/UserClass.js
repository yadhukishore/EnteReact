import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "DummyName",
        login:"DummyUserName",
      },
    };
    console.log(this.props.name + "Parent Constructor");
  }
  async componentDidMount() {
    // console.log(this.props.name+"Child componentDidMount")
    const data = await fetch("https://api.github.com/users/yadhukishore");
    const json = await data.json();

    this.setState({
        userInfo:json,
    })

    console.log(json);
  }
  componentWillUnmount(){
    console.log("componentWillUnmounted");
  }

  render() {
    // console.log(this.props.name+"Child Render")
    const {name,login,avatar_url}=this.state.userInfo;
    
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <img src={avatar_url}/>
        <h3>Git Username: {login} </h3>
        <h4>Contact: @yadhu37</h4>
      </div>
    );
  }
}

export default UserClass;
