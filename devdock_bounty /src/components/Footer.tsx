
import React from 'react';
import { Twitter, Instagram, Facebook, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-fitness-500 rounded-md rotate-45"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">P</div>
              </div>
              <span className="font-bold text-xl text-fitness-600">ProgressPals</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Connect with fitness enthusiasts, track your progress, and achieve your goals together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-fitness-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-fitness-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-fitness-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-fitness-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-fitness-500 transition-colors">Progress Tracking</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fitness-500 transition-colors">Workout Library</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fitness-500 transition-colors">Community Challenges</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fitness-500 transition-colors">Goal Setting</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fitness-500 transition-colors">Fitness Buddies</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-fitness-500 transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fitness-500 transition-colors">Guides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fitness-500 transition-colors">Nutrition Tips</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fitness-500 transition-colors">Workout Tips</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fitness-500 transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-fitness-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fitness-500 transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fitness-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fitness-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-fitness-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} ProgressPals. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-fitness-500 transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-fitness-500 transition-colors">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-fitness-500 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
