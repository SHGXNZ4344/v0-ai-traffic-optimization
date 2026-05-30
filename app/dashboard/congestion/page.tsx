'use client';

import { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';
import { AlertTriangle, TrendingDown, Zap, MapPin } from 'lucide-react';

export default function CongestionDashboard() {
  const [selectedZone, setSelectedZone] = useState('Zone-A');

  // Congestion severity by zone
  const zoneData = [
    { zone: 'Zone-A', severity: 85, sensors: 34, percentile: 92 },
    { zone: 'Zone-B', severity: 62, sensors: 28, percentile: 71 },
    { zone: 'Zone-C', severity: 78, sensors: 31, percentile: 87 },
    { zone: 'Zone-D', severity: 45, sensors: 22, percentile: 54 },
    { zone: 'Zone-E', severity: 91, sensors: 38, percentile: 96 },
  ];

  // Hourly congestion pattern
  const congestionPattern = [
    { hour: '0:00', level: 25, threshold: 60 },
    { hour: '4:00', level: 18, threshold: 60 },
    { hour: '8:00', level: 72, threshold: 60 },
    { hour: '12:00', level: 68, threshold: 60 },
    { hour: '16:00', level: 85, threshold: 60 },
    { hour: '20:00', level: 78, threshold: 60 },
    { hour: '23:59', level: 35, threshold: 60 },
  ];

  // Signal optimization impact
  const optimizationData = [
    { intersection: 'I-001', beforeTravel: 18.5, afterTravel: 14.2, improvement: 23.2 },
    { intersection: 'I-042', beforeTravel: 22.1, afterTravel: 16.8, improvement: 24.0 },
    { intersection: 'I-089', beforeTravel: 19.3, afterTravel: 15.1, improvement: 21.8 },
    { intersection: 'I-156', beforeTravel: 25.2, afterTravel: 18.9, improvement: 25.0 },
    { intersection: 'I-201', beforeTravel: 17.8, afterTravel: 13.5, improvement: 24.2 },
  ];

  // Anomaly events
  const anomalies = [
    { id: 1, zone: 'Zone-E', type: 'Accident Detected', severity: 'Critical', confidence: 94, time: '14:32' },
    { id: 2, zone: 'Zone-A', type: 'Unusual Congestion', severity: 'High', confidence: 88, time: '13:15' },
    { id: 3, zone: 'Zone-C', type: 'Signal Malfunction', severity: 'Medium', confidence: 82, time: '12:48' },
    { id: 4, zone: 'Zone-B', type: 'Event Detected', severity: 'Medium', confidence: 79, time: '11:20' },
  ];

  const getSeverityColor = (severity: number) => {
    if (severity >= 80) return 'text-red-400';
    if (severity >= 60) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getSeverityBg = (severity: number) => {
    if (severity >= 80) return 'bg-red-900/20 border-red-500/30';
    if (severity >= 60) return 'bg-yellow-900/20 border-yellow-500/30';
    return 'bg-green-900/20 border-green-500/30';
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex gap-4 mb-4">
            <a href="/" className="text-slate-400 hover:text-slate-200 transition-colors">
              Home
            </a>
            <span className="text-slate-600">/</span>
            <span className="text-slate-300">Congestion</span>
          </nav>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Congestion Detection & Optimization
          </h1>
          <p className="text-slate-400 mt-2">Real-time anomaly detection and signal optimization recommendations</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Critical Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-red-900/20 to-red-900/10 border border-red-500/30 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-slate-400 text-sm font-medium">Critical Zones</h3>
              <AlertTriangle className="w-4 h-4 text-red-400" />
            </div>
            <p className="text-3xl font-bold text-red-300">2</p>
            <p className="text-xs text-slate-500 mt-1">Severity &gt; 80%</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-900/10 border border-yellow-500/30 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-slate-400 text-sm font-medium">Anomalies (24h)</h3>
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
            </div>
            <p className="text-3xl font-bold text-yellow-300">4</p>
            <p className="text-xs text-slate-500 mt-1">Detected and resolved</p>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-green-900/10 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-slate-400 text-sm font-medium">Avg Improvement</h3>
              <TrendingDown className="w-4 h-4 text-green-400" />
            </div>
            <p className="text-3xl font-bold text-green-300">23.6%</p>
            <p className="text-xs text-slate-500 mt-1">Travel time reduction</p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/10 border border-blue-500/30 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-slate-400 text-sm font-medium">Active Optimizations</h3>
              <Zap className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-3xl font-bold text-blue-300">12</p>
            <p className="text-xs text-slate-500 mt-1">Signal timing adjustments</p>
          </div>
        </div>

        {/* Zone Severity Map */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Zone Congestion Severity</h2>
          <div className="space-y-3">
            {zoneData.map((zone) => (
              <div key={zone.zone} className={`p-4 rounded-lg border ${getSeverityBg(zone.severity)} cursor-pointer hover:opacity-80 transition-opacity`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span className="font-semibold text-foreground">{zone.zone}</span>
                    <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300">{zone.sensors} sensors</span>
                  </div>
                  <span className={`text-lg font-bold ${getSeverityColor(zone.severity)}`}>{zone.severity}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${zone.severity >= 80 ? 'bg-red-500' : zone.severity >= 60 ? 'bg-yellow-500' : 'bg-green-500'}`}
                    style={{ width: `${zone.severity}%` }}
                  />
                </div>
                <p className="text-xs text-slate-400 mt-2">Percentile: {zone.percentile}th</p>
              </div>
            ))}
          </div>
        </div>

        {/* Congestion Pattern & Optimization Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Hourly Congestion */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">24-Hour Congestion Pattern</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={congestionPattern}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="hour" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                  labelStyle={{ color: '#E5E7EB' }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="level"
                  stroke="#EF4444"
                  strokeWidth={2}
                  dot={{ fill: '#EF4444', r: 4 }}
                  name="Congestion Level"
                />
                <Line
                  type="monotone"
                  dataKey="threshold"
                  stroke="#6B7280"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Alert Threshold"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Signal Optimization Impact */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Signal Optimization Impact</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={optimizationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="intersection" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                  labelStyle={{ color: '#E5E7EB' }}
                />
                <Legend />
                <Bar dataKey="beforeTravel" fill="#EF4444" name="Before (min)" />
                <Bar dataKey="afterTravel" fill="#10B981" name="After (min)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Anomalies */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Recent Anomalies & Events</h2>
          <div className="space-y-3">
            {anomalies.map((anomaly) => (
              <div key={anomaly.id} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-foreground">{anomaly.type}</span>
                    <span className="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-300">{anomaly.zone}</span>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded ${
                        anomaly.severity === 'Critical'
                          ? 'bg-red-900/50 text-red-300'
                          : anomaly.severity === 'High'
                            ? 'bg-yellow-900/50 text-yellow-300'
                            : 'bg-blue-900/50 text-blue-300'
                      }`}
                    >
                      {anomaly.severity}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">Detected at {anomaly.time}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-green-400">{anomaly.confidence}% confidence</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gradient-to-br from-orange-900/20 to-orange-900/10 border border-orange-500/20 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-orange-400" />
              <h3 className="font-semibold text-orange-300">Priority Action</h3>
            </div>
            <p className="text-slate-300 text-sm">Increase green time at Intersection I-156 by 15% to handle Zone-E overflow during peak hours</p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/10 border border-blue-500/20 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-blue-400" />
              <h3 className="font-semibold text-blue-300">Route Optimization</h3>
            </div>
            <p className="text-slate-300 text-sm">Recommend alternate routes for 234 vehicles currently in Zone-A to reduce congestion by 18%</p>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-green-900/10 border border-green-500/20 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <TrendingDown className="w-5 h-5 text-green-400" />
              <h3 className="font-semibold text-green-300">Predicted Improvement</h3>
            </div>
            <p className="text-slate-300 text-sm">If recommendations are applied, average travel time will reduce by 12-15 minutes across affected zones</p>
          </div>
        </div>
      </main>
    </div>
  );
}
