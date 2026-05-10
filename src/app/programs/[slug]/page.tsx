import Link from "next/link";
import { ArrowLeft, CheckCircle2, Share2, Heart, Calendar, Target, Users } from "lucide-react";

// Mock data fetcher
const getProgramData = (slug: string) => {
  return {
    title: "Education for All",
    category: "Education",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    overview: "Our 'Education for All' initiative aims to bridge the educational gap by providing quality learning resources, building schools, and training teachers in underserved communities around the world.",
    mission: "To ensure that every child, regardless of their geographical or socioeconomic background, has access to quality education and the opportunity to build a better future.",
    impactStats: [
      { label: "Schools Built", value: "45", icon: Target },
      { label: "Students Reached", value: "12,000+", icon: Users },
      { label: "Est. Year", value: "2026", icon: Calendar },
    ],
    goals: [
      "Construct 10 new modular schools by the end of 2026.",
      "Distribute 50,000 learning kits containing essential supplies.",
      "Train 500 local educators in modern teaching methodologies.",
      "Implement digital literacy programs in 20 existing schools."
    ]
  };
};

export default function ProgramDetail({ params }: { params: { slug: string } }) {
  const program = getProgramData(params.slug);

  return (
    <div className="flex flex-col w-full bg-white pb-24">
      {/* Hero Image Section */}
      <div className="relative h-[40vh] min-h-[400px] w-full bg-slate-900">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img src={program.image} alt={program.title} className="object-cover w-full h-full" />
        <div className="absolute inset-0 z-20 flex flex-col justify-end pb-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <Link href="/programs" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors text-sm font-medium">
              <ArrowLeft className="h-4 w-4" /> Back to Programs
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">{program.category}</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl max-w-3xl">
              {program.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">Program Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {program.overview}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-blue-500 pl-4 bg-slate-50 py-4 pr-4 rounded-r-lg">
                "{program.mission}"
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2">Key Objectives</h2>
              <ul className="space-y-4">
                {program.goals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{goal}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Action Card */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Support This Program</h3>
              <p className="text-slate-600 mb-6 text-sm">
                Your donation directly funds the operations and goals of this specific initiative.
              </p>
              <div className="space-y-3">
                <Link href={`/donate?program=${params.slug}`} className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-blue-500 transition-colors">
                  <Heart className="h-4 w-4" /> Donate Now
                </Link>
                <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3.5 text-sm font-bold text-slate-700 border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors">
                  <Share2 className="h-4 w-4" /> Share Program
                </button>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Program Impact</h3>
              <div className="space-y-6">
                {program.impactStats.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-sm font-medium text-slate-500">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
