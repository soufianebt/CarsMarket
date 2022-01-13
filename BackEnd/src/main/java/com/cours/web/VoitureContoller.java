package com.cours.web;

import com.cours.module.Voiture;
import com.cours.module.VoitureRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class VoitureContoller {
    @Autowired
    private VoitureRepo voitureRepo;

    @RequestMapping(value = "/voitures", method = RequestMethod.GET)
    public Iterable<Voiture> getVoitures(){
        return voitureRepo.findAll();
    }

    @RequestMapping(method=RequestMethod.POST, value="/voitures")
    public void addVoitures(@RequestBody Voiture voiture){
        voitureRepo.save(voiture);
    }
    @RequestMapping(method=RequestMethod.DELETE, value="/voitures/{id}")
    public void deleteVoitures(@PathVariable Integer id){
        voitureRepo.deleteById( id);
    }
}
