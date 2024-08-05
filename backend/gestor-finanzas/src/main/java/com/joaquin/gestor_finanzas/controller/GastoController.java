package com.joaquin.gestor_finanzas.controller;

import com.joaquin.gestor_finanzas.model.Gasto;
import com.joaquin.gestor_finanzas.service.IGastoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/gastos")
public class GastoController {

    @Autowired
    private IGastoService gastoService;

    @GetMapping
    public ResponseEntity<List<Gasto>> getAllGastos() {
        List<Gasto> gastos = gastoService.findGastos();
        return ResponseEntity.ok(gastos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Gasto> getGastoById(@PathVariable Long id) {
        Gasto gasto = gastoService.findGastoById(id);
        return gasto != null ? ResponseEntity.ok(gasto) : ResponseEntity.notFound().build();
    }

    @PostMapping("/{idPersona}")
    public ResponseEntity<?> createGasto(@PathVariable Long idPersona, @RequestBody Gasto gasto) {
        try {
            Gasto createdGasto = gastoService.addGasto(idPersona, gasto);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdGasto);

        } catch (Exception e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }

    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateGasto(@PathVariable Long id, @RequestBody Gasto updatedGasto) {
        try {
            Gasto gasto = gastoService.editGastoById(id, updatedGasto);
            return gasto != null ? ResponseEntity.ok(gasto) : ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteGasto(@PathVariable Long id) {
        try {
            gastoService.deleteGastoById(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }
    @DeleteMapping("/persona/{id}")
    public ResponseEntity<?> deleteGastoByIdPersona(@PathVariable Long id) {
        try {
            gastoService.deleteGastoByIdPersona(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }
}
