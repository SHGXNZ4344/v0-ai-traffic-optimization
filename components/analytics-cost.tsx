'use client';

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp } from 'lucide-react';

const roiData = [
  { month: 'Month 1', investment: 2500, savings: 180, cumulative: -2320 },
  { month: 'Month 3', investment: 2500, savings: 520, cumulative: -1980 },
  { month: 'Month 6', investment: 2500, savings: 1050, cumulative: -1450 },
  { month: 'Month 9', investment: 2500, savings: 1580, cumulative: -920 },
  { month: 'Month 12', investment: 2500, savings: 2150, cumulative: 230 },
  { month: 'Month 18', investment: 2500, savings: 2980, cumulative: 1480 },
  { month: 'Month 24', investment: 2500, savings: 3850, cumulative: 2850 },
];

const costBreakdown = [
  { category: 'Fuel Savings', value: 4200, percentage: 34 },
  { category: 'Labor Efficiency', value: 3100, percentage: 25 },
  { category: 'Maintenance Reduction', value: 2800, percentage: 23 },
  { category: 'Emergency Response', value: 1900, percentage: 15 },
  { category: 'Other', value: 200, percentage: 3 },
];

const costAnalysis = [
  {
    category: 'Operational Costs',
    annual_before: 28500,
    annual_after: 18700,
    saving: 9800,
    percentage: '34%',
  },
  {
    category: 'Infrastructure Maintenance',
    annual_before: 6200,
    annual_after: 4100,
    saving: 2100,
    percentage: '34%',
  },
  {
    category: 'Emergency Repairs',
    annual_before: 3400,
    annual_after: 2100,
    saving: 1300,
    percentage: '38%',
  },
  {
    category: 'Environmental Compliance',
    annual_before: 1800,
    annual_after: 900,
    saving: 900,
    percentage: '50%',
  },
  {
    category: 'Total Annual Impact',
    annual_before: 39900,
    annual_after: 25800,
    saving: 14100,
    percentage: '35%',
  },
];

export default function CostBenefitAnalytics() {
  return (
    <div className="space-y-8">
      {/* ROI Trend */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Return on Investment (ROI) Projection</h3>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={roiData}>
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
                dataKey="cumulative"
                stroke="#10b981"
                strokeWidth={3}
                name="Cumulative ROI ($K)"
                dot={true}
              />
              <Line
                type="monotone"
                dataKey="savings"
                stroke="#3b82f6"
                strokeWidth={2}
                name="Monthly Savings ($K)"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Breakeven point reached at Month 12 with cumulative savings of $230K. Projected 5-year ROI: $68.2M
        </p>
      </div>

      {/* Cost Breakdown */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Annual Savings Breakdown ($12.4M Total)</h3>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={costBreakdown}>
              <CartesianGrid strokeDasharray="3 3" stroke="#25273d" />
              <XAxis dataKey="category" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172a',
                  border: '1px solid #3b82f6',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: '#ffffff' }}
              />
              <Bar dataKey="value" fill="#10b981" name="Annual Savings ($K)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Cost Analysis */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">Cost-Benefit Detailed Analysis</h3>
        <div className="space-y-3">
          {costAnalysis.map((item, idx) => (
            <Card key={idx} className={`bg-card border-border ${idx === costAnalysis.length - 1 ? 'border-primary/50' : ''}`}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <h4 className={`font-medium ${idx === costAnalysis.length - 1 ? 'text-primary text-lg' : 'text-foreground'}`}>
                    {item.category}
                  </h4>
                  <Badge
                    variant="outline"
                    className={`whitespace-nowrap ${idx === costAnalysis.length - 1 ? 'bg-green-500/10 text-green-400 border-green-500/30 text-lg' : 'bg-blue-500/10 text-blue-400 border-blue-500/30'}`}
                  >
                    {item.percentage} savings
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Before</p>
                    <p className={`font-bold ${idx === costAnalysis.length - 1 ? 'text-lg text-foreground' : 'text-foreground'}`}>
                      ${item.annual_before}K
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">After</p>
                    <p className={`font-bold ${idx === costAnalysis.length - 1 ? 'text-lg text-green-400' : 'text-foreground'}`}>
                      ${item.annual_after}K
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Annual Saving</p>
                    <p className={`font-bold ${idx === costAnalysis.length - 1 ? 'text-lg text-accent' : 'text-accent'}`}>
                      ${item.saving}K
                    </p>
                  </div>
                  <div className="flex items-end">
                    <button className="text-primary hover:text-primary/80 text-sm font-medium">
                      Details →
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-3 w-full bg-card rounded-full h-2 border border-border">
                  <div
                    className="bg-gradient-to-r from-green-400 to-emerald-500 h-full rounded-full"
                    style={{ width: item.percentage }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* ROI Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Payback Period</p>
                <p className="text-3xl font-bold text-primary">12 months</p>
                <p className="text-xs text-muted-foreground mt-1">From deployment date</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">5-Year ROI</p>
                <p className="text-3xl font-bold text-green-400">$68.2M</p>
                <p className="text-xs text-muted-foreground mt-1">at current growth rate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Annual Value</p>
                <p className="text-3xl font-bold text-secondary">$18.7M</p>
                <p className="text-xs text-muted-foreground mt-1">combined savings</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
