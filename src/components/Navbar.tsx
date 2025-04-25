
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Book a Ride", path: "/book" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="taxi-container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="bg-primary p-1 rounded">
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
                  className="text-secondary"
                >
                  <path d="M7 18h10m-5-3v3" />
                  <rect width="18" height="9" x="3" y="9" rx="2" />
                  <path d="M6 9V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
                </svg>
              </span>
              <span className="font-bold text-xl font-heading text-secondary">InstantTaxi</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-secondary hover:text-accent transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-secondary">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-accent hover:bg-accent-600">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[75%] sm:w-[350px]">
                <div className="flex flex-col space-y-6 py-6">
                  <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                      <span className="bg-primary p-1 rounded">
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
                          className="text-secondary"
                        >
                          <path d="M7 18h10m-5-3v3" />
                          <rect width="18" height="9" x="3" y="9" rx="2" />
                          <path d="M6 9V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
                        </svg>
                      </span>
                      <span className="font-bold text-xl font-heading">InstantTaxi</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="text-secondary hover:text-accent py-2 transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="flex flex-col space-y-4">
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full text-secondary">Login</Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-accent hover:bg-accent-600">Sign Up</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
