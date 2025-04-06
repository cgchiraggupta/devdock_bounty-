
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { day: 'Mon', workouts: 1, calories: 320, duration: 25 },
  { day: 'Tue', workouts: 2, calories: 480, duration: 40 },
  { day: 'Wed', workouts: 0, calories: 0, duration: 0 },
  { day: 'Thu', workouts: 3, calories: 600, duration: 55 },
  { day: 'Fri', workouts: 1, calories: 350, duration: 30 },
  { day: 'Sat', workouts: 2, calories: 500, duration: 45 },
  { day: 'Sun', workouts: 1, calories: 270, duration: 20 },
];

const ProgressChart = () => {
  return (
    <Card className="border border-border">
      <CardHeader>
        <CardTitle className="text-lg">Weekly Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  borderRadius: '8px', 
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Line 
                yAxisId="left" 
                type="monotone" 
                dataKey="calories" 
                stroke="#00c4ad" 
                activeDot={{ r: 8 }} 
                strokeWidth={2}
              />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="duration" 
                stroke="#ffba00" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-between mt-4 text-sm text-muted-foreground">
          <div>
            <p className="font-medium">Total Workouts</p>
            <p className="text-xl font-bold text-foreground">10</p>
          </div>
          <div>
            <p className="font-medium">Total Calories</p>
            <p className="text-xl font-bold text-foreground">2,520</p>
          </div>
          <div>
            <p className="font-medium">Total Duration</p>
            <p className="text-xl font-bold text-foreground">215 min</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressChart;
