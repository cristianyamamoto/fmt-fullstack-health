package br.senai.lab365.doctor_registration.dtos;

import br.senai.lab365.doctor_registration.models.Especialidade;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import java.time.LocalDate;

public class DoctorSummary {
    private String nome;

    @JsonSerialize
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataNascimento;

    private Especialidade especialidade;

    public DoctorSummary(String nome, LocalDate dataNascimento, Especialidade especialidade) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.especialidade = especialidade;
    }

    public DoctorSummary() {

    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public Especialidade getEspecialidade() {
        return especialidade;
    }

    public void setEspecialidade(Especialidade especialidade) {
        this.especialidade = especialidade;
    }
}
