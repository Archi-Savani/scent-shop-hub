import { Card } from "@/components/ui/card";
import { Award, Users, Sparkles, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-luxury-cream/90 leading-relaxed">
            Born from a passion for exquisite fragrances, Luxe Parfum has been crafting 
            memorable scents that capture the essence of luxury and elegance for over two decades.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-luxury-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-luxury-purple mb-6">Our Mission</h2>
              <p className="text-lg text-luxury-purple/80 mb-6 leading-relaxed">
                We believe that fragrance is more than just a scent – it's a form of self-expression, 
                a memory maker, and a confidence booster. Our mission is to create exceptional 
                fragrances that tell your unique story.
              </p>
              <p className="text-lg text-luxury-purple/80 leading-relaxed">
                Every bottle in our collection is a testament to our commitment to quality, 
                artistry, and the timeless art of perfumery.
              </p>
            </div>
            <div className="aspect-square bg-gradient-card rounded-lg flex items-center justify-center shadow-elegant">
              <Heart className="w-32 h-32 text-luxury-purple/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-luxury-purple mb-4">Our Values</h2>
            <p className="text-lg text-luxury-purple/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center shadow-elegant hover:shadow-luxury transition-luxury">
              <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-purple mb-3">Excellence</h3>
              <p className="text-luxury-purple/70">
                We never compromise on quality and strive for perfection in every creation.
              </p>
            </Card>

            <Card className="p-6 text-center shadow-elegant hover:shadow-luxury transition-luxury">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-purple mb-3">Craftsmanship</h3>
              <p className="text-luxury-purple/70">
                Traditional techniques combined with modern innovation create timeless fragrances.
              </p>
            </Card>

            <Card className="p-6 text-center shadow-elegant hover:shadow-luxury transition-luxury">
              <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-purple mb-3">Community</h3>
              <p className="text-luxury-purple/70">
                Building lasting relationships with our customers and partners worldwide.
              </p>
            </Card>

            <Card className="p-6 text-center shadow-elegant hover:shadow-luxury transition-luxury">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-purple mb-3">Passion</h3>
              <p className="text-luxury-purple/70">
                Our love for fragrance drives us to create extraordinary olfactory experiences.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-luxury-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-luxury-purple mb-4">Master Perfumers</h2>
            <p className="text-lg text-luxury-purple/70 max-w-2xl mx-auto">
              Meet the talented artisans behind our exceptional fragrances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Isabella Laurent", role: "Chief Perfumer", experience: "20+ years" },
              { name: "Marcus Chen", role: "Senior Perfumer", experience: "15+ years" },
              { name: "Sophie Dubois", role: "Creative Director", experience: "18+ years" },
            ].map((member) => (
              <Card key={member.name} className="p-6 text-center shadow-elegant">
                <div className="w-24 h-24 bg-gradient-luxury rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-luxury-purple mb-2">{member.name}</h3>
                <p className="text-luxury-gold font-medium mb-1">{member.role}</p>
                <p className="text-luxury-purple/70">{member.experience} experience</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;