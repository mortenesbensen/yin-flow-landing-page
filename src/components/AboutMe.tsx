
import { Award, Heart, Users } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-4 bg-yin-light/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-yin-text">Om Mig</h2>
            <p className="text-lg text-gray-700 mb-6">
              Hej, jeg er Line Jakobsen, en certificeret Yin Yoga instruktør med passion for at hjælpe andre med at opdage 
              den transformerende kraft i denne blide praksis. Min rejse med yoga begyndte for over [X] år siden, og 
              jeg har været specifikt fokuseret på Yin Yoga i [Y] år.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Jeg mener, at i vores hektiske verden er praksissen med at sætte farten ned og vende blikket indad ikke bare 
              gavnlig – det er essentielt. Min undervisning lægger vægt på mindfulness, korrekt justering og skabelse af et sikkert 
              rum for alle udøvere til at udforske deres unikke kroppe og sind.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Mine hold er velegnede for alle niveauer, fra helt nybegyndere til erfarne yogier, der ønsker at 
              supplere deres mere aktive praksis. Jeg ser frem til at dele denne smukke rejse med dig.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-yin/20 flex items-center justify-center mx-auto mb-3">
                  <Award className="text-yin" size={24} />
                </div>
                <h4 className="font-medium text-yin-text">Certificeret</h4>
                <p className="text-sm text-gray-600">200 timer RYT</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-yin/20 flex items-center justify-center mx-auto mb-3">
                  <Heart className="text-yin" size={24} />
                </div>
                <h4 className="font-medium text-yin-text">Erfaring</h4>
                <p className="text-sm text-gray-600">[X] År</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-yin/20 flex items-center justify-center mx-auto mb-3">
                  <Users className="text-yin" size={24} />
                </div>
                <h4 className="font-medium text-yin-text">Elever</h4>
                <p className="text-sm text-gray-600">500+</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=920&q=80" 
              alt="Yoga instruktør portræt" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
