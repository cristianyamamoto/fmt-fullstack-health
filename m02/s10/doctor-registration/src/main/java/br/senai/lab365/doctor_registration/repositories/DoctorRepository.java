package br.senai.lab365.doctor_registration.repositories;

import br.senai.lab365.doctor_registration.models.DoctorModel;
import br.senai.lab365.doctor_registration.models.Especialidade;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface DoctorRepository extends JpaRepository<DoctorModel, Long> {

    Page<DoctorModel> findByNomeContainingIgnoreCaseAndEspecialidadeAndDataNascimento(
            String nome, Especialidade especialidade, LocalDate dataNascimento, Pageable page
    );
    Page<DoctorModel> findByNomeContainingIgnoreCase(
            String nome, Pageable page
    );
    Page<DoctorModel> findByNomeContainingIgnoreCaseAndEspecialidade(
            String nome, Especialidade especialidade, Pageable page
    );
    Page<DoctorModel> findByNomeContainingIgnoreCaseAndDataNascimento(
            String nome, LocalDate dataNascimento, Pageable page
    );

}
