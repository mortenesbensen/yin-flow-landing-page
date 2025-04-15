
import { Heart, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-yin-light/20 text-yin-deep py-10 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Line Jakobsen Yin Yoga</h3>
            <p className="text-yin-text mb-4">
              Opdag den transformerende praksis af Yin Yoga, hvor stilhed bliver til styrke 
              og balance fører til vækst.
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
            <h3 className="text-xl font-serif font-medium mb-4">Hurtige Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-yin-text hover:text-yin-deep transition-colors">
                  Hjem
                </a>
              </li>
              <li>
                <a href="#about" className="text-yin-text hover:text-yin-deep transition-colors">
                  Om Mig
                </a>
              </li>
              <li>
                <a href="#yin-yoga" className="text-yin-text hover:text-yin-deep transition-colors">
                  Yin Yoga
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-yin-text hover:text-yin-deep transition-colors">
                  Holdplan
                </a>
              </li>
              <li>
                <a href="#contact" className="text-yin-text hover:text-yin-deep transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Nyhedsbrev</h3>
            <p className="text-yin-text mb-4">
              Tilmeld dig for at modtage opdateringer om nye hold, workshops og mindfulness tips.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Din email" 
                className="px-4 py-2 rounded-l-md bg-white text-yin-text w-full focus:outline-none border border-yin/20"
              />
              <button type="submit" className="bg-yin hover:bg-yin-dark text-white px-4 py-2 rounded-r-md transition-colors">
                Tilmeld
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-yin/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-yin-text/80 text-sm">
            © {currentYear} Line Jakobsen Yin Yoga. Alle rettigheder forbeholdes.
          </p>
          <p className="text-yin-text/80 text-sm flex items-center">
            Lavet med <Heart size={14} className="mx-1 text-yin" /> til din velvære rejse
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
