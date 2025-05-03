import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { api } from "../services/ApiProvider";
import { background } from "../assets/assets";

export const AddPetForm = () => {
  const { url, addPet } = useContext(api);

  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");
  const [personality, setPersonality] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const newPet = {
      name,
      species,
      age,
      personality,
    };

    const response = await axios.post(`${url}${addPet}`, newPet);
    if (response.data.success) {
      setName("");
      setSpecies("");
      setAge("");
      setPersonality("");
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div
      className="p-8 flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h2 className="flex items-center justify-center gap-2 text-4xl mt-8 font-semibold text-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-purple-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
          />
        </svg>
        Pet Registration ...
      </h2>

      <form 
        onSubmit={onSubmitHandler}
        className="justify-center w-full max-w-lg p-5 mt-10 bg-white/80 rounded-lg"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-name"
              type="text"
              name="name"
              placeholder="Tommy"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-species">
              Species
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-species"
              type="text"
              name="species"
              placeholder="Dog"
              value={species}
              onChange={(event) => setSpecies(event.target.value)}
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-age">
              Age
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-age"
              type="number"
              name="age"
              placeholder="1"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-personality">
              Personality
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-personality"
              type="text"
              name="personality"
              placeholder="Friendly"
              value={personality}
              onChange={(event) => setPersonality(event.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
