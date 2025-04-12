
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen hero-gradient flex items-center py-20 px-4">
      <div className="container mx-auto pt-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-yin-text mb-4">
              Find Balance & Inner Peace with Yin Yoga
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              Discover the transformative practice that connects body, mind, and spirit through deep, restorative poses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-yin hover:bg-yin-dark text-white"
                onClick={() => document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Schedule
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-yin text-yin hover:bg-yin/10"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" 
                alt="Person in yin yoga pose" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#yin-yoga" className="text-yin">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
