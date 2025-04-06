
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Flame, ArrowRight, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WorkoutCardProps {
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  calories: string;
  image: string;
  category: string;
  description: string;
  saved?: boolean;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  title,
  level,
  duration,
  calories,
  image,
  category,
  description,
  saved = false
}) => {
  const { toast } = useToast();
  const [isSaved, setIsSaved] = React.useState(saved);

  const levelColors = {
    Beginner: 'bg-green-100 text-green-600',
    Intermediate: 'bg-blue-100 text-blue-600',
    Advanced: 'bg-purple-100 text-purple-600'
  };

  const handleSaveWorkout = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSaved(!isSaved);
    
    toast({
      title: isSaved ? "Workout removed" : "Workout saved",
      description: isSaved 
        ? "This workout has been removed from your saved collection" 
        : "This workout has been added to your saved collection",
      duration: 3000,
    });
  };

  const handleViewWorkout = () => {
    toast({
      title: "Coming soon!",
      description: "Full workout details will be available in the next update.",
      duration: 3000,
    });
  };

  return (
    <Card className="overflow-hidden card-hover border border-border h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
        <Badge className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-fitness-600 hover:bg-white/90">
          {category}
        </Badge>
        <button 
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white/90 transition-colors"
          onClick={handleSaveWorkout}
          aria-label={isSaved ? "Unsave workout" : "Save workout"}
        >
          <Heart size={16} className={isSaved ? "fill-red-500 text-red-500" : "text-gray-600"} />
        </button>
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className={levelColors[level]}>
            {level}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground space-x-3">
            <div className="flex items-center space-x-1">
              <Clock size={14} />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Flame size={14} />
              <span>{calories}</span>
            </div>
          </div>
        </div>
        <h3 className="font-semibold text-lg mt-2">{title}</h3>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full border-fitness-500 text-fitness-600 hover:bg-fitness-50"
          onClick={handleViewWorkout}
        >
          View Workout <ArrowRight size={16} className="ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WorkoutCard;
