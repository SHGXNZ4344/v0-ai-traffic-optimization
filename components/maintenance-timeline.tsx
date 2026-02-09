'use client';

import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface TimelineItem {
  id: string;
  date: string;
  status: 'completed' | 'in-progress' | 'scheduled';
  title: string;
  location: string;
  description: string;
  duration: string;
  crew: number;
}

const timeline: TimelineItem[] = [
  {
    id: 'TL-001',
    date: 'Jan 15, 2024',
    status: 'completed',
    title: 'Broadway Avenue Pothole Repair',
    location: 'Broadway & 42nd St',
    description: 'Fixed 8 major potholes and applied sealant treatment',
    duration: '2 days',
    crew: 12,
  },
  {
    id: 'TL-002',
    date: 'Jan 20, 2024',
    status: 'completed',
    title: 'Traffic Signal Maintenance',
    location: 'Park Ave - Downtown Section',
    description: 'Calibrated timing systems and replaced worn sensors',
    duration: '1 day',
    crew: 6,
  },
  {
    id: 'TL-003',
    date: 'Feb 5, 2024',
    status: 'in-progress',
    title: 'Main Street Bridge Inspection',
    location: 'Main St Bridge over River',
    description: 'Comprehensive structural inspection and rust treatment',
    duration: '5 days',
    crew: 18,
  },
  {
    id: 'TL-004',
    date: 'Feb 14, 2024',
    status: 'scheduled',
    title: 'Highway 101 Resurfacing',
    location: 'Highway 101 - Mile 42-45',
    description: 'Complete resurfacing of degraded pavement section',
    duration: '7 days',
    crew: 25,
  },
  {
    id: 'TL-005',
    date: 'Mar 1, 2024',
    status: 'scheduled',
    title: '5th Avenue Drainage System Upgrade',
    location: '5th Avenue - Downtown',
    description: 'Replace outdated drainage pipes and add capacity',
    duration: '4 days',
    crew: 15,
  },
  {
    id: 'TL-006',
    date: 'Mar 15, 2024',
    status: 'scheduled',
    title: 'Harbor Bridge Cable Tension Test',
    location: 'Harbor Bridge',
    description: 'Load testing and cable tension adjustment',
    duration: '3 days',
    crew: 20,
  },
];

export default function MaintenanceTimeline() {
  return (
    <div className="space-y-1">
      {timeline.map((item, idx) => (
        <div key={item.id} className="relative">
          {/* Timeline Line */}
          {idx < timeline.length - 1 && (
            <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-border" />
          )}

          {/* Timeline Item */}
          <div className="flex gap-4 pb-8">
            {/* Status Indicator */}
            <div className="flex-shrink-0">
              <div className="relative flex h-12 w-12 items-center justify-center">
                {item.status === 'completed' ? (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 border border-green-500/50">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                ) : item.status === 'in-progress' ? (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 border border-blue-500/50 animate-pulse">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card border-2 border-border">
                    <AlertCircle className="w-6 h-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 bg-card border border-border rounded-lg p-4">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{item.date}</p>
                  <h4 className="font-semibold text-foreground text-lg">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.location}</p>
                </div>
                <Badge
                  variant="outline"
                  className={`whitespace-nowrap ${
                    item.status === 'completed'
                      ? 'bg-green-500/10 text-green-400 border-green-500/30'
                      : item.status === 'in-progress'
                        ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                        : 'bg-gray-500/10 text-gray-400 border-gray-500/30'
                  }`}
                >
                  {item.status === 'completed' ? 'Completed' : item.status === 'in-progress' ? 'In Progress' : 'Scheduled'}
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground mb-3">{item.description}</p>

              {/* Details */}
              <div className="flex gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="text-foreground font-medium">{item.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-muted-foreground">Crew Size:</span>
                  <span className="text-foreground font-medium">{item.crew} workers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
