package com.joaquin.gestor_finanzas.service;

import com.joaquin.gestor_finanzas.model.Persona;

import java.util.List;

public interface IPersonaService {
    public List<Persona> findPersonas();
    public Persona findPersonaById(Long id);
    public void deletePersonaById(Long id);
    public Persona editPersonaById(Long id, Persona persona);
    public Persona addPersona(Persona persona);
}
