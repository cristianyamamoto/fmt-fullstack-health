package br.senai.lab365.doctor_registration.services;

import br.senai.lab365.doctor_registration.dtos.DoctorFilter;
import br.senai.lab365.doctor_registration.dtos.DoctorRequest;
import br.senai.lab365.doctor_registration.dtos.DoctorResponse;
import br.senai.lab365.doctor_registration.dtos.DoctorSummary;
import br.senai.lab365.doctor_registration.mappers.DoctorMapper;
import br.senai.lab365.doctor_registration.models.DoctorModel;
import br.senai.lab365.doctor_registration.models.Especialidade;
import br.senai.lab365.doctor_registration.repositories.DoctorRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;


@Service
public class DoctorService {

    private final DoctorRepository repository;

    public DoctorService(DoctorRepository repository) {
        this.repository = repository;
    }

    public void register(DoctorRequest request) {
        repository.save(DoctorMapper.map(request));
    }

    public void update(Long id, DoctorRequest request) {
        DoctorModel doctor = repository.findById(id).orElseThrow(EntityNotFoundException::new);
        repository.save(DoctorMapper.updateMap(request, doctor));
    }

    public Page<DoctorSummary> list(DoctorFilter filter, Pageable page) {

        Page<DoctorModel> filteredDoctors;
        if(filter != null){
            String nome = filter.getNome() == null ? "" : filter.getNome();
            Especialidade especialidade = filter.getEspecialidade();
            LocalDate dataNascimento = filter.getDataNascimento();

            if (dataNascimento == null && especialidade == null) {
                filteredDoctors = repository.findByNomeContainingIgnoreCase(
                        nome,
                        page
                );
            } else if (especialidade == null) {
                filteredDoctors = repository.findByNomeContainingIgnoreCaseAndDataNascimento(
                        nome,
                        dataNascimento,
                        page
                );
            } else if (dataNascimento == null) {
                filteredDoctors = repository.findByNomeContainingIgnoreCaseAndEspecialidade(
                        nome,
                        especialidade,
                        page
                );
            } else {
                filteredDoctors = repository.findByNomeContainingIgnoreCaseAndEspecialidadeAndDataNascimento(
                        nome,
                        especialidade,
                        dataNascimento,
                        page
                );
            }
        } else {
            filteredDoctors = repository.findAll(page);
        }

        return filteredDoctors.map(DoctorMapper::summaryMap);
    }

    public DoctorResponse get(Long id) {
        DoctorModel doctor = repository.findById(id).orElseThrow(EntityNotFoundException::new);
        return DoctorMapper.getMap(doctor);
    }
}
