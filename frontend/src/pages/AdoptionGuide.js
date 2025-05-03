import { MagnifyingGlassIcon, UserGroupIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import React from "react";
import { adoptPet } from "../assets/assets";

function AdoptionGuide() {
  return (
    <div className="flex flex-col gap-8 p-8 bg-white">
      <h2 className="text-4xl font-semibold text-center text-gray-800">
        Start Your Journey to Pet Parenthood
      </h2>

      <div className="flex flex-col md:flex-row items-center">
        
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex items-start gap-4">
            <MagnifyingGlassIcon className="w-10 h-10 text-purple-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Begin Your Pet Search</h3>
              <p className="text-gray-600 mt-1">
                Browse from our vast network of shelters and rescues to find your perfect pet.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <UserGroupIcon className="w-10 h-10 text-purple-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Get Ready to Meet the Pet</h3>
              <p className="text-gray-600 mt-1">
                View shelter details directly on the pet profile page and get recommendations for questions to ask at your visit.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CheckBadgeIcon className="w-10 h-10 text-purple-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Finalize Your Adoption</h3>
              <p className="text-gray-600 mt-1">
                Get ready to bring home your new pet. Use our adoption checklist for tips on caring for your new family member.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <img src={adoptPet} alt="Adopt a Pet" className="w-full max-w-md mx-auto" />
        </div>
        
      </div>
    </div>
  );
}

export default AdoptionGuide;
