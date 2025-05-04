import { jsPDF } from "jspdf";
import { logo } from "../../assets/assets";

export const pdfGenerator = (pet) => {
  const doc = new jsPDF();
  doc.addImage(logo, 'PNG', 15, 10, 50, 30);
  const pageWidth = doc.internal.pageSize.getWidth();

  doc.setFontSize(18);
  doc.setTextColor(0, 102, 204);
  doc.text("Pet Adoption Certificate", pageWidth / 2, 45, { align: "center" });

  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text(
    "Congratulations on adopting a pet! Below are the official details of your adopted companion.",
    pageWidth / 2,
    55,
    { align: "center" }
  );

  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text(`Name: ${pet.name}`, 20, 80);
  doc.text(`Age: ${pet.age}`, 20, 90);
  doc.text(`Species: ${pet.species}`, 20, 100);
  doc.text(`Personality: ${pet.personality}`, 20, 110);
  doc.text(`Mood: ${pet.mood}`, 20, 120);
  doc.text(`Adopted At: ${pet.adoption_date}`, 20, 130);
  doc.text(`Status: Adopted`, 20, 140);

  doc.save("PetPlace.pdf");
};
