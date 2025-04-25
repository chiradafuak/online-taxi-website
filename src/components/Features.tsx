
import React from "react";

const Features = () => {
  const features = [
    {
      icon: (
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
          className="w-6 h-6"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      title: "Instant Booking",
      description: "Get a ride in minutes with our fast booking system that connects you with nearby drivers."
    },
    {
      icon: (
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
          className="w-6 h-6"
        >
          <path d="m2 12 6 6c2.33-2.33 3.5-5.67 3.5-10a13.81 13.81 0 0 0-.86-5H2" />
          <path d="M8 12h6.5a2 2 0 0 1 2 2v6" />
          <path d="M22 8a4 4 0 0 0-4-4" />
          <path d="M18 17a4 4 0 0 0 4 4" />
        </svg>
      ),
      title: "Live Tracking",
      description: "Track your driver's location in real-time and share your trip details with friends and family."
    },
    {
      icon: (
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
          className="w-6 h-6"
        >
          <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
          <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
          <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
          <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
        </svg>
      ),
      title: "Dynamic Pricing",
      description: "Transparent fare calculations with surge pricing during peak hours and reduced rates during off-peak times."
    },
    {
      icon: (
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
          className="w-6 h-6"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
      title: "Safety First",
      description: "Driver background checks, in-app emergency assistance, and comprehensive rider insurance coverage."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="taxi-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Why Choose InstantTaxi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform combines cutting-edge technology with exceptional service to provide you with the best taxi experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
