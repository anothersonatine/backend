
package com.def.def.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Proyectos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nombreP;
    private String descripcionP;
    private String img;
    private String link;

    public Proyectos() {
    }

    public Proyectos(String nombreP, String descripcionP, String img, String link) {
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.img = img;
        this.link = link;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombreP() {
        return nombreP;
    }

    public void setNombreP(String nombreP) {
        this.nombreP = nombreP;
    }

    public String getDescripcionP() {
        return descripcionP;
    }

    public void setDescripcionP(String descripcionP) {
        this.descripcionP = descripcionP;
    }
    
    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
    
    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

}