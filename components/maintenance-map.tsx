'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';

const zoneData = [
  { zone: 'Downtown', critical: 3, high: 5, medium: 8, low: 12 },
  { zone: 'Midtown', critical: 1, high: 3, medium: 6, low: 9 },
  { zone: 'Uptown', critical: 2, high: 4, medium: 7, low: 11 },
  { zone: 'Harbor', critical: 1, high: 2, medium: 4, low: 7 },
  { zone: 'Industrial', critical: 1, high: 3, medium: 5, low: 8 },
];

const locationData = [
  { x: 40.7128, y: 74.006, severity: 'critical', type: 'road' },
  { x: 40.7125, y: 74.005, severity: 'high', type: 'bridge' },
  { x: 40.7122, y: 74.007, severity: 'medium', type: 'signal' },
  { x: 40.7130, y: 74.004, severity: 'critical', type: 'road' },
  { x: 40.7115, y: 74.008, severity: 'high', type: 'signal' },
  { x: 40.7135, y: 74.009, severity: 'low', type: 'sensor' },
  { x: 40.7105, y: 74.003, severity: 'medium', type: 'road' },
  { x: 40.7140, y: 74.010, severity: 'critical', type: 'bridge' },
];

export default function MaintenanceMap() {
  return (
    <div className="space-y-8">
      {/* Zone Distribution */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Maintenance Issues by Zone</h3>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={zoneData}>
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
              <Bar dataKey="critical" fill="#ef4444" name="Critical" />
              <Bar dataKey="high" fill="#f97316" name="High" />
              <Bar dataKey="medium" fill="#eab308" name="Medium" />
              <Bar dataKey="low" fill="#3b82f6" name="Low" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Geographic Scatter */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Infrastructure Health Map (Geographic Distribution)</h3>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#25273d" />
              <XAxis dataKey="x" type="number" stroke="#94a3b8" name="Latitude" />
              <YAxis dataKey="y" type="number" stroke="#94a3b8" name="Longitude" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172a',
                  border: '1px solid #3b82f6',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: '#ffffff' }}
              />
              <Scatter
                name="Critical"
                data={locationData.filter((d) => d.severity === 'critical')}
                fill="#ef4444"
              />
              <Scatter
                name="High"
                data={locationData.filter((d) => d.severity === 'high')}
                fill="#f97316"
              />
              <Scatter
                name="Medium"
                data={locationData.filter((d) => d.severity === 'medium')}
                fill="#eab308"
              />
              <Scatter
                name="Low"
                data={locationData.filter((d) => d.severity === 'low')}
                fill="#3b82f6"
              />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Heat Map Legend */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-card border border-red-500/30 rounded-lg p-3">
          <div className="w-4 h-4 bg-red-500 rounded-full mb-2" />
          <p className="text-sm text-foreground font-medium">Critical</p>
          <p className="text-xs text-muted-foreground">Immediate action required</p>
        </div>
        <div className="bg-card border border-orange-500/30 rounded-lg p-3">
          <div className="w-4 h-4 bg-orange-500 rounded-full mb-2" />
          <p className="text-sm text-foreground font-medium">High</p>
          <p className="text-xs text-muted-foreground">Action within 2 weeks</p>
        </div>
        <div className="bg-card border border-yellow-500/30 rounded-lg p-3">
          <div className="w-4 h-4 bg-yellow-500 rounded-full mb-2" />
          <p className="text-sm text-foreground font-medium">Medium</p>
          <p className="text-xs text-muted-foreground">Action within 1 month</p>
        </div>
        <div className="bg-card border border-blue-500/30 rounded-lg p-3">
          <div className="w-4 h-4 bg-blue-500 rounded-full mb-2" />
          <p className="text-sm text-foreground font-medium">Low</p>
          <p className="text-xs text-muted-foreground">Routine monitoring</p>
        </div>
      </div>
    </div>
  );
}
