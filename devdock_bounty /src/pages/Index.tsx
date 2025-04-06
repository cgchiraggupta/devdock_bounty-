
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Profile from '@/components/Profile';
import WorkoutCard from '@/components/WorkoutCard';
import ProgressChart from '@/components/ProgressChart';
import CommunityFeed from '@/components/CommunityFeed';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const workouts = [
  {
    title: "Full Body HIIT Burn",
    level: "Intermediate" as const,
    duration: "30 min",
    calories: "350 cal",
    image: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
    category: "HIIT",
    description: "This high-intensity workout alternates between 40-second bursts of all-out effort and 20-second recovery periods. Perfect for busy days when you need maximum results in minimum time. Includes modifications for all fitness levels!"
  },
  {
    title: "Core & Stability Flow",
    level: "Beginner" as const,
    duration: "20 min",
    calories: "200 cal",
    image: "https://images.unsplash.com/photo-1616803689943-5601631c7fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
    category: "Strength",
    description: "Build a strong foundation with this core-focused workout that strengthens your abs, lower back, and obliques. Great for improving posture and preventing back pain. This beginner-friendly session includes plenty of form guidance."
  },
  {
    title: "Power Lifting Session",
    level: "Advanced" as const,
    duration: "45 min",
    calories: "450 cal",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
    category: "Strength",
    description: "Push your limits with this advanced lifting session focusing on compound movements. Includes progressive overload techniques and proper form guidance. Recommended for those with at least 6 months of consistent strength training experience."
  }
];

const Index = () => {
  const { toast } = useToast();
  
  const handleViewAllWorkouts = () => {
    toast({
      title: "Coming Soon!",
      description: "Our complete workout library will be available in the next update.",
      duration: 3000,
    });
  };
  
  const handleGetStarted = () => {
    toast({
      title: "Welcome to ProgressPals!",
      description: "Sign up feature coming soon. Get ready to transform your fitness journey!",
      duration: 3000,
    });
  };

  // Add the missing handleExploreWorkouts function
  const handleExploreWorkouts = () => {
    const workoutsSection = document.getElementById('workouts');
    if (workoutsSection) {
      workoutsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <Hero />
        
        <Features />
        
        {/* Workouts Section */}
        <section id="workouts" className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div className="max-w-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Discover <span className="heading-gradient">Workouts</span> For Every Goal
                </h2>
                <p className="text-muted-foreground">
                  Browse through our collection of workouts designed for different fitness levels and goals.
                  Find the perfect routine that matches your needs.
                </p>
              </div>
              <Button 
                className="mt-4 md:mt-0 bg-fitness-500 hover:bg-fitness-600"
                onClick={handleViewAllWorkouts}
              >
                View All Workouts <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workouts.map((workout, index) => (
                <WorkoutCard 
                  key={index}
                  title={workout.title}
                  level={workout.level}
                  duration={workout.duration}
                  calories={workout.calories}
                  image={workout.image}
                  category={workout.category}
                  description={workout.description}
                  saved={index === 0}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Progress Tracking Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div className="max-w-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Track Your <span className="heading-gradient">Progress</span>
                </h2>
                <p className="text-muted-foreground">
                  Monitor your fitness journey with detailed charts and statistics. See how far
                  you've come and stay motivated to reach your goals.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ProgressChart />
              </div>
              <div>
                <Profile />
              </div>
            </div>
          </div>
        </section>
        
        {/* Community Section */}
        <section id="community" className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div className="max-w-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Join Our <span className="heading-gradient">Community</span>
                </h2>
                <p className="text-muted-foreground">
                  Connect with fitness enthusiasts who share your interests. Share your achievements,
                  get inspired, and motivate each other on your fitness journeys.
                </p>
              </div>
              <Button 
                className="mt-4 md:mt-0 bg-fitness-500 hover:bg-fitness-600"
                onClick={() => {
                  toast({
                    title: "Community Access",
                    description: "Full community features are coming soon!",
                    duration: 3000,
                  });
                }}
              >
                Join Community <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <CommunityFeed />
              </div>
              <div className="space-y-6">
                <div className="bg-secondary p-6 rounded-lg border border-border">
                  <h3 className="font-semibold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {["#FitnessGoals", "#WorkoutMotivation", "#HealthyLifestyle", "#FitFam", 
                      "#StrengthTraining", "#Cardio", "#Yoga", "#RunningCommunity", "#WeightLoss", 
                      "#MuscleGain"].map((tag, i) => (
                      <div 
                        key={i} 
                        className="bg-background px-3 py-1 rounded-full text-sm hover:bg-fitness-50 cursor-pointer transition-colors"
                        onClick={() => {
                          toast({
                            title: "Tag Selected",
                            description: `Content filtered by ${tag}`,
                            duration: 2000,
                          });
                        }}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-secondary p-6 rounded-lg border border-border">
                  <h3 className="font-semibold mb-4">Upcoming Challenges</h3>
                  <div className="space-y-4">
                    {[
                      {title: "30-Day Push-Up Challenge", participants: 254, date: "Starts in 3 days"},
                      {title: "10K Step Challenge", participants: 189, date: "Starts in 1 week"},
                      {title: "Weight Loss Support Group", participants: 312, date: "Ongoing"}
                    ].map((challenge, i) => (
                      <div 
                        key={i} 
                        className="border-b border-border pb-3 last:border-0 last:pb-0 cursor-pointer hover:bg-fitness-50/50 p-2 rounded transition-colors"
                        onClick={() => {
                          toast({
                            title: challenge.title,
                            description: `You'll be notified when this challenge starts!`,
                            duration: 3000,
                          });
                        }}
                      >
                        <p className="font-medium">{challenge.title}</p>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{challenge.participants} participants</span>
                          <span>{challenge.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-4 border-fitness-500 text-fitness-600 hover:bg-fitness-50"
                    onClick={() => {
                      toast({
                        title: "Challenge Library",
                        description: "More challenges are being added soon!",
                        duration: 3000,
                      });
                    }}
                  >
                    View All Challenges
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-fitness-500 to-energy-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Fitness Journey?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Join thousands of fitness enthusiasts already on ProgressPals. Connect, track your progress,
              and achieve your fitness goals together with a supportive community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-fitness-600 hover:bg-white/90"
                onClick={handleGetStarted}
              >
                Get Started Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white/10"
                onClick={handleExploreWorkouts}
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
