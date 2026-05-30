'use client';

import { useState } from 'react';
import { ChevronDown, Zap, Network, Database, Brain } from 'lucide-react';

export default function STGCNArchitecturePage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('overview');

  const sections = [
    {
      id: 'overview',
      title: 'STGCN Overview',
      icon: <Network className="w-5 h-5" />,
      content:
        'Spatio-Temporal Graph Convolutional Networks combine graph neural networks with temporal convolutions to capture both spatial dependencies between traffic sensors and temporal dynamics across time steps.',
    },
    {
      id: 'architecture',
      title: 'Network Architecture',
      icon: <Brain className="w-5 h-5" />,
      content: '',
      details: [
        {
          layer: 'Graph Convolution Layer 1',
          params: '207 × 64',
          description: 'Captures spatial relationships between 207 METR-LA sensors',
        },
        {
          layer: 'Temporal Convolution Layer 1',
          params: '64 × 32',
          description: 'Extracts temporal patterns with kernel size 3',
        },
        {
          layer: 'Graph Convolution Layer 2',
          params: '32 × 64',
          description: 'Secondary spatial feature extraction',
        },
        {
          layer: 'LSTM Stack',
          params: '64 → 128 → 64',
          description: 'Long Short-Term Memory for sequence modeling',
        },
        {
          layer: 'Fully Connected Layer',
          params: '64 → 12',
          description: 'Outputs 12 time-step ahead predictions',
        },
      ],
    },
    {
      id: 'performance',
      title: 'Model Performance Metrics',
      icon: <Zap className="w-5 h-5" />,
      content: '',
      metrics: [
        { name: 'Mean Absolute Error (MAE)', value: '0.1628', description: 'Average prediction deviation' },
        { name: 'Root Mean Squared Error (RMSE)', value: '0.2968', description: 'Penalizes larger errors' },
        { name: 'Mean Absolute Percentage Error', value: '3.82%', description: 'Relative prediction accuracy' },
        {
          name: 'Prediction Horizon',
          value: '60 minutes',
          description: '12 steps × 5-minute intervals',
        },
        {
          name: 'Historical Context',
          value: '60 minutes',
          description: '12 previous steps for feature extraction',
        },
        { name: 'Dataset Size', value: '2.4B points', description: 'METR-LA: 207 sensors × 12 months' },
      ],
    },
    {
      id: 'training',
      title: 'Training Configuration',
      icon: <Database className="w-5 h-5" />,
      content: '',
      trainingParams: [
        { param: 'Optimizer', value: 'Adam', description: 'Adaptive learning rate optimization' },
        { param: 'Learning Rate', value: '0.001', description: 'Initial learning rate with decay schedule' },
        { param: 'Batch Size', value: '32', description: 'Training batch for efficient gradient updates' },
        { param: 'Epochs', value: '200', description: 'Total training iterations' },
        { param: 'Early Stopping', value: 'Yes (30 patience)', description: 'Validation-based early termination' },
        { param: 'Loss Function', value: 'Mean Squared Error', description: 'L2 regression loss' },
        { param: 'Dropout Rate', value: '0.5', description: 'Regularization to prevent overfitting' },
        { param: 'Weight Decay', value: '1e-5', description: 'L2 regularization for weights' },
      ],
    },
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
            <span className="text-slate-300">Models</span>
          </nav>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            STGCN Architecture
          </h1>
          <p className="text-slate-400 mt-2">Spatio-Temporal Graph Convolutional Networks for Traffic Prediction</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className="border border-border rounded-lg overflow-hidden bg-card hover:border-blue-500/30 transition-colors"
            >
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-900/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="text-blue-400">{section.icon}</div>
                  <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                    expandedSection === section.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedSection === section.id && (
                <div className="px-6 py-4 border-t border-border bg-slate-950/50">
                  {section.content && <p className="text-slate-300 mb-6">{section.content}</p>}

                  {section.details && (
                    <div className="space-y-4">
                      {section.details.map((detail, idx) => (
                        <div key={idx} className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-slate-200">{detail.layer}</h3>
                            <span className="text-blue-400 text-sm font-mono bg-blue-400/10 px-2 py-1 rounded">
                              {detail.params}
                            </span>
                          </div>
                          <p className="text-slate-400 text-sm">{detail.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.metrics && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold text-slate-200">{metric.name}</h3>
                            <span className="text-green-400 text-lg font-bold">{metric.value}</span>
                          </div>
                          <p className="text-slate-400 text-sm">{metric.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.trainingParams && (
                    <div className="space-y-3">
                      {section.trainingParams.map((item, idx) => (
                        <div key={idx} className="flex items-start justify-between p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                          <div>
                            <h3 className="font-semibold text-slate-200">{item.param}</h3>
                            <p className="text-slate-400 text-sm">{item.description}</p>
                          </div>
                          <span className="text-purple-400 font-mono font-bold ml-4">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Insights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-900/10 border border-blue-500/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-2">Spatial Component</h3>
            <p className="text-slate-300 text-sm">Graph convolutions capture dependencies between nearby and distant sensors through multi-hop neighborhoods.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/10 border border-purple-500/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Temporal Component</h3>
            <p className="text-slate-300 text-sm">Temporal convolutions and LSTM layers model traffic dynamics across time, capturing rush hours and traffic patterns.</p>
          </div>
          <div className="bg-gradient-to-br from-pink-900/20 to-pink-900/10 border border-pink-500/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-pink-300 mb-2">Integration</h3>
            <p className="text-slate-300 text-sm">The architecture seamlessly integrates spatial and temporal learning through stacked ST-Conv blocks.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
