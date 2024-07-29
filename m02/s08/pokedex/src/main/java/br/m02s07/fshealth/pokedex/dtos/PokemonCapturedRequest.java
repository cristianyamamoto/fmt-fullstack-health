package br.m02s07.fshealth.pokedex.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class PokemonCapturedRequest {

    @NotNull private int number;
    @NotBlank private String name;
    @NotBlank private String description;
    @NotBlank private String imageURL;
    @NotBlank private String type;
    @NotBlank private String category;
    @NotBlank private String habitat;
    @NotBlank private Double height;
    @NotBlank private Double weight;
    @NotBlank private boolean captured;
}
