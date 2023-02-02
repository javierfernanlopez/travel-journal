import React from "react";
import "../css/nav.css";

function Nav(){
    return(
        <nav>
            <img src="../images/logo.png" alt="" className="nav--logo"/>
            <span className="nav--title"> my travel journal.</span>
        </nav>
    )
}

export default Nav;