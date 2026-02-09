'use client';

import React from "react"

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { MessageCircle, Send, CheckCircle } from "lucide-react";

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    satisfaction: '',
    features: [] as string[],
    improvements: '',
    likelyRecommend: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const toggleFeature = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <MessageCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">User Feedback & Suggestions</h1>
          <p className="text-muted-foreground">
            Help us improve the AI-Powered Traffic Optimization Platform with your valuable feedback
          </p>
        </div>

        {/* Feedback Form */}
        {!submitted ? (
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Share Your Experience</CardTitle>
              <CardDescription>
                Your feedback helps us enhance the platform and better serve your needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Personal Information</h3>
                  
                  <div>
                    <Label htmlFor="name" className="text-sm text-foreground mb-2 block">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-background border-border"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm text-foreground mb-2 block">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-background border-border"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="role" className="text-sm text-foreground mb-2 block">Role/Organization</Label>
                    <Input
                      id="role"
                      placeholder="e.g., City Planner, Traffic Engineer, Student"
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                {/* Satisfaction */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">How satisfied are you with the platform? *</h3>
                  <RadioGroup value={formData.satisfaction} onValueChange={(val) => setFormData({...formData, satisfaction: val})}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="very-satisfied" id="very-satisfied" />
                      <Label htmlFor="very-satisfied" className="text-sm text-foreground cursor-pointer">Very Satisfied</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="satisfied" id="satisfied" />
                      <Label htmlFor="satisfied" className="text-sm text-foreground cursor-pointer">Satisfied</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="neutral" id="neutral" />
                      <Label htmlFor="neutral" className="text-sm text-foreground cursor-pointer">Neutral</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dissatisfied" id="dissatisfied" />
                      <Label htmlFor="dissatisfied" className="text-sm text-foreground cursor-pointer">Dissatisfied</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Favorite Features */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Which features do you find most valuable? (Select all that apply)</h3>
                  <div className="space-y-3">
                    {[
                      'Real-time Traffic Monitoring',
                      'AI Predictions & Forecasting',
                      'Signal Optimization',
                      'Infrastructure Maintenance Planning',
                      'Resource Allocation Manager',
                      'Analytics & Insights Hub',
                      'Cost-Benefit Analysis',
                      'Explainable AI (XAI)',
                    ].map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox
                          id={feature}
                          checked={formData.features.includes(feature)}
                          onCheckedChange={() => toggleFeature(feature)}
                        />
                        <Label htmlFor={feature} className="text-sm text-foreground cursor-pointer">{feature}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Improvements */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">What improvements would you suggest?</h3>
                  <Textarea
                    placeholder="Share your suggestions, feature requests, or improvements you'd like to see..."
                    value={formData.improvements}
                    onChange={(e) => setFormData({...formData, improvements: e.target.value})}
                    className="bg-background border-border min-h-[120px]"
                  />
                </div>

                {/* Recommendation */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">How likely are you to recommend this platform? *</h3>
                  <RadioGroup value={formData.likelyRecommend} onValueChange={(val) => setFormData({...formData, likelyRecommend: val})}>
                    <div className="space-y-2">
                      {['Very Likely', 'Likely', 'Neutral', 'Unlikely'].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option.toLowerCase()} id={option.toLowerCase()} />
                          <Label htmlFor={option.toLowerCase()} className="text-sm text-foreground cursor-pointer">{option}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Feedback
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-card border-border border-green-500/50">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">Thank You!</h2>
              <p className="text-muted-foreground mb-4">
                Your feedback has been successfully submitted. We appreciate your input and will use it to continue improving the platform.
              </p>
              <Button variant="outline" className="border-border bg-transparent" onClick={() => setFormData({
                name: '', email: '', role: '', satisfaction: '', features: [], improvements: '', likelyRecommend: ''
              })}>
                Submit Another Response
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">24-48 hours</p>
              <p className="text-xs text-muted-foreground mt-1">Average response to feedback submissions</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Feedback Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-accent">37%</p>
              <p className="text-xs text-muted-foreground mt-1">Of features came from user suggestions</p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium text-foreground mb-1">Is my feedback confidential?</h4>
              <p className="text-sm text-muted-foreground">
                Yes, all feedback is treated confidentially. Your personal information is never shared with third parties.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Can I track my feedback?</h4>
              <p className="text-sm text-muted-foreground">
                We'll send a confirmation email with a tracking ID. You can use this to check the status of your feedback.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">How is feedback prioritized?</h4>
              <p className="text-sm text-muted-foreground">
                Feedback is prioritized based on user impact, frequency of similar suggestions, and alignment with our product roadmap.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
