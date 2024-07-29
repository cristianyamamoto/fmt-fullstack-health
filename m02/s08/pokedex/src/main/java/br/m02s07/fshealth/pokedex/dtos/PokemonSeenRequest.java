package br.m02s07.fshealth.pokedex.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class PokemonSeenRequest {

    @NotNull private int number;
    @NotBlank String name;
    @NotBlank private String category;
    @NotBlank private String habitat;

    @NotNull
    public int getNumber() {
        return number;
    }

    public void setNumber(@NotNull int number) {
        this.number = number;
    }

    public @NotBlank String getName() {
        return name;
    }

    public void setName(@NotBlank String name) {
        this.name = name;
    }

    public @NotBlank String getCategory() {
        return category;
    }

    public void setCategory(@NotBlank String category) {
        this.category = category;
    }

    public @NotBlank String getHabitat() {
        return habitat;
    }

    public void setHabitat(@NotBlank String habitat) {
        this.habitat = habitat;
    }
}
