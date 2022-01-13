import React from "react";
import NavigationBar from "./NavigationBar";
import {Container, Row} from "react-bootstrap";
import {Col} from "reactstrap";
import Footer from "./Footer";
class  Bienvenue extends React.Component{

   render() {
       const marginTop={marginTop:"20px"};
       return (
           <div className="jumbotron m-3">
               <h1>
                   Bienvenue au Magasin des Voitures</h1>
               <blockquote className= "blockquote mb-0">
                   <p>Le meilleur de nos voitures est exposé près de chez vous</p>
                   <Footer/>
               </blockquote>
           </div>
       );
   }
}
export  default Bienvenue;