package com.cours;
import static org.assertj.core.api.Assertions.assertThat;

import com.cours.module.Proprietaire;
import com.cours.module.Voiture;
import com.cours.module.VoitureRepo;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;
@RunWith(SpringRunner.class)
@DataJpaTest
//Si le test concerne uniquement les composantes JPA
//Lorsque cette annotation est utilisée, H2, Hibernate et Spring Data sont configurés
//automatiquement pour le test.
class VoitureRepoTest {
    @Autowired
    private TestEntityManager entityManager;
    //TestEntityManager est utilisée pour manipuler les entités persistantes
    @Autowired
    VoitureRepo voitureRepo;
    @Test
    public void ajouterVoiture() {
        Proprietaire proprietaire1 = new Proprietaire("Ali" , "Hassan");
        Voiture voiture = new Voiture ("MiolaCar","Uber","Blanche","M-2020", 2021, 180000, proprietaire1);
        entityManager.persistAndFlush(proprietaire1);
        entityManager.persistAndFlush(voiture);
//permet de faire persister ce tuple de l’entité Voiture
        assertThat(voiture.getId()).isNotNull();
//permet de tester qu'un tuple de Voiture a bien été ajoutée en mémoire H2
    }
    @Test
    public void supprimerVoiture() {
        Proprietaire proprietaire2 = new Proprietaire("Najat" , "Bani");
        entityManager.persistAndFlush(proprietaire2);
        entityManager.persistAndFlush(new Voiture ("MiolaCar","Uber","Blanche","M-2020", 2021, 180000, proprietaire2));
        entityManager.persistAndFlush(new Voiture ("MiniCooper","Uber","Rouge","C-2020", 2021, 180000, proprietaire2));
        voitureRepo.deleteAll();
        assertThat(voitureRepo.findAll()).isEmpty();
//permet de tester si tous les tuples ont été supprimés
    }
}
