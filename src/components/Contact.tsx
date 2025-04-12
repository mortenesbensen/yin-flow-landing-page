
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
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon.",
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
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-yin-text">Get in Touch</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Have questions about my classes or interested in private sessions? 
            I'd love to hear from you. Fill out the form below or contact me directly.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-serif font-medium mb-6 text-yin-text">Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="What would you like to know?"
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
                  {isSubmitting ? "Sending..." : "Send Message"} 
                  <Send size={16} />
                </Button>
              </div>
            </form>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-medium mb-6 text-yin-text">Contact Information</h3>
              
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
                    <h4 className="font-medium text-yin-text">Phone</h4>
                    <p className="text-gray-700">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-yin/10 p-3 rounded-full">
                    <MapPin className="text-yin" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-yin-text">Locations</h4>
                    <p className="text-gray-700 mb-2">Harmony Studio: 123 Serenity Ave</p>
                    <p className="text-gray-700">Serenity Center: 456 Wellness Blvd</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-yin-light rounded-lg">
              <h4 className="text-lg font-serif mb-3 text-yin-text">Book a Private Session</h4>
              <p className="text-gray-700 mb-4">
                Looking for personalized attention? Private sessions are available 
                for individuals or small groups.
              </p>
              <Button className="w-full bg-yin hover:bg-yin-dark text-white">
                Request Private Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
