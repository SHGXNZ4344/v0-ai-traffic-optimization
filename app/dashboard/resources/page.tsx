import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, AlertCircle, TrendingUp, Zap } from "lucide-react";
import ResourcesOverview from "@/components/resources-overview";
import RouteOptimization from "@/components/route-optimization";
import TransitAllocation from "@/components/transit-allocation";
import ResourcePerformance from "@/components/resource-performance";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-foreground">Resource Allocation Manager</h1>
          <p className="text-muted-foreground">AI-powered optimization for transit routes, parking, and public transportation</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Fleet Utilization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-primary">87%</div>
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Routes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-secondary">143</div>
                <Zap className="w-5 h-5 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Optimization Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-accent">35%</div>
                <AlertCircle className="w-5 h-5 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Cost Reduction</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-green-400">$12.5M/yr</div>
                <Users className="w-5 h-5 text-green-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-card border-border">
            <TabsTrigger value="overview">Resource Overview</TabsTrigger>
            <TabsTrigger value="routes">Route Optimization</TabsTrigger>
            <TabsTrigger value="transit">Transit Allocation</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Fleet & Infrastructure Resources</CardTitle>
                <CardDescription>Current allocation and utilization metrics across transportation network</CardDescription>
              </CardHeader>
              <CardContent>
                <ResourcesOverview />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="routes" className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Intelligent Route Optimization</CardTitle>
                <CardDescription>AI-driven route planning to reduce travel time, fuel consumption, and emissions</CardDescription>
              </CardHeader>
              <CardContent>
                <RouteOptimization />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transit" className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Transit System Allocation</CardTitle>
                <CardDescription>Bus, subway, and ride-sharing resource distribution based on demand prediction</CardDescription>
              </CardHeader>
              <CardContent>
                <TransitAllocation />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Resource Performance Analysis</CardTitle>
                <CardDescription>Efficiency metrics and utilization trends across all transportation modalities</CardDescription>
              </CardHeader>
              <CardContent>
                <ResourcePerformance />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer Actions */}
        <div className="flex gap-4 justify-between pt-4">
          <Button variant="outline" className="border-border bg-transparent">
            Download Resource Plan
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost">Adjust Allocations</Button>
            <Button className="bg-primary hover:bg-primary/90">
              Run Optimization Algorithm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
