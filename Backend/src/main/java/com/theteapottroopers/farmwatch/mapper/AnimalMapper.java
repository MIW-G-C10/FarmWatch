package com.theteapottroopers.farmwatch.mapper;

import com.theteapottroopers.farmwatch.dto.AnimalDetailDto;
import com.theteapottroopers.farmwatch.dto.AnimalOverviewDto;
import com.theteapottroopers.farmwatch.model.Animal;

/**
 * @author Eelke Mulder
 */
public class AnimalMapper extends Mapper{
    public AnimalOverviewDto toAnimalOverviewDto(Animal animal){
       return new AnimalOverviewDto(
               animal.getId(),
               animal.getName(),
               animal.getCommonName());
    }

    public AnimalDetailDto toAnimalDetailDto(Animal animal){
        return new AnimalDetailDto(
                animal.getId(),
                animal.getName(),
                animal.getCommonName(),
                animal.getSpecies(),
                animal.getDescription(),
                animal.getDateOfBirth(),
                animal.getImageUrl());
    }

    public Animal toAnimal(AnimalDetailDto animalDetailDto) {return new Animal(
            emptyToNull(animalDetailDto.getName()),
            emptyToNull(animalDetailDto.getCommonName()),
            emptyToNull(animalDetailDto.getSpecies()),
            emptyToNull(animalDetailDto.getDescription()),
            animalDetailDto.getDateOfBirth(),
            emptyToNull(animalDetailDto.getImageUrl()));}
}
