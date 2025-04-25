
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SignupForm } from "@/components/AuthForms";

const Signup = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="taxi-container">
          <div className="max-w-md mx-auto">
            <SignupForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
