package com.joaquin.gestor_finanzas.service;

import com.joaquin.gestor_finanzas.model.Gasto;

import java.util.List;

public interface IGastoService {
    public List<Gasto> findGastos();

    public Gasto findGastoById(Long id);

    public List<Gasto> findGastoByIdPersona(Long id);

    public void deleteGastoById(Long id)throws Exception;

    public void deleteGastoByIdPersona(Long id)throws Exception;

    public Gasto editGastoById(Long id, Gasto gasto) throws Exception;

    public Gasto addGasto(Long idPersona, Gasto gasto) throws Exception;



}
