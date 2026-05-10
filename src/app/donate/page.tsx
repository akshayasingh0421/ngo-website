"use client";

import { useState } from "react";
import { Heart, ShieldCheck, CreditCard, IndianRupee, User, Mail, Sparkles, CheckCircle2, PieChart, Utensils, BookOpen, Stethoscope, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const amounts = [
  { val: 1000, impact: "School supplies for 1 child" },
  { val: 2500, impact: "Meals for 10 families" },
  { val: 5000, impact: "Emergency healthcare support" },
  { val: 10000, impact: "Sponsor education for a month" }
];

export default function Donate() {
  const [amount, setAmount] = useState<number | "other">(2500);
  const [frequency, setFrequency] = useState<"once" | "monthly">("monthly");

  return (
    <div className="flex flex-col w-full bg-gradient-to-b from-white to-slate-50 min-h-screen py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 w-full">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800 mb-6">
            Your Support <span className="text-blue-400">Changes Lives</span>
          </h1>
          <p className="text-lg leading-8 text-slate-500 max-w-2xl mx-auto">
            100% of your donation goes directly to funding our field programs. Choose how you want to make an impact today.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/5 border border-slate-100 overflow-hidden mb-24">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Left side: Information */}
            <div className="bg-gradient-to-b from-[#5B8DEF] to-[#6F9EF8] text-white p-10 md:p-12 md:col-span-2 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-16 -mr-16 text-white/10">
                <Heart className="h-64 w-64 fill-current" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 tracking-tight">Why Donate Monthly?</h3>
                <ul className="space-y-6 text-blue-50">
                  <li className="flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-full flex-shrink-0">
                      <ShieldCheck className="h-5 w-5 text-white" />
                    </div>
                    <span className="leading-relaxed">Provides sustained support for long-term programs.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-full flex-shrink-0">
                      <ShieldCheck className="h-5 w-5 text-white" />
                    </div>
                    <span className="leading-relaxed">Helps us respond instantly to emergencies.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-full flex-shrink-0">
                      <ShieldCheck className="h-5 w-5 text-white" />
                    </div>
                    <span className="leading-relaxed">Exclusive monthly impact reports.</span>
                  </li>
                </ul>
              </div>

              {/* Real-time impact floating box */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-12 relative z-10 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 flex items-center gap-4 shadow-lg"
              >
                <div className="bg-white text-blue-500 p-3 rounded-full shadow-inner flex-shrink-0">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold text-white text-lg">237 donations</div>
                  <div className="text-sm text-blue-100 font-medium">made this week</div>
                </div>
              </motion.div>
            </div>

            {/* Right side: Donation Form */}
            <div className="p-10 md:p-12 md:col-span-3">
              
              {/* Premium Segmented Control */}
              <div className="flex p-1.5 bg-slate-100/80 rounded-2xl mb-10 relative shadow-inner">
                <button
                  onClick={() => setFrequency("once")}
                  className={`relative z-10 flex-1 py-3.5 text-sm font-bold rounded-xl transition-all duration-300 ${frequency === "once" ? "text-blue-600" : "text-slate-500 hover:text-slate-700"}`}
                >
                  Give Once
                </button>
                <button
                  onClick={() => setFrequency("monthly")}
                  className={`relative z-10 flex-1 py-3.5 text-sm font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${frequency === "monthly" ? "text-blue-600" : "text-slate-500 hover:text-slate-700"}`}
                >
                  <Heart className={`h-4 w-4 transition-colors ${frequency === "monthly" ? "fill-current" : ""}`} /> Monthly
                </button>
                {/* Active Pill Background */}
                <div 
                  className={`absolute top-1.5 bottom-1.5 w-[calc(50%-0.375rem)] bg-white rounded-xl shadow-md transition-transform duration-300 ease-in-out ${frequency === "monthly" ? "translate-x-full left-[calc(0.375rem)]" : "left-1.5"}`}
                ></div>
              </div>

              {/* Amount Selection */}
              <div className="mb-10">
                <label className="block text-sm font-bold text-slate-800 mb-4 tracking-tight">Select Amount</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {amounts.map((item) => (
                    <button
                      key={item.val}
                      onClick={() => setAmount(item.val)}
                      className={`relative flex flex-col items-center justify-center p-5 rounded-2xl border-2 transition-all duration-300 overflow-hidden group
                        ${amount === item.val 
                          ? "border-blue-500 bg-blue-50 text-blue-800 scale-105 shadow-xl shadow-blue-500/10" 
                          : "border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-lg"
                        }`}
                    >
                      <span className="font-extrabold text-2xl mb-1">₹{item.val}</span>
                      <span className={`text-xs font-medium text-center px-2 ${amount === item.val ? "text-blue-600" : "text-slate-500"}`}>
                        {item.impact}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="relative mt-4">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <IndianRupee className={`h-5 w-5 ${amount === "other" ? "text-blue-500" : "text-slate-400"}`} />
                  </div>
                  <input
                    type="number"
                    placeholder="Other Amount"
                    onClick={() => setAmount("other")}
                    className={`block w-full pl-12 pr-5 h-14 text-lg border-2 rounded-xl transition-all duration-300 ${amount === "other" ? "border-blue-500 ring-4 ring-blue-500/10" : "border-slate-200 focus:border-slate-300"} outline-none text-slate-800 font-bold bg-slate-50/50 focus:bg-white`}
                  />
                </div>
              </div>

              {/* Personal Info (Mock Form) */}
              <div className="space-y-5 mb-10">
                <div className="grid grid-cols-2 gap-5">
                  <div className="relative">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">First Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-slate-400" />
                      </div>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 h-14 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none text-slate-800 font-medium transition-all focus:bg-white" placeholder="John" />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Last Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-slate-400" />
                      </div>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 h-14 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none text-slate-800 font-medium transition-all focus:bg-white" placeholder="Doe" />
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400" />
                    </div>
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 h-14 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none text-slate-800 font-medium transition-all focus:bg-white" placeholder="john@example.com" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 relative overflow-hidden group">
                <span className="relative z-10 flex items-center gap-2"><CreditCard className="h-5 w-5" /> Continue to Payment</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              {/* Security Trust Row */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-green-500" /> Secure Donation</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-blue-500" /> 100% Transparency</span>
                <span className="flex items-center gap-1.5"><Award className="h-4 w-4 text-orange-400" /> Tax Eligible</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transparency Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 mb-4">Where Your Donation Goes</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We maximize every rupee. Our independent audits ensure your contribution directly funds critical field operations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="relative w-24 h-24 flex items-center justify-center mb-6">
                <svg className="w-full h-full transform -rotate-90 text-blue-100" viewBox="0 0 36 36">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#5B8DEF" strokeWidth="3" strokeDasharray="45, 100" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-blue-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">45%</h3>
              <p className="font-semibold text-blue-500 mb-3">Education</p>
              <p className="text-sm text-slate-500">Funding schools, teachers, and student supplies.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="relative w-24 h-24 flex items-center justify-center mb-6">
                <svg className="w-full h-full transform -rotate-90 text-sky-100" viewBox="0 0 36 36">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#38BDF8" strokeWidth="3" strokeDasharray="30, 100" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Stethoscope className="h-8 w-8 text-sky-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">30%</h3>
              <p className="font-semibold text-sky-500 mb-3">Healthcare</p>
              <p className="text-sm text-slate-500">Mobile clinics, medical supplies, and local training.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="relative w-24 h-24 flex items-center justify-center mb-6">
                <svg className="w-full h-full transform -rotate-90 text-amber-100" viewBox="0 0 36 36">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#F59E0B" strokeWidth="3" strokeDasharray="25, 100" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Utensils className="h-8 w-8 text-amber-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">25%</h3>
              <p className="font-semibold text-amber-500 mb-3">Food & Relief</p>
              <p className="text-sm text-slate-500">Emergency rations, clean water, and community kitchens.</p>
            </div>
          </div>
        </div>

        {/* Recent Impact Bottom Banner */}
        <div className="bg-slate-900 rounded-3xl p-10 md:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-8">Recent Impact Thanks To Donors Like You</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div>
                <div className="text-4xl font-extrabold text-blue-400 mb-2">1,200+</div>
                <div className="text-slate-300 font-medium uppercase tracking-widest text-sm">Meals Delivered Last Month</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-slate-700"></div>
              <div>
                <div className="text-4xl font-extrabold text-blue-400 mb-2">350</div>
                <div className="text-slate-300 font-medium uppercase tracking-widest text-sm">Students Fully Equipped</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
