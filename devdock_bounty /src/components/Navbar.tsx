
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User, BarChart2, Dumbbell, Users, Calendar, Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-fitness-500 rounded-md rotate-45"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold">P</div>
            </div>
            <span className="font-bold text-xl text-fitness-600">ProgressPals</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-fitness-500 transition-colors">Features</a>
            <a href="#workouts" className="text-foreground/80 hover:text-fitness-500 transition-colors">Workouts</a>
            <a href="#community" className="text-foreground/80 hover:text-fitness-500 transition-colors">Community</a>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell size={20} />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-energy-500">3</Badge>
              </Button>
              <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarImage src="https://i.pravatar.cc/32?img=2" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button className="bg-fitness-500 hover:bg-fitness-600">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell size={20} />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-energy-500">3</Badge>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="flex items-center space-x-3 p-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://i.pravatar.cc/32?img=2" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Jamie Doe</p>
                <p className="text-xs text-muted-foreground">jamie@example.com</p>
              </div>
            </div>
            <div className="h-px bg-border"></div>
            <a href="#features" className="flex items-center space-x-2 p-2 rounded-md hover:bg-secondary transition-colors">
              <BarChart2 size={20} className="text-fitness-500" />
              <span>Features</span>
            </a>
            <a href="#workouts" className="flex items-center space-x-2 p-2 rounded-md hover:bg-secondary transition-colors">
              <Dumbbell size={20} className="text-fitness-500" />
              <span>Workouts</span>
            </a>
            <a href="#community" className="flex items-center space-x-2 p-2 rounded-md hover:bg-secondary transition-colors">
              <Users size={20} className="text-fitness-500" />
              <span>Community</span>
            </a>
            <a href="#profile" className="flex items-center space-x-2 p-2 rounded-md hover:bg-secondary transition-colors">
              <User size={20} className="text-fitness-500" />
              <span>Profile</span>
            </a>
            <a href="#calendar" className="flex items-center space-x-2 p-2 rounded-md hover:bg-secondary transition-colors">
              <Calendar size={20} className="text-fitness-500" />
              <span>Calendar</span>
            </a>
            <div className="h-px bg-border"></div>
            <Button className="w-full bg-fitness-500 hover:bg-fitness-600">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
