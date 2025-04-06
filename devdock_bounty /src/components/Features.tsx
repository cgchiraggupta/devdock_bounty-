
import React from 'react';
import { Users, BarChart2, Dumbbell, Target, Medal, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: "Connect with Fitness Buddies",
    description: "Find and connect with people who share your fitness goals and interests.",
    icon: Users,
    color: "text-fitness-500",
    bgColor: "bg-fitness-100"
  },
  {
    title: "Track Your Progress",
    description: "Monitor your fitness journey with detailed charts and statistics.",
    icon: BarChart2,
    color: "text-energy-500",
    bgColor: "bg-energy-100"
  },
  {
    title: "Discover Workout Plans",
    description: "Access a library of workout plans for all fitness levels and goals.",
    icon: Dumbbell,
    color: "text-fitness-600",
    bgColor: "bg-fitness-100"
  },
  {
    title: "Set & Achieve Goals",
    description: "Set personalized fitness goals and track your journey to achieving them.",
    icon: Target,
    color: "text-energy-500",
    bgColor: "bg-energy-100"
  },
  {
    title: "Join Challenges",
    description: "Participate in community challenges to stay motivated and win rewards.",
    icon: Medal,
    color: "text-fitness-500",
    bgColor: "bg-fitness-100"
  },
  {
    title: "Community Support",
    description: "Share your successes and get support from a community that cares.",
    icon: MessageSquare,
    color: "text-energy-500",
    bgColor: "bg-energy-100"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything You Need To Reach Your <span className="heading-gradient">Fitness Goals</span>
          </h2>
          <p className="text-muted-foreground">
            Our platform provides all the tools and support you need to transform your fitness journey
            from a solo effort to a community experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border bg-card transition-all duration-300 hover:shadow-md hover:border-fitness-300">
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-md ${feature.bgColor} flex items-center justify-center mb-4`}>
                  <feature.icon className={`${feature.color}`} size={24} />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
