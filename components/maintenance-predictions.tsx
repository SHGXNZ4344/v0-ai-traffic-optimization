'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, TrendingDown } from 'lucide-react';

const predictionData = [
  { month: 'Jan', roadFailure: 12, bridgeFailure: 8, signalFailure: 5 },
  { month: 'Feb', roadFailure: 14, bridgeFailure: 10, signalFailure: 6 },
  { month: 'Mar', roadFailure: 18, bridgeFailure: 12, signalFailure: 7 },
  { month: 'Apr', roadFailure: 22, bridgeFailure: 15, signalFailure: 9 },
  { month: 'May', roadFailure: 28, bridgeFailure: 18, signalFailure: 11 },
  { month: 'Jun', roadFailure: 32, bridgeFailure: 21, signalFailure: 13 },
];

const riskComponents = [
  {
    component: 'Highway 101 Pavement',
    riskScore: 87,
    probability: '85%',
    timeline: '2-4 weeks',
    recommendation: 'Urgent resurfacing required',
  },
  {
    component: 'Main Street Bridge - Bearings',
    riskScore: 74,
    probability: '71%',
    timeline: '1-2 months',
    recommendation: 'Schedule bearing replacement',
  },
  {
    component: 'Downtown Signal System',
    riskScore: 62,
    probability: '58%',
    timeline: '6-8 weeks',
    recommendation: 'Upgrade timing control software',
  },
  {
    component: 'Park Ave Drainage System',
    riskScore: 55,
    probability: '52%',
    timeline: '2-3 months',
    recommendation: 'Preventive clearing and maintenance',
  },
  {
    component: 'Harbor Bridge Cables',
    riskScore: 48,
    probability: '45%',
    timeline: '3-4 months',
    recommendation: 'Regular inspection schedule',
  },
];

export default function MaintenancePredictions() {
  return (
    <div className="space-y-8">
      {/* Failure Rate Forecast */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Infrastructure Failure Rate Forecast</h3>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={predictionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#25273d" />
              <XAxis dataKey="month" stroke="#94a3b8" />
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
              <Line
                type="monotone"
                dataKey="roadFailure"
                stroke="#ef4444"
                strokeWidth={2}
                name="Road Failures"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="bridgeFailure"
                stroke="#f97316"
                strokeWidth={2}
                name="Bridge Failures"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="signalFailure"
                stroke="#eab308"
                strokeWidth={2}
                name="Signal Failures"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Risk Assessment */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">High-Risk Components</h3>
        <div className="space-y-3">
          {riskComponents.map((item, idx) => (
            <Card key={idx} className="bg-card border-border">
              <CardContent className="p-4">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">{item.component}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.recommendation}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className={`whitespace-nowrap ${
                        item.riskScore >= 80
                          ? 'bg-red-500/10 text-red-400 border-red-500/30'
                          : item.riskScore >= 60
                            ? 'bg-orange-500/10 text-orange-400 border-orange-500/30'
                            : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
                      }`}
                    >
                      Risk {item.riskScore}
                    </Badge>
                  </div>

                  {/* Risk Score Bar */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground">Failure Probability</span>
                      <span className="text-sm font-medium text-foreground">{item.probability}</span>
                    </div>
                    <div className="w-full bg-card rounded-full h-2 border border-border">
                      <div
                        className={`h-full rounded-full transition-all ${
                          item.riskScore >= 80
                            ? 'bg-red-500'
                            : item.riskScore >= 60
                              ? 'bg-orange-500'
                              : 'bg-yellow-500'
                        }`}
                        style={{ width: `${item.probability.slice(0, -1)}%` }}
                      />
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center gap-2 text-sm">
                    <AlertCircle className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">Estimated timeline:</span>
                    <span className="text-foreground font-medium">{item.timeline}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Maintenance Cost Projection */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <TrendingDown className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h4 className="font-medium text-foreground mb-2">Projected Maintenance Savings</h4>
              <p className="text-sm text-muted-foreground mb-4">
                By implementing predictive maintenance across identified high-risk components:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Emergency Repairs Avoided</p>
                  <p className="text-2xl font-bold text-green-400">$3.8M annually</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Downtime Reduction</p>
                  <p className="text-2xl font-bold text-accent">47%</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
