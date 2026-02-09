'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const congestionData = [
  { hour: '12 AM', level: 15, prediction: 18 },
  { hour: '4 AM', level: 8, prediction: 10 },
  { hour: '8 AM', level: 72, prediction: 78 },
  { hour: '12 PM', level: 88, prediction: 92 },
  { hour: '4 PM', level: 85, prediction: 88 },
  { hour: '8 PM', level: 62, prediction: 65 },
  { hour: '11 PM', level: 25, prediction: 28 },
];

const emissionData = [
  { time: '12 AM', emissions: 45, target: 50 },
  { time: '4 AM', emissions: 25, target: 30 },
  { time: '8 AM', emissions: 185, target: 150 },
  { time: '12 PM', emissions: 220, target: 180 },
  { time: '4 PM', emissions: 210, target: 180 },
  { time: '8 PM', emissions: 160, target: 140 },
  { time: '11 PM', emissions: 55, target: 60 },
];

export default function TrafficMetrics() {
  return (
    <div className="space-y-8">
      {/* Congestion Level Chart */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Congestion Levels vs Predictions</h3>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={congestionData}>
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
              <Bar dataKey="level" fill="#3b82f6" name="Current Level" />
              <Bar dataKey="prediction" fill="#8b5cf6" name="AI Prediction" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Emissions Reduction Chart */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Emissions Monitoring</h3>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={emissionData}>
              <defs>
                <linearGradient id="colorEmissions" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ec4899" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#25273d" />
              <XAxis dataKey="time" stroke="#94a3b8" />
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
                dataKey="emissions"
                stroke="#ec4899"
                fillOpacity={1}
                fill="url(#colorEmissions)"
                name="Current Emissions (g CO2)"
              />
              <Area
                type="monotone"
                dataKey="target"
                stroke="#10b981"
                fillOpacity={1}
                fill="url(#colorTarget)"
                name="Target Emissions (g CO2)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Key Metrics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-sm text-muted-foreground mb-2">Avg. Travel Time</p>
          <p className="text-2xl font-bold text-primary">18.5 min</p>
          <p className="text-xs text-muted-foreground mt-2">↓ 2.3 min vs yesterday</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-sm text-muted-foreground mb-2">Network Capacity Utilization</p>
          <p className="text-2xl font-bold text-accent">73%</p>
          <p className="text-xs text-muted-foreground mt-2">Operating at optimal level</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-sm text-muted-foreground mb-2">CO2 Emissions Saved</p>
          <p className="text-2xl font-bold text-green-400">12.5 tons</p>
          <p className="text-xs text-muted-foreground mt-2">↑ 15% vs last month</p>
        </div>
      </div>
    </div>
  );
}
