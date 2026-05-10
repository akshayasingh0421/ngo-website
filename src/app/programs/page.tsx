import Link from "next/link";
import { ArrowRight, Search, Filter } from "lucide-react";

const programs = [
  {
    id: "education",
    title: "Education for All",
    description: "Providing quality education, school supplies, and modern learning facilities to children in underserved and rural communities globally.",
    category: "Education",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "clean-water",
    title: "Clean Water Initiative",
    description: "Building sustainable water wells, distribution networks, and purification systems in villages suffering from extreme water scarcity.",
    category: "Health",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "healthcare",
    title: "Healthcare Access",
    description: "Delivering essential medical supplies, establishing mobile clinics, and training local healthcare workers in remote areas.",
    category: "Health",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "women-empowerment",
    title: "Women's Empowerment",
    description: "Offering vocational training, micro-loans, and leadership programs to help women become financially independent entrepreneurs.",
    category: "Community",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "disaster-relief",
    title: "Disaster Relief Fund",
    description: "Providing immediate emergency assistance, food, shelter, and medical care to communities affected by natural disasters.",
    category: "Emergency",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "sustainable-farming",
    title: "Sustainable Agriculture",
    description: "Teaching eco-friendly farming techniques and providing seeds and tools to help communities achieve long-term food security.",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Programs() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-blue-900 py-16 text-white text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Our Programs</h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto px-4">
          Discover the specific initiatives we are running across the globe to bring hope, resources, and sustainable change.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 w-full">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-10 gap-4">
          <div className="relative w-full sm:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input 
              type="text" 
              className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors text-blue-950 font-medium"
              placeholder="Search programs..."
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="h-5 w-5 text-slate-500" />
            <select className="block w-full sm:w-48 pl-3 pr-10 py-2 text-base border border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-blue-950 font-medium">
              <option>All Categories</option>
              <option>Education</option>
              <option>Health</option>
              <option>Community</option>
              <option>Environment</option>
              <option>Emergency</option>
            </select>
          </div>
        </div>

        {/* Program Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
              <div className="h-56 bg-blue-100 w-full relative overflow-hidden">
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-800 shadow-sm">
                  {program.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img src={program.image} alt={program.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{program.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{program.description}</p>
                <Link href={`/programs/${program.id}`} className="inline-flex justify-center items-center gap-2 rounded-lg bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-800 transition-colors border border-slate-200 hover:border-blue-200">
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
