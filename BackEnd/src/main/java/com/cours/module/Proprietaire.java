package com.cours.module;

import com.fasterxml.jackson.annotation.JsonIgnore;
import  lombok.Data;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@RequiredArgsConstructor
@NoArgsConstructor
public class Proprietaire {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    @NonNull
    private String nom;
    @NonNull
    private String prenom;
    @OneToMany(cascade = CascadeType.ALL, mappedBy="proprietaire")
    @JsonIgnore
    private List<Voiture> voitures;

}