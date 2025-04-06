
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Heart, MessageSquare, Share2, Award, Target, Dumbbell, Calendar, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const feedItems = [
  {
    id: 1,
    user: {
      name: 'Sarah Johnson',
      image: 'https://i.pravatar.cc/150?img=5',
      initials: 'SJ',
      location: 'Portland, OR'
    },
    time: '2 hours ago',
    content: 'Just completed my first 10K run this morning! Started training 3 months ago and could barely run 1K. Feeling amazing and proud of my progress. Who wants to join me for the half marathon training group next month?',
    likes: 42,
    comments: 13,
    activityType: 'achievement',
    activityIcon: Award,
    activityTitle: 'Completed 10K Run',
    activityDetail: '55:42 (New Personal Best)'
  },
  {
    id: 2,
    user: {
      name: 'Mark Wilson',
      image: 'https://i.pravatar.cc/150?img=12',
      initials: 'MW',
      location: 'Chicago, IL'
    },
    time: '5 hours ago',
    content: 'Hit a new personal record on my bench press today! 225 lbs x 5 reps. The consistent training and protein intake adjustment from my nutrition coach @AlexFitness is finally paying off. Never thought I\'d see these numbers at 40!',
    likes: 37,
    comments: 8,
    activityType: 'workout',
    activityIcon: Dumbbell,
    activityTitle: 'Upper Body Strength',
    activityDetail: '1 hour 15 mins • 320 calories'
  },
  {
    id: 3,
    user: {
      name: 'Emily Chen',
      image: 'https://i.pravatar.cc/150?img=23',
      initials: 'EC',
      location: 'Seattle, WA'
    },
    time: 'Yesterday',
    content: 'Set a new goal to complete 30 days of yoga for mental clarity and better recovery between my HIIT sessions. Need the flexibility work badly! Looking for accountability partners - who\'s with me? I\'ll be following @YogaWithAdriene\'s monthly calendar.',
    likes: 29,
    comments: 21,
    activityType: 'goal',
    activityIcon: Target,
    activityTitle: '30 Day Yoga Challenge',
    activityDetail: 'Starting tomorrow • 7 people joined'
  }
];

const CommunityFeed = () => {
  return (
    <div className="space-y-6">
      {feedItems.map((item) => (
        <Card key={item.id} className="border border-border">
          <CardHeader className="pb-0">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={item.user.image} alt={item.user.name} />
                  <AvatarFallback>{item.user.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center space-x-2">
                    <p className="font-semibold">{item.user.name}</p>
                    <Badge variant="outline" className="text-xs px-2 py-0">
                      {item.activityType === 'achievement' ? 'Level 12' : 
                       item.activityType === 'workout' ? 'Level 24' : 'Level 8'}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                    <span className="text-xs text-muted-foreground">•</span>
                    <p className="text-xs text-muted-foreground">{item.user.location}</p>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Share2 size={16} />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-sm">{item.content}</p>
            
            {item.activityType === 'workout' && (
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-fitness-50 text-fitness-700 border-fitness-200">
                  #StrengthTraining
                </Badge>
                <Badge variant="outline" className="bg-fitness-50 text-fitness-700 border-fitness-200">
                  #BenchPress
                </Badge>
                <Badge variant="outline" className="bg-fitness-50 text-fitness-700 border-fitness-200">
                  #PersonalRecord
                </Badge>
              </div>
            )}
            
            <div className="mt-4 p-3 rounded-lg bg-secondary flex items-center space-x-3">
              <div className={`p-2 rounded-full ${
                item.activityType === 'achievement' ? 'bg-energy-100 text-energy-500' :
                item.activityType === 'workout' ? 'bg-fitness-100 text-fitness-500' :
                'bg-blue-100 text-blue-500'
              }`}>
                <item.activityIcon size={18} />
              </div>
              <div>
                <p className="font-medium text-sm">{item.activityTitle}</p>
                <p className="text-xs text-muted-foreground">{item.activityDetail}</p>
              </div>
              <Badge className={`ml-auto ${
                item.activityType === 'achievement' ? 'bg-energy-500' :
                item.activityType === 'workout' ? 'bg-fitness-500' :
                'bg-blue-500'
              }`}>
                {item.activityType}
              </Badge>
            </div>
            
            {item.activityType === 'achievement' && (
              <div className="mt-3 flex items-center text-xs text-muted-foreground">
                <Clock size={14} className="mr-1" />
                <span>Previous best: 58:26 (2:44 improvement)</span>
              </div>
            )}
            
            {item.activityType === 'goal' && (
              <div className="mt-3 bg-fitness-50 rounded-md p-2 text-xs">
                <div className="flex items-center text-fitness-700">
                  <Calendar size={14} className="mr-1" />
                  <span className="font-medium">Starts April 7th - Join now to get reminders</span>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="border-t border-border pt-3 flex justify-between">
            <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground hover:text-fitness-600">
              <Heart size={16} className={item.id === 1 ? "fill-fitness-500 text-fitness-500" : ""} />
              <span>{item.likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground hover:text-fitness-600">
              <MessageSquare size={16} className="mr-1" />
              <span>{item.comments}</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-fitness-600">Share</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CommunityFeed;
