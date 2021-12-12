import React from 'react';
import './App.css';
import {Component} from "react";
import {Container, Navbar, Row} from 'react-bootstrap';
import NavigationBar from './Components/NavigationBar';
import {Col} from "reactstrap";
import Bienvenue from "./Components/Bienvenues";
import Voiture from "./Components/Voiture";
import VoitureListe from "./Components/VoitureListe";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Footer from "./Components/Footer";

class App extends React.Component {



    render() {
        const marginTop={marginTop:"20px"};
        return(<Router>
            <NavigationBar/>
            <Container>
                <Row>
                    <Col lg={12} style={marginTop}>
                        <Switch>
                            <Route path="/" exact >
                                <Bienvenue/>
                            </Route>
                            <Route path="/add" exact  >

                                <Voiture />
                            </Route>
                            <Route path="/list" exact >
                                <VoitureListe/>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </Router>);
    }
}
export default App;
