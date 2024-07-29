package br.senai.lab365.doctor_registration.dtos;

import br.senai.lab365.doctor_registration.models.Especialidade;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public class DoctorRequest {
    @NotBlank
    private String nome;

    @NotBlank
    private String crm;

    @JsonDeserialize
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate dataNascimento;

    private String telefone;

    @NotNull
    private Especialidade especialidade;

    public @NotBlank String getNome() {
        return nome;
    }

    public void setNome(@NotBlank String nome) {
        this.nome = nome;
    }

    public @NotBlank String getCrm() {
        return crm;
    }

    public void setCrm(@NotBlank String crm) {
        this.crm = crm;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public @NotNull Especialidade getEspecialidade() {
        return especialidade;
    }

    public void setEspecialidade(@NotNull Especialidade especialidade) {
        this.especialidade = especialidade;
    }
}
