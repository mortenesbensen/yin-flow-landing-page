
import { CheckCircle2 } from "lucide-react";

const AboutYinYoga = () => {
  const benefits = [
    "Forbedrer fleksibilitet & mobilitet",
    "Reducerer stress & angst",
    "Balancerer indre energi",
    "Forbedrer blodcirkulation",
    "Skaber dybere krops-sind bevidsthed",
    "Komplimenterer aktive yoga praksisser"
  ];

  return (
    <section id="yin-yoga" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-yin-text">Kunsten at Udøve Yin Yoga</h2>
          <p className="text-lg text-gray-700 mb-8">
            Yin Yoga er en langsom yoga-stil, hvor stillingerne holdes i længere tid – typisk 3-5 minutter. 
            Denne praksis målretter kroppens dybe bindevæv frem for musklerne for at øge 
            cirkulationen og forbedre fleksibiliteten.
          </p>
          <p className="text-lg text-gray-700">
            I modsætning til mere aktive former for yoga er Yin passiv og giver dig mulighed for at vende blikket indad og nære den rolige, 
            stille kerne, der er medfødt i os alle. Praksissen lægger vægt på stilhed, mindfulness og accept.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg animate-breathe">
            <img 
              src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=826&q=80" 
              alt="Fredfyldt yin yoga praksis" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-serif font-medium mb-6 text-yin-text">Fordele ved Yin Yoga</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-yin flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-yin-light rounded-lg border border-yin/20">
              <h4 className="text-xl font-serif mb-3 text-yin-text">Perfekt for Alle Niveauer</h4>
              <p className="text-gray-700">
                Uanset om du er nybegynder eller en erfaren yogi, tilbyder Yin Yoga dybdegående fordele. 
                Praksissen imødekommer alle kropstyper og fleksibilitetsniveauer, hvilket gør den tilgængelig for alle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutYinYoga;
