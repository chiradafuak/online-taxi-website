
import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Set Your Location",
      description: "Enter your pickup location or use GPS to automatically detect where you are.",
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
          className="w-8 h-8"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Choose Your Ride",
      description: "Select from our range of vehicle options based on your needs and group size.",
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
          className="w-8 h-8"
        >
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Confirm & Pay",
      description: "Review the fare estimate and confirm your booking with secure payment options.",
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
          className="w-8 h-8"
        >
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Enjoy Your Ride",
      description: "Track your driver's arrival in real-time and enjoy a comfortable journey to your destination.",
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
          className="w-8 h-8"
        >
          <path d="M12 19c-2.3 0-6.4-.2-8.1-.6-.7-.2-1.2-.7-1.4-1.4-.3-1.1-.5-3.4-.5-5s.2-3.9.5-5c.2-.7.7-1.2 1.4-1.4C5.6 5.2 9.7 5 12 5s6.4.2 8.1.6c.7.2 1.2.7 1.4 1.4.3 1.1.5 3.4.5 5s-.2 3.9-.5 5c-.2.7-.7 1.2-1.4 1.4-1.7.4-5.8.6-8.1.6 0 0 0 0 0 0z" />
          <polygon points="10 15 15 12 10 9 10 15" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="taxi-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting a ride with InstantTaxi is easy and convenient. Here's how our process works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
              )}
              
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm relative z-10 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary">
                    {step.icon}
                  </div>
                  <span className="ml-4 text-4xl font-bold text-gray-200">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">{step.title}</h3>
                <p className="text-gray-600 flex-grow">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
