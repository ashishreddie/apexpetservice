export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: "scissors" | "home" | "stethoscope" | "syringe" | "activity" | "pill" | "graduation-cap" | "footprints";
  petNameOptional: boolean; // true = pet name field is optional on the booking form
  image: string;
};

export const services: Service[] = [
  {
    slug: "grooming",
    name: "Pet Grooming",
    tagline: "Baths, trims, and tidy paws",
    description:
      "Full-service grooming including bathing, brushing, nail trimming, and breed-specific styling for dogs and cats.",
    icon: "scissors",
    petNameOptional: true,
    image: "https://placedog.net/800/600?id=15",
  },
  {
    slug: "boarding",
    name: "Pet Boarding",
    tagline: "A comfortable home away from home",
    description:
      "Safe, supervised overnight and day boarding with clean kennels, regular feeding, and playtime.",
    icon: "home",
    petNameOptional: true,
    image: "https://placedog.net/800/600?id=22",
  },
  {
    slug: "consultation",
    name: "Consultation",
    tagline: "Expert diagnosis and advice",
    description:
      "One-on-one consultation with our experienced veterinarians for check-ups, concerns, or general pet health advice.",
    icon: "stethoscope",
    petNameOptional: false,
    image: "https://placedog.net/800/600?id=31",
  },
  {
    slug: "vaccination",
    name: "Vaccination",
    tagline: "Protection that lasts",
    description:
      "Core and lifestyle vaccinations for puppies, kittens, and adult pets, administered by qualified vets.",
    icon: "syringe",
    petNameOptional: false,
    image: "https://placekitten.com/800/600",
  },
  {
    slug: "surgery",
    name: "Surgery",
    tagline: "Major and minor procedures",
    description:
      "Surgical care ranging from routine minor procedures to major operations, carried out with modern equipment.",
    icon: "activity",
    petNameOptional: false,
    image: "https://placedog.net/800/601?id=8",
  },
  {
    slug: "pharmacy",
    name: "Pet Pharmacy",
    tagline: "Medicines and prescriptions",
    description:
      "In-house pharmacy stocked with prescription medicines, supplements, and everyday pet-care essentials.",
    icon: "pill",
    petNameOptional: false,
    image: "https://placekitten.com/801/600",
  },
  {
    slug: "training",
    name: "Pet Training",
    tagline: "Good habits, happy pets",
    description:
      "Behavioural and obedience training sessions tailored to your pet's age, breed, and temperament.",
    icon: "graduation-cap",
    petNameOptional: true,
    image: "https://placedog.net/801/601?id=44",
  },
  {
    slug: "pet-walking",
    name: "Pet Walking",
    tagline: "Daily exercise, sorted",
    description:
      "Scheduled walks for your dog with our trained handlers, keeping them active and socialised.",
    icon: "footprints",
    petNameOptional: true,
    image: "https://placedog.net/802/602?id=52",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

// Clinic is open 9 AM – 8 PM, all days. Hourly slots, last slot starts at 7 PM.
export const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
];
