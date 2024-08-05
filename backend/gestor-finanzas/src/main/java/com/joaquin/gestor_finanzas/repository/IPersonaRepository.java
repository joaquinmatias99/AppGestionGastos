package com.joaquin.gestor_finanzas.repository;

import com.joaquin.gestor_finanzas.model.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepository extends JpaRepository<Persona, Long> {
}
