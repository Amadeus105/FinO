import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, TrendingUp, Shield, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/10 rounded-full" />
      </div>

      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">AI-Powered Financial Intelligence</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-slide-up">
            Master Your{" "}
            <span className="relative">
              <span className="relative z-10 text-accent">Finances</span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-accent/20 -skew-x-6" />
            </span>
            <br />
            with AI Insights
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Automatically categorize expenses, forecast your financial future, 
            and get personalized recommendations—all powered by machine learning.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/register">
              <Button variant="hero" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="hero-outline" size="xl">
                View Demo
              </Button>
            </Link>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {[
              { icon: TrendingUp, label: "Smart Forecasting" },
              { icon: Zap, label: "Auto-Categorization" },
              { icon: Shield, label: "Bank-Level Security" },
            ].map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/80"
              >
                <feature.icon className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-chart-2/20 to-accent/20 rounded-2xl blur-2xl" />
            <div className="relative glass rounded-2xl p-2 shadow-elevated">
              <div className="bg-card rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/50">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-warning/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  <span className="ml-4 text-xs text-muted-foreground">fintrack.app/dashboard</span>
                </div>
                <div className="p-6 space-y-6">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Total Balance", value: "$24,563.00", change: "+12.5%" },
                      { label: "Monthly Spending", value: "$3,847.50", change: "-8.2%" },
                      { label: "Savings Goal", value: "68%", change: "+5.3%" },
                    ].map((stat) => (
                      <div key={stat.label} className="p-4 rounded-lg bg-muted/50">
                        <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-xl font-bold">{stat.value}</p>
                        <p className={`text-xs ${stat.change.startsWith('+') ? 'text-accent' : 'text-destructive'}`}>
                          {stat.change}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Chart Placeholder */}
                  <div className="h-48 rounded-lg bg-gradient-to-r from-accent/5 via-chart-2/5 to-accent/5 flex items-center justify-center">
                    <div className="flex items-end gap-2">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                        <div
                          key={i}
                          className="w-6 rounded-t bg-gradient-to-t from-accent to-chart-2"
                          style={{ height: `${h}%`, opacity: 0.3 + (i / 20) }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
