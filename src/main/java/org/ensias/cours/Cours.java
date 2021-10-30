package org.ensias.cours;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import org.ensias.modules.Module;
@Entity //pour dire à Jpa que Cours est une classe Entité qui va être mappée à la table Cours
public class Cours {
	@Id //pour dire à Jpa que id est la clé primaire de l’entité Cours, on la place juste avant id
	private int id;
	private String nom;
	private String description;

	@ManyToOne //pour dire à Jpa que c’est une relation Un à Plusieurs, on place cette notation juste avant
	//l’attribut module qui est instance de l’entité Module
	private Module module;
	
	public Cours(int id, String nom, String description, int moduleId) {
	this.id = id;
	this.nom = nom;
	this.description = description;
	this.module = new Module(moduleId,"","");
	}
	public Cours() {
	//chaque fois que nous utilisons un constructeur avec paramètres, il faut absolument ajouter le constructeur par 
		//défaut
	}
	public int getId() {
	return id;
	}
	public void setId(int id) {
	this.id = id;
	}
	public String getNom() {
	return nom;
	}
	public void setNom(String nom) {
	this.nom = nom;
	}
	public String getDescription() {
	return description;
	}
	public void setDescription(String description) {
	this.description = description;
	}
	public Module getModule() {
	return module;
	}
	public void setModule(Module module) {
	this.module = module;
	}
}