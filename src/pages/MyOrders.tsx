import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Eye, RotateCcw } from "lucide-react";

const MyOrders = () => {
  // Mock orders data
  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 164,
      items: [
        { name: "Midnight Elegance", quantity: 1, price: 89 },
        { name: "Rose Garden", quantity: 1, price: 75 },
      ],
    },
    {
      id: "ORD-002", 
      date: "2024-01-20",
      status: "Shipped",
      total: 95,
      items: [
        { name: "Golden Sunset", quantity: 1, price: 95 },
      ],
    },
    {
      id: "ORD-003",
      date: "2024-01-25", 
      status: "Processing",
      total: 145,
      items: [
        { name: "Ocean Breeze", quantity: 1, price: 65 },
        { name: "Storm Cloud", quantity: 1, price: 80 },
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Shipped":
        return "bg-blue-100 text-blue-800";
      case "Processing":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 bg-luxury-cream">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-luxury-purple mb-4">My Orders</h1>
          <p className="text-lg text-luxury-purple/70">
            Track and manage your perfume orders
          </p>
        </div>

        {orders.length > 0 ? (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id} className="p-6 shadow-elegant">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-luxury-purple mb-1">
                      Order {order.id}
                    </h3>
                    <p className="text-luxury-purple/60">
                      Placed on {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                    <span className="text-xl font-bold text-luxury-purple">
                      ${order.total}
                    </span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium text-luxury-purple mb-3">Items:</h4>
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-luxury-purple/10 rounded-lg flex items-center justify-center">
                            <Package className="w-6 h-6 text-luxury-purple/50" />
                          </div>
                          <div>
                            <p className="font-medium text-luxury-purple">{item.name}</p>
                            <p className="text-sm text-luxury-purple/60">Quantity: {item.quantity}</p>
                          </div>
                        </div>
                        <span className="font-medium text-luxury-purple">${item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-4 border-t">
                  <Button variant="outline" className="flex-1">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  {order.status === "Delivered" && (
                    <Button variant="luxury" className="flex-1">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reorder
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center shadow-elegant">
            <Package className="w-16 h-16 text-luxury-purple/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-luxury-purple mb-2">No Orders Yet</h3>
            <p className="text-luxury-purple/60 mb-6">
              You haven't placed any orders yet. Start shopping to see your orders here.
            </p>
            <Button variant="luxury">
              Start Shopping
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MyOrders;