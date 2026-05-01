export type TagType = "veg" | "spicy" | "mild" | "egg-free" | "jain";

export interface DishTag {
  label: string;
  type: TagType;
}

export interface DayMeal {
  day: string;
  dayShort: string;
  dish: string;
  telugu: string;
  description: string;
  tags: DishTag[];
  image: string;
  accent: string; // dominant warm color of the dish
}

export const SAMPLE_MENU: DayMeal[] = [
  {
    day: "Monday",
    dayShort: "Mon",
    dish: "Gutti Vankaya",
    telugu: "గుత్తి వంకాయ",
    description: "Stuffed baby eggplant simmered in a tangy peanut-sesame masala.",
    tags: [{ label: "Vegetarian", type: "veg" }],
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
    accent: "#7c3a1e",
  },
  {
    day: "Tuesday",
    dayShort: "Tue",
    dish: "Gongura Chicken",
    telugu: "గోంగూర చికెన్",
    description: "Tender chicken cooked with sorrel leaves and red chillies.",
    tags: [{ label: "Spicy", type: "spicy" }],
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80",
    accent: "#8b2500",
  },
  {
    day: "Wednesday",
    dayShort: "Wed",
    dish: "Pulihora",
    telugu: "పులిహోర",
    description: "Tangy tamarind rice with peanuts and curry leaves.",
    tags: [
      { label: "Vegetarian", type: "veg" },
      { label: "Egg-free",   type: "egg-free" },
    ],
    image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=600&q=80",
    accent: "#7a5c00",
  },
  {
    day: "Thursday",
    dayShort: "Thu",
    dish: "Pesarattu",
    telugu: "పెసరట్టు",
    description: "Crispy green gram dosa served with ginger chutney and upma.",
    tags: [{ label: "Vegetarian", type: "veg" }],
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80",
    accent: "#2d5a1e",
  },
  {
    day: "Friday",
    dayShort: "Fri",
    dish: "Mutton Biryani",
    telugu: "మటన్ బిర్యానీ",
    description: "Slow-cooked goat biryani with saffron, fried onions, and raita.",
    tags: [{ label: "Spicy", type: "spicy" }],
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
    accent: "#6b3d00",
  },
];