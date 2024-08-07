package com.joaquin.gestor_finanzas.service;

import com.joaquin.gestor_finanzas.model.Gasto;

import com.joaquin.gestor_finanzas.model.Persona;
import com.joaquin.gestor_finanzas.repository.IGastoRespository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GastoService implements IGastoService {

    @Autowired
    private IGastoRespository gastoRepo;

    @Autowired
    private IPersonaService personaService;

    @Override
    public List<Gasto> findGastos() {
        return gastoRepo.findAll();
    }

    @Override
    public Gasto findGastoById(Long id) {
        return gastoRepo.findById(id).orElse(null);
    }

    @Override
    public List<Gasto> findGastoByIdPersona(Long idPersona) {
        return gastoRepo.findByIdPersona(idPersona);
    }

    @Override
    public void deleteGastoById(Long id) throws Exception{
        if(!gastoRepo.existsById(id)) {
            throw new IllegalArgumentException("No existe el gasto con id:" + id);
        }
        gastoRepo.deleteById(id);

    }

    @Override
    @Transactional
    public void deleteGastoByIdPersona(Long idPersona) throws Exception {
        if (gastoRepo.existsByIdPersona(idPersona)) {
            gastoRepo.deleteByIdPersona(idPersona);
        } else {
            throw new IllegalArgumentException("No existen gastos asociados de la persona con ID: " + idPersona);
        }
    }


    @Override
    public Gasto editGastoById(Long id, Gasto gasto) throws Exception {
        return gastoRepo.findById(id)
                .map(existingGasto -> {
                    existingGasto.setCategoria(gasto.getCategoria());
                    existingGasto.setMonto(gasto.getMonto());
                    existingGasto.setDetalle(gasto.getDetalle());
                    existingGasto.setFecha(gasto.getFecha());
                    existingGasto.setIdPersona(gasto.getIdPersona());
                    return gastoRepo.save(existingGasto);
                })
                .orElseThrow(() -> new IllegalArgumentException("No existe el gasto con id: " + id));
    }


    @Override
    public Gasto addGasto(Long idPersona, Gasto gasto) throws Exception {
        // Encuentra la persona por su ID
        Persona persona = personaService.findPersonaById(idPersona);
        if (persona != null) {
            // Asigna el idPersona al gasto
            gasto.setIdPersona(idPersona);

            // Guarda el gasto en el repositorio
            return gastoRepo.save(gasto);
        } else {
            throw new IllegalArgumentException("No existe persona con la id: " + idPersona);
        }



    }

}
