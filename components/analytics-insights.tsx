'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, TrendingDown, Lightbulb, Target } from 'lucide-react';

interface Insight {
  id: string;
  type: 'alert' | 'opportunity' | 'finding';
  title: string;
  description: string;
  impact: string;
  recommendation: string;
  confidence: number;
}

const insights: Insight[] = [
  {
    id: 'INS-001',
    type: 'opportunity',
    title: 'Peak Hour Demand Pattern Shift',
    description: 'AI detected a consistent 15-minute shift in peak traffic earlier on Mondays and Fridays compared to mid-week.',
    impact: 'Potential to reduce Friday peak congestion by 18% with preemptive signal adjustments',
    recommendation: 'Implement day-specific signal timing patterns. Test on Route 42 first with 10-minute early adjustment window.',
    confidence: 92,
  },
  {
    id: 'INS-002',
    type: 'finding',
    title: 'Weather-Traffic Correlation Discovered',
    description: 'Machine learning model identified strong correlation between humidity levels and accident rates in Downtown zone.',
    impact: 'Can prevent 8-12 accidents monthly by adjusting speed limits during high humidity conditions',
    recommendation: 'Integrate real-time humidity data from weather stations. Deploy adaptive speed advisories on major routes.',
    confidence: 87,
  },
  {
    id: 'INS-003',
    type: 'alert',
    title: 'Anomalous Vehicle Clustering Detected',
    description: 'Unusual vehicle concentration detected near Harbor Bridge exits. Not caused by typical congestion patterns.',
    impact: 'Possible incident or event requiring immediate attention. Risk of cascading delays.',
    recommendation: 'Deploy traffic officers for manual inspection. Consider temporary lane closure advisory and rerouting.',
    confidence: 94,
  },
  {
    id: 'INS-004',
    type: 'opportunity',
    title: 'Route Redundancy Optimization',
    description: 'Analysis shows 3 secondary routes used primarily during peak congestion are underutilized during off-peak hours.',
    impact: '25% reduction in maintenance costs for low-traffic periods and improved load distribution',
    recommendation: 'Implement seasonal route scheduling. Redirect maintenance windows to off-peak periods.',
    confidence: 85,
  },
  {
    id: 'INS-005',
    type: 'finding',
    title: 'Ride-Sharing Impact on Main Streets',
    description: 'Data shows ride-sharing vehicles increase local congestion by 8% during their peak hours (10 AM - 2 PM).',
    impact: 'Potential $2.1M in reduced productivity losses if ride-sharing patterns optimized',
    recommendation: 'Establish ride-sharing pickup/drop-off zones away from main arterials. Partner with ride-sharing providers.',
    confidence: 89,
  },
  {
    id: 'INS-006',
    type: 'opportunity',
    title: 'Public Transit Integration Potential',
    description: 'AI analysis suggests optimal bus frequencies can be reduced by 12% with better route planning during off-peak.',
    impact: '$1.8M annual savings in bus operations while maintaining service quality',
    recommendation: 'Implement dynamic scheduling. Deploy rapid-response shuttle service instead of fixed routes.',
    confidence: 88,
  },
];

const typeConfig = {
  alert: {
    icon: AlertCircle,
    color: 'bg-red-500/10 text-red-400 border-red-500/30',
    label: 'Alert',
  },
  opportunity: {
    icon: Lightbulb,
    color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
    label: 'Opportunity',
  },
  finding: {
    icon: Target,
    color: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    label: 'Finding',
  },
};

export default function NetworkInsights() {
  return (
    <div className="space-y-6">
      {/* Insights Cards */}
      <div className="space-y-4">
        {insights.map((insight) => {
          const config = typeConfig[insight.type];
          const Icon = config.icon;

          return (
            <Card key={insight.id} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-lg ${config.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">{insight.title}</h3>
                        <Badge variant="outline" className={`mt-1 text-xs ${config.color}`}>
                          {config.label}
                        </Badge>
                      </div>
                      <Badge
                        variant="outline"
                        className="whitespace-nowrap bg-gray-500/10 text-gray-400 border-gray-500/30"
                      >
                        {insight.confidence}% confidence
                      </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>

                    {/* Impact */}
                    <div className="bg-background rounded-lg p-3 mb-3 border border-border">
                      <div className="flex items-start gap-2">
                        <TrendingDown className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Potential Impact</p>
                          <p className="text-sm font-medium text-foreground">{insight.impact}</p>
                        </div>
                      </div>
                    </div>

                    {/* Recommendation */}
                    <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
                      <p className="text-xs text-muted-foreground mb-1">AI Recommendation</p>
                      <p className="text-sm text-foreground">{insight.recommendation}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground mb-2">High Confidence Insights</p>
            <p className="text-3xl font-bold text-primary">4 / 6</p>
            <p className="text-xs text-muted-foreground mt-2">Average: 89.2%</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground mb-2">Estimated Monthly Savings</p>
            <p className="text-3xl font-bold text-green-400">$1.56M</p>
            <p className="text-xs text-muted-foreground mt-2">If all recommendations implemented</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground mb-2">Network Optimization Score</p>
            <p className="text-3xl font-bold text-accent">8.7/10</p>
            <p className="text-xs text-muted-foreground mt-2">Room for 1.3 points improvement</p>
          </CardContent>
        </Card>
      </div>

      {/* AI Model Information */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <h4 className="font-semibold text-foreground mb-3">AI Model & Methodology</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              These insights are generated using an ensemble of machine learning models including:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Time series forecasting models for traffic pattern prediction</li>
              <li>Anomaly detection algorithms for unusual network behavior identification</li>
              <li>Correlation analysis for uncovering hidden relationships in traffic data</li>
              <li>Causality inference models using domain knowledge and Bayesian networks</li>
              <li>Explainable AI (XAI) modules providing detailed reasoning for each insight</li>
            </ul>
            <p className="mt-3">
              All recommendations undergo multi-stage validation using historical data and synthetic simulations before
              deployment. Insights are continuously refined as new data becomes available.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
