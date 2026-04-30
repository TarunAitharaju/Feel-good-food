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
  cook: string;
  description: string;
  tags: DishTag[];
  gradient: string;
}

export const SAMPLE_MENU: DayMeal[] = [
  {
    day: "Monday",
    dayShort: "Mon",
    dish: "Gutti Vankaya",
    telugu: "గుత్తి వంకాయ",
    cook: "Lakshmi P.",
    description:
      "Stuffed baby eggplant simmered in a tangy peanut-sesame masala.",
    tags: [{ label: "Vegetarian", type: "veg" }],
    gradient: "from-forest/60 to-forest",
  },
  {
    day: "Tuesday",
    dayShort: "Tue",
    dish: "Gongura Chicken",
    telugu: "గోంగూర చికెన్",
    cook: "Padma S.",
    description: "Tender chicken cooked with sorrel leaves and red chillies.",
    tags: [{ label: "Spicy", type: "spicy" }],
    gradient: "from-terra/60 to-terra",
  },
  {
    day: "Wednesday",
    dayShort: "Wed",
    dish: "Pulihora",
    telugu: "పులిహోర",
    cook: "Sita R.",
    description: "Tangy tamarind rice with peanuts and curry leaves.",
    tags: [
      { label: "Vegetarian", type: "veg" },
      { label: "Egg-free", type: "egg-free" },
    ],
    gradient: "from-gold/60 to-gold",
  },
  {
    day: "Thursday",
    dayShort: "Thu",
    dish: "Pesarattu",
    telugu: "పెసరట్టు",
    cook: "Lakshmi P.",
    description:
      "Crispy green gram dosa served with ginger chutney and upma.",
    tags: [{ label: "Vegetarian", type: "veg" }],
    gradient: "from-forest/60 to-forest-mid",
  },
  {
    day: "Friday",
    dayShort: "Fri",
    dish: "Mutton Biryani",
    telugu: "మటన్ బిర్యానీ",
    cook: "Kamala D.",
    description:
      "Slow-cooked goat biryani with saffron, fried onions, and raita.",
    tags: [{ label: "Spicy", type: "spicy" }],
    gradient: "from-terra/60 to-terra",
  },
];
