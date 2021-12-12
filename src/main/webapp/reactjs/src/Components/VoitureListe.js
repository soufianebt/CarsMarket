import React from 'react';
import {Component} from "react";
import {Table} from "react-bootstrap";
import {Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {ButtonGroup, Button} from "reactstrap";
import MyToast from "./myToast";
import {Link} from "react-router-dom";


class VoitureListe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            voitures : [],
        };

    }
    componentDidMount(){
        const session_url = 'http://localhost:8080/voitures';
        axios.get(session_url)
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    voitures : data,
                     });
            })
            .catch(
                error => console.error(error));
    }

    deleteVoiture = (voitureId) =>{
        axios.delete("http://localhost:8080/voitures/"+voitureId)
            .then(response => {
                if(response.data != null){
                    this.setState({"show":true});
                    setTimeout(() => this.setState({"show":false}), 3000);
                    this.setState({
                        voitures: this.state.voitures.filter(voiture => voiture.id !== voitureId)
                    })

                }
            })

    }


    render() { return (
        <div>
            <div style={{"display":this.state.show ? "block" : "none"}}>
                <MyToast children = {{show:this.state.show, message:"Voiture supprimée avecsuccès.", type : "danger"}}/>
            </div>
        <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header> <FontAwesomeIcon icon={faList}/> Liste Voitures </Card.Header>
            <Card.Body>
                <Table bordered hover striped variant="dark">
                    <thead>
                    <tr>
                        <th>Marque</th>
                        <th>Modele</th>
                        <th>Couleur</th>
                        <th>Annee</th>
                        <th>Prix</th>
                    </tr><
                    /thead>
                    <tbody>
                    {this.state.voitures.length  === 0 ?
                        <tr align="center">
                            <td colSpan="6">
                                 Voitures disponibles.
                            </td>
                        </tr>:
                        this.state.voitures.map((voiture) => (
                            <tr key ={voiture.id} >
                                <td>{voiture.marque}</td>
                                <td>{voiture.modele}</td>
                                <td>{voiture.couleur}</td>
                                <td>{voiture.annee}</td>
                                <td>{voiture.prix}</td>
                                <td>
                                    <ButtonGroup>
                                        <Link to={"edit/"+voiture.id} className="btn btn-sm btn-outline-primary"> <FontAwesomeIcon icon={faEdit} /></Link>{' '}
                                        <Button size="sm" className="btn btn-sm btn-outline-danger"  onClick={this.deleteVoiture.bind(this,voiture.id)}><FontAwesomeIcon icon={faTrash}/></Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        ) )
                    }
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
        </div>
    );
    }
}
export default VoitureListe;