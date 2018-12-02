const backendProducts = [
  {
    id: "3496e889-a9e0-4c6e-8043-e2b47f186e20",
    title: "Mociutes kopustai",
    image: "https://g4.dcdn.lt/images/pix/rauginti-kopustai-69220454.jpg",
    price: 2
  },
  {
    id: "1b5f5ee0-2e58-417f-8c83-2264187a71fa",
    title: "Mociutes agurkai",
    image:
      "https://s2.15min.lt/images/photos/2012/07/24/original/centrine-fotolia_42622590_subscription_lm-500ee5afd62d6.jpg",
    price: 3
  },
  {
    id: "98f855d8-5123-45c0-bc90-0b9c1bbc808b",
    title: "Mociutes uogiene",
    image: "https://g4.dcdn.lt/images/pix/stiklainis-65642762.jpg",
    price: 2.5
  }
];

export function fetchProducts() {
  return new Promise(resolve => {
    setTimeout(() => resolve(backendProducts), 1000);
  });
}
