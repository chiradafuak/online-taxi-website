
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, MapPin } from "lucide-react";

const BookingForm = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [vehicleType, setVehicleType] = useState("standard");
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Simulated price calculation
  const calculateEstimatedPrice = () => {
    // This would normally call an API or use a more complex algorithm
    // Here we're using a simple calculation for demo purposes
    const basePrice = vehicleType === "standard" ? 5 : vehicleType === "premium" ? 8 : 12;
    const distance = Math.floor(Math.random() * 15) + 5; // Random distance between 5-20 km
    return basePrice + (distance * 1.5);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const price = calculateEstimatedPrice();
    setEstimatedPrice(price);
    setFormSubmitted(true);
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Book Your Ride</CardTitle>
        <CardDescription>
          Enter your pickup and destination locations to get started.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="pickup">Pickup Location</Label>
            <div className="relative">
              <Input
                id="pickup"
                placeholder="Enter your pickup address"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="pl-10"
                required
              />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="destination">Destination</Label>
            <div className="relative">
              <Input
                id="destination"
                placeholder="Enter your destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="pl-10"
                required
              />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="vehicleType">Vehicle Type</Label>
            <Select value={vehicleType} onValueChange={setVehicleType}>
              <SelectTrigger id="vehicleType">
                <SelectValue placeholder="Select vehicle type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard - Sedan</SelectItem>
                <SelectItem value="premium">Premium - SUV</SelectItem>
                <SelectItem value="luxury">Luxury - Executive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {!formSubmitted ? (
            <Button type="submit" className="w-full mt-6 bg-accent hover:bg-accent-600">
              Get Estimated Price
            </Button>
          ) : (
            <div className="space-y-4">
              <div className="border rounded-lg p-4 bg-gray-50">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Estimated Price</p>
                    <p className="text-2xl font-semibold text-secondary">${estimatedPrice.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Estimated Arrival</p>
                    <p className="text-lg font-semibold text-accent">3-5 min</p>
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary-600 text-secondary font-medium">
                Confirm Booking
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}
        </form>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <p className="text-xs text-gray-500">
          By booking, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
        </p>
      </CardFooter>
    </Card>
  );
};

export default BookingForm;
