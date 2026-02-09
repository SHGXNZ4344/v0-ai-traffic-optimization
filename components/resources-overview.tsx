'use client';

import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const fleetData = [
  { name: 'Buses', value: 450, percentage: 35 },
  { name: 'Subway Cars', value: 520, percentage: 40 },
  { name: 'Ride-sharing Vehicles', value: 280, percentage: 25 },
];

const parkingData = [
  { zone: 'Downtown', total: 5200, available: 1240, occupied: 3960 },
  { zone: 'Midtown', total: 4800, available: 1920, occupied: 2880 },
  { zone: 'Uptown', total: 3400, available: 1360, occupied: 2040 },
  { zone: 'Harbor', total: 2100, available: 840, occupied: 1260 },
  { zone: 'Industrial', total: 1500, available: 600, occupied: 900 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899'];

export default function ResourcesOverview() {
  return (
    <div className="space-y-8">
      {/* Fleet Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h3 className="text-sm font-semibold text-foreground mb-6">Fleet Distribution</h3>
          <div className="w-full h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={fleetData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name} ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {fleetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    border: '1px solid #3b82f6',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: '#ffffff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Fleet Details */}
        <div className="md:col-span-2 space-y-3">
          {fleetData.map((item, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-foreground">{item.name}</h4>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                  {item.value} vehicles
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-card rounded-full h-2 border border-border">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-foreground">{item.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Parking Availability */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Parking Availability by Zone</h3>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={parkingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#25273d" />
              <XAxis dataKey="zone" stroke="#94a3b8" />
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
              <Bar dataKey="occupied" fill="#ec4899" name="Occupied" />
              <Bar dataKey="available" fill="#10b981" name="Available" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Zone Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {parkingData.map((zone, idx) => (
          <Card key={idx} className="bg-card border-border">
            <CardContent className="p-4">
              <h4 className="font-medium text-foreground mb-3">{zone.zone}</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Total Spaces</span>
                  <span className="font-medium text-foreground">{zone.total}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Available</span>
                  <span className="font-medium text-green-400">{zone.available}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Occupancy Rate</span>
                  <span className="font-medium text-primary">{Math.round((zone.occupied / zone.total) * 100)}%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
