'use client';

import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const dailyPatternData = [
  { hour: '12 AM', traffic: 120, prediction: 118, deviation: 2 },
  { hour: '4 AM', traffic: 85, prediction: 82, deviation: 3 },
  { hour: '8 AM', traffic: 650, prediction: 645, deviation: 5 },
  { hour: '12 PM', traffic: 750, prediction: 760, deviation: -10 },
  { hour: '4 PM', traffic: 820, prediction: 815, deviation: 5 },
  { hour: '8 PM', traffic: 680, prediction: 690, deviation: -10 },
  { hour: '11 PM', traffic: 380, prediction: 385, deviation: -5 },
];

const congestionLevels = [
  { date: 'Mon', low: 15, medium: 35, high: 40, critical: 10 },
  { date: 'Tue', low: 18, medium: 38, high: 35, critical: 9 },
  { date: 'Wed', low: 16, medium: 36, high: 38, critical: 10 },
  { date: 'Thu', low: 14, medium: 34, high: 42, critical: 10 },
  { date: 'Fri', low: 12, medium: 32, high: 45, critical: 11 },
  { date: 'Sat', low: 25, medium: 40, high: 28, critical: 7 },
  { date: 'Sun', low: 28, medium: 42, high: 22, critical: 8 },
];

const regionalData = [
  { region: 'Downtown', avg_congestion: 68, trend: 'down', incidents: 12, severity: 'high' },
  { region: 'Midtown', avg_congestion: 55, trend: 'stable', incidents: 8, severity: 'medium' },
  { region: 'Uptown', avg_congestion: 42, trend: 'down', incidents: 5, severity: 'low' },
  { region: 'Harbor', avg_congestion: 38, trend: 'up', incidents: 3, severity: 'low' },
  { region: 'Industrial', avg_congestion: 45, trend: 'stable', incidents: 6, severity: 'medium' },
];

export default function TrafficAnalytics() {
  return (
    <div className="space-y-8">
      {/* Daily Pattern with Prediction */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Daily Traffic Pattern vs Predictions</h3>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dailyPatternData}>
              <defs>
                <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPred" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#25273d" />
              <XAxis dataKey="hour" stroke="#94a3b8" />
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
                dataKey="traffic"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorTraffic)"
                name="Actual Traffic Flow"
              />
              <Area
                type="monotone"
                dataKey="prediction"
                stroke="#8b5cf6"
                fillOpacity={1}
                fill="url(#colorPred)"
                name="AI Prediction"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Weekly Congestion Distribution */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Weekly Congestion Level Distribution</h3>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={congestionLevels}>
              <CartesianGrid strokeDasharray="3 3" stroke="#25273d" />
              <XAxis dataKey="date" stroke="#94a3b8" />
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
              <Bar dataKey="low" fill="#10b981" name="Low" />
              <Bar dataKey="medium" fill="#eab308" name="Medium" />
              <Bar dataKey="high" fill="#f97316" name="High" />
              <Bar dataKey="critical" fill="#ef4444" name="Critical" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Regional Analysis */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Traffic Analysis by Region</h3>
        <div className="space-y-3">
          {regionalData.map((region, idx) => (
            <Card key={idx} className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-foreground">{region.region}</h4>
                    <div className="flex gap-2 mt-1">
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          region.severity === 'high'
                            ? 'bg-red-500/10 text-red-400 border-red-500/30'
                            : region.severity === 'medium'
                              ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
                              : 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                        }`}
                      >
                        {region.severity}
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-gray-500/10 text-gray-400 border-gray-500/30">
                        {region.incidents} incidents
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{region.avg_congestion}%</p>
                    <p className={`text-xs font-medium ${region.trend === 'down' ? 'text-green-400' : region.trend === 'up' ? 'text-red-400' : 'text-gray-400'}`}>
                      {region.trend === 'down' ? '↓' : region.trend === 'up' ? '↑' : '→'} {region.trend}
                    </p>
                  </div>
                </div>

                {/* Congestion Bar */}
                <div className="w-full bg-card rounded-full h-2 border border-border">
                  <div
                    className={`h-full rounded-full transition-all ${
                      region.avg_congestion > 60
                        ? 'bg-red-500'
                        : region.avg_congestion > 40
                          ? 'bg-yellow-500'
                          : 'bg-green-500'
                    }`}
                    style={{ width: `${region.avg_congestion}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground mb-2">Peak Hour Average</p>
            <p className="text-2xl font-bold text-primary">785 vehicles/min</p>
            <p className="text-xs text-muted-foreground mt-2">↑ 3% from last week</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground mb-2">Avg Congestion</p>
            <p className="text-2xl font-bold text-accent">49.6%</p>
            <p className="text-xs text-muted-foreground mt-2">↓ 8% reduction via AI</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground mb-2">Prediction Accuracy</p>
            <p className="text-2xl font-bold text-green-400">94.3%</p>
            <p className="text-xs text-muted-foreground mt-2">Average deviation: 2.4%</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
