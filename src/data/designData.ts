import { Feature } from "../types";
import bgOne from "../assets/store_banner/one.png";
import bgTwo from "../assets/store_banner/two.png";
import bgThree from "../assets/store_banner/three.png";

export const reviews = [
  {
    id: 1,
    rating: 4.5,
    heading: "Excellent Service",
    description:
      "The customer support was outstanding. They resolved my issue in minutes!",
    client: "John Doe",
    date: "2023-10-15",
  },
  {
    id: 2,
    rating: 5.0,
    heading: "Amazing Product Quality",
    description:
      "The product exceeded my expectations. Will definitely buy again!",
    client: "Jane Smith",
    date: "2023-09-23",
  },
  {
    id: 3,
    rating: 4.0,
    heading: "Quick Delivery",
    description:
      "My order arrived ahead of schedule, and the packaging was great.",
    client: "Michael Johnson",
    date: "2023-11-01",
  },
  {
    id: 4,
    rating: 4.8,
    heading: "Best Purchase Ever",
    description:
      "This is the best thing I've bought in a long time. Highly recommend!",
    client: "Emily Brown",
    date: "2023-08-29",
  },
  {
    id: 5,
    rating: 3.5,
    heading: "Good Value for Money",
    description:
      "The product was decent for its price. Could be better, but overall satisfied.",
    client: "Chris Lee",
    date: "2023-09-15",
  },
  {
    id: 6,
    rating: 4.3,
    heading: "Great Customer Experience",
    description:
      "The team was friendly and very helpful with all my questions.",
    client: "Maria Davis",
    date: "2023-07-30",
  },
  {
    id: 7,
    rating: 4.7,
    heading: "Top-Notch Quality",
    description: "The quality of the product is superb, and it performs well.",
    client: "Robert Wilson",
    date: "2023-10-05",
  },
  {
    id: 8,
    rating: 4.2,
    heading: "Satisfied with My Purchase",
    description: "I got what I paid for. It meets my expectations.",
    client: "Linda Johnson",
    date: "2023-08-20",
  },
  {
    id: 9,
    rating: 5.0,
    heading: "Highly Recommend!",
    description:
      "One of the best products I've used. Would buy again without hesitation.",
    client: "David Martinez",
    date: "2023-09-10",
  },
  {
    id: 10,
    rating: 3.8,
    heading: "Overall Good Experience",
    description: "The product is decent, but there were some minor issues.",
    client: "Laura Anderson",
    date: "2023-07-15",
  },
];
export const features: Feature[] = [
  {
    id: 1,
    icon: "support",
    heading: "24/7 Customer Service",
    description:
      "We are here to help you around the clock. Reach out anytime, day or night.",
  },
  {
    id: 2,
    icon: "moneyBack",
    heading: "14-Day Money Back",
    description:
      "Not satisfied with your purchase? We offer a 14-day money-back guarantee.",
  },
  {
    id: 3,
    icon: "shipping",
    heading: "Shipping Worldwide",
    description:
      "We ship to over 100 countries, so you can enjoy our products wherever you are.",
  },
  {
    id: 4,
    icon: "guarantee",
    heading: "Our Guarantee",
    description:
      "We stand behind the quality of our products and guarantee your satisfaction.",
  },
];

import Brand1 from "../assets/brands/brand1.png";
import Brand2 from "../assets/brands/brand2.png";
import Brand3 from "../assets/brands/brand3.png";
import Brand4 from "../assets/brands/brand4.png";
export const brands = [
  {
    id: 1,
    img: Brand1,
  },
  {
    id: 2,
    img: Brand2,
  },
  {
    id: 3,
    img: Brand3,
  },
  {
    id: 4,
    img: Brand4,
  },
  {
    id: 5,
    img: Brand3,
  },
  {
    id: 6,
    img: Brand2,
  },
];

export const storeBannerData = [
  { id: 1, title: "Everyday Fresh & Clean with Our Products", bg: bgOne },
  { id: 2, title: "Make your Breakfast Healthy and Easy", bg: bgTwo },
  { id: 3, title: "The best Organic Products Online", bg: bgThree },
];
