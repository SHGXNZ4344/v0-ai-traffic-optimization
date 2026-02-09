import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, TrendingDown, MapPin, Clock, Activity } from "lucide-react";
import TrafficMap from "@/components/traffic-map";
import TrafficMetrics from "@/components/traffic-metrics";
import SignalControl from "@/components/signal-control";
import AnomalyAlerts from "@/components/anomaly-alerts";

export default function TrafficControlDashboard() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-foreground">Traffic Control Hub</h1>
          <p className="text-muted-foreground">Real-time network monitoring and AI-driven signal optimization</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Network Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-primary">98%</div>
                <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                  Optimal
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Congestion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-accent">23%</div>
                <TrendingDown className="w-5 h-5 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Intersections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-secondary">147</div>
                <Activity className="w-5 h-5 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Anomalies Detected</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-destructive">5</div>
                <AlertCircle className="w-5 h-5 text-destructive" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="map" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-card border-border">
            <TabsTrigger value="map">Network Map</TabsTrigger>
            <TabsTrigger value="signals">Signal Control</TabsTrigger>
            <TabsTrigger value="metrics">Live Metrics</TabsTrigger>
            <TabsTrigger value="anomalies">Anomalies</TabsTrigger>
          </TabsList>

          <TabsContent value="map" className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Real-Time Traffic Network</CardTitle>
                <CardDescription>Live visualization of urban traffic flow and network health</CardDescription>
              </CardHeader>
              <CardContent>
                <TrafficMap />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="signals" className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>AI Signal Optimization</CardTitle>
                <CardDescription>Adaptive signal timing driven by machine learning predictions</CardDescription>
              </CardHeader>
              <CardContent>
                <SignalControl />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="metrics" className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Live Traffic Metrics</CardTitle>
                <CardDescription>Real-time data on network performance and flow optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <TrafficMetrics />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="anomalies" className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Anomaly Detection</CardTitle>
                <CardDescription>AI-identified irregular patterns and potential bottlenecks</CardDescription>
              </CardHeader>
              <CardContent>
                <AnomalyAlerts />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer Navigation */}
        <div className="flex gap-4 justify-between pt-4">
          <Button variant="outline" className="border-border bg-transparent">
            Export Report
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost">Settings</Button>
            <Button className="bg-primary hover:bg-primary/90">
              View Advanced Analytics
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
