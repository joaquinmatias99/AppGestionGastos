package com.joaquin.gestor_finanzas.service;

import com.joaquin.gestor_finanzas.model.Persona;
import com.joaquin.gestor_finanzas.repository.IPersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonaService implements IPersonaService {

    @Autowired
    private IPersonaRepository personaRepo;

    @Override
    public List<Persona> findPersonas() {
        return personaRepo.findAll();
    }

    @Override
    public Persona findPersonaById(Long id) {
        return personaRepo.findById(id).orElse(null);
    }

    @Override
    public void deletePersonaById(Long id) {
        personaRepo.deleteById(id);
    }

    @Override
    public Persona editPersonaById(Long id, Persona persona) {
        return personaRepo.findById(id)
                .map(existingPersona -> {
                    existingPersona.setNombre(persona.getNombre());
                    existingPersona.setApellido(persona.getApellido());
                    existingPersona.setGastos(persona.getGastos());
                    return personaRepo.save(existingPersona);
                })
                .orElse(null);
    }

    @Override
    public Persona addPersona(Persona persona) {
        return personaRepo.save(persona);
    }
}
