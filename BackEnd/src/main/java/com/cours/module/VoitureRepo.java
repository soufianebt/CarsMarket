package com.cours.module;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface VoitureRepo extends CrudRepository<Voiture, Integer> {
    //Lister Voitures par marque
    List<Voiture> findByModele(@Param("modele") String modele);
    //Lister Voitures par couleur
    List<Voiture> findByCouleur(@Param("couleur") String couleur);

}
