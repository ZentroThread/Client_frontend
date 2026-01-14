import gownImg from "@/assets/items/jwl1.jpeg";
import lehengaImg from "@/assets/items/saree1.jpeg";
import sareeImg from "@/assets/items/saree2.jpg";

export type Dress = {
  id: number;
  name: string;
  pricePerDay: number;
  image: string;
  category: "bridal-sarees" | "lehenga" | "jewellery" | "nilame-suits" | "party-dresses";
};

export const dresses: Dress[] = [
  {
    id: 1,
    name: "Classic Bridal Saree",
    pricePerDay: 8000,
    image: sareeImg,
    category: "bridal-sarees",
  },
  {
    id: 2,
    name: "Luxury Lehenga",
    pricePerDay: 6500,
    image: lehengaImg,
    category: "lehenga",
  },
  {
    id: 3,
    name: "Elegant Party Gown",
    pricePerDay: 7500,
    image: gownImg,
    category: "party-dresses",
  },
  {
    id: 4,
    name: "Royal Nilame Suit",
    pricePerDay: 9000,
    image: gownImg,
    category: "nilame-suits",
  },
  {
    id: 5,
    name: "Designer Bridal Saree",
    pricePerDay: 8500,
    image: sareeImg,
    category: "bridal-sarees",
  },
  {
    id: 6,
    name: "Modern Lehenga",
    pricePerDay: 7000,
    image: lehengaImg,
    category: "lehenga",
  },
];
