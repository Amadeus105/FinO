import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  ReferenceLine,
} from "recharts";
import { Brain, TrendingUp, AlertTriangle, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const forecastData = [
  { day: "Jan 1", actual: 2400, predicted: null, lower: null, upper: null },
  { day: "Jan 8", actual: 2600, predicted: null, lower: null, upper: null },
  { day: "Jan 15", actual: 2350, predicted: null, lower: null, upper: null },
  { day: "Jan 22", actual: 2800, predicted: null, lower: null, upper: null },
  { day: "Jan 29", actual: 2550, predicted: 2550, lower: 2400, upper: 2700 },
  { day: "Feb 5", actual: null, predicted: 2650, lower: 2450, upper: 2850 },
  { day: "Feb 12", actual: null, predicted: 2700, lower: 2400, upper: 3000 },
  { day: "Feb 19", actual: null, predicted: 2580, lower: 2200, upper: 2960 },
  { day: "Feb 26", actual: null, predicted: 2750, lower: 2300, upper: 3200 },
  { day: "Mar 5", actual: null, predicted: 2900, lower: 2350, upper: 3450 },
];

const insights = [
  {
    type: "trend",
    title: "Spending Trend",
    description: "Your spending is projected to increase by 8% next month based on historical patterns.",
    icon: TrendingUp,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    type: "alert",
    title: "Budget Alert",
    description: "You may exceed your Food & Dining budget by $120 if current trends continue.",
    icon: AlertTriangle,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    type: "opportunity",
    title: "Savings Opportunity",
    description: "Reducing entertainment spending by 15% could save you $72/month.",
    icon: Brain,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const horizons = [
  { label: "7 Days", value: "7d" },
  { label: "30 Days", value: "30d" },
  { label: "90 Days", value: "90d" },
];

export default function Forecast() {
  const [selectedHorizon, setSelectedHorizon] = useState("30d");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Financial Forecast</h1>
            <p className="text-muted-foreground">
              AI-powered predictions for your financial future.
            </p>
          </div>
          <div className="flex items-center gap-2 p-1 rounded-lg bg-muted">
            {horizons.map((h) => (
              <Button
                key={h.value}
                variant={selectedHorizon === h.value ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setSelectedHorizon(h.value)}
                className={cn(
                  selectedHorizon === h.value && "bg-card shadow-soft"
                )}
              >
                <Calendar className="h-4 w-4 mr-2" />
                {h.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Model Info */}
        <Card variant="accent" className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent/20">
                  <Brain className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">LSTM Neural Network</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced time-series forecasting with 94.2% accuracy
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">0.042</p>
                  <p className="text-xs text-muted-foreground">RMSE</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">0.031</p>
                  <p className="text-xs text-muted-foreground">MAE</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Forecast Chart */}
        <Card variant="elevated" className="mb-8">
          <CardHeader>
            <CardTitle>Spending Forecast</CardTitle>
            <CardDescription>
              Predicted spending with 95% confidence interval
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={forecastData}>
                  <defs>
                    <linearGradient id="colorConfidence" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="day" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <ReferenceLine
                    x="Jan 29"
                    stroke="hsl(var(--muted-foreground))"
                    strokeDasharray="5 5"
                    label={{ value: "Today", position: "top", fill: "hsl(var(--muted-foreground))" }}
                  />
                  {/* Confidence interval */}
                  <Area
                    type="monotone"
                    dataKey="upper"
                    stroke="none"
                    fill="url(#colorConfidence)"
                  />
                  <Area
                    type="monotone"
                    dataKey="lower"
                    stroke="none"
                    fill="hsl(var(--background))"
                  />
                  {/* Actual line */}
                  <Line
                    type="monotone"
                    dataKey="actual"
                    stroke="hsl(var(--foreground))"
                    strokeWidth={2}
                    dot={{ fill: "hsl(var(--foreground))", strokeWidth: 0, r: 4 }}
                  />
                  {/* Predicted line */}
                  <Line
                    type="monotone"
                    dataKey="predicted"
                    stroke="hsl(var(--accent))"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: "hsl(var(--accent))", strokeWidth: 0, r: 4 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-foreground" />
                <span className="text-sm text-muted-foreground">Actual</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-accent" style={{ backgroundImage: "repeating-linear-gradient(90deg, hsl(var(--accent)), hsl(var(--accent)) 4px, transparent 4px, transparent 8px)" }} />
                <span className="text-sm text-muted-foreground">Predicted</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-3 bg-accent/20 rounded" />
                <span className="text-sm text-muted-foreground">95% Confidence</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <h2 className="text-xl font-semibold mb-4">AI Insights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((insight) => (
            <Card key={insight.title} variant="stats">
              <CardContent className="p-6">
                <div className={cn("inline-flex p-3 rounded-xl mb-4", insight.bgColor)}>
                  <insight.icon className={cn("h-5 w-5", insight.color)} />
                </div>
                <h3 className="font-semibold mb-2">{insight.title}</h3>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
