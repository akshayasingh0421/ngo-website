import { Award, Target, BookOpen, Users, MapPin, HandHeart } from "lucide-react";

export default function Impact() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">Our Impact & Vision</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Since 2026, HopeFoundation has been committed to transforming lives and empowering marginalized communities across the globe.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We believe that true change starts at the grassroots level. Our mission is to provide sustainable solutions in education, healthcare, and economic development, ensuring that no community is left behind. We don't just provide aid; we build self-reliance.
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                A world where every individual has access to the basic human rights of clean water, quality education, and adequate healthcare, enabling them to lead lives of dignity and purpose.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop" alt="Impact 1" className="rounded-2xl h-48 w-full object-cover shadow-sm" />
                <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop" alt="Impact 2" className="rounded-2xl h-64 w-full object-cover shadow-sm" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" alt="Impact 3" className="rounded-2xl h-64 w-full object-cover shadow-sm" />
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop" alt="Impact 4" className="rounded-2xl h-48 w-full object-cover shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Core Values</h2>
            <p className="mt-4 text-lg text-slate-600">The principles that guide our work every day.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="bg-blue-50 p-4 rounded-full text-blue-600 mb-6">
                <HandHeart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Compassion</h3>
              <p className="text-slate-600">We approach every community with empathy, respect, and a genuine desire to uplift.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="bg-blue-50 p-4 rounded-full text-blue-600 mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Integrity</h3>
              <p className="text-slate-600">Transparency and accountability are at the heart of our operations and financial management.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="bg-blue-50 p-4 rounded-full text-blue-600 mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Excellence</h3>
              <p className="text-slate-600">We strive for the highest standards in program implementation to ensure lasting results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-[#3B5B7A] via-[#2C4863] to-[#1E3448] rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 text-blue-600/50">
                <MapPin className="h-48 w-48" />
              </div>
              <h2 className="text-3xl font-bold mb-6 relative z-10">Our Global Footprint</h2>
              <p className="text-blue-100 text-lg mb-8 relative z-10">
                What started as a small initiative in a single village has now grown into a global movement reaching across 42 countries.
              </p>
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div>
                  <div className="text-4xl font-extrabold mb-1">15+</div>
                  <div className="text-blue-200 text-sm font-medium">Countries in Africa</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold mb-1">12+</div>
                  <div className="text-blue-200 text-sm font-medium">Countries in Asia</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold mb-1">10+</div>
                  <div className="text-blue-200 text-sm font-medium">Countries in LatAm</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold mb-1">5+</div>
                  <div className="text-blue-200 text-sm font-medium">Refugee Camps</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 pl-0 lg:pl-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <BookOpen className="text-blue-600 h-6 w-6" /> The Story So Far
                </h3>
                <p className="text-slate-600">
                  Founded in 2026 by a group of passionate humanitarians, HopeFoundation was born out of a simple belief: everyone deserves a chance. We started by building a single well in a rural village, and the impact was so profound that we knew we had to do more.
                </p>
              </div>
              <div className="border-t border-slate-100 pt-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <Users className="text-blue-600 h-6 w-6" /> Join the Movement
                </h3>
                <p className="text-slate-600 mb-6">
                  Our impact is only possible because of our dedicated volunteers, generous donors, and corporate partners. Be a part of our story.
                </p>
                <div className="flex gap-4">
                  <a href="/donate" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-500 transition-colors">Support Us</a>
                  <button className="bg-white text-slate-700 border border-slate-300 px-6 py-2.5 rounded-lg font-semibold hover:bg-slate-50 transition-colors">Volunteer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
