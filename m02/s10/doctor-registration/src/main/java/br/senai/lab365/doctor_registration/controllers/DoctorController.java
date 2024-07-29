package br.senai.lab365.doctor_registration.controllers;

import br.senai.lab365.doctor_registration.dtos.DoctorFilter;
import br.senai.lab365.doctor_registration.dtos.DoctorRequest;
import br.senai.lab365.doctor_registration.dtos.DoctorSummary;
import br.senai.lab365.doctor_registration.services.DoctorService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/doctor")
public class DoctorController {

    private DoctorService service;

    public DoctorController(DoctorService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void register(@Valid @RequestBody DoctorRequest request) {
        service.register(request);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void update(@PathVariable Long id, @RequestBody DoctorRequest request) {
        service.update(id, request);
    }

    @GetMapping
    public ResponseEntity<Page<DoctorSummary>> list(
            @RequestBody(required = false) DoctorFilter filter,
            Pageable page
    ){
        return ResponseEntity.ok(service.list(filter, page));
    }

}
