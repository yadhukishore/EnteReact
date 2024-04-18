import User from "./User";
import UserClass from "./UserClass";

const About=()=>{
    return(
        <div>
            <h1>About</h1>
            <h3>Yadhus About page</h3>
            <User name={"Yadhu from FUNCTION"}/>
            <UserClass name={"Yadhu from class"} location={"Koratty Angadi"}/>
        </div>
    )
};

export default About;