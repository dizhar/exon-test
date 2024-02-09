// mock data for websites and products

export interface Product {
  id: number;
  websiteId: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface Website {
  id: string;
  name: string;
  seniority: number; // Assuming seniority defines product age
  keywords: string[];
  products: [Product];
  references: number;
  totalPoints: number;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    websiteId: 1, // Assuming product belongs to website with id 1
    name: "UltraTech Smartwatch Pro",
    price: 399.99,
    category: "Wearables",
    description:
      "Stay connected and stylish with the UltraTech Smartwatch Pro. Featuring a sleek design, advanced fitness tracking, and long-lasting battery life, this smartwatch is the perfect companion for your active lifestyle.",
    image: "https://example.com/ultrasmartwatch.jpg",
  },
  {
    id: 2,
    websiteId: 2, // Assuming product belongs to website with id 2
    name: "Cozy Comfort Throw Blanket",
    price: 49.99,
    category: "Bedding",
    description:
      "Snuggle up in ultimate comfort with our Cozy Comfort Throw Blanket. Made from super-soft fleece, this blanket is warm, lightweight, and perfect for relaxing on the couch, reading in bed, or enjoying a movie night.",
    image: "https://example.com/cozyblanket.jpg",
  },
  {
    id: 3,
    websiteId: 1, // Assuming product belongs to website with id 1
    name: "Eco-Friendly Bamboo Laptop Stand",
    price: 29.99,
    category: "Office",
    description:
      "Boost your productivity and comfort with our Eco-Friendly Bamboo Laptop Stand. Crafted from sustainable bamboo, it raises your laptop to an ergonomic height, promoting better posture and reducing neck strain.",
    image: "https://example.com/bamboolaptopstand.jpg",
  },
  {
    id: 4,
    websiteId: 2, // Assuming product belongs to website with id 2
    name: "Vibrant Bloom Scented Candle",
    price: 19.99,
    category: "Fragrances",
    description:
      "Fill your home with the captivating aroma of our Vibrant Bloom Scented Candle. Featuring notes of fresh flowers and citrus, this candle creates a peaceful and uplifting ambiance.",
    image: "https://example.com/scentedcandle.jpg",
  },
  {
    id: 5,
    websiteId: 1, // Assuming product belongs to website with id 1
    name: "Noise-Cancelling Wireless Headphones",
    price: 149.99,
    category: "Audio",
    description:
      " Immerse yourself in your music and podcasts with our Noise-Cancelling Wireless Headphones. Featuring advanced noise cancellation technology and superior sound quality, these headphones allow you to enjoy your audio without distractions.",
    image: "https://example.com/headphones.jpg",
  },
];

export const mockWebsites: Website[] = [
  {
    id: "a",
    name: "Website A",
    seniority: 20,
    keywords: ["keyword1", "keyword2"],
    products: [mockProducts[0]],
    references: 2,
    totalPoints: 0,
  },
  {
    id: "b",
    name: "Website B",
    seniority: 5,
    keywords: ["keyword3", "keyword4"],
    products: [mockProducts[1]],
    references: 2,
    totalPoints: 0,
  },
];
