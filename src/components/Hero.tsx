
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556122071-e404eaedb77f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative taxi-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-secondary">
              Your Ride, <span className="text-primary">On Demand</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Book a taxi in seconds, track your driver in real-time, and enjoy transparent pricing with our safe and reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/book">
                <Button size="lg" className="bg-primary hover:bg-primary-600 text-secondary font-medium px-8">
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-secondary text-secondary">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center md:justify-end">
            <div className="bg-white shadow-xl rounded-lg p-5 w-full max-w-md border border-gray-100 transform md:translate-y-4 animate-fade-in">
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-bold text-secondary">Quick Booking</h3>
                <div className="flex items-center p-3 bg-gray-50 rounded-md">
                  <div className="bg-primary/20 p-2 rounded-full mr-3">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4l3 3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-secondary">Taxi arrives in</p>
                    <p className="text-2xl font-bold text-primary">3 min</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 py-2">
                  <div className="col-span-3">
                    <p className="text-sm font-medium text-secondary mb-1">Popular destinations:</p>
                  </div>
                  <Button variant="ghost" className="border text-xs py-1 px-3 h-auto">Airport</Button>
                  <Button variant="ghost" className="border text-xs py-1 px-3 h-auto">Downtown</Button>
                  <Button variant="ghost" className="border text-xs py-1 px-3 h-auto">Mall</Button>
                </div>
                <Link to="/book">
                  <Button className="w-full bg-accent hover:bg-accent-600">Book a Ride</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
