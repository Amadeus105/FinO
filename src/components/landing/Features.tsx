import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  LineChart, 
  PieChart, 
  Shield, 
  Zap, 
  Target,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Categorization",
    description: "Machine learning automatically categorizes your transactions with 95%+ accuracy using NLP models.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: LineChart,
    title: "Smart Forecasting",
    description: "Predict future expenses and balance using ARIMA and LSTM models with confidence intervals.",
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    icon: PieChart,
    title: "Visual Analytics",
    description: "Beautiful charts and graphs to understand your spending patterns at a glance.",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    icon: Target,
    title: "Budget Tracking",
    description: "Set spending limits by category and get alerts when you're approaching your budget.",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
  {
    icon: Zap,
    title: "Real-time Sync",
    description: "Import transactions via CSV or add them manually with instant categorization.",
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Bank-level encryption and GDPR-compliant data handling. Your data stays yours.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to
            <br />
            <span className="text-accent">Take Control</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Powerful AI-driven tools designed to give you complete visibility 
            and control over your financial life.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              variant="stats"
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`inline-flex p-3 rounded-xl ${feature.bgColor} mb-4 transition-transform group-hover:scale-110`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  {feature.title}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
