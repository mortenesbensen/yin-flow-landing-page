import { Heart, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-yin-deep text-white py-10 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Line Jakobsen Yin Yoga</h3>
            <p className="text-gray-300 mb-4">
              Discover the transformative practice of Yin Yoga, where stillness becomes strength 
              and balance leads to growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yin transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-yin transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-yin transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#yin-yoga" className="text-gray-300 hover:text-white transition-colors">
                  Yin Yoga
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-gray-300 hover:text-white transition-colors">
                  Class Schedule
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to receive updates on new classes, workshops, and mindfulness tips.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md text-yin-text w-full focus:outline-none"
              />
              <button type="submit" className="bg-yin hover:bg-yin-dark text-white px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Yin Flow. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart size={14} className="mx-1 text-yin" /> for your wellness journey
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
