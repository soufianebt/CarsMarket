import React from 'react';
import {Component} from "react";
import {Card, Col, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faSave, faPlusSquare, faUndo} from "@fortawesome/free-solid-svg-icons";
import axios  from "axios";

class Voiture extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.initialState ;
        this.voitureChange = this.voitureChange.bind(this);
        this.submitVoiture = this.submitVoiture.bind(this);
    }
    initialState ={
        marque: '',
        modele: '',
        couleur: '',
        immatricule : '',
        prix: '',
        annee: '',
        };

    resetVoiture = () => {
      this.setState(()=> this.initialState);
    }
    submitVoiture = (event) => {
        console.log("onsubmite");
        event.preventDefault();
        const voiture = {
            marque: this.state.marque,
            modele: this.state.modele,
            couleur: this.state.couleur,
            immatricule : this.state.immatricule,
            prix: this.state.prix,
            annee: this.state.annee,
        };
        const session_url = 'http://localhost:8080/voitures';
        axios.post(session_url, voiture).then(
            (response) => {
                if(response.data != null){
                    this.setState(this.initialState);
                    alert("Voiture enregistree avec succes");
                }
            }
        );
    }
    voitureChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    render() {
        return (
        <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header> <FontAwesomeIcon icon={faPlusSquare}/> Ajouter  Voiture</Card.Header>
            <Card.Body>
                <Form onReset={this.resetVoiture} onSubmit={this.submitVoiture} id="VoitureFormId">
                    <Card.Body>
                        <Row>
                            <Form.Group as={Col} controlId="formGridMarque">
                                <Form.Label> Marque </Form.Label>
                                <Form.Control name="marque" type="text"  value={this.state.marque} onChange={this.voitureChange}  className={"bg-dark text-white"} placeholder="Entrez Marque Voiture"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridModele">
                                <Form.Label> Modele </Form.Label>
                                <Form.Control name="modele" type="text" value={this.state.modele} onChange={this.voitureChange} className={"bg-dark text-white"} placeholder= "Entrez Modele Voiture"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridModele">
                                <Form.Label> Couleur </Form.Label>
                                <Form.Control name="couleur" type="text" value={this.state.couleur} onChange={this.voitureChange} className={"bg-dark text-white"} placeholder= "Entrez couleur Voiture"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridModele">
                                <Form.Label> Immatricule </Form.Label>
                                <Form.Control name="immatricule" type="text" value={this.state.immatricule} onChange={this.voitureChange} className={"bg-dark text-white"} placeholder= "Entrez immatricule Voiture"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridModele">
                                <Form.Label> Prix </Form.Label>
                                <Form.Control name="prix" type="text" value={this.state.prix} onChange={this.voitureChange} className={"bg-dark text-white"} placeholder= "Entrez prix Voiture"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridModele">
                                <Form.Label> Annee </Form.Label>
                                <Form.Control  name="annee" type="text" value={this.state.annee} onChange={this.voitureChange} className={"bg-dark text-white"} placeholder= "Entrez annee Voiture"/>
                            </Form.Group>
                        </Row>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button size="sm" variant="success" type="submit"><FontAwesomeIcon icon={faSave}/> Submit </Button> {' '}
                        <Button size="sm" variant="info" type="reset"><FontAwesomeIcon icon={faUndo}/> Reset </Button>

                    </Card.Footer>
                </Form>
            </Card.Body>
        </Card>);
    }
}
export default Voiture;