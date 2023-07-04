package com.api.apisalud.controller;

import com.api.apisalud.dto.DtoDoctor;
import com.api.apisalud.dto.DtoDoctorAll;
import com.api.apisalud.services.DoctoresService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/home")
public class DoctorController {

    @Autowired
    DoctoresService docService;

    @Autowired
    private ModelMapper modelMapper;

    //CREAR DOCTOR
    @PostMapping ("/created")
    public ResponseEntity<Void> createDoctor(@RequestBody DtoDoctorAll dtoDoctorAll){
        docService.newDoctor(dtoDoctorAll);
        return ResponseEntity.status(201).build();
    }

    //BUSCAR TODOS LOS DOCTORES
    @GetMapping ("/doctores")
    public ResponseEntity<List<DtoDoctorAll>> encontrarTodosDoc(){
        List<DtoDoctorAll> dtoDoctorAll = docService.findAll();
        return ResponseEntity.ok(dtoDoctorAll);
    }

    //BUSCAR TODOS LOS DOCTORES POR ID
    @GetMapping ("/doctores/{id}")
    public DtoDoctor mostrarPorId (@PathVariable long cc){
        return docService.findById(cc);
    }

    //ACTUALIZAR DOCTOR
    @PutMapping("/doctores/{id}")
    public ResponseEntity<Void> updateDoctor(@PathVariable long cc, @RequestBody DtoDoctorAll dtoDoctorAll){
        docService.save(dtoDoctorAll);
        return ResponseEntity.ok().build();
    }

    //ELIMINAR DOCTOR
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteDoctor(@PathVariable long cc){
        docService.delete(cc);
        return ResponseEntity.ok().build();
    }

}
