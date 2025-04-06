
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Trophy, Calendar, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Hero = () => {
  const { toast } = useToast();
  
  const handleJoinNow = () => {
    toast({
      title: "Welcome to ProgressPals!",
      description: "Sign up coming soon. Join our community to start your fitness journey together!",
      duration: 4000,
    });
  };
  
  const handleExploreWorkouts = () => {
    const workoutsSection = document.getElementById('workouts');
    if (workoutsSection) {
      workoutsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-fitness-100 text-fitness-600 font-medium text-sm">
              Your Fitness Community
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Achieve More <span className="heading-gradient">Together</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              ProgressPals connects you with fitness enthusiasts who share your goals. 
              Track workouts, celebrate milestones, and get the accountability you need 
              to stay consistent on your fitness journey.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center space-x-2 text-fitness-600">
                <CheckCircle2 size={18} className="text-fitness-500" />
                <span className="text-sm font-medium">Personalized workout plans</span>
              </div>
              <div className="flex items-center space-x-2 text-fitness-600">
                <CheckCircle2 size={18} className="text-fitness-500" />
                <span className="text-sm font-medium">Progress tracking tools</span>
              </div>
              <div className="flex items-center space-x-2 text-fitness-600">
                <CheckCircle2 size={18} className="text-fitness-500" />
                <span className="text-sm font-medium">Supportive community</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="bg-fitness-500 hover:bg-fitness-600"
                onClick={handleJoinNow}
              >
                Join Now <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="border-fitness-500 text-fitness-600 hover:bg-fitness-50"
                onClick={handleExploreWorkouts}
              >
                Explore Workouts
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                    <img 
                      src={`https://i.pravatar.cc/32?img=${i+10}`} 
                      alt="Community member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Join <span className="font-semibold text-foreground">1,200+</span> members already on the platform
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-fitness-500 to-energy-500 p-1 shadow-lg">
              <div className="h-full w-full bg-fitness-50 rounded-xl overflow-hidden">
                <div className="relative h-full w-full bg-[url('https://images.unsplash.com/photo-1571019613914-85f342c6a11e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <p className="font-bold text-xl">Spring Challenge</p>
                    <p className="text-white/90">Join 257 others in the 30-day consistency challenge</p>
                    <Button 
                      variant="outline" 
                      className="mt-3 text-white border-white hover:bg-white/10"
                      onClick={() => {
                        toast({
                          title: "Challenge Notification",
                          description: "You'll be notified when the Spring Challenge starts!",
                          duration: 3000,
                        });
                      }}
                    >
                      Join Challenge
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 hidden md:flex items-center space-x-2">
              <Users size={20} className="text-fitness-500" />
              <div>
                <p className="font-medium text-sm">Find Your Fitness Buddies</p>
                <p className="text-xs text-muted-foreground">231 new members this week</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 hidden md:flex items-center space-x-2">
              <Calendar size={20} className="text-energy-500" />
              <div>
                <p className="font-medium text-sm">Consistent Progress</p>
                <p className="text-xs text-muted-foreground">Track daily habits & milestones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
