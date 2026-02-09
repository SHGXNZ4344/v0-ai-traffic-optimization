'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

const performanceData = [
  { week: 'Week 1', efficiency: 82, utilization: 79, satisfaction: 4.2, costPerMile: 3.4 },
  { week: 'Week 2', efficiency: 85, utilization: 82, satisfaction: 4.3, costPerMile: 3.3 },
  { week: 'Week 3', efficiency: 87, utilization: 84, satisfaction: 4.5, costPerMile: 3.2 },
  { week: 'Week 4', efficiency: 89, utilization: 87, satisfaction: 4.6, costPerMile: 3.1 },
];

const radarData = [
  { metric: 'Fleet Efficiency', value: 89 },
  { metric: 'Service Coverage', value: 92 },
  { metric: 'Cost Optimization', value: 85 },
  { metric: 'Utilization Rate', value: 87 },
  { metric: 'Customer Satisfaction', value: 92 },
  { metric: 'Emission Reduction', value: 88 },
];

const performanceMetrics = [
  {
    title: 'Operational Efficiency',
    current: '89%',
    previous: '82%',
    improvement: '+7%',
    description: 'AI-driven route optimization increasing efficiency',
  },
  {
    title: 'Cost per Mile',
    current: '$3.10',
    previous: '$3.40',
    improvement: '-8.8%',
    description: 'Better resource utilization reducing costs',
  },
  {
    title: 'Average Wait Time',
    current: '4.2 min',
    previous: '6.1 min',
    improvement: '-31%',
    description: 'Improved scheduling meeting demand patterns',
  },
  {
    title: 'On-Time Departure',
    current: '94.2%',
    previous: '88.5%',
    improvement: '+5.7%',
    description: 'Real-time optimization minimizing delays',
  },
  {
    title: 'Carbon Emissions',
    current: '125 g/km',
    previous: '185 g/km',
    improvement: '-32.4%',
    description: 'Eco-friendly routing reducing environmental impact',
  },
  {
    title: 'Passenger Satisfaction',
    current: '4.6/5',
    previous: '4.2/5',
    improvement: '+9.5%',
    description: 'Enhanced service quality via AI allocation',
  },
];

export default function ResourcePerformance() {
  return (
    <div className="space-y-8">
      {/* Performance Trends */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Performance Improvement Trend</h3>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#25273d" />
              <XAxis dataKey="week" stroke="#94a3b8" />
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
              <Line type="monotone" dataKey="efficiency" stroke="#3b82f6" strokeWidth={2} name="Efficiency %" dot={false} />
              <Line
                type="monotone"
                dataKey="utilization"
                stroke="#8b5cf6"
                strokeWidth={2}
                name="Utilization %"
                dot={false}
              />
              <Line type="monotone" dataKey="satisfaction" stroke="#10b981" strokeWidth={2} name="Satisfaction (0-5)" dot={false} />
              <Line type="monotone" dataKey="costPerMile" stroke="#ec4899" strokeWidth={2} name="Cost per Mile ($)" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Radar Chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-4">Overall Performance Score</h3>
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#25273d" />
                <PolarAngleAxis dataKey="metric" stroke="#94a3b8" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#94a3b8" />
                <Radar name="Performance" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    border: '1px solid #3b82f6',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: '#ffffff' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Summary Metrics */}
        <div className="space-y-3">
          {radarData.map((item, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-foreground">{item.metric}</h4>
                <span className="text-lg font-bold text-primary">{item.value}%</span>
              </div>
              <div className="w-full bg-card rounded-full h-2 border border-border">
                <div
                  className="bg-gradient-to-r from-primary to-accent h-full rounded-full"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Metrics */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Detailed Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {performanceMetrics.map((metric, idx) => (
            <Card key={idx} className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-medium text-foreground text-sm">{metric.title}</h4>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-bold text-green-400">{metric.improvement}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Current</span>
                    <span className="text-lg font-bold text-primary">{metric.current}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Previous</span>
                    <span className="text-sm text-muted-foreground">{metric.previous}</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground italic">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Key Insights */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <h4 className="font-medium text-foreground mb-4">AI Optimization Insights</h4>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              ✓ Dynamic routing has reduced average travel times by 31% while improving driver satisfaction through
              optimized stop sequences.
            </p>
            <p className="text-sm text-muted-foreground">
              ✓ Predictive demand modeling enables proactive resource deployment, reducing wait times and improving
              service reliability.
            </p>
            <p className="text-sm text-muted-foreground">
              ✓ Real-time traffic integration adjusts fleet allocation automatically, resulting in 8.8% cost savings
              per mile operated.
            </p>
            <p className="text-sm text-muted-foreground">
              ✓ Eco-friendly routing recommendations have cut CO2 emissions by 32.4%, supporting sustainability goals
              while lowering fuel costs.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
