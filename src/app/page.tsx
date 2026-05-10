"use client";

import Link from "next/link";
import { ArrowRight, Globe, Users, TrendingUp, HeartHandshake, ShieldCheck, Heart, Award, CheckCircle2, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Home() {
  const handleShare = async (e: React.MouseEvent, title: string, urlPath: string) => {
    e.preventDefault(); // Prevent navigating to the link if wrapped in a Link, though we'll put it outside the main link
    const shareData = {
      title: `Support ${title} - HopeFoundation`,
      text: `Check out this amazing program and help make a difference!`,
      url: `${window.location.origin}${urlPath}`
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(shareData.url);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-white min-h-[85vh] flex items-center py-16 sm:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-70"></div>
        <div className="mx-auto max-w-7xl px-8 md:px-16 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-slate-800 mb-6">
                Together For <br/> <span className="bg-gradient-to-r from-[#6B8FCF] to-[#8BA4D8] bg-clip-text text-transparent">A Better Tomorrow</span>
              </h1>
              <p className="text-lg leading-8 text-slate-500 max-w-xl mb-10">
                Every contribution creates real change.Join us in empowering communities through education, healthcare, and sustainable support.
              </p>
              <div className="flex flex-wrap items-center gap-6 mt-10">
                <Link
                  href="/donate"
                  className="rounded-full bg-blue-500 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:shadow-lg hover:bg-blue-600 hover:scale-105 transition-all duration-300"
                >
                  Make a Donation
                </Link>
                <Link href="/programs" className="text-base font-semibold leading-6 text-slate-800 flex items-center gap-2 group hover:text-blue-500 transition-colors">
                  Explore Programs <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-4 text-xs font-medium text-slate-500">
                <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-blue-500" /> 100% Transparency</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-blue-500" /> Verified Programs</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -z-10 h-72 w-72 bg-blue-200 blur-3xl opacity-40 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
                alt="Smiling children" 
                className="rounded-3xl shadow-2xl object-cover h-[500px] w-full hover:scale-[1.02] transition duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 flex flex-col items-center justify-center animate-bounce-slow">
                <div className="text-3xl font-extrabold text-blue-600">12K+</div>
                <div className="text-sm font-bold text-slate-700">Lives Changed</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <motion.section {...fadeUp} className="py-16 bg-blue-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold tracking-tight text-slate-500 uppercase">Creating measurable impact worldwide</h3>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            <div className="flex flex-col items-center p-4">
              <Globe className="h-8 w-8 text-blue-500 mb-3" />
              <div className="text-3xl font-bold text-slate-800">42</div>
              <div className="text-sm font-medium text-gray-500 mt-1">Countries Reached</div>
            </div>
            <div className="flex flex-col items-center p-4">
              <Users className="h-8 w-8 text-blue-500 mb-3" />
              <div className="text-3xl font-bold text-slate-800">1.2M+</div>
              <div className="text-sm font-medium text-gray-500 mt-1">Lives Impacted</div>
            </div>
            <div className="flex flex-col items-center p-4">
              <HeartHandshake className="h-8 w-8 text-blue-500 mb-3" />
              <div className="text-3xl font-bold text-slate-800">15K</div>
              <div className="text-sm font-medium text-gray-500 mt-1">Volunteers</div>
            </div>
            <div className="flex flex-col items-center p-4">
              <TrendingUp className="h-8 w-8 text-blue-500 mb-3" />
              <div className="text-3xl font-bold text-slate-800">8M</div>
              <div className="text-sm font-medium text-gray-500 mt-1">Funds Raised</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Programs */}
      <section className="py-24 bg-slate-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">Featured Programs</h2>
            <p className="mt-4 text-lg leading-8 tracking-tight text-gray-500">Discover the initiatives that are driving change in communities worldwide.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Program Card 1 */}
            <motion.div {...fadeUp} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group flex flex-col">
              <div className="h-48 w-full relative overflow-hidden">
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">
                  Education
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
                {/* Image 1: Cohesive warm lighting */}
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" alt="Education for All" loading="lazy" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Education for All</h3>
                <p className="text-gray-500 leading-7 tracking-tight mb-6 flex-grow">Providing quality education and learning materials to children in underserved communities.</p>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-slate-800">₹75,000 raised</span>
                    <span className="text-gray-500">of ₹1,00,000</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <Link href="/programs/education" className="text-blue-500 font-semibold hover:text-blue-600 flex items-center gap-1 transition-colors">
                    Support Program <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button onClick={(e) => handleShare(e, "Education for All", "/programs/education")} className="text-gray-400 hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-blue-50" title="Share Program">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Program Card 2 */}
            <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.6 }} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group flex flex-col">
              <div className="h-48 w-full relative overflow-hidden">
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">
                  Health & Water
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
                {/* Image 2: Cohesive warm lighting */}
                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop" alt="Clean Water Initiative" loading="lazy" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Clean Water Initiative</h3>
                <p className="text-gray-500 leading-7 tracking-tight mb-6 flex-grow">Building sustainable water wells and purification systems in rural villages.</p>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-slate-800">₹1,20,000 raised</span>
                    <span className="text-gray-500">of ₹2,50,000</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '48%' }}></div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <Link href="/programs/clean-water" className="text-blue-500 font-semibold hover:text-blue-600 flex items-center gap-1 transition-colors">
                    Support Program <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button onClick={(e) => handleShare(e, "Clean Water Initiative", "/programs/clean-water")} className="text-gray-400 hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-blue-50" title="Share Program">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Program Card 3 */}
            <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.6 }} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group flex flex-col">
              <div className="h-48 w-full relative overflow-hidden">
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">
                  Community
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
                {/* Image 3: Cohesive warm lighting */}
                <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop" alt="Community Building" loading="lazy" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Community Building</h3>
                <p className="text-gray-500 leading-7 tracking-tight mb-6 flex-grow">Delivering vocational training and leadership programs to empower families.</p>
                
                <div className="mb-6">
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-slate-800">₹45,000 raised</span>
                    <span className="text-gray-500">of ₹50,000</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <Link href="/programs/community" className="text-blue-500 font-semibold hover:text-blue-600 flex items-center gap-1 transition-colors">
                    Support Program <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button onClick={(e) => handleShare(e, "Community Building", "/programs/community")} className="text-gray-400 hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-blue-50" title="Share Program">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/programs" className="inline-flex items-center gap-2 px-8 py-4 border border-gray-200 rounded-full text-base font-semibold text-slate-800 hover:bg-slate-50 hover:scale-105 transition-all duration-300">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* How Your Donation Helps Section */}
      <section className="py-24 bg-blue-600 text-white border-t border-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">How Your Donation Helps</h2>
            <p className="mt-4 text-lg text-blue-100">Every contribution maps directly to real-world resources.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div {...fadeUp} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:-translate-y-2 hover:bg-white/20 transition-all duration-300">
              <div className="text-2xl font-bold mb-2">₹500</div>
              <div className="text-blue-100 flex items-center gap-2"><ArrowRight className="h-4 w-4" /> School Supplies</div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.6 }} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:-translate-y-2 hover:bg-white/20 transition-all duration-300">
              <div className="text-2xl font-bold mb-2">₹2000</div>
              <div className="text-blue-100 flex items-center gap-2"><ArrowRight className="h-4 w-4" /> Healthcare Kits</div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.6 }} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:-translate-y-2 hover:bg-white/20 transition-all duration-300">
              <div className="text-2xl font-bold mb-2">₹5000</div>
              <div className="text-blue-100 flex items-center gap-2"><ArrowRight className="h-4 w-4" /> Food Support For Families</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stories of Impact Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">Stories of Impact</h2>
            <p className="mt-4 text-lg leading-8 tracking-tight text-gray-500">Real people. Real change. See how your support transforms lives every single day.</p>
          </motion.div>

          <motion.div {...fadeUp} className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Heart className="w-48 h-48 text-blue-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <svg className="h-12 w-12 text-blue-200 mb-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-2xl font-medium leading-10 tracking-tight text-slate-800 mb-8">
                  "Before joining the program, I had never attended school. Today I dream of becoming a teacher so I can help other children learn to read and write."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-1 bg-blue-500 w-12 rounded-full"></div>
                  <div className="font-bold text-slate-800 text-lg">— Aisha, Age 11</div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2000&auto=format&fit=crop" 
                  alt="Aisha smiling" 
                  loading="lazy"
                  className="rounded-2xl shadow-xl object-cover h-[400px] w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">Education Funded</div>
                    <div className="text-xs font-medium text-gray-500">Graduating Class of '26</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-slate-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">Why Donate With Us?</h2>
            <p className="mt-4 text-lg leading-8 tracking-tight text-gray-500">We take your trust seriously. Every contribution is handled with complete transparency.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...fadeUp} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center hover:-translate-y-2 transition-all duration-300">
              <div className="mx-auto bg-blue-50 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <ShieldCheck className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">100% Transparency</h3>
              <p className="text-gray-500 leading-7 tracking-tight">Track exactly where your money goes. We publish quarterly financial reports for full public review.</p>
            </motion.div>
            
            <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.6 }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center hover:-translate-y-2 transition-all duration-300">
              <div className="mx-auto bg-blue-50 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <Award className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Verified Programs</h3>
              <p className="text-gray-500 leading-7 tracking-tight">Our initiatives are audited by independent global organizations to ensure maximum efficiency.</p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.6 }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center hover:-translate-y-2 transition-all duration-300">
              <div className="mx-auto bg-blue-50 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <Heart className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Direct Community Impact</h3>
              <p className="text-gray-500 leading-7 tracking-tight">We work directly with local leaders, meaning your donation cuts out middlemen and reaches those in need.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#6B9CF5] to-[#8BB8FF] text-white relative overflow-hidden shadow-inner">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10"
        >
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">Ready to make a difference?</h2>
          <p className="text-xl font-medium text-blue-50 mb-10 max-w-2xl mx-auto drop-shadow-sm">
            Your contribution directly supports our active programs and helps us reach more communities in need. Every rupee counts.
          </p>
          <Link href="/donate" className="rounded-full bg-white px-10 py-5 text-xl font-extrabold text-blue-600 shadow-2xl hover:bg-slate-50 transition-all hover:scale-105 inline-block">
            Donate Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
