import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, BarChart3, PiIcon as PieIcon, Activity } from "lucide-react";
import TrafficAnalytics from "@/components/analytics-traffic";
import EmissionsAnalytics from "@/components/analytics-emissions";
import CostBenefitAnalytics from "@/components/analytics-cost";
import NetworkInsights from "@/components/analytics-insights";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-foreground">Analytics & Insights Hub</h1>
          <p className="text-muted-foreground">Comprehensive data visualization and performance analysis of the AI-powered traffic optimization system</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">System Uptime</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-green-400">99.8%</div>
                <Activity className="w-5 h-5 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Data Points Processed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-primary">2.4B</div>
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">AI Prediction Accuracy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-accent">94.3%</div>
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Impact Saved</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-secondary">$18.7M</div>
                <PieIcon className="w-5 h-5 text-secondary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="traffic" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-card border-border">
            <TabsTrigger value="traffic">Traffic Patterns</TabsTrigger>
            <TabsTrigger value="emissions">Emissions Analysis</TabsTrigger>
            <TabsTrigger value="costbenefit">Cost-Benefit</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="traffic" className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Traffic Pattern Analytics</CardTitle>
                <CardDescription>Temporal and spatial analysis of traffic flow patterns and congestion trends</CardDescription>
              </CardHeader>
              <CardContent>
                <TrafficAnalytics />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="emissions" className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Environmental Impact Analysis</CardTitle>
                <CardDescription>CO2 emissions reduction and sustainability metrics across the network</CardDescription>
              </CardHeader>
              <CardContent>
                <EmissionsAnalytics />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="costbenefit" className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Cost-Benefit Analysis</CardTitle>
                <CardDescription>Financial impact and ROI calculations for AI optimization implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <CostBenefitAnalytics />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>AI-Generated Insights & Recommendations</CardTitle>
                <CardDescription>Machine learning derived patterns and actionable business intelligence</CardDescription>
              </CardHeader>
              <CardContent>
                <NetworkInsights />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer Actions */}
        <div className="flex gap-4 justify-between pt-4">
          <Button variant="outline" className="border-border bg-transparent">
            Export Full Report
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost">Configure Dashboards</Button>
            <Button className="bg-primary hover:bg-primary/90">
              Generate Custom Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
