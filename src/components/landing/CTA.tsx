import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-chart-2/20 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your
            <br />
            Financial Future?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto">
            Join thousands of users who have already taken control of their finances 
            with AI-powered insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button variant="hero" size="xl" className="group">
                Start Free Today
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="hero-outline" size="xl">
                Sign In
              </Button>
            </Link>
          </div>
          <p className="text-sm text-primary-foreground/50 mt-6">
            No credit card required • Free 14-day trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
