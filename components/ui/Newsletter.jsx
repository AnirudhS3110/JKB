'use client';

import { motion } from 'framer-motion';

export default function Newsletter() {
  return (
    <section className="py-16 bg-[#F4720B] text-white relative z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-heading font-light mb-6">Stay Updated on Our Campaigns</h3>
          <p className="text-white mb-8 font-paragraph">
            Subscribe to our newsletter to receive updates on upcoming campaigns and opportunities to contribute.
          </p>
          
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F4720B]"
              />
              <button 
                type="submit" 
                className="bg-white hover:bg-gray-100 text-[#F4720B] font-medium font-paragraph px-6 py-3 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-white mt-4 opacity-80 font-paragraph">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 