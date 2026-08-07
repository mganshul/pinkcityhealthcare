export interface ServiceArea {
  name: string;
  description: string;
  availableServices: string[];
}

// Jaipur neighborhoods we regularly serve. "Available services" are a
// representative sample drawn from src/data/services.ts labels, not a
// restriction — every service is available in every area listed here.
export const serviceAreas: ServiceArea[] = [
  {
    name: "Jhotwara",
    description:
      "A key residential and industrial hub in northwest Jaipur, home to many of the families we already support.",
    availableServices: ["Home Nursing Care", "Elder Care", "Physiotherapy at Home"],
  },
  {
    name: "Vaishali Nagar",
    description:
      "One of Jaipur's most established residential neighborhoods, well within easy reach of our care coordinators.",
    availableServices: ["Home Nursing Care", "Elder Care", "ICU Care at Home"],
  },
  {
    name: "Mansarovar",
    description:
      "A large, well-connected residential zone in southwest Jaipur where we regularly place nurses and caregivers.",
    availableServices: ["Elder Care", "Patient Attendant", "Post Surgery Care"],
  },
  {
    name: "Malviya Nagar",
    description:
      "A busy residential and commercial area in south Jaipur, comfortably within our regular coverage.",
    availableServices: ["Home Nursing Care", "Physiotherapy at Home", "Doctor Visit at Home"],
  },
  {
    name: "Jagatpura",
    description:
      "A fast-growing residential pocket in southeast Jaipur, increasingly home to the families we serve.",
    availableServices: ["Elder Care", "Patient Attendant", "Home Nursing Care"],
  },
  {
    name: "Raja Park",
    description:
      "A centrally located, well-established neighborhood close to our care coordination team.",
    availableServices: ["Home Nursing Care", "Elder Care", "Injection at Home"],
  },
  {
    name: "C-Scheme",
    description:
      "Jaipur's central business and residential district, easily reached for both urgent and scheduled visits.",
    availableServices: ["ICU Care at Home", "Post Surgery Care", "Doctor Visit at Home"],
  },
  {
    name: "Vidhyadhar Nagar",
    description:
      "A planned residential township in north Jaipur where we maintain a steady caregiver presence.",
    availableServices: ["Elder Care", "Home Nursing Care", "Physiotherapy at Home"],
  },
  {
    name: "Sikar Road",
    description:
      "A key arterial corridor connecting northwest Jaipur, well covered by our care teams.",
    availableServices: ["Home Nursing Care", "Patient Attendant", "Lab Test at Home"],
  },
  {
    name: "Ajmer Road",
    description:
      "A major residential and commercial stretch in west Jaipur, within easy reach of our coordinators.",
    availableServices: ["Elder Care", "Post Surgery Care", "Physiotherapy at Home"],
  },
  {
    name: "Tonk Road",
    description:
      "A significant south Jaipur corridor connecting several residential sectors we already serve.",
    availableServices: ["Home Nursing Care", "ICU Care at Home", "Patient Attendant"],
  },
  {
    name: "Civil Lines",
    description:
      "A quieter, centrally located residential area close to our operations base.",
    availableServices: ["Elder Care", "Doctor Visit at Home", "Home Nursing Care"],
  },
  {
    name: "Bani Park",
    description:
      "An established residential neighborhood in north-central Jaipur with regular caregiver visits.",
    availableServices: ["Home Nursing Care", "Elder Care", "Injection at Home"],
  },
  {
    name: "Shyam Nagar",
    description:
      "A well-connected residential locality in west Jaipur, part of our regular service coverage.",
    availableServices: ["Physiotherapy at Home", "Elder Care", "Patient Attendant"],
  },
];
