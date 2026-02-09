import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, CheckCircle, Clock, AlertTriangle, Wrench } from "lucide-react";
import MaintenanceList from "@/components/maintenance-list";
import MaintenanceMap from "@/components/maintenance-map";
import MaintenancePredictions from "@/components/maintenance-predictions";
import MaintenanceTimeline from "@/components/maintenance-timeline";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-foreground">Infrastructure Maintenance</h1>
          <p className="text-muted-foreground">Predictive maintenance and condition monitoring for urban infrastructure</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Critical Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-destructive">8</div>
                <AlertCircle className="w-5 h-5 text-destructive" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Scheduled Repairs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-accent">23</div>
                <Clock className="w-5 h-5 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Maintenance Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-primary">94%</div>
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Cost Savings (Preventive)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-secondary">$2.4M</div>
                <Wrench className="w-5 h-5 text-secondary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="list" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-card border-border">
            <TabsTrigger value="list">Conditions</TabsTrigger>
            <TabsTrigger value="map">Location Map</TabsTrigger>
            <TabsTrigger value="predictions">Predictions</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>

          <TabsContent value="list" className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Infrastructure Condition Report</CardTitle>
                <CardDescription>Current status of roads, bridges, and traffic signals across the network</CardDescription>
              </CardHeader>
              <CardContent>
                <MaintenanceList />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="map" className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Maintenance Hotspots</CardTitle>
                <CardDescription>Geographic distribution of infrastructure issues and maintenance priorities</CardDescription>
              </CardHeader>
              <CardContent>
                <MaintenanceMap />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="predictions" className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Predictive Maintenance Insights</CardTitle>
                <CardDescription>AI-powered predictions for infrastructure failure probability and maintenance needs</CardDescription>
              </CardHeader>
              <CardContent>
                <MaintenancePredictions />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Maintenance Schedule</CardTitle>
                <CardDescription>Timeline of completed, ongoing, and scheduled maintenance activities</CardDescription>
              </CardHeader>
              <CardContent>
                <MaintenanceTimeline />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer Actions */}
        <div className="flex gap-4 justify-between pt-4">
          <Button variant="outline" className="border-border bg-transparent">
            Export Maintenance Report
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost">Schedule Inspection</Button>
            <Button className="bg-primary hover:bg-primary/90">
              Request Emergency Repair
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
