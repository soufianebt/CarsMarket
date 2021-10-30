package org.ensias.modules;
import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class Module {
	@Id
	
	private int id;
	private String nom;
	private String description;
	public Module(int id, String nom, String description) {
		this.id = id;
		this.nom = nom;
		this.description = description;
	}
	public Module() {
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
}
