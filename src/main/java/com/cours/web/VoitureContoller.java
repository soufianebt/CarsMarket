package com.cours.web;

import com.cours.module.Voiture;
import com.cours.module.VoitureRepo;
import com.sun.org.apache.bcel.internal.generic.RETURN;
import org.aspectj.weaver.ast.Literal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VoitureContoller {
    @Autowired
    private VoitureRepo voitureRepo;

    @RequestMapping("/voiture")
    public Iterable<Voiture> getVoitures(){
        return voitureRepo.findAll();
    }
}
