'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Activity } from 'lucide-react';

interface Signal {
  id: string;
  location: string;
  greenTime: number;
  redTime: number;
  efficiency: number;
  status: 'optimal' | 'warning' | 'critical';
}

const signals: Signal[] = [
  { id: 'INT-001', location: 'Main St & 5th Ave', greenTime: 45, redTime: 30, efficiency: 94, status: 'optimal' },
  { id: 'INT-002', location: 'Broadway & Central', greenTime: 52, redTime: 28, efficiency: 87, status: 'optimal' },
  { id: 'INT-003', location: 'Park Ave & 42nd St', greenTime: 38, redTime: 35, efficiency: 72, status: 'warning' },
  { id: 'INT-004', location: ' 5th Ave & Madison', greenTime: 48, redTime: 32, efficiency: 91, status: 'optimal' },
];

export default function SignalControl() {
  const [selectedSignal, setSelectedSignal] = useState<Signal>(signals[0]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Signal List */}
      <div className="md:col-span-1 space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Active Signals</h3>
        <div className="space-y-2">
          {signals.map((signal) => (
            <Card
              key={signal.id}
              className={`cursor-pointer transition-colors ${
                selectedSignal.id === signal.id
                  ? 'bg-primary/20 border-primary'
                  : 'bg-card border-border hover:bg-card/80'
              }`}
              onClick={() => setSelectedSignal(signal)}
            >
              <CardContent className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium text-foreground">{signal.id}</span>
                  </div>
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      signal.status === 'optimal'
                        ? 'bg-green-500/10 text-green-400 border-green-500/30'
                        : signal.status === 'warning'
                          ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
                          : 'bg-red-500/10 text-red-400 border-red-500/30'
                    }`}
                  >
                    {signal.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{signal.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Control Panel */}
      <div className="md:col-span-2 space-y-6">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {selectedSignal.location}
                </h3>
                <p className="text-sm text-muted-foreground">{selectedSignal.id}</p>
              </div>

              {/* Efficiency Score */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-foreground">Efficiency Score</label>
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-primary" />
                    <span className="text-2xl font-bold text-primary">{selectedSignal.efficiency}%</span>
                  </div>
                </div>
                <div className="w-full bg-card rounded-full h-2 border border-border">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-full rounded-full transition-all"
                    style={{ width: `${selectedSignal.efficiency}%` }}
                  />
                </div>
              </div>

              {/* Green Time Control */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-foreground">Green Light Duration (s)</label>
                  <span className="text-xl font-bold text-green-400">{selectedSignal.greenTime}s</span>
                </div>
                <Slider
                  value={[selectedSignal.greenTime]}
                  onValueChange={() => {}}
                  min={20}
                  max={60}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Red Time Control */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium text-foreground">Red Light Duration (s)</label>
                  <span className="text-xl font-bold text-red-400">{selectedSignal.redTime}s</span>
                </div>
                <Slider
                  value={[selectedSignal.redTime]}
                  onValueChange={() => {}}
                  min={15}
                  max={45}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* AI Recommendation */}
              <div className="border-t border-border pt-4">
                <p className="text-sm text-muted-foreground mb-2">AI Recommendation:</p>
                <p className="text-sm text-accent font-medium">
                  Increase green light duration by 3s to accommodate peak hour traffic surge predicted in 15 minutes
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
