import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, User, LogOut } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const isAdmin = localStorage.getItem("userRole") === "admin";
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    window.location.href = "/";
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    ...(isLoggedIn ? [{ name: "My Orders", path: "/my-orders" }] : []),
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gradient-luxury shadow-luxury sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-luxury-cream">Luxe Parfum</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-luxury hover:text-luxury-gold ${
                  location.pathname === item.path
                    ? "text-luxury-gold"
                    : "text-luxury-cream"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                {isAdmin && (
                  <Link to="/admin/products">
                    <Button variant="luxury" size="sm">
                      Admin
                    </Button>
                  </Link>
                )}
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" size="sm">
                    <User className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="luxury" size="sm">
                    Register
                  </Button>
                </Link>
              </>
            )}
            <Button variant="ghost" size="sm">
              <ShoppingBag className="w-5 h-5 text-luxury-cream" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;