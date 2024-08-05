package com.joaquin.gestor_finanzas.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Gasto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    @Enumerated(EnumType.STRING)
    @Column(name="categoria")
    private Categoria categoria;
    @Column(name="monto")
    private Double monto;
    @Column(name="fecha")
    private LocalDate fecha;
    @Column(name="id_persona")
    private Long idPersona;
}
