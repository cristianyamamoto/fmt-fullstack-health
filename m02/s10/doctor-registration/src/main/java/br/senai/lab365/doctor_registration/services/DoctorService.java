package br.senai.lab365.doctor_registration.services;

import br.senai.lab365.doctor_registration.dtos.DoctorRequest;
import br.senai.lab365.doctor_registration.mappers.DoctorMapper;
import br.senai.lab365.doctor_registration.repositories.DoctorRepository;
import org.springframework.stereotype.Service;


@Service
public class DoctorService {

    private final DoctorRepository repository;

    public DoctorService(DoctorRepository repository) {
        this.repository = repository;
    }

    public void register(DoctorRequest request) {
        repository.save(DoctorMapper.map(request));
    }
}
