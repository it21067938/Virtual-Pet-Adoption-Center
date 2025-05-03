import React from "react";
import Hero from "./Hero";
import PetList from "./../components/PetList";
import AdoptionGuide from "./AdoptionGuide";
import { AddPetForm } from './../components/AddPetForm';

function HomePage() {
  return (
    <div>
      <Hero />
      <div id="pet-journey">
        <AdoptionGuide />
      </div>
      <div id="pet-list">
        <PetList />
      </div>
      <div id="pet-add">
        <AddPetForm />
      </div>
    </div>
  );
}

export default HomePage;
