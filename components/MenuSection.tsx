import React, { useState } from 'react';
import { MenuItem } from '../types';
import { SectionTitle } from './SectionTitle';

const menuItems: MenuItem[] = [
  // Starters
  {
    id: 1,
    title: "Truffle Arancini",
    description: "Crispy risotto balls infused with black truffle, served with garlic aioli.",
    price: "$14",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Burrata & Peach",
    description: "Fresh burrata cheese, grilled peaches, basil pesto, and balsamic glaze.",
    price: "$18",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1621537278213-904354728551?auto=format&fit=crop&w=800&q=80"
  },
  // Mains
  {
    id: 3,
    title: "Herb-Crusted Salmon",
    description: "Pan-seared salmon fillet, asparagus risotto, lemon butter sauce.",
    price: "$32",
    category: "Mains",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Wagyu Beef Burger",
    description: "Premium wagyu patty, truffle mayo, caramelized onions, brioche bun.",
    price: "$28",
    category: "Mains",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Wild Mushroom Risotto",
    description: "Arborio rice, porcini mushrooms, parmesan crisp, truffle oil.",
    price: "$26",
    category: "Mains",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80"
  },
  // Desserts
  {
    id: 6,
    title: "Dark Chocolate Fondant",
    description: "Warm molten center, vanilla bean ice cream, berry coulis.",
    price: "$14",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1617305855067-17eb48bcb332?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Classic Tiramisu",
    description: "Espresso-soaked ladyfingers, mascarpone cream, cocoa dusting.",
    price: "$12",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=800&q=80"
  },
  // Drinks
  {
    id: 8,
    title: "Signature Old Fashioned",
    description: "Bourbon, smoked maple syrup, angostura bitters, orange peel.",
    price: "$16",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=800&q=80"
  }
];

const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks'];

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Culinary Delights" 
          subtitle="Our Menu" 
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-900 shadow-sm">
                  {item.price}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <button className="text-primary text-sm font-semibold uppercase tracking-wide hover:text-amber-700 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};