
package com.portfolio.def.Interface;

import com.portfolio.def.Entity.Persona;
import java.util.List;



public interface IPersonaService {
    
    //traer una persona//
    public List<Persona> getPersona();
    
    //guardar un objeto de tipo persona//
    public void savePersona(Persona persona);
    
    //eliminar un objeto buscandolo por id//
    public void deletePersona(Long id);
    
    //buscar una persona por id//
    public Persona findPersona(Long id);
}
