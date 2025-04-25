
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import Map from "@/components/Map";

const Book = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="taxi-container">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Book Your Ride</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enter your pickup and destination locations to get started with your booking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BookingForm />
            <div className="h-full rounded-lg overflow-hidden shadow-sm">
              <Map />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Book;
