import {Component} from "react";

class UserClass extends Component{

    constructor(props){
        super(props);
        this.state={
            count:0
        }
        console.log(this.props.name+"Parent Constructor");
    }
    componentDidMount(){
        console.log(this.props.name+"Parent componentDidMount")
    }

     render(){
        console.log(this.props.name+"Parent Render");
        const {name,location}=this.props;//Destructure
        return (
            <div className='user-card'>
                <h1>Count:{this.state.count}</h1>
                <h2>Name: {name}</h2>
                <h3>Loc: {location}</h3>
                <h4>Contact: @yadhu37</h4>

            </div>
          )
     }
};

export default UserClass;