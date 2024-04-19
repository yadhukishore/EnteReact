import User from "./User";
import UserClass from "./UserClass";

const About=()=>{
    return(
        <div>
            <h1>About</h1>
            <h3>Yadhus About page</h3>
            <User name={"Yadhu from FUNCTION"}/>
            <UserClass name={"First Class"} location={"Koratty Angadi"}/>
            <UserClass name={"Second Class"} location={" US "}/>
            <UserClass name={"Third Class"} location={" US "}/>
        </div>
    )
};

export default About;