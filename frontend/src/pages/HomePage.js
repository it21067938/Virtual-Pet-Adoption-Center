import React, { useState } from "react";
import PetList from "./../components/PetList";
import AdoptionGuide from "./AdoptionGuide";
import { AddPetForm } from "./../components/AddPetForm";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FilterBar from "../components/FilterBar";

function HomePage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [moodFilter, setMoodFilter] = useState("");
  const [selectedPet, setSelectedPet] = useState(null);
  const [petAge, setPetAge] = useState("");
  const [petPersonality, setPetPersonality] = useState("");
  const [questionFilter, setQuestionFilter] = useState("");

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <FilterBar
        filter={filter}
        setFilter={setFilter}
        petAge={petAge}
        setPetAge={setPetAge}
        petPersonality={petPersonality}
        setPetPersonality={setPetPersonality}
        setQuestionFilter={setQuestionFilter}
      />

      <div id="pet-journey">
        <AdoptionGuide />
      </div>
      <div id="pet-list">
        <PetList
          search={search}
          filter={filter}
          moodFilter={moodFilter}
          setMoodFilter={setMoodFilter}
          questionFilter={questionFilter}
          setSelectedPet={setSelectedPet}
          setQuestionFilter={setQuestionFilter}
          petAge={petAge}
          petPersonality={petPersonality}
        />
      </div>
      <div id="pet-add">
        <AddPetForm selectedPet={selectedPet} />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
