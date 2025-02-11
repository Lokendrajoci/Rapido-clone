export interface ItemData {
  id: number;
  imagePath: string;
  title: string;
  description: string;
}
export interface customerData {
  id: number;
  description: string;
  name: string;
  post: string;
}

export const itemsData: ItemData[] = [
  {
    id: 1,
    imagePath: "/Auto.webp",
    title: "India's largest Bike-Taxi",
    description:
      "Cut through traffic, reach on time and save money. With Rapido Bike-Taxis, it’s that simple.",
  },
  {
    id: 2,
    imagePath: "/Bike.webp",
    title: "5-minute Auto",
    description:
      "Never wait for an auto ride again! Get a Rapido Auto within just 5 minutes! Anytime. Anywhere.",
  },
  {
    id: 3,
    imagePath: "/Cab.webp",
    title: "Lowest Priced Cabs",
    description:
      "More wheels. More comfort. And lower price than any other cab out there.",
  },
];
export const captainData: ItemData[] = [
  {
    id: 1,
    imagePath: "/captain_care_1.webp",
    title: "Zero Pressure Rides",
    description:
      "Gives a Captain more room in a day without hampering their daily activities. You can decide on when to go on the next ride.",
  },
  {
    id: 2,
    imagePath: "/captain_care_2.webp",
    title: "Redeemable Earnings",
    description:
      "What's the use of getting paid when you can't withdraw money when you want to?Redeems can be transferred from Rapido wallet to your bank account at your convenience.",
  },
  {
    id: 3,
    imagePath: "/captain_care_3.webp",
    title: "Insured Rides",
    description:
      "All rides are insured. Accidental coverage and medical benefits covered up to Rs 5 Lakh for Captain & family.",
  },
];

export const customerData: customerData[] = [
  {
    id: 1,
    description:
      "Rapido is a boon for me. I can now reach my office on time without any hassle. The drivers are very polite and the bikes are well maintained.",
    name: "Shivani",
    post: "customer",
  },
  {
    id: 2,
    description:
      "I have been using Rapido for a while now and I must say that I am very impressed with the service. The drivers are very professional and the bikes are well maintained.",
    name: "Rahul",
    post: "customer",
  },
  {
    id: 3,
    description:
      "I have been using Rapido for a while now and I must say that I am very impressed with the service. The drivers are very professional and the bikes are well maintained.",
    name: "Rahul",
    post: "customer",
  },
  {
    id: 4,
    description:
      "I have been using Rapido for a while now and I must say that I am very impressed with the service. The drivers are very professional and the bikes are well maintained.",
    name: "Rahul",
    post: "customer",
  },
  {
    id: 5,
    description:
      "I have been using Rapido for a while now and I must say that I am very impressed with the service. The drivers are very professional and the bikes are well maintained.",
    name: "Rahul",
    post: "customer",
  },
  {
    id: 6,
    description:
      "I have been using Rapido for a while now and I must say that I am very impressed with the service. The drivers are very professional and the bikes are well maintained.",
    name: "Rahul",
    post: "customer",
  },
];
