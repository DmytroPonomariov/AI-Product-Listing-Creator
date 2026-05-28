export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  { id: "fashion", name: "Fashion", icon: "👕", description: "Clothing, footwear, streetwear & accessories" },
  { id: "cars", name: "Cars", icon: "🚗", description: "Sedans, SUVs, bikes & automotive parts" },
  { id: "mobiles", name: "Mobiles", icon: "📱", description: "Smartphones, tablets & portable gadgets" },
  { id: "electronics", name: "Electronics & Appliances", icon: "🔌", description: "Laptops, computers, TVs & home appliances" },
  { id: "furniture", name: "Furniture", icon: "🛋️", description: "Sofas, tables, beds & structural home decor" },
  { id: "hobbies", name: "Books, Sports & Hobbies", icon: "📚", description: "Reading material, gym gear & collectables" },
  { id: "jobs", name: "Jobs", icon: "💼", description: "Gigs, full-time openings & services" },
  { id: "bikes", name: "Bikes", icon: "🚲", description: "Motorcycles, bicycles & active parts" },
  { id: "commercial", name: "Commercial & Spares", icon: "🛠️", description: "Trucks, heavy industrial machinery & spares" },
];
