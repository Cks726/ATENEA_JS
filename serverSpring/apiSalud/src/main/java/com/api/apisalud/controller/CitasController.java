package com.api.apisalud.controller;

import com.api.apisalud.dto.DtoCitaEspecialidad;
import com.api.apisalud.entities.Citas;
import com.api.apisalud.entities.Doctores;
import com.api.apisalud.services.CitasService;
import com.api.apisalud.utils.Especialidad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/citas")
public class CitasController {

    @Autowired
    CitasService citasService;

    //MÉTODO CREAR CITAS POR NOMBRE DEL DOCTOR
    @PostMapping("/created")
    public ResponseEntity<Void> crearCita(@RequestBody Citas citas) {
        citasService.crearCita(citas);
        return ResponseEntity.ok().build();
    }


    //MÉTODO CONSULTAR CITAS POR ESPECIALIDAD
    @GetMapping("/especialidad")
    public List<DtoCitaEspecialidad> obtenerCitaPorEspecialidad(@RequestParam String especialidad){
        return citasService.getCitasByEspecialidad(especialidad);
    }
}
