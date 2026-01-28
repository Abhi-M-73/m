import React from "react";
import {
  Mail,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { MainContent } from "../../utils/mainContent";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      <div className="absolute top-0 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 md:w-[90%] w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-full" />
              <h2 className="text-2xl font-bold">{MainContent.appName}</h2>
            </div>

            <h3 className="text-4xl font-bold mb-5 leading-tight">
              Upgrade
              <span className="text-yellow-500"> Your Style</span>
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium products, secure payments and fast delivery – everything
              you need for a smooth shopping experience.
            </p>

            {/* Social */}
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 bg-white shadow-sm border border-gray-200 rounded-lg  hover:rotate-12 hover:scale-105 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-yellow-600" />
                </a>
              ))}
            </div>
          </div>

          {/* Why Us */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-full" />
              <h3 className="text-xl font-bold">WHY SHOP WITH US</h3>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              We bring you authentic products, exciting offers, easy returns and
              fast customer support for a premium shopping experience.
            </p>

            <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-full" />
              <h3 className="text-xl font-bold">CONTACT US</h3>
            </div>

            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin className="w-6 h-6 text-yellow-500 mt-1" />
                <p className="text-gray-300">{MainContent.address}</p>
              </div>

              <a
                href={`mailto:${MainContent.email}`}
                className="flex gap-3 hover:opacity-80"
              >
                <Mail className="w-6 h-6 text-yellow-500 mt-1" />
                <p className="text-yellow-600 font-medium">
                  {MainContent.email}
                </p>
              </a>

              <a
                href={MainContent.telegram_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 hover:opacity-80"
              >
                <Send className="w-6 h-6 text-yellow-500 mt-1" />
                <p className="text-yellow-600 font-medium">
                  Telegram Support
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-300 text-sm">
            &copy; {currentYear} {MainContent.appName}. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-yellow-500">Terms</a>
            <a href="#" className="hover:text-yellow-500">Privacy</a>
            <a href="#" className="hover:text-yellow-500">Returns</a>
          </div>
        </div>
      </div>

      {/* Floating Chat */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all">
          <MessageCircle className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
