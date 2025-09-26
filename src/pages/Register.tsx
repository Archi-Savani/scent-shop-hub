import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // Mock registration - in real app, this would connect to Supabase
    toast({
      title: "Registration Successful!",
      description: "Welcome to Luxe Parfum. Please log in to continue.",
    });
    
    navigate("/login");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-hero">
      <Card className="w-full max-w-md p-8 shadow-luxury bg-white/95 backdrop-blur-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-luxury-purple mb-2">Create Account</h1>
          <p className="text-luxury-purple/70">Join the Luxe Parfum family</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Create a password"
              className="mt-1"
            />
          </div>

          <Button type="submit" variant="luxury" className="w-full">
            <UserPlus className="w-4 h-4 mr-2" />
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-luxury-purple/70">
            Already have an account?{" "}
            <Link to="/login" className="text-luxury-gold hover:underline font-medium">
              Sign in here
            </Link>
          </p>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-luxury-purple/60">
          <p>
            By creating an account, you agree to our{" "}
            <Link to="#" className="text-luxury-gold hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="#" className="text-luxury-gold hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Register;