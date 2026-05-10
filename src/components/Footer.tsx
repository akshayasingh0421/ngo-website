import Link from 'next/link';
import { Heart, Globe, Mail } from 'lucide-react';
import { FaInstagram, FaTwitter, FaEnvelope, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold tracking-tight">HopeFoundation</span>
            </div>
            <p className="text-slate-300 text-sm">
              Empowering communities and creating sustainable change for a better tomorrow.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/programs" className="hover:text-blue-400 transition-colors">Programs</Link></li>
              <li><Link href="/impact" className="hover:text-blue-400 transition-colors">Our Impact</Link></li>
              <li><Link href="/donate" className="hover:text-blue-400 transition-colors">Donate</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>12th Floor, Tower B, Cyber City</li>
              <li>Gurugram, Haryana 122002, India</li>
              <li>contact@hopefoundation.in</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">Follow Us</h3>
            <div className="flex gap-4 text-slate-300">
              <a href="#" className="hover:text-blue-400 transition-colors"><FaFacebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><FaInstagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><FaTwitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><FaEnvelope className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} HopeFoundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
