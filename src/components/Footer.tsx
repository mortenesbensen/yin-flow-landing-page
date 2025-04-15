
import { Heart, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-yin-light/50 text-yin-deep py-10 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Line Jakobsen Yin Yoga</h3>
            <p className="text-yin-text mb-4">
              Discover the transformative practice of Yin Yoga, where stillness becomes strength 
              and balance leads to growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-yin-deep hover:text-yin transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-yin-deep hover:text-yin transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-yin-deep hover:text-yin transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-yin-text hover:text-yin-deep transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-yin-text hover:text-yin-deep transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#yin-yoga" className="text-yin-text hover:text-yin-deep transition-colors">
                  Yin Yoga
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-yin-text hover:text-yin-deep transition-colors">
                  Class Schedule
                </a>
              </li>
              <li>
                <a href="#contact" className="text-yin-text hover:text-yin-deep transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Newsletter</h3>
            <p className="text-yin-text mb-4">
              Subscribe to receive updates on new classes, workshops, and mindfulness tips.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md bg-white text-yin-text w-full focus:outline-none border border-yin/20"
              />
              <button type="submit" className="bg-yin hover:bg-yin-dark text-white px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-yin/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-yin-text/80 text-sm">
            © {currentYear} Line Jakobsen Yin Yoga. All rights reserved.
          </p>
          <p className="text-yin-text/80 text-sm flex items-center">
            Made with <Heart size={14} className="mx-1 text-yin" /> for your wellness journey
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
