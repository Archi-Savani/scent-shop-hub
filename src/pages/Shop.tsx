import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Star, Heart, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Shop = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // Mock products data
  const products = [
    { id: 1, name: "Midnight Elegance", price: 89, discount: 10, category: "Women", rating: 4.8, image: "/placeholder.svg" },
    { id: 2, name: "Rose Garden", price: 75, discount: 0, category: "Women", rating: 4.9, image: "/placeholder.svg" },
    { id: 3, name: "Ocean Breeze", price: 65, discount: 15, category: "Men", rating: 4.7, image: "/placeholder.svg" },
    { id: 4, name: "Golden Sunset", price: 95, discount: 5, category: "Unisex", rating: 4.9, image: "/placeholder.svg" },
    { id: 5, name: "Velvet Dreams", price: 110, discount: 20, category: "Women", rating: 4.8, image: "/placeholder.svg" },
    { id: 6, name: "Storm Cloud", price: 80, discount: 0, category: "Men", rating: 4.6, image: "/placeholder.svg" },
  ];

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const addToCart = (product: any) => {
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const calculateDiscountPrice = (price: number, discount: number) => {
    return price - (price * discount / 100);
  };

  return (
    <div className="min-h-screen py-8 px-4 bg-luxury-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-luxury-purple mb-4">Our Collection</h1>
          <p className="text-lg text-luxury-purple/70 max-w-2xl mx-auto">
            Discover our exquisite range of luxury fragrances
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-luxury-purple/50" />
            <Input
              placeholder="Search fragrances..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="bg-white shadow-elegant hover:shadow-luxury transition-luxury group overflow-hidden">
              <div className="relative">
                <div className="aspect-square bg-luxury-purple/10 flex items-center justify-center group-hover:bg-luxury-purple/20 transition-luxury">
                  <Heart className="w-16 h-16 text-luxury-purple/30" />
                </div>
                {product.discount > 0 && (
                  <Badge className="absolute top-2 right-2 bg-gradient-gold text-white">
                    -{product.discount}%
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-luxury"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="p-6">
                <Badge variant="outline" className="mb-2">
                  {product.category}
                </Badge>
                <h3 className="text-xl font-semibold text-luxury-purple mb-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) 
                          ? "text-luxury-gold fill-current" 
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-luxury-purple/60">
                    ({product.rating})
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {product.discount > 0 ? (
                      <>
                        <span className="text-2xl font-bold text-luxury-purple">
                          ${calculateDiscountPrice(product.price, product.discount).toFixed(0)}
                        </span>
                        <span className="text-lg text-luxury-purple/50 line-through">
                          ${product.price}
                        </span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-luxury-purple">
                        ${product.price}
                      </span>
                    )}
                  </div>
                </div>
                
                <Button 
                  className="w-full" 
                  variant="luxury"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-luxury-purple/60">
              No products found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;