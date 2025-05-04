import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { api } from "../services/ApiProvider";
import { celebration } from "../assets/assets";
import MoodsFilter from "./MoodsFilter";
import { pdfGenerator } from "./pdf/pdfGenerator";

function PetList({ search, filter, moodFilter, setMoodFilter, questionFilter, setSelectedPet, setQuestionFilter, petAge, petPersonality }) {

  const { url, getPets, adoptPet, deletePet } = useContext(api);
  const [pets, setPets] = useState([]);

  const handleUpdate = (petId) => {
    const petToUpdate = pets.find((pet) => pet._id === petId);
    setSelectedPet(petToUpdate);

    const petListElement = document.getElementById("pet-add");
    if (petListElement) {
      petListElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get(`${url}${getPets}`);
        setPets(response.data.data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchPets();
  }, [url, getPets]);

  const handleAdopt = async (id) => {
    try {
      const endpoint = adoptPet.replace(":id", id);
      const response = await axios.patch(`${url}${endpoint}`);

      if (response.data.success) {
        toast.success("Pet Adopted Successfully! 🎉");
      } else {
        toast.error("Failed to adopt the pet.");
      }
    } catch (error) {
      console.error("Adoption error:", error);
      toast.error("Error while adopting the pet.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const endpoint = deletePet.replace(":id", id);
      const response = await axios.delete(`${url}${endpoint}`);
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error deleting pet.");
      console.error(error);
    }
  };

  const filteredPets = pets.filter((pet) => {
    const matchesSearch = pet.name.toLowerCase().includes(search.toLowerCase());
    const matchesSpecies = filter ? pet.species === filter : true;
    if (filter === "Other") {
      return pet.species !== "Dog" && pet.species !== "Cat";
    }
    const matchesAge = petAge ? pet.age === Number(petAge) : true;
    const matchesPersonality = petPersonality ? pet.personality.toLowerCase().includes(petPersonality.toLowerCase()) : true;
    const matchesMood = moodFilter
      ? pet.mood.toLowerCase() === moodFilter.toLowerCase()
      : true;

    return matchesSearch && matchesSpecies && matchesMood && matchesAge && matchesPersonality && pet.species === filter;
  });

  return (
    <>
      <h2 className="flex items-center justify-center gap-2 text-4xl mt-8 font-semibold text-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-purple-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 
      .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 
      1.125-1.125h2.25c.621 0 1.125.504 
      1.125 1.125V21h4.125c.621 0 1.125-.504 
      1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        Looking for a Home ...
      </h2>

      <MoodsFilter moodFilter={moodFilter} setMoodFilter={setMoodFilter} />

      <div className="flex p-8 flex-wrap mt-2 gap-10 justify-center">
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <div
              key={pet._id}
              className="w-64 h-80 p-6 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col justify-between"
            >
              <div className="flex flex-col">
                <div className="flex items-center">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-purple-800 dark:text-gray">
                    {pet.name}
                  </h5>
                  {pet.adopted ? (
                    <img className="w-10 ml-20" src={celebration} alt="" />
                  ) : (
                    ""
                  )}
                </div>
                <p className="mb-1 text-gray-500 dark:text-gray-400">
                  Species: {pet.species}
                </p>
                <p className="mb-1 text-gray-500 dark:text-gray-400">
                  Age: {pet.age}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Personality: {pet.personality}
                </p>

                {pet.adopted ? (
                  <p className="text-gray-500 dark:text-gray-400">
                    Adopted At:{" "}
                    {pet.adoption_date && pet.adoption_date.split("T")[0]}
                  </p>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">
                    Mood:
                    {pet.mood.toLowerCase() === "happy" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 inline-block ml-1 text-green-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                        />
                      </svg>
                    )}
                    {pet.mood.toLowerCase() === "sad" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 inline-block ml-1 text-red-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                        />
                      </svg>
                    )}
                  </p>
                )}
              </div>

              <div className="flex justify-between items-center mt-4">
                {pet.adopted ? (
                  <>
                    <div
                      onClick={() => pdfGenerator(pet)}
                      className="cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
                        />
                      </svg>
                    </div>

                    <div
                      onClick={() => handleDelete(pet._id)}
                      className="cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 text-red-700 ml-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </div>

                    <span className="text-green-600 font-bold ml-auto">
                      Adopted
                    </span>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-blue-800"
                      onClick={() => handleUpdate(pet._id)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>

                    <button
                      onClick={() => handleAdopt(pet._id)}
                      className="ml-auto bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-600 hover:border-transparent rounded"
                    >
                      Adopt
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>Loading Pets ....</p>
        )}
      </div>
    </>
  );
}

export default PetList;
