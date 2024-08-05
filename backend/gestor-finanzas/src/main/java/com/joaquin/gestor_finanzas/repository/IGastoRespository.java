package com.joaquin.gestor_finanzas.repository;

import com.joaquin.gestor_finanzas.model.Gasto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IGastoRespository extends JpaRepository<Gasto,Long> {
    List<Gasto> findByIdPersona(Long idPersona);

    void deleteByIdPersona(Long idPersona);

    boolean existsByIdPersona(Long idPersona);
}
