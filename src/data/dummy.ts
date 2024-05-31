import VegetableCategory from "../assets/collect/category/vegetable.png";
import JuicesCategory from "../assets/collect/category/cate-5.jpg";
import HealthBeautyCategory from "../assets/collect/category/650-healthy_beauty.jpg";
import TeaCoffeeCategory from "../assets/collect/category/coffice_chocolate.jpg";
import FruitsCategory from "../assets/collect/category/fruits.jpg";
import BreadCategory from "../assets/collect/category/bread.png";
import FishCategory from "../assets/collect/category/fish.png";

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
  { id: 1, title: "Organic", slug: "organic" },
  { id: 2, title: "Non-GMO", slug: "non-gmo" },
  { id: 3, title: "Gluten-Free", slug: "gluten-free" },
  { id: 4, title: "Vegan", slug: "vegan" },
  { id: 5, title: "Eco-Friendly", slug: "eco-friendly" },
  { id: 6, title: "Fair Trade", slug: "fair-trade" },
  { id: 7, title: "Locally Sourced", slug: "locally-sourced" },
  { id: 8, title: "Sustainable", slug: "sustainable" },
  { id: 9, title: "Cruelty-Free", slug: "cruelty-free" },
  { id: 10, title: "Plant-Based", slug: "plant-based" },
  { id: 11, title: "Recyclable Packaging", slug: "recyclable-packaging" },
  { id: 12, title: "Biodegradable", slug: "biodegradable" },
  { id: 13, title: "Zero Waste", slug: "zero-waste" },
  { id: 14, title: "Ethically Sourced", slug: "ethically-sourced" },
  { id: 15, title: "No Preservatives", slug: "no-preservatives" },
  { id: 16, title: "BPA-Free", slug: "bpa-free" },
  { id: 17, title: "Natural Ingredients", slug: "natural-ingredients" },
  { id: 18, title: "Certified Organic", slug: "certified-organic" },
  { id: 19, title: "Carbon Neutral", slug: "carbon-neutral" },
  { id: 20, title: "Handmade", slug: "handmade" },
];

export const brandsData = [
  { id: 1, title: "Nature's Path", slug: "natures-path" },
  { id: 2, title: "Dr. Bronner's", slug: "dr-bronners" },
  { id: 3, title: "Seventh Generation", slug: "seventh-generation" },
  { id: 4, title: "Tom's of Maine", slug: "toms-of-maine" },
  { id: 5, title: "Burt's Bees", slug: "burts-bees" },
  { id: 6, title: "Annie's Homegrown", slug: "annies-homegrown" },
  { id: 7, title: "Earth's Best", slug: "earths-best" },
  { id: 8, title: "Method", slug: "method" },
  { id: 9, title: "Ecover", slug: "ecover" },
  { id: 10, title: "Newman's Own", slug: "newmans-own" },
  { id: 11, title: "Green People", slug: "green-people" },
  { id: 12, title: "Weleda", slug: "weleda" },
  { id: 13, title: "Avalon Organics", slug: "avalon-organics" },
  { id: 14, title: "Kashi", slug: "kashi" },
  { id: 15, title: "Organic Valley", slug: "organic-valley" },
  { id: 16, title: "Yogi Tea", slug: "yogi-tea" },
  { id: 17, title: "Nutiva", slug: "nutiva" },
  { id: 18, title: "Garden of Life", slug: "garden-of-life" },
  { id: 19, title: "Clif Bar", slug: "clif-bar" },
  { id: 20, title: "Bob's Red Mill", slug: "bobs-red-mill" },
];

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
// reviewsData.js
export const reviewsData = [
  {
    id: 1,
    userId: 4,
    productId: 5,
    reviews:
      "Absolutely love this organic face cream! It leaves my skin feeling soft and hydrated all day. Highly recommend!",
    rating: 5,
    createdAt: "2024-05-01T10:15:30Z"
  },
  {
    id: 2,
    userId: 7,
    productId: 6,
    reviews:
      "The organic shampoo has a lovely scent and makes my hair feel so clean and smooth. Will definitely buy again.",
    rating: 4,
    createdAt: "2024-05-02T12:20:45Z"
  },
  {
    id: 3,
    userId: 3,
    productId: 7,
    reviews:
      "Not very impressed with the organic toothpaste. It doesn’t foam well and leaves a strange aftertaste.",
    rating: 2,
    createdAt: "2024-05-03T14:25:50Z"
  },
  {
    id: 4,
    userId: 2,
    productId: 8,
    reviews:
      "This organic body lotion is a game changer! It absorbs quickly and my skin feels amazing.",
    rating: 4,
    createdAt: "2024-05-04T16:30:55Z"
  },
  {
    id: 5,
    userId: 5,
    productId: 9,
    reviews:
      "Great quality organic tea. The flavor is rich and soothing. Perfect for a relaxing evening.",
    rating: 4,
    createdAt: "2024-05-05T18:35:00Z"
  },
  {
    id: 6,
    userId: 8,
    productId: 10,
    reviews:
      "The organic honey is fantastic! It tastes pure and natural, and I love using it in my tea and baking.",
    rating: 4,
    createdAt: "2024-05-06T20:40:15Z"
  },
  {
    id: 7,
    userId: 6,
    productId: 11,
    reviews:
      "I’m not a fan of the organic deodorant. It doesn’t seem to last very long and I need to reapply often.",
    rating: 2,
    createdAt: "2024-05-07T22:45:20Z"
  },
  {
    id: 8,
    userId: 9,
    productId: 12,
    reviews:
      "This organic face wash is wonderful! It’s gentle on my skin and has helped clear up my acne.",
    rating: 5,
    createdAt: "2024-05-08T08:50:25Z"
  },
  {
    id: 9,
    userId: 1,
    productId: 13,
    reviews:
      "The organic hand soap smells delightful and doesn’t dry out my hands. Perfect for frequent use.",
    rating: 4,
    createdAt: "2024-05-09T10:55:30Z"
  },
  {
    id: 10,
    userId: 10,
    productId: 14,
    reviews:
      "Love the organic baby lotion. It’s gentle and perfect for my baby’s sensitive skin.",
    rating: 5,
    createdAt: "2024-05-10T12:00:35Z"
  }
];



