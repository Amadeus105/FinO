import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
}

export function StatCard({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  iconColor = "text-accent",
  iconBg = "bg-accent/10",
}: StatCardProps) {
  return (
    <Card variant="stats">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl md:text-3xl font-bold tracking-tight">{value}</p>
            <div className="flex items-center gap-1">
              {changeType === "positive" ? (
                <TrendingUp className="h-4 w-4 text-accent" />
              ) : changeType === "negative" ? (
                <TrendingDown className="h-4 w-4 text-destructive" />
              ) : null}
              <span
                className={cn(
                  "text-sm font-medium",
                  changeType === "positive" && "text-accent",
                  changeType === "negative" && "text-destructive",
                  changeType === "neutral" && "text-muted-foreground"
                )}
              >
                {change}
              </span>
              <span className="text-sm text-muted-foreground">vs last month</span>
            </div>
          </div>
          <div className={cn("p-3 rounded-xl", iconBg)}>
            <Icon className={cn("h-6 w-6", iconColor)} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
