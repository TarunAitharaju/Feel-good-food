export interface PricingTier {
  tier: string;
  price: number;
  meals: string;
  features: string[];
  featured?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    tier: "Lite",
    price: 65,
    meals: "5 meals · Mon–Fri",
    features: [
      "1 portion per meal",
      "Weekly rotating menu",
      "Community pickup included",
    ],
  },
  {
    tier: "Standard",
    price: 120,
    meals: "10 meals · Mon–Fri",
    features: [
      "2 portions per meal",
      "Weekly rotating menu",
      "Dietary preferences",
    ],
    featured: true,
  },
  {
    tier: "Family",
    price: 180,
    meals: "10 meals · larger portions",
    features: [
      "Family-size portions",
      "Weekly rotating menu",
      "Dietary preferences",
    ],
  },
];
