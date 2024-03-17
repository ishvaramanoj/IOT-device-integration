import React from "react"
import './navBar.css';


const NavBar = ()=>{



    return(
        <>

        <div className="navbar_body">

        <div className="logo_body"></div>

        <div className="project_name">
            <div className="project_name_one">University Of</div>
            <div className="project_name_two">Peradeniya</div>
            <div className="slogan"><i>Connect.Create.Collaborate</i></div>
        </div>

        <button className="home_button">HOME</button>
        <button className="menu_buttons">ABOUT</button>
        <button className="menu_buttons">SERVICES</button>
        <button className="menu_buttons">BOOKING</button>
        <button className="menu_buttons">CONTACT</button>

        <button className="login_button">LOGIN</button>
        <button className="signin_button">SIGN IN</button>

        </div> 

        </>
    )
}
export default NavBar;