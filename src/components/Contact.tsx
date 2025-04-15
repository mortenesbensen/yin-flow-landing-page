
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Besked Sendt",
        description: "Tak for din besked. Jeg vender tilbage til dig hurtigst muligt.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-yin-light/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-yin-text">Kontakt Mig</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Har du spørgsmål om mine hold eller er du interesseret i private sessioner? 
            Jeg vil gerne høre fra dig. Udfyld formularen nedenfor eller kontakt mig direkte.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-serif font-medium mb-6 text-yin-text">Send en Besked</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Dit Navn
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Indtast dit navn"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Adresse
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Indtast din email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefonnummer (Valgfrit)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Indtast dit telefonnummer"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Besked
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Hvad vil du gerne vide?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full h-32"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-yin hover:bg-yin-dark text-white flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sender..." : "Send Besked"} 
                  <Send size={16} />
                </Button>
              </div>
            </form>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-medium mb-6 text-yin-text">Kontaktinformation</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yin/10 p-3 rounded-full">
                    <Mail className="text-yin" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-yin-text">Email</h4>
                    <p className="text-gray-700">hello@yinyoga.example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-yin/10 p-3 rounded-full">
                    <Phone className="text-yin" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-yin-text">Telefon</h4>
                    <p className="text-gray-700">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-yin/10 p-3 rounded-full">
                    <MapPin className="text-yin" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-yin-text">Lokationer</h4>
                    <p className="text-gray-700 mb-2">Harmony Studio: Balancevej 123</p>
                    <p className="text-gray-700">Serenity Center: Mindfulnessvej 456</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-yin-light rounded-lg">
              <h4 className="text-lg font-serif mb-3 text-yin-text">Book en Privat Session</h4>
              <p className="text-gray-700 mb-4">
                Leder du efter personlig opmærksomhed? Private sessioner er tilgængelige 
                for enkeltpersoner eller små grupper.
              </p>
              <Button className="w-full bg-yin hover:bg-yin-dark text-white">
                Anmod om Privat Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
