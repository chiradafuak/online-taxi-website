
import React from "react";
import { MapPin } from "lucide-react";

const Map = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] bg-gray-200 rounded-lg overflow-hidden">
      {/* This is a placeholder for a real map integration */}
      <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-73.935242,40.730610,13,0/600x400?access_token=pk.placeholder')] bg-cover bg-center"></div>
      
      {/* Map pins */}
      <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center animate-pulse p-5">
          <MapPin className="h-5 w-5 text-secondary" />
        </div>
      </div>
      
      <div className="absolute bottom-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center animate-pulse p-5">
          <MapPin className="h-5 w-5 text-white" />
        </div>
      </div>
      
      {/* Car icon showing movement between points */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-secondary rounded-full p-3 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <path d="M9 17h6" />
            <circle cx="17" cy="17" r="2" />
          </svg>
        </div>
      </div>
      
      {/* Map overlay with message */}
      <div className="absolute bottom-0 inset-x-0 bg-white bg-opacity-90 p-4">
        <p className="text-center text-secondary">
          Interactive map would be integrated here with real-time tracking using Google Maps API or similar service.
        </p>
      </div>
    </div>
  );
};

export default Map;
