package com.api.apisalud.controller;

import com.api.apisalud.entities.Pacientes;
import com.api.apisalud.services.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/paciente")
public class PacienteController {

    @Autowired
    PacienteService pacienteService;

    //CREAR PACIENTE
    @PostMapping("/create")
    public ResponseEntity<Void> createPaciente(@RequestBody Pacientes paciente){
        pacienteService.newPaciente(paciente);
        return ResponseEntity.status(201).build();
    }

    //BUSCAR TODOS LOS PACIENTES
    @GetMapping("/search")
    public ResponseEntity<List<Pacientes>> encontrarTodosPac(){
        List<Pacientes> paciente = pacienteService.findAllPacientes();
        return ResponseEntity.ok(paciente);
    }

    //BUSCAR TODOS LOS PACIENTES POR ID
    @GetMapping ("/pacientes/{cc}")
    public Pacientes mostrarPorIdPaciente (@PathVariable long cc){
        return pacienteService.findPacienteById(cc);
    }
}
