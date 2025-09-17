export type Tour = {
  slug: string;
  title: string;
  region: string;
  durationDays: number;
  priceUSD: number;
  difficulty: "Easy" | "Moderate" | "Challenging";
  description: string;
  highlights: string[];
  images: string[];
};

export const tours: Tour[] = [
  {
    slug: "arenal-volcano-hot-springs",
    title: "Arenal Volcano & Hot Springs",
    region: "La Fortuna / Arenal",
    durationDays: 2,
    priceUSD: 389,
    difficulty: "Easy",
    description:
      "Experience the iconic Arenal Volcano with guided rainforest walks, hanging bridges, and a relaxing evening in world-class hot springs.",
    highlights: [
      "Guided rainforest walk with wildlife spotting",
      "Arenal hanging bridges",
      "Evening soak in natural hot springs",
      "Local farm-to-table lunch",
    ],
    images: [
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
      "https://images.unsplash.com/photo-1544989164-31dc3c645987",
      "https://images.unsplash.com/photo-1520974698733-5cc67d2a5f86",
    ],
  },
  {
    slug: "monteverde-cloud-forest",
    title: "Monteverde Cloud Forest Canopy",
    region: "Monteverde",
    durationDays: 2,
    priceUSD: 449,
    difficulty: "Moderate",
    description:
      "Explore the mystical Monteverde Cloud Forest with expert guides. Walk suspended bridges, spot quetzals, and glide on zip-lines over the canopy.",
    highlights: [
      "Cloud forest reserve entrance",
      "Birdwatching with chances to see resplendent quetzal",
      "Zip-line canopy tour",
      "Coffee & chocolate experience",
    ],
    images: [
      "https://images.unsplash.com/photo-1482192505345-5655af888cc4",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    ],
  },
  {
    slug: "manuel-antonio-national-park",
    title: "Manuel Antonio Wildlife & Beaches",
    region: "Manuel Antonio",
    durationDays: 1,
    priceUSD: 159,
    difficulty: "Easy",
    description:
      "Discover pristine beaches and abundant wildlife in Manuel Antonio National Park. Ideal for families and nature lovers.",
    highlights: [
      "Guided national park hike",
      "White-sand beaches and calm bays",
      "Sloths, monkeys, and toucans",
      "Snorkeling option (seasonal)",
    ],
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    ],
  },
  {
    slug: "tortuguero-canals",
    title: "Tortuguero Canals & Turtle Nesting",
    region: "Caribbean / Tortuguero",
    durationDays: 3,
    priceUSD: 699,
    difficulty: "Moderate",
    description:
      "Navigate the Amazon-like canals of Tortuguero. Night patrols during nesting season offer responsible turtle watching experiences.",
    highlights: [
      "Boat safari through jungle canals",
      "Turtle nesting (seasonal, Jul–Oct)",
      "Local Caribbean cuisine",
      "Community-led conservation briefing",
    ],
    images: [
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
      "https://images.unsplash.com/photo-1456926631375-92c8ce872def",
    ],
  },
  {
    slug: "guanacaste-beach-hopping",
    title: "Guanacaste Beach Hopping",
    region: "Guanacaste",
    durationDays: 1,
    priceUSD: 179,
    difficulty: "Easy",
    description:
      "Sun-soaked day exploring Guanacaste’s best beaches with optional surfing, snorkeling, and sunset sailing.",
    highlights: [
      "Curated beach stops (Conchal, Flamingo, Tamarindo)",
      "Snorkeling gear included",
      "Sunset catamaran (optional add-on)",
      "Beachfront lunch",
    ],
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    ],
  },
];
