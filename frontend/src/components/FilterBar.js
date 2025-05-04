import React from "react";
import { hero } from "../assets/assets";

function FilterBar({
  setFilter,
  setQuestionFilter,
  petAge,
  setPetAge,
  petPersonality,
  setPetPersonality,
}) {
  function filterItem(value) {
    setFilter(value);
    setQuestionFilter(value);

    const petListElement = document.getElementById("pet-list");
    if (petListElement) {
      petListElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  function explorePets() {
    setQuestionFilter(`${petAge} years old, ${petPersonality}`);
    const petListElement = document.getElementById("pet-list");
    if (petListElement) {
      petListElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="p-8 mt-7">
      <div className="flex space-x-10">
        <img className="h-200 rounded-3xl" src={hero} alt="Hero" />
        <div>
          <p className="text-6xl font-semibold">
            Embrace the <span className="text-purple-800">Love</span> of{" "}
            <span className="text-purple-800">Pet</span> Companionship
          </p>

          <p className="text-2xl mt-5 mb-6">
            Discover Your New Best Friend ...
          </p>

          <div className="flex space-x-5">
            <button
              onClick={() => filterItem("Dog")}
              className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
            >
              Dog
            </button>
            <button
              onClick={() => filterItem("Cat")}
              className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
            >
              Cat
            </button>
            <button
              onClick={() => filterItem("Other")}
              className="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
            >
              Other
            </button>
          </div>

          {/* Extra form inputs */}
          <div className="mt-5">
            <label
              htmlFor="pet-age"
              className="block mb-2 text-m font-medium text-gray-600"
            >
              Do you prefer a younger pet or a more mature companion?
            </label>
            <input
              type="number"
              id="pet-age"
              placeholder="1"
              value={petAge}
              onChange={(e) => setPetAge(e.target.value)}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white text-xs focus:ring-blue-500 focus:border-blue-500"
            />

            <label
              htmlFor="pet-personality"
              className="mt-5 block mb-2 text-m font-medium text-gray-600"
            >
              What personality fits you best?
            </label>
            <input
              type="text"
              id="pet-personality"
              placeholder="Friendly"
              value={petPersonality}
              onChange={(e) => setPetPersonality(e.target.value)}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white text-xs focus:ring-blue-500 focus:border-blue-500"
            />

            <div className="flex justify-end mt-5">
              <button
                onClick={explorePets}
                className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 border rounded-3xl flex items-center"
              >
                Explore Available Pets
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
