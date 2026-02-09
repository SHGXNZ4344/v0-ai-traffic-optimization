'use client';

import { AlertCircle, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface MaintenanceItem {
  id: string;
  type: 'road' | 'bridge' | 'signal' | 'sensor';
  location: string;
  condition: 'critical' | 'poor' | 'fair' | 'good';
  issue: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  lastMaintenance: string;
  nextMaintenance: string;
  estimatedCost: string;
}

const maintenanceItems: MaintenanceItem[] = [
  {
    id: 'MNT-001',
    type: 'road',
    location: 'Highway 101 - Mile 42-45',
    condition: 'critical',
    issue: 'Severe pothole formation and asphalt cracking',
    severity: 'critical',
    lastMaintenance: '18 months ago',
    nextMaintenance: 'Immediate',
    estimatedCost: '$185,000',
  },
  {
    id: 'MNT-002',
    type: 'bridge',
    location: 'Main Street Bridge over River',
    condition: 'poor',
    issue: 'Rust detected on steel support beams. Inspection recommended.',
    severity: 'high',
    lastMaintenance: '2 years ago',
    nextMaintenance: 'Within 2 weeks',
    estimatedCost: '$450,000',
  },
  {
    id: 'MNT-003',
    type: 'signal',
    location: 'Broadway & Central Park Ave',
    condition: 'fair',
    issue: 'Signal timing inconsistency detected by sensors',
    severity: 'medium',
    lastMaintenance: '6 months ago',
    nextMaintenance: 'Within 1 month',
    estimatedCost: '$12,500',
  },
  {
    id: 'MNT-004',
    type: 'sensor',
    location: 'Park Ave - Traffic sensor cluster',
    condition: 'good',
    issue: 'Calibration drift detected. Minor adjustment needed.',
    severity: 'low',
    lastMaintenance: '3 months ago',
    nextMaintenance: 'Within 6 months',
    estimatedCost: '$2,800',
  },
  {
    id: 'MNT-005',
    type: 'road',
    location: '5th Avenue - Downtown Section',
    condition: 'poor',
    issue: 'Surface degradation and water infiltration issues',
    severity: 'high',
    lastMaintenance: '14 months ago',
    nextMaintenance: 'Within 3 weeks',
    estimatedCost: '$220,000',
  },
];

const typeIcons = {
  road: '🛣️',
  bridge: '🌉',
  signal: '🚦',
  sensor: '📡',
};

const severityColors = {
  critical: 'bg-red-500/10 text-red-400 border-red-500/30',
  high: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  medium: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  low: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
};

export default function MaintenanceList() {
  return (
    <div className="space-y-3">
      {maintenanceItems.map((item) => (
        <Card key={item.id} className={`border-l-4 bg-card cursor-pointer transition-colors hover:bg-card/80 ${
          item.condition === 'critical'
            ? 'border-l-red-500'
            : item.condition === 'poor'
              ? 'border-l-orange-500'
              : item.condition === 'fair'
                ? 'border-l-yellow-500'
                : 'border-l-green-500'
        }`}>
          <CardContent className="p-4">
            <div className="flex gap-4">
              {/* Type Icon */}
              <div className="flex-shrink-0 text-2xl">
                {typeIcons[item.type]}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h4 className="font-medium text-foreground">{item.location}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.issue}</p>
                  </div>
                  <Badge variant="outline" className={`text-xs px-2 py-0.5 whitespace-nowrap ${severityColors[item.severity]}`}>
                    {item.severity}
                  </Badge>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                  <div>
                    <p className="text-muted-foreground">Condition</p>
                    <p className="text-foreground font-medium capitalize">{item.condition}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Last Maintenance</p>
                    <p className="text-foreground font-medium">{item.lastMaintenance}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Next Scheduled</p>
                    <p className="text-foreground font-medium">{item.nextMaintenance}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Est. Cost</p>
                    <p className="text-primary font-medium">{item.estimatedCost}</p>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="flex-shrink-0 flex items-center">
                <button className="text-primary hover:text-primary/80 text-sm font-medium">
                  Details →
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
