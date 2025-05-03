import express from 'express';
import { addPet, viewPets, viewPet, updatePet, adoptPet, deletePet, filterPetByMood } from '../controllers/petController.js';

const petRoute = express.Router();

petRoute.post("/POST/pets", addPet);
petRoute.get("/GET/pets", viewPets);
petRoute.get("/GET/pets/filter", filterPetByMood);
petRoute.get("/GET/pets/:id", viewPet);
petRoute.put("/PUT/pets/:id", updatePet);
petRoute.patch("/PATCH/pets/:id/adopt", adoptPet);
petRoute.delete("/DELETE/pets/:id", deletePet);

export default petRoute;
