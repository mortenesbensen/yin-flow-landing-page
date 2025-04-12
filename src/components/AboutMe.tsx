
import { Award, Heart, Users } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-4 bg-yin-light/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-yin-text">About Me</h2>
            <p className="text-lg text-gray-700 mb-6">
              Hello, I'm [Your Name], a certified Yin Yoga instructor passionate about helping others discover the 
              transformative power of this gentle practice. My journey with yoga began over [X] years ago, and 
              I've been specifically focused on Yin Yoga for [Y] years.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              I believe that in our fast-paced world, the practice of slowing down and turning inward is not just 
              beneficial—it's essential. My teaching emphasizes mindfulness, proper alignment, and creating a safe 
              space for all practitioners to explore their unique bodies and minds.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              My classes are suitable for all levels, from complete beginners to experienced yogis looking to 
              complement their more active practices. I look forward to sharing this beautiful journey with you.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-yin/20 flex items-center justify-center mx-auto mb-3">
                  <Award className="text-yin" size={24} />
                </div>
                <h4 className="font-medium text-yin-text">Certified</h4>
                <p className="text-sm text-gray-600">200hr RYT</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-yin/20 flex items-center justify-center mx-auto mb-3">
                  <Heart className="text-yin" size={24} />
                </div>
                <h4 className="font-medium text-yin-text">Experience</h4>
                <p className="text-sm text-gray-600">[X] Years</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-yin/20 flex items-center justify-center mx-auto mb-3">
                  <Users className="text-yin" size={24} />
                </div>
                <h4 className="font-medium text-yin-text">Students</h4>
                <p className="text-sm text-gray-600">500+</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=920&q=80" 
              alt="Yoga instructor portrait" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
