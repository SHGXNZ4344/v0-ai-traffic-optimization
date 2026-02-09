'use client';

import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingDown } from 'lucide-react';

const monthlyEmissions = [
  { month: 'Jan', before: 1850, after: 1250, saved: 600 },
  { month: 'Feb', before: 1920, after: 1290, saved: 630 },
  { month: 'Mar', before: 2050, after: 1380, saved: 670 },
  { month: 'Apr', before: 2180, after: 1450, saved: 730 },
  { month: 'May', before: 2320, after: 1560, saved: 760 },
  { month: 'Jun', before: 2450, after: 1650, saved: 800 },
];

const sourceEmissions = [
  { source: 'Public Buses', before: 450, after: 280, reduction: '38%' },
  { source: 'Personal Vehicles', before: 680, after: 520, reduction: '24%' },
  { source: 'Trucks/Commercial', before: 420, after: 320, reduction: '24%' },
  { source: 'Subway/Rail', before: 180, after: 160, reduction: '11%' },
  { source: 'Other', before: 120, after: 90, reduction: '25%' },
];

const sustainabilityMetrics = [
  { metric: 'CO2 Offset (Trees)', value: 18500, unit: 'equivalent trees', icon: '🌲' },
  { metric: 'Energy Saved', value: 450, unit: 'MWh', icon: '⚡' },
  { metric: 'Fuel Saved', value: 125, unit: 'thousand gallons', icon: '⛽' },
  { metric: 'Air Quality Improvement', value: 8.2, unit: '% PM2.5 reduction', icon: '💨' },
];

export default function EmissionsAnalytics() {
  return (
    <div className="space-y-8">
      {/* Monthly Emissions Trend */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">CO2 Emissions: Before vs After AI Optimization</h3>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyEmissions}>
              <defs>
                <linearGradient id="colorBefore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorAfter" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
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
              <Area
                type="monotone"
                dataKey="before"
                stroke="#ef4444"
                fillOpacity={1}
                fill="url(#colorBefore)"
                name="Before AI Optimization (tons CO2)"
              />
              <Area
                type="monotone"
                dataKey="after"
                stroke="#10b981"
                fillOpacity={1}
                fill="url(#colorAfter)"
                name="After AI Optimization (tons CO2)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Emissions by Source */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Emissions Reduction by Transportation Mode</h3>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sourceEmissions}>
              <CartesianGrid strokeDasharray="3 3" stroke="#25273d" />
              <XAxis dataKey="source" stroke="#94a3b8" />
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
              <Bar dataKey="before" fill="#ef4444" name="Before Optimization (g CO2)" />
              <Bar dataKey="after" fill="#10b981" name="After Optimization (g CO2)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Emission Sources Detail */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Detailed Emission Sources Analysis</h3>
        <div className="space-y-3">
          {sourceEmissions.map((source, idx) => (
            <Card key={idx} className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-foreground">{source.source}</h4>
                  <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                    {source.reduction} reduction
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-3">
                  <div>
                    <p className="text-muted-foreground mb-1">Before</p>
                    <p className="font-bold text-foreground">{source.before}g CO2</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">After</p>
                    <p className="font-bold text-green-400">{source.after}g CO2</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Saved</p>
                    <p className="font-bold text-accent">{source.before - source.after}g CO2</p>
                  </div>
                  <div className="flex items-end">
                    <button className="text-primary hover:text-primary/80 text-sm font-medium">
                      Details →
                    </button>
                  </div>
                </div>

                {/* Reduction Progress Bar */}
                <div className="w-full bg-card rounded-full h-2 border border-border">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-full rounded-full" style={{ width: source.reduction }} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Sustainability Metrics */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Sustainability Impact Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sustainabilityMetrics.map((item, idx) => (
            <Card key={idx} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{item.metric}</p>
                    <p className="text-3xl font-bold text-primary">{item.value.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.unit}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Impact Summary */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <TrendingDown className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-medium text-foreground mb-2">Environmental Impact Summary</h4>
              <p className="text-sm text-muted-foreground">
                The AI-powered digital twin platform has achieved a 35% reduction in CO2 emissions across the network. This
                translates to approximately 4,750 tons of CO2 prevented from entering the atmosphere annually, equivalent to
                removing 1,000+ cars from the road for a year. Beyond emissions, we've prevented 125,000 gallons of fuel
                consumption and improved air quality by 8.2% in downtown areas.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
