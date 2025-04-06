
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Target, Dumbbell, Users, Award } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const Profile = () => {
  return (
    <Card className="border border-border overflow-hidden">
      <div className="h-24 bg-gradient-to-r from-fitness-500 to-energy-500"></div>
      <CardHeader className="pt-0">
        <div className="flex flex-col sm:flex-row gap-4 -mt-12 items-start sm:items-end">
          <Avatar className="h-20 w-20 border-4 border-background">
            <AvatarImage src="https://i.pravatar.cc/150?img=32" alt="Profile" />
            <AvatarFallback className="bg-fitness-100 text-fitness-500">JP</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">Jamie Parker</h3>
              <Badge className="bg-fitness-500 hover:bg-fitness-600">Pro Member</Badge>
            </div>
            <p className="text-sm text-muted-foreground">Fitness enthusiast | Marathon runner | Weightlifting beginner</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Current Goal: Lose 10 lbs</span>
              <span className="text-sm font-medium">70%</span>
            </div>
            <Progress value={70} className="h-2 bg-muted" indicatorClassName="bg-fitness-500" />
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-secondary">
              <Target className="h-6 w-6 text-fitness-500 mb-1" />
              <span className="text-xs text-muted-foreground">Active Goals</span>
              <span className="font-bold">3</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-secondary">
              <Dumbbell className="h-6 w-6 text-energy-500 mb-1" />
              <span className="text-xs text-muted-foreground">Workouts</span>
              <span className="font-bold">47</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-secondary">
              <Users className="h-6 w-6 text-fitness-500 mb-1" />
              <span className="text-xs text-muted-foreground">Connections</span>
              <span className="font-bold">128</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-secondary">
              <Award className="h-6 w-6 text-energy-500 mb-1" />
              <span className="text-xs text-muted-foreground">Achievements</span>
              <span className="font-bold">15</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Profile;
