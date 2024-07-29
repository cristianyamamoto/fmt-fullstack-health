package br.m02s07.fshealth.pokedex.mappers;

import br.m02s07.fshealth.pokedex.dtos.PokemonSeenRequest;
import br.m02s07.fshealth.pokedex.models.Pokemon;

public class PokemonMapper {

    private PokemonMapper(){}

    public static Pokemon map(PokemonSeenRequest source){
        if(source == null) return null;

        Pokemon target = new Pokemon();

        target.setNumber(source.getNumber());
        target.setName(source.getName());
        target.setImageURL(source.get());
        target.setHabitat(source.getHabitat());

        return target;
    }
}