import Rebel from "../assets/collect/products/rebel-kitchen-dairy-free-organic-chocolate-mylk.jpg";
import Rebel1 from "../assets/collect/products/rebel-kitchen-dairy-free-organic-chocolate-mylk (1).jpg";
import Rebel2 from "../assets/collect/products/rebel-kitchen-dairy-free-organic-chocolate-mylk (2).jpg";
import Rebel3 from "../assets/collect/products/rebel-kitchen-dairy-free-organic-chocolate-mylk (3).jpg";
import Rebel4 from "../assets/collect/products/rebel-kitchen-dairy-free-organic-chocolate-mylk (4).jpg";

export const productsData = [
  {
    id: 1,
    title: "Rebel kitchen dairy free organic chocolate mylk",
    description: "An apple mobile which is nothing like apple",
    price: 99,
    discountPercentage: 0,
    rating: 4.69,
    stock: 4,
    brand: "Yogi Tea",
    category: "Health & Beauty",
    thumbnail: Rebel,
    images: [Rebel1, Rebel2, Rebel3, Rebel4],
    tags: ["Organic", "Supper"],
  },
  {
    id: 2,
    title: "Nature's Path Organic Granola Bars",
    description:
      "Indulge in the creamy richness of Rebel Kitchen's dairy-free organic chocolate mylk. Made with the finest organic ingredients, this delicious beverage is perfect for satisfying your sweet cravings without compromising on taste or nutrition.",
    price: 1553.49,
    discountPercentage: 0,
    rating: 4.8,
    stock: 15,
    brand: "Nature's Path",
    category: "Food",
    thumbnail: "NaturesPathThumbnail.jpg",
    images: [
      "NaturesPathImage1.jpg",
      "NaturesPathImage2.jpg",
      "NaturesPathImage3.jpg",
      "NaturesPathImage4.jpg",
    ],
    tags: ["Organic", "Granola Bars", "Snack", "Healthy"],
  },
  {
    id: 3,
    title: "Dr. Bronner's Organic Lavender Hand Sanitizer",
    description:
      "Keep your hands clean and refreshed with Dr. Bronner's organic lavender hand sanitizer. Formulated with organic ethyl alcohol and soothing lavender oil, this sanitizer effectively kills germs while leaving your skin feeling soft and moisturized.",
    price: 5.99,
    discountPercentage: 0,
    rating: 4.7,
    stock: 20,
    brand: "Dr. Bronner's",
    category: "Health & Beauty",
    thumbnail: "DrBronnersThumbnail.jpg",
    images: [
      "DrBronnersImage1.jpg",
      "DrBronnersImage2.jpg",
      "DrBronnersImage3.jpg",
      "DrBronnersImage4.jpg",
    ],
    tags: ["Organic", "Hand Sanitizer", "Lavender", "Hygiene"],
  },
  {
    id: 4,
    title: "Burt's Bees Lip Balm",
    description:
      "Keep your lips hydrated and nourished with Burt's Bees Lip Balm. Made with natural ingredients like beeswax and coconut oil, this lip balm provides long-lasting moisture and protection for soft, smooth lips.",
    price: 2.99,
    discountPercentage: 0,
    rating: 4.6,
    stock: 25,
    brand: "Burt's Bees",
    category: "Health & Beauty",
    thumbnail: "BurtsBeesThumbnail.jpg",
    images: [
      "BurtsBeesImage1.jpg",
      "BurtsBeesImage2.jpg",
      "BurtsBeesImage3.jpg",
      "BurtsBeesImage4.jpg",
    ],
    tags: ["Natural", "Lip Balm", "Hydration", "Beeswax"],
  },
  {
    id: 5,
    title: "Organic Valley Organic Eggs",
    description:
      "Enjoy the rich, flavorful taste of Organic Valley organic eggs. Sourced from free-range hens raised on organic farms, these eggs are packed with protein and essential nutrients for a wholesome breakfast or meal.",
    price: 4.49,
    discountPercentage: 0,
    rating: 4.9,
    stock: 30,
    brand: "Organic Valley",
    category: "Food",
    thumbnail: "OrganicValleyThumbnail.jpg",
    images: [
      "OrganicValleyImage1.jpg",
      "OrganicValleyImage2.jpg",
      "OrganicValleyImage3.jpg",
      "OrganicValleyImage4.jpg",
    ],
    tags: ["Organic", "Eggs", "Breakfast", "Protein", "Eco-Friendly"],
  },

  {
    id: 6,
    title: "Tom's of Maine Natural Deodorant",
    description:
      "Stay fresh all day with Tom's of Maine natural deodorant. Made with aluminum-free ingredients and infused with natural fragrances, this deodorant provides effective odor protection without harsh chemicals.",
    price: 6.99,
    discountPercentage: 0,
    rating: 4.7,
    stock: 20,
    brand: "Nature's Path",
    category: "Health & Beauty",
    thumbnail: "TomsOfMaineThumbnail.jpg",
    images: [
      "TomsOfMaineImage1.jpg",
      "TomsOfMaineImage2.jpg",
      "TomsOfMaineImage3.jpg",
      "TomsOfMaineImage4.jpg",
    ],
    tags: ["Natural", "Deodorant", "Aluminum-Free", "Freshness"],
  },
  {
    id: 7,
    title: "Annie's Homegrown Organic Macaroni & Cheese",
    description:
      "Indulge in the cheesy goodness of Annie's Homegrown organic macaroni & cheese. Made with organic pasta and real cheese, this classic comfort food is easy to prepare and perfect for the whole family to enjoy.",
    price: 2.79,
    discountPercentage: 0,
    rating: 4.8,
    stock: 15,
    brand: "Annie's Homegrown",
    category: "Food",
    thumbnail: "AnniesHomegrownThumbnail.jpg",
    images: [
      "AnniesHomegrownImage1.jpg",
      "AnniesHomegrownImage2.jpg",
      "AnniesHomegrownImage3.jpg",
      "AnniesHomegrownImage4.jpg",
    ],
    tags: ["Organic", "Macaroni & Cheese", "Comfort Food", "Family"],
  },

  {
    id: 8,
    title: "Green People Organic Sun Lotion SPF 30",
    description:
      "Protect your skin from harmful UV rays with Green People Organic Sun Lotion SPF 30. Made with natural and organic ingredients, this non-greasy formula provides broad-spectrum sun protection while nourishing and moisturizing your skin.",
    price: 14.99,
    discountPercentage: 0,
    rating: 4.5,
    stock: 18,
    brand: "Green People",
    category: "Health & Beauty",
    thumbnail: "GreenPeopleThumbnail.jpg",
    images: [
      "GreenPeopleImage1.jpg",
      "GreenPeopleImage2.jpg",
      "GreenPeopleImage3.jpg",
      "GreenPeopleImage4.jpg",
    ],
    tags: ["Organic", "Sun Lotion", "SPF 30", "Sun Protection"],
  },
  {
    id: 9,
    title: "Nutiva Organic Virgin Coconut Oil",
    description:
      "Experience the versatility of Nutiva Organic Virgin Coconut Oil. Cold-pressed from fresh coconuts, this pure and unrefined oil is perfect for cooking, baking, skincare, and haircare, offering a range of health benefits.",
    price: 8.49,
    discountPercentage: 0,
    rating: 4.7,
    stock: 22,
    brand: "Nutiva",
    category: "Food",
    thumbnail: "NutivaThumbnail.jpg",
    images: [
      "NutivaImage1.jpg",
      "NutivaImage2.jpg",
      "NutivaImage3.jpg",
      "NutivaImage4.jpg",
    ],
    tags: ["Organic", "Coconut Oil", "Virgin", "Versatile"],
  },
  {
    id: 10,
    title: "Seventh Generation Natural Dish Liquid",
    description:
      "Clean your dishes effectively and responsibly with Seventh Generation Natural Dish Liquid. Formulated with plant-based ingredients, this biodegradable and non-toxic dish soap cuts through grease and grime without harsh chemicals.",
    price: 3.99,
    discountPercentage: 0,
    rating: 4.6,
    stock: 30,
    brand: "Seventh Generation",
    category: "Household",
    thumbnail: "SeventhGenerationThumbnail.jpg",
    images: [
      "SeventhGenerationImage1.jpg",
      "SeventhGenerationImage2.jpg",
      "SeventhGenerationImage3.jpg",
      "SeventhGenerationImage4.jpg",
    ],
    tags: ["Natural", "Dish Liquid", "Biodegradable", "Non-Toxic"],
  },
  {
    id: 11,
    title: "Bob's Red Mill Organic Rolled Oats",
    description:
      "Start your day with a nutritious breakfast using Bob's Red Mill Organic Rolled Oats. Made from whole grain oats, these organic oats are perfect for making oatmeal, granola, or adding to baked goods for added fiber and protein.",
    price: 5.29,
    discountPercentage: 0,
    rating: 4.8,
    stock: 25,
    brand: "Bob's Red Mill",
    category: "Food",
    thumbnail: "BobsRedMillThumbnail.jpg",
    images: [
      "BobsRedMillImage1.jpg",
      "BobsRedMillImage2.jpg",
      "BobsRedMillImage3.jpg",
      "BobsRedMillImage4.jpg",
    ],
    tags: ["Organic", "Rolled Oats", "Breakfast", "Fiber"],
  },
  {
    id: 12,
    title: "Clif Bar Organic Energy Bar",
    description:
      "Fuel your adventures with Clif Bar Organic Energy Bar. Made with wholesome ingredients like oats, nuts, and fruits, this energy bar provides sustained energy for your active lifestyle, whether hiking, biking, or on-the-go.",
    price: 1.79,
    discountPercentage: 0,
    rating: 4.7,
    stock: 35,
    brand: "Clif Bar",
    category: "Food",
    thumbnail: "ClifBarThumbnail.jpg",
    images: [
      "ClifBarImage1.jpg",
      "ClifBarImage2.jpg",
      "ClifBarImage3.jpg",
      "ClifBarImage4.jpg",
    ],
    tags: ["Organic", "Energy Bar", "Snack", "On-the-Go"],
  },

  {
    id: 13,
    title: "Ecover Zero Laundry Detergent",
    description:
      "Keep your clothes clean and fresh with Ecover Zero Laundry Detergent. This fragrance-free detergent is specially formulated for sensitive skin and contains no harsh chemicals or dyes, making it gentle on both your skin and the environment.",
    price: 9.99,
    discountPercentage: 0,
    rating: 4.6,
    stock: 15,
    brand: "Ecover",
    category: "Household",
    thumbnail: "EcoverThumbnail.jpg",
    images: [
      "EcoverImage1.jpg",
      "EcoverImage2.jpg",
      "EcoverImage3.jpg",
      "EcoverImage4.jpg",
    ],
    tags: [
      "Fragrance-Free",
      "Laundry Detergent",
      "Sensitive Skin",
      "Environmentally Friendly",
    ],
  },
  {
    id: 14,
    title: "Yogi Tea Organic Green Tea",
    description:
      "Savor the refreshing taste of Yogi Tea Organic Green Tea. This invigorating blend of green tea leaves and herbs is naturally caffeinated and packed with antioxidants, making it the perfect choice for a healthy and revitalizing beverage.",
    price: 3.99,
    discountPercentage: 0,
    rating: 4.8,
    stock: 20,
    brand: "Yogi Tea",
    category: "Tea & Coffee",
    thumbnail: "YogiTeaThumbnail.jpg",
    images: [
      "YogiTeaImage1.jpg",
      "YogiTeaImage2.jpg",
      "YogiTeaImage3.jpg",
      "YogiTeaImage4.jpg",
    ],
    tags: ["Organic", "Green Tea", "Antioxidants", "Refreshing"],
  },
  {
    id: 15,
    title: "Earth's Best Organic Baby Food",
    description:
      "Nourish your little one with Earth's Best Organic Baby Food. Made from pureed organic fruits and vegetables, this baby food is rich in vitamins and minerals, perfect for supporting healthy growth and development.",
    price: 1.49,
    discountPercentage: 0,
    rating: 4.7,
    stock: 30,
    brand: "Earth's Best",
    category: "Baby & Kids",
    thumbnail: "EarthsBestThumbnail.jpg",
    images: [
      "EarthsBestImage1.jpg",
      "EarthsBestImage2.jpg",
      "EarthsBestImage3.jpg",
      "EarthsBestImage4.jpg",
    ],
    tags: ["Organic", "Baby Food", "Fruits & Vegetables", "Nutritious"],
  },
  {
    id: 16,
    title: "Avalon Organics Biotin B-Complex Therapy Shampoo",
    description:
      "Revitalize your hair with Avalon Organics Biotin B-Complex Therapy Shampoo. Formulated with nourishing botanicals and essential vitamins, this shampoo strengthens and volumizes hair for a healthy, vibrant look.",
    price: 7.99,
    discountPercentage: 0,
    rating: 4.5,
    stock: 25,
    brand: "Avalon Organics",
    category: "Health & Beauty",
    thumbnail: "AvalonOrganicsThumbnail.jpg",
    images: [
      "AvalonOrganicsImage1.jpg",
      "AvalonOrganicsImage2.jpg",
      "AvalonOrganicsImage3.jpg",
      "AvalonOrganicsImage4.jpg",
    ],
    tags: ["Organic", "Shampoo", "Biotin", "Hair Care"],
  },
  {
    id: 17,
    title: "Green People Organic Children Sun Lotion SPF 25",
    description:
      "Protect your child's delicate skin from the sun with Green People Organic Children Sun Lotion SPF 25. Specifically formulated for children, this gentle and non-toxic sun lotion provides effective protection against UVA and UVB rays while moisturizing and soothing the skin.",
    price: 12.99,
    discountPercentage: 0,
    rating: 4.6,
    stock: 18,
    brand: "Green People",
    category: "Baby & Kids",
    thumbnail: "GreenPeopleChildrenThumbnail.jpg",
    images: [
      "GreenPeopleChildrenImage1.jpg",
      "GreenPeopleChildrenImage2.jpg",
      "GreenPeopleChildrenImage3.jpg",
      "GreenPeopleChildrenImage4.jpg",
    ],
    tags: ["Organic", "Children", "Sun Lotion", "SPF 25"],
  },

  {
    id: 18,
    title: "Kashi Organic Blueberry Clusters Cereal",
    description:
      "Start your day with the delicious taste of Kashi Organic Blueberry Clusters Cereal. Made with whole grain oats and real blueberries, this cereal is packed with fiber and antioxidants for a nutritious breakfast.",
    price: 4.79,
    discountPercentage: 0,
    rating: 4.7,
    stock: 20,
    brand: "Kashi",
    category: "Food",
    thumbnail: "KashiThumbnail.jpg",
    images: [
      "KashiImage1.jpg",
      "KashiImage2.jpg",
      "KashiImage3.jpg",
      "KashiImage4.jpg",
    ],
    tags: ["Organic", "Cereal", "Blueberry", "Breakfast"],
  },
  {
    id: 19,
    title: "Organic Valley Grassmilk Organic Whole Milk",
    description:
      "Experience the rich and creamy taste of Organic Valley Grassmilk Organic Whole Milk. Sourced from 100% grass-fed cows, this milk is naturally high in omega-3s and CLA, providing a nutritious option for your family.",
    price: 5.99,
    discountPercentage: 0,
    rating: 4.8,
    stock: 15,
    brand: "Organic Valley",
    category: "Food",
    thumbnail: "OrganicValleyMilkThumbnail.jpg",
    images: [
      "OrganicValleyMilkImage1.jpg",
      "OrganicValleyMilkImage2.jpg",
      "OrganicValleyMilkImage3.jpg",
      "OrganicValleyMilkImage4.jpg",
    ],
    tags: ["Organic", "Grassmilk", "Whole Milk", "Nutritious"],
  },
  {
    id: 20,
    title: "Method Foaming Hand Soap",
    description:
      "Keep your hands clean and moisturized with Method Foaming Hand Soap. Formulated with naturally derived ingredients and a delightful scent, this gentle foaming soap effectively cleanses without drying out your skin.",
    price: 3.49,
    discountPercentage: 0,
    rating: 4.6,
    stock: 25,
    brand: "Method",
    category: "Health & Beauty",
    thumbnail: "MethodThumbnail.jpg",
    images: [
      "MethodImage1.jpg",
      "MethodImage2.jpg",
      "MethodImage3.jpg",
      "MethodImage4.jpg",
    ],
    tags: ["Foaming Hand Soap", "Gentle", "Naturally Derived", "Moisturizing"],
  },
  {
    id: 21,
    title: "Weleda Skin Food Original Ultra-Rich Cream",
    description:
      "Nourish and hydrate your skin with Weleda Skin Food Original Ultra-Rich Cream. Formulated with organic plant extracts, this deeply moisturizing cream soothes dry and rough skin, leaving it soft, smooth, and rejuvenated.",
    price: 18.99,
    discountPercentage: 0,
    rating: 4.7,
    stock: 20,
    brand: "Weleda",
    category: "Health & Beauty",
    thumbnail: "WeledaThumbnail.jpg",
    images: [
      "WeledaImage1.jpg",
      "WeledaImage2.jpg",
      "WeledaImage3.jpg",
      "WeledaImage4.jpg",
    ],
    tags: ["Skin Care", "Ultra-Rich Cream", "Moisturizing", "Organic"],
  },
  {
    id: 22,
    title: "Garden of Life Organic Protein Powder",
    description:
      "Fuel your body with Garden of Life Organic Protein Powder. Made from a blend of organic plant proteins, this protein powder provides a complete amino acid profile and essential nutrients for muscle recovery and overall health.",
    price: 29.99,
    discountPercentage: 0,
    rating: 4.8,
    stock: 30,
    brand: "Garden of Life",
    category: "Health & Fitness",
    thumbnail: "GardenOfLifeThumbnail.jpg",
    images: [
      "GardenOfLifeImage1.jpg",
      "GardenOfLifeImage2.jpg",
      "GardenOfLifeImage3.jpg",
      "GardenOfLifeImage4.jpg",
    ],
    tags: ["Organic", "Protein Powder", "Muscle Recovery", "Plant-Based"],
  },
  {
    id: 23,
    title: "Dr. Bronner's Organic Peppermint Toothpaste",
    description:
      "Keep your smile bright and fresh with Dr. Bronner's Organic Peppermint Toothpaste. Formulated with organic ingredients and natural peppermint oil, this fluoride-free toothpaste effectively cleans and protects your teeth and gums.",
    price: 7.49,
    discountPercentage: 0,
    rating: 4.6,
    stock: 20,
    brand: "Dr. Bronner's",
    category: "Health & Beauty",
    thumbnail: "DrBronnersToothpasteThumbnail.jpg",
    images: [
      "DrBronnersToothpasteImage1.jpg",
      "DrBronnersToothpasteImage2.jpg",
      "DrBronnersToothpasteImage3.jpg",
      "DrBronnersToothpasteImage4.jpg",
    ],
    tags: ["Organic", "Toothpaste", "Peppermint", "Oral Care"],
  },
  {
    id: 24,
    title: "Nutiva Organic Hemp Seed Oil",
    description:
      "Experience the nutritional benefits of Nutiva Organic Hemp Seed Oil. Cold-pressed from raw hemp seeds, this organic oil is rich in omega-3 fatty acids and antioxidants, making it a versatile and healthy addition to your diet.",
    price: 12.99,
    discountPercentage: 0,
    rating: 4.8,
    stock: 15,
    brand: "Nutiva",
    category: "Food",
    thumbnail: "NutivaHempOilThumbnail.jpg",
    images: [
      "NutivaHempOilImage1.jpg",
      "NutivaHempOilImage2.jpg",
      "NutivaHempOilImage3.jpg",
      "NutivaHempOilImage4.jpg",
    ],
    tags: ["Organic", "Hemp Seed Oil", "Omega-3", "Antioxidants"],
  },
  {
    id: 25,
    title: "Seventh Generation Free & Clear Baby Wipes",
    description:
      "Keep your baby clean and comfortable with Seventh Generation Free & Clear Baby Wipes. Made with plant-based materials and free from fragrances and alcohol, these gentle wipes are safe for sensitive skin and environmentally friendly.",
    price: 4.99,
    discountPercentage: 0,
    rating: 4.7,
    stock: 25,
    brand: "Seventh Generation",
    category: "Baby & Kids",
    thumbnail: "SeventhGenerationBabyWipesThumbnail.jpg",
    images: [
      "SeventhGenerationBabyWipesImage1.jpg",
      "SeventhGenerationBabyWipesImage2.jpg",
      "SeventhGenerationBabyWipesImage3.jpg",
      "SeventhGenerationBabyWipesImage4.jpg",
    ],
    tags: ["Baby Wipes", "Free & Clear", "Gentle", "Sensitive Skin"],
  },
  {
    id: 26,
    title: "Bob's Red Mill Organic Quinoa",
    description:
      "Add a nutritious staple to your pantry with Bob's Red Mill Organic Quinoa. Packed with protein, fiber, and essential nutrients, this versatile grain is perfect for salads, soups, stir-fries, and more.",
    price: 6.99,
    discountPercentage: 0,
    rating: 4.9,
    stock: 20,
    brand: "Bob's Red Mill",
    category: "Food",
    thumbnail: "BobsRedMillQuinoaThumbnail.jpg",
    images: [
      "BobsRedMillQuinoaImage1.jpg",
      "BobsRedMillQuinoaImage2.jpg",
      "BobsRedMillQuinoaImage3.jpg",
      "BobsRedMillQuinoaImage4.jpg",
    ],
    tags: ["Organic", "Quinoa", "Superfood", "Versatile"],
  },
  {
    id: 27,
    title: "Clif Bar Organic Nut Butter Filled Energy Bar",
    description:
      "Satisfy your cravings and fuel your adventures with Clif Bar Organic Nut Butter Filled Energy Bar. Made with creamy nut butter and organic ingredients, this energy bar provides sustained energy and delicious flavor for your active lifestyle.",
    price: 1.99,
    discountPercentage: 0,
    rating: 4.8,
    stock: 30,
    brand: "Clif Bar",
    category: "Food",
    thumbnail: "ClifBarNutButterThumbnail.jpg",
    images: [
      "ClifBarNutButterImage1.jpg",
      "ClifBarNutButterImage2.jpg",
      "ClifBarNutButterImage3.jpg",
      "ClifBarNutButterImage4.jpg",
    ],
    tags: ["Organic", "Nut Butter", "Energy Bar", "Snack"],
  },
  {
    id: 28,
    title: "Annie's Homegrown Organic Bunny Fruit Snacks",
    description:
      "Treat yourself to the fruity goodness of Annie's Homegrown Organic Bunny Fruit Snacks. Made with real fruit juice and no artificial flavors or colors, these bunny-shaped snacks are perfect for kids and adults alike.",
    price: 3.49,
    discountPercentage: 0,
    rating: 4.7,
    stock: 25,
    brand: "Annie's Homegrown",
    category: "Food",
    thumbnail: "AnniesHomegrownFruitSnacksThumbnail.jpg",
    images: [
      "AnniesHomegrownFruitSnacksImage1.jpg",
      "AnniesHomegrownFruitSnacksImage2.jpg",
      "AnniesHomegrownFruitSnacksImage3.jpg",
      "AnniesHomegrownFruitSnacksImage4.jpg",
    ],
    tags: ["Organic", "Fruit Snacks", "Kids", "Healthy"],
  },
  {
    id: 29,
    title: "Annie's Homegrown Organic Bunny Fruit Snacks",
    description:
      "Treat yourself to the fruity goodness of Annie's Homegrown Organic Bunny Fruit Snacks. Made with real fruit juice and no artificial flavors or colors, these bunny-shaped snacks are perfect for kids and adults alike.",
    price: 3.49,
    discountPercentage: 0,
    rating: 4.7,
    stock: 25,
    brand: "Annie's Homegrown",
    category: "Food",
    thumbnail: "AnniesHomegrownFruitSnacksThumbnail.jpg",
    images: [
      "AnniesHomegrownFruitSnacksImage1.jpg",
      "AnniesHomegrownFruitSnacksImage2.jpg",
      "AnniesHomegrownFruitSnacksImage3.jpg",
      "AnniesHomegrownFruitSnacksImage4.jpg",
    ],
    tags: ["Organic", "Fruit Snacks", "Kids", "Healthy"],
  },
  {
    id: 30,
    title: "Dr. Bronner's Organic Peppermint Toothpaste",
    description:
      "Experience the refreshing clean of Dr. Bronner's Organic Peppermint Toothpaste. Made with organic and fair trade ingredients, this fluoride-free toothpaste leaves your mouth feeling fresh and your teeth sparkling clean.",
    price: 7.49,
    discountPercentage: 0,
    rating: 4.6,
    stock: 20,
    brand: "Dr. Bronner's",
    category: "Health & Beauty",
    thumbnail: "DrBronnersToothpasteThumbnail.jpg",
    images: [
      "DrBronnersToothpasteImage1.jpg",
      "DrBronnersToothpasteImage2.jpg",
      "DrBronnersToothpasteImage3.jpg",
      "DrBronnersToothpasteImage4.jpg",
    ],
    tags: ["Organic", "Toothpaste", "Peppermint", "Fluoride-Free"],
  },
  {
    id: 31,
    title: "Avalon Organics Lavender Nourishing Shampoo",
    description:
      "Pamper your hair and senses with Avalon Organics Lavender Nourishing Shampoo. Enriched with organic lavender essential oil and botanicals, this gentle shampoo cleanses and hydrates hair for a healthy, vibrant look and a calming aromatic experience.",
    price: 9.99,
    discountPercentage: 0,
    rating: 4.7,
    stock: 18,
    brand: "Avalon Organics",
    category: "Health & Beauty",
    thumbnail: "AvalonOrganicsShampooThumbnail.jpg",
    images: [
      "AvalonOrganicsShampooImage1.jpg",
      "AvalonOrganicsShampooImage2.jpg",
      "AvalonOrganicsShampooImage3.jpg",
      "AvalonOrganicsShampooImage4.jpg",
    ],
    tags: ["Organic", "Shampoo", "Lavender", "Nourishing"],
  },
  {
    id: 32,
    title: "Traditional Medicinals Organic Ginger Tea",
    description:
      "Warm up with Traditional Medicinals Organic Ginger Tea. Made from certified organic ginger root, this invigorating herbal tea is known for its soothing and digestive properties, making it an ideal choice after meals or anytime you need a comforting cup.",
    price: 3.99,
    discountPercentage: 0,
    rating: 4.8,
    stock: 22,
    brand: "Traditional Medicinals",
    category: "Tea & Coffee",
    thumbnail: "TraditionalMedicinalsGingerTeaThumbnail.jpg",
    images: [
      "TraditionalMedicinalsGingerTeaImage1.jpg",
      "TraditionalMedicinalsGingerTeaImage2.jpg",
      "TraditionalMedicinalsGingerTeaImage3.jpg",
      "TraditionalMedicinalsGingerTeaImage4.jpg",
    ],
    tags: ["Organic", "Ginger Tea", "Herbal Tea", "Digestive"],
  },
  {
    id: 33,
    title: "Green & Black's Organic Dark Chocolate",
    description:
      "Indulge in the rich, intense flavor of Green & Black's Organic Dark Chocolate. Made with ethically sourced cocoa beans and organic ingredients, this premium chocolate bar is perfect for satisfying your sweet cravings while supporting sustainable cocoa farming.",
    price: 3.99,
    discountPercentage: 0,
    rating: 4.7,
    stock: 25,
    brand: "Green & Black's",
    category: "Food",
    thumbnail: "GreenAndBlacksDarkChocolateThumbnail.jpg",
    images: [
      "GreenAndBlacksDarkChocolateImage1.jpg",
      "GreenAndBlacksDarkChocolateImage2.jpg",
      "GreenAndBlacksDarkChocolateImage3.jpg",
      "GreenAndBlacksDarkChocolateImage4.jpg",
    ],
    tags: ["Organic", "Dark Chocolate", "Ethically Sourced", "Premium"],
  },
  {
    id: 34,
    title: "Alba Botanica Hawaiian Sunscreen SPF 45",
    description:
      "Protect your skin from the sun's harmful rays with Alba Botanica Hawaiian Sunscreen SPF 45. Infused with botanical extracts and nourishing oils, this reef-friendly sunscreen provides broad-spectrum UVA/UVB protection while hydrating and soothing your skin.",
    price: 10.99,
    discountPercentage: 0,
    rating: 4.6,
    stock: 30,
    brand: "Alba Botanica",
    category: "Health & Beauty",
    thumbnail: "AlbaBotanicaSunscreenThumbnail.jpg",
    images: [
      "AlbaBotanicaSunscreenImage1.jpg",
      "AlbaBotanicaSunscreenImage2.jpg",
      "AlbaBotanicaSunscreenImage3.jpg",
      "AlbaBotanicaSunscreenImage4.jpg",
    ],
    tags: ["Sunscreen", "SPF 45", "Reef-Friendly", "Botanical"],
  },
];
