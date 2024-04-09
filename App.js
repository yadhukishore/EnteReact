import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
  return (
     <div className="header">
       <div className="logoContainer">
         <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuoUvsJxgu2-pflhefUo48r3mscHJXvVZS59LOMK13cpJyCX1olFEYu6QpzgT1lcNzsLk&usqp=CAU"/>
       </div>
       <ul className="navItems">
         <li>Home</li>
         <li>About Us</li>
         <li>Contact US</li>
         <li>Cart</li>
       </ul>
     </div>
  );
 }

 const RestaurentCard = ()=>{
  return(
    <div className="res-card">
      <h3>Hotel Aryaas</h3>
    </div>
    
  )
 }

 const Body = () =>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
    <RestaurentCard />
      </div>
    </div>
  )
 }
 
 const AppLayout = () => {
  return (
     <div className="app">
       <Header />
       <Body />
     </div>
  );
 }
 
 const root = ReactDOM.createRoot(document.getElementById("root"));
 
 root.render(<AppLayout/>);