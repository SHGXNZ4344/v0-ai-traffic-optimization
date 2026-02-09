'use client';

import { AlertCircle, AlertTriangle, TrendingUp, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface Anomaly {
  id: string;
  type: 'critical' | 'warning' | 'info';
  location: string;
  description: string;
  time: string;
  confidence: number;
}

const anomalies: Anomaly[] = [
  {
    id: 'ANM-001',
    type: 'critical',
    location: 'Broadway & 34th St',
    description: 'Unexpected traffic surge detected. 40% above predicted levels.',
    time: '2 minutes ago',
    confidence: 94,
  },
  {
    id: 'ANM-002',
    type: 'warning',
    location: 'Park Ave & Madison',
    description: 'Signal malfunction detected. Green light stuck for 8 seconds beyond normal duration.',
    time: '5 minutes ago',
    confidence: 87,
  },
  {
    id: 'ANM-003',
    type: 'info',
    location: '5th Ave & Central Park',
    description: 'Unusual pedestrian activity. Recommend extending crossing time by 5 seconds.',
    time: '12 minutes ago',
    confidence: 72,
  },
  {
    id: 'ANM-004',
    type: 'warning',
    location: 'Main St & 5th Ave',
    description: 'Emission levels 25% above target. Recommending speed reduction protocol.',
    time: '18 minutes ago',
    confidence: 81,
  },
  {
    id: 'ANM-005',
    type: 'critical',
    location: 'Grand Ave & Park',
    description: 'Congestion cascade detected. Multiple intersections experiencing gridlock.',
    time: '25 minutes ago',
    confidence: 96,
  },
];

export default function AnomalyAlerts() {
  return (
    <div className="space-y-4">
      {/* Filter Bar */}
      <div className="flex gap-2 flex-wrap">
        <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">
          All Anomalies
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">
          Critical Only
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-primary/20">
          Last 24 Hours
        </Badge>
      </div>

      {/* Anomaly List */}
      <div className="space-y-3">
        {anomalies.map((anomaly) => (
          <Card
            key={anomaly.id}
            className={`border-l-4 cursor-pointer transition-colors hover:bg-card/80 ${
              anomaly.type === 'critical'
                ? 'border-l-red-500 bg-red-500/5'
                : anomaly.type === 'warning'
                  ? 'border-l-yellow-500 bg-yellow-500/5'
                  : 'border-l-blue-500 bg-blue-500/5'
            }`}
          >
            <CardContent className="p-4">
              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  {anomaly.type === 'critical' ? (
                    <AlertCircle className="w-6 h-6 text-red-500" />
                  ) : anomaly.type === 'warning' ? (
                    <AlertTriangle className="w-6 h-6 text-yellow-500" />
                  ) : (
                    <TrendingUp className="w-6 h-6 text-blue-500" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h4 className="font-medium text-foreground">{anomaly.location}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{anomaly.description}</p>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {anomaly.time}
                    </div>
                    <div>
                      <Badge
                        variant="outline"
                        className={`text-xs px-2 py-0.5 ${
                          anomaly.confidence >= 90
                            ? 'bg-red-500/10 text-red-400 border-red-500/30'
                            : anomaly.confidence >= 80
                              ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
                              : 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                        }`}
                      >
                        {anomaly.confidence}% confidence
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Action */}
                <div className="flex-shrink-0 flex items-center">
                  <button className="text-primary hover:text-primary/80 text-sm font-medium">
                    View Details →
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary */}
      <Card className="bg-card border-border mt-6">
        <CardContent className="p-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-red-500">2</p>
              <p className="text-sm text-muted-foreground">Critical</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-yellow-500">2</p>
              <p className="text-sm text-muted-foreground">Warnings</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-500">1</p>
              <p className="text-sm text-muted-foreground">Info</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
