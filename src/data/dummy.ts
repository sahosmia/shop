import VegetableCategory from "../assets/collect/category/vegetable.png"
import JuicesCategory from "../assets/collect/category/cate-5.jpg"
import HealthBeautyCategory from "../assets/collect/category/650-healthy_beauty.jpg"
import TeaCoffeeCategory from "../assets/collect/category/coffice_chocolate.jpg"
import FruitsCategory from "../assets/collect/category/fruits.jpg"
import BreadCategory from "../assets/collect/category/bread.png"
import FishCategory from "../assets/collect/category/fish.png"


export const categoriesData = [
  {
    id: 1,
    title: "Vegetable",
    slug: "vegetable",
    thumbnail: VegetableCategory,
  },
  {
    id: 2,
    title: "Fruits",
    slug: "fruits",
    thumbnail: FruitsCategory,
  },
  {
    id: 3,
    title: "Juices",
    slug: "juices",
    thumbnail: JuicesCategory,
  },
  {
    id: 4,
    title: "Tea & coffee",
    slug: "tea_&_coffee",
    thumbnail: TeaCoffeeCategory,
  },
  {
    id: 5,
    title: "Food",
    slug: "food",
    thumbnail: JuicesCategory,
  },
  {
    id: 6,
    title: "Health & Beauty",
    slug: "health_&_beauty",
    thumbnail: HealthBeautyCategory,
  },
  {
    id: 7,
    title: "Bread",
    slug: "bread",
    thumbnail: BreadCategory,
  },
  {
    id: 8,
    title: "Fish & Meats",
    slug: "fish_&_meats",
    thumbnail: FishCategory,
  },
];

export const tagsData = [
  {id:1, title:"Testy", slug:"testy"},
  {id:2, title:"Awesome", slug:"awesome"},
  {id:3, title:"Supper", slug:"supper"},
]
export const cupons = [
  {
    id: 1,
    code: "BdHome",
    discount: 20,
  },
  {
    id: 2,
    code: "sahos32",
    discount: 18,
  },
  {
    id: 3,
    code: "make4s",
    discount: 12,
  },
  {
    id: 4,
    code: "usa50",
    discount: 25,
  },
  {
    id: 5,
    code: "IndiaDot",
    discount: 15,
  },
  {
    id: 6,
    code: "rimi301",
    discount: 10,
  },
];

export const cartsData = [
  { id: 1, productId: 2, quantity: 6 },
  { id: 3, productId: 1, quantity: 8 },
  { id: 2, productId: 6, quantity: 3 },
];


import Rebel from "../assets/collect/products/rebel-kitchen-dairy-free-organic-chocolate-mylk.jpg"
import Rebel1 from "../assets/collect/products/rebel-kitchen-dairy-free-organic-chocolate-mylk (1).jpg"
import Rebel2 from "../assets/collect/products/rebel-kitchen-dairy-free-organic-chocolate-mylk (2).jpg"
import Rebel3 from "../assets/collect/products/rebel-kitchen-dairy-free-organic-chocolate-mylk (3).jpg"
import Rebel4 from "../assets/collect/products/rebel-kitchen-dairy-free-organic-chocolate-mylk (4).jpg"

export const productsData = [
  {
    id: 1,
    title: "Rebel kitchen dairy free organic chocolate mylk",
    description: "An apple mobile which is nothing like apple",
    price: 99,
    discountPercentage: 0,
    rating: 4.69,
    stock: 4,
    brand: "Apple",
    category: "Health & Beauty",
    thumbnail: Rebel,
    images: [
    Rebel1, Rebel2, Rebel3, Rebel4
    ],
    tags:["Awesome", "Supper"]
  },
  
 
];
