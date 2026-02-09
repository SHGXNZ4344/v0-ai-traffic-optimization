'use client';

import { DigitalTwin3D } from '@/components/digital-twin-3d';
import { useState } from 'react';
import { ChevronDown, Network, Zap, Brain } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'3d' | '2d'>('3d');

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Header Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Network className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-white font-bold text-xl">DTN Framework</h1>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('3d')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === '3d'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              3D Model
            </button>
            <button
              onClick={() => setActiveTab('2d')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === '2d'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              Architecture Flow
            </button>
            <a
              href="/dashboard/traffic"
              className="px-4 py-2 rounded-lg font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-all"
            >
              Traffic Dashboard
            </a>
            <a
              href="/dashboard/maintenance"
              className="px-4 py-2 rounded-lg font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-all"
            >
              Maintenance
            </a>
            <a
              href="/dashboard/resources"
              className="px-4 py-2 rounded-lg font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-all"
            >
              Resources
            </a>
            <a
              href="/dashboard/analytics"
              className="px-4 py-2 rounded-lg font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-all"
            >
              Analytics
            </a>
            <a
              href="/docs"
              className="px-4 py-2 rounded-lg font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-all"
            >
              Docs
            </a>
            <a
              href="/feedback"
              className="px-4 py-2 rounded-lg font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-all"
            >
              Feedback
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {activeTab === '3d' ? (
          /* 3D Model Section */
          <div className="h-screen">
            <DigitalTwin3D />
          </div>
        ) : (
          /* 2D Architecture Flow Section */
          <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-12">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-4xl font-bold text-white mb-4">System Architecture</h2>
                <p className="text-slate-400 text-lg">
                  Explainable AI-Enabled Digital Twin Network for Intelligent Traffic Flow Optimization
                </p>
              </div>

              {/* Architecture Diagram */}
              <div className="mb-12 relative">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
                  <Image
                    src="/architecture-flow.jpg"
                    alt="System Architecture Flow Diagram"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* System Components */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Physical Network */}
                <div className="bg-slate-900/50 border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/60 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Network className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Physical Network</h3>
                  </div>
                  <ul className="text-slate-300 space-y-2 text-sm">
                    <li>• Real-time network sensors</li>
                    <li>• Traffic data collection</li>
                    <li>• Performance monitoring</li>
                    <li>• Anomaly detection</li>
                  </ul>
                </div>

                {/* Digital Twin */}
                <div className="bg-slate-900/50 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/60 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Digital Twin</h3>
                  </div>
                  <ul className="text-slate-300 space-y-2 text-sm">
                    <li>• Virtual network replication</li>
                    <li>• Real-time synchronization</li>
                    <li>• Simulation & prediction</li>
                    <li>• Performance analysis</li>
                  </ul>
                </div>

                {/* Service Layer */}
                <div className="bg-slate-900/50 border border-pink-500/30 rounded-xl p-6 hover:border-pink-500/60 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-pink-400" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Service Layer</h3>
                  </div>
                  <ul className="text-slate-300 space-y-2 text-sm">
                    <li>• AI/ML model inference</li>
                    <li>• XAI explanations (SHAP)</li>
                    <li>• Decision support</li>
                    <li>• Actionable recommendations</li>
                  </ul>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-slate-700 rounded-xl p-8">
                <h3 className="text-white font-bold text-xl mb-6">Key Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-blue-400 font-semibold mb-2">Transparency & Trust</h4>
                    <p className="text-slate-300 text-sm">
                      Explainable AI techniques provide feature-level insights into AI-driven network decisions, building confidence in automated recommendations.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-2">Proactive Management</h4>
                    <p className="text-slate-300 text-sm">
                      Early detection of congestion and anomalies enables proactive corrective actions and improved network reliability.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-pink-400 font-semibold mb-2">Intelligent Optimization</h4>
                    <p className="text-slate-300 text-sm">
                      Closed-loop control between physical network and digital twin ensures continuous optimization and performance improvement.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-semibold mb-2">Scalable Framework</h4>
                    <p className="text-slate-300 text-sm">
                      Designed for academic research with potential for real-time deployment and future technologies like 6G and large-scale IoT.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Navigation Indicator */}
      {activeTab === '3d' && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 text-slate-400 text-sm animate-bounce">
          <ChevronDown className="w-5 h-5 mx-auto" />
        </div>
      )}
    </main>
  );
}
