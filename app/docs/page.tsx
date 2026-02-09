import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Code, Zap, Users, Database } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-foreground mb-4">Documentation & Research</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive guide to the AI-enabled Digital Twin Network (DTN) for intelligent traffic flow optimization
          </p>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-card border-border hover:bg-card/80 cursor-pointer transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <CardTitle className="text-sm">Getting Started</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Learn the basics of the DTN system and how to navigate the platform</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:bg-card/80 cursor-pointer transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <Code className="w-5 h-5 text-accent" />
                <CardTitle className="text-sm">Technical Architecture</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Deep dive into system architecture, APIs, and data models</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:bg-card/80 cursor-pointer transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-5 h-5 text-secondary" />
                <CardTitle className="text-sm">Research Papers</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Academic research, findings, and methodologies behind DTN</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabbed Documentation */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-card border-border">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="api">API Reference</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>System Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">What is Digital Twin Network (DTN)?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    The Digital Twin Network is an AI-powered virtual representation of the physical urban traffic infrastructure. It enables real-time monitoring, predictive analytics, and intelligent optimization of traffic flow across the entire network.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h4 className="font-medium text-foreground mb-2">Physical Layer</h4>
                    <p className="text-sm text-muted-foreground">
                      Real sensors, traffic signals, cameras, and IoT devices collecting live data from the urban network
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h4 className="font-medium text-foreground mb-2">Digital Layer</h4>
                    <p className="text-sm text-muted-foreground">
                      Virtual replicas of the physical network running continuous simulations and predictions
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h4 className="font-medium text-foreground mb-2">Service Layer</h4>
                    <p className="text-sm text-muted-foreground">
                      AI/ML models generating insights and decisions that are communicated back to physical infrastructure
                    </p>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <h3 className="font-semibold text-foreground mb-3">Key Features</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Real-time traffic monitoring and anomaly detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>AI-powered predictive analytics for 1-4 hour forecasting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Adaptive signal timing optimization reducing congestion by 35%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Predictive maintenance for infrastructure reducing costs by 34%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Explainable AI (XAI) for transparent decision-making</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Architecture Tab */}
          <TabsContent value="architecture" className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>System Architecture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Three-Layer Architecture</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-l-primary pl-4">
                      <h4 className="font-medium text-foreground mb-1">1. Physical Network Layer</h4>
                      <p className="text-sm text-muted-foreground">
                        Connected IoT sensors, traffic cameras, lane detectors, and signal controllers across the urban network. Data collected at 500ms intervals.
                      </p>
                    </div>
                    <div className="border-l-4 border-l-accent pl-4">
                      <h4 className="font-medium text-foreground mb-1">2. Digital Twin Layer</h4>
                      <p className="text-sm text-muted-foreground">
                        Cloud-based virtual simulation engine running continuous replicas of the physical network. Executes predictive scenarios in real-time.
                      </p>
                    </div>
                    <div className="border-l-4 border-l-secondary pl-4">
                      <h4 className="font-medium text-foreground mb-1">3. Service Layer</h4>
                      <p className="text-sm text-muted-foreground">
                        AI/ML models, XAI modules, and decision support systems. Generates actionable intelligence for traffic optimization and maintenance planning.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-background rounded-lg p-4 border border-border">
                  <h4 className="font-medium text-foreground mb-3">Data Flow</h4>
                  <div className="space-y-2 text-sm text-muted-foreground font-mono">
                    <p>Physical Sensors → Data Ingestion Pipeline</p>
                    <p>→ Stream Processing (Kafka/Spark)</p>
                    <p>→ Digital Twin Simulation Engine</p>
                    <p>→ ML/AI Models (Prediction, Optimization)</p>
                    <p>→ XAI Explanation Module</p>
                    <p>→ Decision Support System</p>
                    <p>→ Control Commands to Physical Infrastructure</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* API Reference Tab */}
          <TabsContent value="api" className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>API Reference</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-foreground">GET /api/traffic/current-state</h4>
                      <Badge>Public</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Retrieve current traffic conditions across all intersections</p>
                    <div className="bg-card p-2 rounded text-xs font-mono text-muted-foreground">
                      Returns: {`{ congestion: number, speed: number, incidents: Array }`}
                    </div>
                  </div>

                  <div className="bg-background rounded-lg p-4 border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-foreground">POST /api/traffic/predict</h4>
                      <Badge>Public</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Get AI traffic predictions for specified time window</p>
                    <div className="bg-card p-2 rounded text-xs font-mono text-muted-foreground">
                      Params: horizon_minutes, zone_id | Returns: {`{ predictions: [], confidence: number }`}
                    </div>
                  </div>

                  <div className="bg-background rounded-lg p-4 border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-foreground">GET /api/maintenance/recommendations</h4>
                      <Badge>Admin</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Get predictive maintenance recommendations</p>
                    <div className="bg-card p-2 rounded text-xs font-mono text-muted-foreground">
                      Returns: {`{ recommendations: [], risk_scores: [], timeline: string }`}
                    </div>
                  </div>

                  <div className="bg-background rounded-lg p-4 border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-foreground">POST /api/signals/optimize</h4>
                      <Badge>Admin</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Request optimized signal timing for intersection</p>
                    <div className="bg-card p-2 rounded text-xs font-mono text-muted-foreground">
                      Params: intersection_id, constraints | Returns: {`{ timing: {}, explanation: string }`}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Research Tab */}
          <TabsContent value="research" className="space-y-4">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Research & Publications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h4 className="font-medium text-foreground mb-2">AI-Enabled Urban Mobility: A Digital Twin Approach</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Comprehensive research paper detailing the Digital Twin Network methodology, implementation, and results from 18-month pilot in major metropolitan area.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
                        2024
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/30">
                        Published
                      </Badge>
                    </div>
                  </div>

                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h4 className="font-medium text-foreground mb-2">Explainable AI for Traffic Optimization: XAI Module Design</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Research on interpretable machine learning methods for traffic signal optimization. Demonstrates 94.3% prediction accuracy with full transparency.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
                        2024
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/30">
                        Published
                      </Badge>
                    </div>
                  </div>

                  <div className="bg-background rounded-lg p-4 border border-border">
                    <h4 className="font-medium text-foreground mb-2">Sustainability Impact of Intelligent Transportation Systems</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Study on environmental benefits of AI-driven traffic optimization. Documents 35% CO2 reduction and ecosystem impact analysis.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
                        2023
                      </Badge>
                      <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/30">
                        Published
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* FAQ Section */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-b border-border pb-4">
              <h4 className="font-medium text-foreground mb-1">How does the Digital Twin ensure data privacy?</h4>
              <p className="text-sm text-muted-foreground">
                All personally identifiable information is anonymized at the edge before transmission. Data aggregation occurs at the zone level with encryption in transit and at rest.
              </p>
            </div>
            <div className="border-b border-border pb-4">
              <h4 className="font-medium text-foreground mb-1">What is the latency from sensor to decision?</h4>
              <p className="text-sm text-muted-foreground">
                End-to-end latency is typically 800-1200ms from physical sensor to control command execution, within the requirements for traffic signal optimization.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Can the system handle extreme weather conditions?</h4>
              <p className="text-sm text-muted-foreground">
                Yes. The DTN includes weather-specific models and switches to conservative signal timing during adverse conditions. 99.8% system uptime achieved across all weather scenarios.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
