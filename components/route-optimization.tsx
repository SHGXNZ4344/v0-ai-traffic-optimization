'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingDown, MapPin, Clock } from 'lucide-react';

const routeComparisonData = [
  { route: 'Route 1', conventional: 45, optimized: 32, savings: 13 },
  { route: 'Route 2', conventional: 38, optimized: 26, savings: 12 },
  { route: 'Route 3', conventional: 52, optimized: 35, savings: 17 },
  { route: 'Route 4', conventional: 41, optimized: 28, savings: 13 },
  { route: 'Route 5', conventional: 48, optimized: 33, savings: 15 },
];

const fuelSavingsData = [
  { month: 'Jan', conventional: 2450, optimized: 1590, savings: 860 },
  { month: 'Feb', conventional: 2380, optimized: 1550, savings: 830 },
  { month: 'Mar', conventional: 2520, optimized: 1640, savings: 880 },
  { month: 'Apr', conventional: 2650, optimized: 1720, savings: 930 },
  { month: 'May', conventional: 2780, optimized: 1810, savings: 970 },
  { month: 'Jun', conventional: 2920, optimized: 1890, savings: 1030 },
];

const routes = [
  {
    id: 'RT-001',
    name: 'Downtown Loop Express',
    stops: 12,
    timeImprovement: '28%',
    fuelSavings: '32%',
    passengers: 2400,
    emissions: 145,
  },
  {
    id: 'RT-002',
    name: 'Airport Connector',
    stops: 8,
    timeImprovement: '22%',
    fuelSavings: '26%',
    passengers: 1850,
    emissions: 98,
  },
  {
    id: 'RT-003',
    name: 'Harbor District Shuttle',
    stops: 15,
    timeImprovement: '35%',
    fuelSavings: '38%',
    passengers: 3100,
    emissions: 212,
  },
];

export default function RouteOptimization() {
  return (
    <div className="space-y-8">
      {/* Travel Time Comparison */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Travel Time: Conventional vs Optimized Routes</h3>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={routeComparisonData}>
              <defs>
                <linearGradient id="colorConventional" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#94a3b8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorOptimized" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#25273d" />
              <XAxis dataKey="route" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172a',
                  border: '1px solid #3b82f6',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: '#ffffff' }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="conventional"
                stroke="#94a3b8"
                fillOpacity={1}
                fill="url(#colorConventional)"
                name="Conventional Route (mins)"
              />
              <Area
                type="monotone"
                dataKey="optimized"
                stroke="#10b981"
                fillOpacity={1}
                fill="url(#colorOptimized)"
                name="Optimized Route (mins)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Fuel Consumption Trends */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Fuel Consumption Reduction Trend</h3>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={fuelSavingsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#25273d" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172a',
                  border: '1px solid #3b82f6',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: '#ffffff' }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="conventional"
                stroke="#94a3b8"
                strokeWidth={2}
                name="Conventional Fleet (gallons)"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="optimized"
                stroke="#10b981"
                strokeWidth={2}
                name="Optimized Fleet (gallons)"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="savings"
                stroke="#ec4899"
                strokeWidth={2}
                name="Monthly Savings (gallons)"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Routes */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Top Optimized Routes</h3>
        <div className="space-y-3">
          {routes.map((route) => (
            <Card key={route.id} className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-medium text-foreground">{route.name}</h4>
                    <p className="text-sm text-muted-foreground">{route.stops} stops</p>
                  </div>
                  <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                    Active
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Time Improvement</p>
                    <p className="text-lg font-bold text-accent">{route.timeImprovement}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Fuel Savings</p>
                    <p className="text-lg font-bold text-primary">{route.fuelSavings}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Daily Passengers</p>
                    <p className="text-lg font-bold text-foreground">{route.passengers}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Emissions/Day</p>
                    <p className="text-lg font-bold text-green-400">{route.emissions} kg CO2</p>
                  </div>
                  <div className="flex items-end">
                    <button className="text-primary hover:text-primary/80 text-sm font-medium">
                      View Details →
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <TrendingDown className="w-5 h-5 text-accent mt-1" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Avg. Time Reduction</p>
                <p className="text-2xl font-bold text-accent">28.3%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <TrendingDown className="w-5 h-5 text-primary mt-1" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Avg. Fuel Savings</p>
                <p className="text-2xl font-bold text-primary">31.2%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <TrendingDown className="w-5 h-5 text-green-400 mt-1" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">CO2 Reduction/Month</p>
                <p className="text-2xl font-bold text-green-400">2.4 tons</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
