'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const demandData = [
  { hour: '6 AM', predicted: 450, allocated: 520, utilization: 87 },
  { hour: '8 AM', predicted: 920, allocated: 1050, utilization: 88 },
  { hour: '10 AM', predicted: 620, allocated: 700, utilization: 89 },
  { hour: '12 PM', predicted: 780, allocated: 850, utilization: 92 },
  { hour: '2 PM', predicted: 640, allocated: 720, utilization: 89 },
  { hour: '4 PM', predicted: 850, allocated: 950, utilization: 89 },
  { hour: '6 PM', predicted: 1100, allocated: 1200, utilization: 92 },
  { hour: '8 PM', predicted: 720, allocated: 800, utilization: 90 },
];

const transitModes = [
  {
    mode: 'Bus Network',
    vehicles: 450,
    allocated: 380,
    demand: '85%',
    utilization: 88,
    costPerKM: 2.4,
    emissions: 150,
  },
  {
    mode: 'Subway System',
    vehicles: 520,
    allocated: 480,
    demand: '92%',
    utilization: 94,
    costPerKM: 1.8,
    emissions: 45,
  },
  {
    mode: 'Ride-Sharing',
    vehicles: 280,
    allocated: 220,
    demand: '79%',
    utilization: 82,
    costPerKM: 3.2,
    emissions: 320,
  },
  {
    mode: 'Bike-Sharing',
    vehicles: 1200,
    allocated: 950,
    demand: '65%',
    utilization: 76,
    costPerKM: 0.5,
    emissions: 0,
  },
];

export default function TransitAllocation() {
  return (
    <div className="space-y-8">
      {/* Demand vs Allocation */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Hourly Demand Forecast & Resource Allocation</h3>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={demandData}>
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
              <Bar dataKey="predicted" fill="#8b5cf6" name="Predicted Demand" />
              <Bar dataKey="allocated" fill="#3b82f6" name="Allocated Resources" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Transit Mode Allocation */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Resource Allocation by Transit Mode</h3>
        <div className="space-y-3">
          {transitModes.map((mode, idx) => (
            <Card key={idx} className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-medium text-foreground">{mode.mode}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {mode.allocated} / {mode.vehicles} vehicles allocated
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className={`whitespace-nowrap ${
                      mode.utilization >= 90
                        ? 'bg-green-500/10 text-green-400 border-green-500/30'
                        : mode.utilization >= 80
                          ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                          : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
                    }`}
                  >
                    {mode.utilization}% utilized
                  </Badge>
                </div>

                {/* Allocation Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">Resource Allocation</span>
                    <span className="text-sm font-medium text-foreground">
                      {Math.round((mode.allocated / mode.vehicles) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-card rounded-full h-2 border border-border">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-full rounded-full"
                      style={{ width: `${(mode.allocated / mode.vehicles) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                  <div>
                    <p className="text-muted-foreground mb-1">Current Demand</p>
                    <p className="font-medium text-foreground">{mode.demand}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Cost/KM</p>
                    <p className="font-medium text-foreground">${mode.costPerKM}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Avg Emissions</p>
                    <p className="font-medium text-green-400">{mode.emissions} g/km</p>
                  </div>
                  <div className="flex items-end">
                    <button className="text-primary hover:text-primary/80 text-sm font-medium">
                      Adjust →
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Peak Hour Strategy */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <h4 className="font-medium text-foreground mb-4">Peak Hour Allocation Strategy</h4>
          <div className="space-y-4">
            <div className="border-l-4 border-l-primary pl-4">
              <h5 className="font-medium text-foreground mb-1">Morning Peak (7-9 AM)</h5>
              <p className="text-sm text-muted-foreground">
                Increase bus allocation by 40% and activate 90% of subway capacity. Deploy 60% of ride-sharing fleet for
                surge pricing corridors.
              </p>
            </div>
            <div className="border-l-4 border-l-accent pl-4">
              <h5 className="font-medium text-foreground mb-1">Evening Peak (5-7 PM)</h5>
              <p className="text-sm text-muted-foreground">
                Maintain elevated bus and subway capacity. Incentivize bike-sharing usage on secondary routes. Monitor
                ride-sharing surge for redistribution.
              </p>
            </div>
            <div className="border-l-4 border-l-secondary pl-4">
              <h5 className="font-medium text-foreground mb-1">Off-Peak (10 AM - 4 PM)</h5>
              <p className="text-sm text-muted-foreground">
                Reduce active vehicles to 70% utilization. Focus on maintenance windows. Maintain bike-sharing coverage
                for leisure and light commuting.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground mb-2">Fleet-Wide Utilization</p>
            <p className="text-3xl font-bold text-primary">87%</p>
            <p className="text-xs text-muted-foreground mt-2">Optimal efficiency target: 85-90%</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground mb-2">Avg Wait Time</p>
            <p className="text-3xl font-bold text-accent">4.2 min</p>
            <p className="text-xs text-muted-foreground mt-2">↓ 18% reduction via AI allocation</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground mb-2">Customer Satisfaction</p>
            <p className="text-3xl font-bold text-green-400">4.6/5</p>
            <p className="text-xs text-muted-foreground mt-2">Based on 12K+ daily feedbacks</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
