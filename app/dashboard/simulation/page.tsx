'use client';

import { useState } from 'react';
import { Play, Pause, RotateCcw, BarChart3, TrendingDown, Zap } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function SimulationPage() {
  const [isRunning, setIsRunning] = useState(false);
  const [scenario, setScenario] = useState('baseline');
  const [simulationTime, setSimulationTime] = useState(0);

  // Simulation data comparing baseline vs optimized
  const comparisonData = [
    { time: '0h', baseline: 45, optimized: 45, diff: 0 },
    { time: '2h', baseline: 55, optimized: 52, diff: -3 },
    { time: '4h', baseline: 72, optimized: 65, diff: -7 },
    { time: '6h', baseline: 85, optimized: 71, diff: -14 },
    { time: '8h', baseline: 88, optimized: 70, diff: -18 },
    { time: '10h', baseline: 82, optimized: 68, diff: -14 },
    { time: '12h', baseline: 78, optimized: 64, diff: -14 },
    { time: '14h', baseline: 76, optimized: 62, diff: -14 },
    { time: '16h', baseline: 85, optimized: 68, diff: -17 },
    { time: '18h', baseline: 90, optimized: 72, diff: -18 },
    { time: '20h', baseline: 75, optimized: 60, diff: -15 },
    { time: '22h', baseline: 55, optimized: 45, diff: -10 },
  ];

  // Impact metrics
  const impactData = [
    { metric: 'Avg Travel Time', before: 28.5, after: 22.1, unit: 'min' },
    { metric: 'Peak Congestion', before: 90, after: 72, unit: '%' },
    { metric: 'Emissions', before: 485, after: 340, unit: 'kg CO2' },
    { metric: 'Vehicles Delayed', before: 2845, after: 1204, unit: 'count' },
  ];

  // Zone-wise improvements
  const zoneImprovements = [
    { zone: 'Zone-A', improvement: 22.4 },
    { zone: 'Zone-B', improvement: 18.7 },
    { zone: 'Zone-C', improvement: 25.1 },
    { zone: 'Zone-D', improvement: 15.2 },
    { zone: 'Zone-E', improvement: 28.9 },
  ];

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
            <span className="text-slate-300">Simulation</span>
          </nav>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Digital Twin Simulation
          </h1>
          <p className="text-slate-400 mt-2">Real-time network simulation with AI optimization predictions</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Simulation Controls */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">Simulation Control</h2>
            <div className="flex items-center gap-2">
              <div className="text-sm text-slate-400">
                Simulation Time: <span className="font-semibold text-foreground">{simulationTime}h</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="text-sm text-slate-400 mb-2 block">Select Scenario</label>
              <select
                value={scenario}
                onChange={(e) => setScenario(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-foreground"
              >
                <option value="baseline">Baseline (Current Network)</option>
                <option value="optimized">AI Optimized Signals</option>
                <option value="routing">Dynamic Routing</option>
                <option value="combined">Combined Optimization</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-slate-400 mb-2 block">Simulation Speed</label>
              <select className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-foreground">
                <option>1x (Real-time)</option>
                <option>4x</option>
                <option>16x</option>
                <option>60x</option>
              </select>
            </div>

            <div className="flex items-end gap-2">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center justify-center gap-2 transition-colors"
              >
                {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isRunning ? 'Pause' : 'Start'}
              </button>
              <button
                onClick={() => {
                  setIsRunning(false);
                  setSimulationTime(0);
                }}
                className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded flex items-center justify-center gap-2 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
            </div>
          </div>

          <div className="w-full bg-slate-800 rounded-full h-2">
            <div
              className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all"
              style={{ width: `${(simulationTime / 24) * 100}%` }}
            />
          </div>
          <p className="text-xs text-slate-500 mt-2">Progress: {simulationTime}/24 hours</p>
        </div>

        {/* Comparison Chart */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Network Congestion Comparison (24h Simulation)</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={comparisonData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" label={{ value: 'Congestion Level (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                labelStyle={{ color: '#E5E7EB' }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="baseline"
                stroke="#EF4444"
                strokeWidth={2}
                dot={{ fill: '#EF4444', r: 3 }}
                name="Baseline Network"
              />
              <Line
                type="monotone"
                dataKey="optimized"
                stroke="#10B981"
                strokeWidth={2}
                dot={{ fill: '#10B981', r: 3 }}
                name="AI Optimized"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {impactData.map((item, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-6">
              <p className="text-slate-400 text-sm mb-3">{item.metric}</p>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-2xl font-bold text-red-400">{item.before}</span>
                <span className="text-xs text-slate-500">{item.unit}</span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span className="text-sm text-slate-400">After optimization</span>
                <span className="font-bold text-green-400">{item.after} {item.unit}</span>
              </div>
              <p className="text-xs text-green-500 mt-2">
                Improvement: {(((item.before - item.after) / item.before) * 100).toFixed(1)}%
              </p>
            </div>
          ))}
        </div>

        {/* Zone-wise Improvements */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Zone-wise Travel Time Improvement</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={zoneImprovements}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="zone" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" label={{ value: 'Improvement (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                labelStyle={{ color: '#E5E7EB' }}
              />
              <Bar dataKey="improvement" fill="#06B6D4" name="Improvement %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Key Findings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-900/20 to-green-900/10 border border-green-500/20 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <TrendingDown className="w-5 h-5 text-green-400" />
              <h3 className="font-semibold text-green-300">Traffic Reduction</h3>
            </div>
            <p className="text-slate-300 text-sm">AI optimization reduces peak hour congestion by 18-28% across all zones through dynamic signal timing</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/20 to-cyan-900/10 border border-cyan-500/20 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-cyan-400" />
              <h3 className="font-semibold text-cyan-300">Environmental Impact</h3>
            </div>
            <p className="text-slate-300 text-sm">CO2 emissions reduced by 145 kg per day through reduced congestion and optimized routes</p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/10 border border-blue-500/20 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="w-5 h-5 text-blue-400" />
              <h3 className="font-semibold text-blue-300">Scale Benefits</h3>
            </div>
            <p className="text-slate-300 text-sm">Simulation shows consistent improvements across different times of day and weather conditions</p>
          </div>
        </div>
      </main>
    </div>
  );
}
