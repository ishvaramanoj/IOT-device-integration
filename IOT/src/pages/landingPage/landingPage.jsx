import React from "react";
import './landingPage.css';
import NavBar from '../../commonComponents/commonNavBar/navBar';


const LandingPage = () =>{

    return(
        <>
        
   <div className="main_body_landing_page">

    <div className="navbar_container">
        <NavBar/>
    </div>

    <div className="body_intro">

     <div className="body_intro_left">
     left
     </div>
     <div className="body_intro_right">
     right
     </div>

    </div>

   </div>

        </>
    )
}
export default LandingPage;