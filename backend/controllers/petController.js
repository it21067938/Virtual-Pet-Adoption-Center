import { addPetService, viewPetsService, viewPetService, updatePetService, adoptPetService, deletePetService, FilterPetByMoodService } from "../services/petService.js"

//Add a new pet
export const addPet = async(req, res) => {
    try {
        await addPetService(req);
        res.json({success: true, message: "Pet Added"});
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error In Pet Adding" });
    }
}

//View All Pets  
export const viewPets = async(req, res) => {
    try {
        const pets = await viewPetsService();
        res.status(200).json({ success: true, data: pets });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: "Failed to fetch pets." });
    }
}

//View a Single Pet  
export const viewPet = async(req, res) => {
    try {
        const id = req.params.id;
        const pet = await viewPetService(id);
        res.status(200).json({ success: true, data: pet });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: "Failed to fetch pet." });
    }
}

// Update a Pet’s Profile
export const updatePet = async (req, res) => {
    try {
        const id = req.params.id;
        const pet = await updatePetService(req.body, id);

        if (!pet) {
            return res.status(404).json({ success: false, message: "Pet not found" });
        }

        res.status(200).json({ success: true, message: "Update Successful!", pet });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error updating pet details", error: error.message });
    }
}

//Adopt a Pet  
export const adoptPet = async(req, res) => {
    try {
        const id = req.params.id;
        const pet = await adoptPetService(id);

        if (!pet) {
            return res.status(404).json({ success: false, message: "Pet not found" });
        }

        res.status(200).json({ success: true, message: "Pet Adopt Successful!", pet });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error in adopting", error: error.message });
    }
}

//Delete a Pet
export const deletePet = async(req, res) => {
    try {
        const id = req.params.id;
        const pet = await deletePetService(id);

        if (!pet) {
            return res.status(404).json({ success: false, message: "Pet not found" });
        }

        res.status(200).json({ success: true, message: "Pet delete Successful!"});
    } catch (error) {
        res.status(500).json({ success: false, message: "Error in Deleting", error: error.message });
    }
}

//Filter Pets by Mood 
export const filterPetByMood = async(req, res) => {
    try {
        const { mood } = req.query;

        if (!mood) {
            return res.status(400).json({ success: false, message: "Mood parameter is required" });
        }

        const pets = await FilterPetByMoodService(mood);

        res.status(200).json({ success: true, pets });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error in Filtering", error: error.message });
    }
}
