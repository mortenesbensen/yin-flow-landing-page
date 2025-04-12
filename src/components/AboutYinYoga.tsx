
import { CheckCircle2 } from "lucide-react";

const AboutYinYoga = () => {
  const benefits = [
    "Improves flexibility & joint mobility",
    "Reduces stress & anxiety",
    "Balances internal energy",
    "Enhances circulation",
    "Creates deeper mind-body awareness",
    "Complements active yoga practices"
  ];

  return (
    <section id="yin-yoga" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-yin-text">The Art of Yin Yoga</h2>
          <p className="text-lg text-gray-700 mb-8">
            Yin Yoga is a slow-paced style of yoga where poses are held for longer periods—typically 3-5 minutes. 
            This practice targets the deep connective tissues of the body, rather than the muscles, to increase 
            circulation and improve flexibility.
          </p>
          <p className="text-lg text-gray-700">
            Unlike more active forms of yoga, Yin is passive, allowing you to turn inward and nurture the calm, 
            quiet center that is innate in all of us. The practice emphasizes stillness, mindfulness, and acceptance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg animate-breathe">
            <img 
              src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=826&q=80" 
              alt="Peaceful yin yoga practice" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-serif font-medium mb-6 text-yin-text">Benefits of Yin Yoga</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-yin flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-yin-light rounded-lg border border-yin/20">
              <h4 className="text-xl font-serif mb-3 text-yin-text">Perfect for All Levels</h4>
              <p className="text-gray-700">
                Whether you're a beginner or an experienced yogi, Yin Yoga offers profound benefits. 
                The practice accommodates all body types and flexibility levels, making it accessible for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutYinYoga;
