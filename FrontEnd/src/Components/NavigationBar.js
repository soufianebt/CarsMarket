import React  from "react";

import {Nav, Navbar} from "react-bootstrap";
import {Container} from "reactstrap";
import {Link} from "react-router-dom";

class NavigationBar  extends  React.Component{
render() {
    return(
        <Navbar bg="dark" variant="dark">
            <Link to={""} className="navbar-brand">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Tata_Tamo_Racemo.jpg" height={25} width={25}/>
            </Link>
                <Link to={"add"} className="nav-link">
                    Ajouter Voiture
                </Link>
                <Link to={"list"} className="nav-link">
                    Liste Voiture
                </Link>
        </Navbar>);
}
}

export default NavigationBar;