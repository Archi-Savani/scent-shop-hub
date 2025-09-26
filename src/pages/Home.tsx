import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star, Sparkles, Heart } from "lucide-react";

const Home = () => {
  const featuredProducts = [
    { id: 1, name: "Midnight Elegance", price: 89, image: "/placeholder.svg" },
    { id: 2, name: "Rose Garden", price: 75, image: "/placeholder.svg" },
    { id: 3, name: "Ocean Breeze", price: 65, image: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            Luxe Parfum
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-luxury-cream/90 max-w-2xl mx-auto">
            Discover the world's finest fragrances, curated for the most discerning tastes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button variant="luxury" size="lg" className="shadow-gold">
                <Sparkles className="w-5 h-5 mr-2" />
                Explore Collection
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-luxury-purple">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-luxury-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-purple mb-4">
              Featured Collections
            </h2>
            <p className="text-lg text-luxury-purple/70 max-w-2xl mx-auto">
              Handpicked fragrances that define elegance and sophistication
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="bg-gradient-card shadow-elegant hover:shadow-luxury transition-luxury group">
                <div className="p-6">
                  <div className="aspect-square bg-luxury-purple/10 rounded-lg mb-4 flex items-center justify-center group-hover:bg-luxury-purple/20 transition-luxury">
                    <Heart className="w-16 h-16 text-luxury-purple/30" />
                  </div>
                  <h3 className="text-xl font-semibold text-luxury-purple mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-luxury-gold fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-luxury-purple/60">(127 reviews)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-luxury-purple">
                      ${product.price}
                    </span>
                    <Button variant="luxury" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-purple mb-4">
              Why Choose Luxe Parfum
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-purple mb-3">Premium Quality</h3>
              <p className="text-luxury-purple/70">
                Only the finest ingredients sourced from around the world
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-purple mb-3">Crafted with Love</h3>
              <p className="text-luxury-purple/70">
                Each fragrance is carefully crafted by master perfumers
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-luxury-purple mb-3">Exclusive Collection</h3>
              <p className="text-luxury-purple/70">
                Unique fragrances you won't find anywhere else
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;