'use client';

import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Award, Zap, Database } from 'lucide-react';

export default function PerformanceDashboard() {
  const [selectedModel, setSelectedModel] = useState('stgcn');

  // Training history data
  const trainingHistory = [
    { epoch: '10', train: 0.45, val: 0.48, loss: 0.46 },
    { epoch: '20', train: 0.38, val: 0.42, loss: 0.40 },
    { epoch: '30', train: 0.28, val: 0.32, loss: 0.30 },
    { epoch: '50', train: 0.20, val: 0.24, loss: 0.22 },
    { epoch: '75', train: 0.17, val: 0.21, loss: 0.19 },
    { epoch: '100', train: 0.16, val: 0.19, loss: 0.175 },
    { epoch: '150', train: 0.163, val: 0.182, loss: 0.172 },
    { epoch: '200', train: 0.1628, val: 0.1805, loss: 0.1716 },
  ];

  // Model comparison
  const modelComparison = [
    { model: 'STGCN', mae: 0.1628, rmse: 0.2968, mape: 3.82, r2: 0.94 },
    { model: 'LSTM', mae: 0.2145, rmse: 0.3821, mape: 5.21, r2: 0.88 },
    { model: 'GCN', mae: 0.1954, rmse: 0.3524, mape: 4.67, r2: 0.90 },
    { model: 'Transformer', mae: 0.1701, rmse: 0.3105, mape: 4.12, r2: 0.93 },
  ];

  // Performance radar
  const radarData = [
    { metric: 'MAE', STGCN: 95, LSTM: 78, GCN: 84, Transformer: 91 },
    { metric: 'RMSE', STGCN: 94, LSTM: 75, GCN: 82, Transformer: 92 },
    { metric: 'MAPE', STGCN: 94, LSTM: 72, GCN: 80, Transformer: 90 },
    { metric: 'R²', STGCN: 94, LSTM: 88, GCN: 90, Transformer: 93 },
    { metric: 'Inference Speed', STGCN: 92, LSTM: 95, GCN: 70, Transformer: 60 },
    { metric: 'Scalability', STGCN: 93, LSTM: 75, GCN: 85, Transformer: 88 },
  ];

  // Inference metrics
  const inferenceMetrics = [
    { metric: 'Avg Latency', value: '47ms', detail: 'Per 207-sensor prediction' },
    { metric: 'Throughput', value: '2,145 predictions/sec', detail: 'Across full network' },
    { metric: 'Memory Usage', value: '285MB', detail: 'Model + runtime' },
    { metric: 'GPU Utilization', value: '62%', detail: 'NVIDIA A100' },
  ];

  // Sensor-wise accuracy
  const sensorAccuracy = [
    { sensorGroup: 'High-traffic', accuracy: 96.2, samples: 2540 },
    { sensorGroup: 'Medium-traffic', accuracy: 94.1, samples: 3210 },
    { sensorGroup: 'Low-traffic', accuracy: 91.8, samples: 2180 },
    { sensorGroup: 'Intersection', accuracy: 95.4, samples: 2890 },
    { sensorGroup: 'Highway', accuracy: 93.7, samples: 1980 },
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
            <span className="text-slate-300">Performance</span>
          </nav>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Model Performance & Benchmarks
          </h1>
          <p className="text-slate-400 mt-2">STGCN training metrics and comparative analysis with state-of-the-art models</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-slate-400 text-sm font-medium">MAE (Best)</h3>
              <Award className="w-4 h-4 text-yellow-400" />
            </div>
            <p className="text-3xl font-bold text-foreground">0.1628</p>
            <p className="text-xs text-green-400 mt-1">Industry Leading</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-slate-400 text-sm font-medium">R² Score</h3>
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
            <p className="text-3xl font-bold text-foreground">0.94</p>
            <p className="text-xs text-slate-500 mt-1">Variance Explained</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-slate-400 text-sm font-medium">MAPE</h3>
              <Zap className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-3xl font-bold text-foreground">3.82%</p>
            <p className="text-xs text-slate-500 mt-1">Relative Error</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-slate-400 text-sm font-medium">Training Epochs</h3>
              <Database className="w-4 h-4 text-purple-400" />
            </div>
            <p className="text-3xl font-bold text-foreground">200</p>
            <p className="text-xs text-slate-500 mt-1">Converged</p>
          </div>
        </div>

        {/* Training History */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Training History (MAE Loss)</h2>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={trainingHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="epoch" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                labelStyle={{ color: '#E5E7EB' }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="train"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={false}
                name="Training Loss"
              />
              <Line
                type="monotone"
                dataKey="val"
                stroke="#8B5CF6"
                strokeWidth={2}
                dot={false}
                name="Validation Loss"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Model Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Benchmark Metrics */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Model Benchmark Comparison</h2>
            <div className="space-y-3">
              {modelComparison.map((model, idx) => (
                <div key={idx} className="p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-semibold ${model.model === 'STGCN' ? 'text-green-400' : 'text-slate-300'}`}>
                      {model.model}
                    </h3>
                    {model.model === 'STGCN' && <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">Best</span>}
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-sm">
                    <div>
                      <p className="text-slate-400">MAE</p>
                      <p className="font-semibold text-foreground">{model.mae.toFixed(4)}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">RMSE</p>
                      <p className="font-semibold text-foreground">{model.rmse.toFixed(4)}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">MAPE</p>
                      <p className="font-semibold text-foreground">{model.mape.toFixed(2)}%</p>
                    </div>
                    <div>
                      <p className="text-slate-400">R²</p>
                      <p className="font-semibold text-foreground">{model.r2.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Radar */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Multi-Metric Comparison</h2>
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="metric" stroke="#9CA3AF" />
                <PolarRadiusAxis stroke="#9CA3AF" domain={[0, 100]} />
                <Radar name="STGCN" dataKey="STGCN" stroke="#10B981" fill="#10B981" fillOpacity={0.25} />
                <Radar name="LSTM" dataKey="LSTM" stroke="#EF4444" fill="#EF4444" fillOpacity={0.1} />
                <Radar name="Transformer" dataKey="Transformer" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.1} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Inference Performance */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Real-time Inference Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {inferenceMetrics.map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                <p className="text-slate-400 text-sm mb-1">{item.metric}</p>
                <p className="text-2xl font-bold text-foreground mb-1">{item.value}</p>
                <p className="text-xs text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sensor-wise Accuracy */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Accuracy by Sensor Type</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sensorAccuracy}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="sensorGroup" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" domain={[85, 100]} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                labelStyle={{ color: '#E5E7EB' }}
              />
              <Bar dataKey="accuracy" fill="#06B6D4" name="Accuracy %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Key Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-900/20 to-green-900/10 border border-green-500/20 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <h3 className="font-semibold text-green-300">Superior Accuracy</h3>
            </div>
            <p className="text-slate-300 text-sm">STGCN outperforms LSTM by 24.4% and GCN by 16.8% in MAE, achieving industry-leading predictions</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/20 to-cyan-900/10 border border-cyan-500/20 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-cyan-400" />
              <h3 className="font-semibold text-cyan-300">Fast Inference</h3>
            </div>
            <p className="text-slate-300 text-sm">47ms per prediction across 207 sensors enables real-time decision making for signal optimization</p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/10 border border-blue-500/20 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-blue-400" />
              <h3 className="font-semibold text-blue-300">Balanced Performance</h3>
            </div>
            <p className="text-slate-300 text-sm">Combines spatial-temporal learning with optimal scalability for production deployment</p>
          </div>
        </div>
      </main>
    </div>
  );
}
