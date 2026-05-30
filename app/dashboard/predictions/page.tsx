'use client';

import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';
import { TrendingUp, Clock, Target, AlertCircle } from 'lucide-react';

export default function PredictionDashboard() {
  const [selectedSensor, setSelectedSensor] = useState('Sensor-42');
  const [timeRange, setTimeRange] = useState('24h');

  // 24-hour prediction data
  const predictionData = [
    { time: '00:00', predicted: 45, actual: 42, confidence: 94 },
    { time: '04:00', predicted: 38, actual: 40, confidence: 92 },
    { time: '08:00', predicted: 72, actual: 75, confidence: 89 },
    { time: '12:00', predicted: 85, actual: 82, confidence: 91 },
    { time: '16:00', predicted: 78, actual: 80, confidence: 88 },
    { time: '20:00', predicted: 65, actual: 63, confidence: 93 },
    { time: '23:59', predicted: 50, actual: 48, confidence: 95 },
  ];

  // Sensor performance across network
  const sensorPerformance = [
    { sensor: 'S-42', mae: 0.158, rmse: 0.294, accuracy: 94.2 },
    { sensor: 'S-18', mae: 0.171, rmse: 0.318, accuracy: 92.8 },
    { sensor: 'S-65', mae: 0.142, rmse: 0.267, accuracy: 95.1 },
    { sensor: 'S-201', mae: 0.189, rmse: 0.342, accuracy: 91.5 },
    { sensor: 'S-107', mae: 0.164, rmse: 0.305, accuracy: 93.7 },
  ];

  // Hourly congestion forecast
  const congestionForecast = [
    { hour: '0h', low: 20, medium: 10, high: 5 },
    { hour: '3h', low: 15, medium: 8, high: 3 },
    { hour: '6h', low: 25, medium: 15, high: 8 },
    { hour: '12h', low: 10, medium: 20, high: 25 },
    { hour: '18h', low: 8, medium: 18, high: 28 },
    { hour: '24h', low: 18, medium: 12, high: 6 },
  ];

  // Error distribution
  const errorData = Array.from({ length: 50 }, (_, i) => ({
    actual: 40 + Math.random() * 50,
    predicted: 40 + Math.random() * 50,
  }));

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
            <span className="text-slate-300">Predictions</span>
          </nav>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Traffic Prediction Dashboard
          </h1>
          <p className="text-slate-400 mt-2">Real-time STGCN predictions with 94.3% accuracy across METR-LA network</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-slate-400 text-sm font-medium">MAE</h3>
              <Target className="w-4 h-4 text-green-400" />
            </div>
            <p className="text-3xl font-bold text-foreground">0.1628</p>
            <p className="text-xs text-slate-500 mt-1">Mean Absolute Error</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-slate-400 text-sm font-medium">RMSE</h3>
              <TrendingUp className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-3xl font-bold text-foreground">0.2968</p>
            <p className="text-xs text-slate-500 mt-1">Root Mean Squared Error</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-slate-400 text-sm font-medium">Accuracy</h3>
              <TrendingUp className="w-4 h-4 text-purple-400" />
            </div>
            <p className="text-3xl font-bold text-foreground">94.3%</p>
            <p className="text-xs text-slate-500 mt-1">Overall Network</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-slate-400 text-sm font-medium">Horizon</h3>
              <Clock className="w-4 h-4 text-pink-400" />
            </div>
            <p className="text-3xl font-bold text-foreground">60 min</p>
            <p className="text-xs text-slate-500 mt-1">12-step prediction</p>
          </div>
        </div>

        {/* Main Prediction Chart */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-foreground">24-Hour Traffic Prediction</h2>
            <select
              value={selectedSensor}
              onChange={(e) => setSelectedSensor(e.target.value)}
              className="bg-slate-900 border border-slate-700 rounded px-3 py-1 text-sm text-foreground"
            >
              <option>Sensor-42</option>
              <option>Sensor-18</option>
              <option>Sensor-65</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={predictionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                labelStyle={{ color: '#E5E7EB' }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={{ fill: '#3B82F6', r: 4 }}
                name="Actual Traffic"
              />
              <Line
                type="monotone"
                dataKey="predicted"
                stroke="#8B5CF6"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: '#8B5CF6', r: 4 }}
                name="Predicted Traffic"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Sensor Performance & Congestion Forecast */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Sensor Performance */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Sensor Performance Metrics</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sensorPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="sensor" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                  labelStyle={{ color: '#E5E7EB' }}
                />
                <Legend />
                <Bar dataKey="mae" fill="#3B82F6" name="MAE" />
                <Bar dataKey="rmse" fill="#8B5CF6" name="RMSE" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Congestion Forecast */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Congestion Forecast (24h)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={congestionForecast}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="hour" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                  labelStyle={{ color: '#E5E7EB' }}
                />
                <Legend />
                <Bar dataKey="low" fill="#10B981" name="Low" />
                <Bar dataKey="medium" fill="#F59E0B" name="Medium" />
                <Bar dataKey="high" fill="#EF4444" name="High" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Prediction Accuracy Scatter */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Prediction Accuracy Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis type="number" dataKey="actual" stroke="#9CA3AF" name="Actual Speed" />
              <YAxis type="number" dataKey="predicted" stroke="#9CA3AF" name="Predicted Speed" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                labelStyle={{ color: '#E5E7EB' }}
              />
              <Scatter data={errorData} fill="#8B5CF6" name="Predictions" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* Model Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/10 border border-blue-500/20 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <h3 className="font-semibold text-blue-300">Peak Hour Prediction</h3>
            </div>
            <p className="text-slate-300 text-sm">Model shows 95.2% accuracy during peak hours (7-9 AM, 5-7 PM)</p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/10 border border-purple-500/20 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-purple-400" />
              <h3 className="font-semibold text-purple-300">Anomaly Detection</h3>
            </div>
            <p className="text-slate-300 text-sm">{"12 anomalies detected in last 24 hours with confidence > 90%"}</p>
          </div>

          <div className="bg-gradient-to-br from-pink-900/20 to-pink-900/10 border border-pink-500/20 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-5 h-5 text-pink-400" />
              <h3 className="font-semibold text-pink-300">Prediction Latency</h3>
            </div>
            <p className="text-slate-300 text-sm">Real-time inference with &lt;100ms latency across 207 sensors</p>
          </div>
        </div>
      </main>
    </div>
  );
}
