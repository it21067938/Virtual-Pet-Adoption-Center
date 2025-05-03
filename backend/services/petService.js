import petModel from "../models/petModel.js";
import { setMoodLogic } from "../utils/moodLogic.js";


//Add a new pet service
export const addPetService = async(req) => {
    const pet = new petModel({
        name: req.body.name,
        species: req.body.species,
        age: req.body.age,
        personality: req.body.personality
    })
    await pet.save();
}

//View All Pets service
export const viewPetsService = async() => {
    const pets = await petModel.find({});
    return pets;
}

//View a Single Pet service
export const viewPetService = async(id) => {
    const pet = await petModel.findById(id);
    return pet;
}

// Update a Pet’s Profile service
export const updatePetService = async (data, id) => {
    const { name, species, age, personality } = data;

    const updateData = {
        name,
        species,
        age,
        personality
    };

    const pet = await petModel.findByIdAndUpdate(id, updateData, { new: true });
    return pet;
}

//Adopt a Pet service
export const adoptPetService = async(id) => {

    const updateData = {
        adopted : true,
        adoption_date : Date.now(),
    };

    const pet = await petModel.findByIdAndUpdate(id, updateData, { new: true });
    return pet;
}

//Delete a Pet service
export const deletePetService = async(id) => {
    const pet = await petModel.findByIdAndDelete(id);
    return pet;
}

//Filter Pets by Mood service
export const FilterPetByMoodService = async(moodLogic) => {
    const pets = await petModel.find();

    const updatedPets = pets.map(pet => {
        const mood = setMoodLogic(pet.createdAt);

        return {
            ...pet.toObject(),
            mood
        };
    });

    const filteredPets = updatedPets.filter(pet => pet.mood.toLowerCase() === moodLogic.toLowerCase());

    return filteredPets;
}