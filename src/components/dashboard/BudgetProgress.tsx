import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const budgets = [
  { category: "Food & Dining", spent: 1250, limit: 1500, color: "bg-accent" },
  { category: "Transportation", spent: 850, limit: 800, color: "bg-chart-2" },
  { category: "Shopping", spent: 620, limit: 1000, color: "bg-chart-3" },
  { category: "Entertainment", spent: 480, limit: 500, color: "bg-chart-4" },
  { category: "Utilities", spent: 380, limit: 400, color: "bg-chart-5" },
];

export function BudgetProgress() {
  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {budgets.map((budget) => {
          const percentage = (budget.spent / budget.limit) * 100;
          const isOverBudget = percentage > 100;

          return (
            <div key={budget.category} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{budget.category}</span>
                <span className={cn(
                  isOverBudget ? "text-destructive" : "text-muted-foreground"
                )}>
                  ${budget.spent} / ${budget.limit}
                </span>
              </div>
              <div className="relative">
                <Progress 
                  value={Math.min(percentage, 100)} 
                  className={cn(
                    "h-2",
                    isOverBudget && "[&>div]:bg-destructive"
                  )}
                />
                {isOverBudget && (
                  <span className="absolute right-0 -top-1 text-xs text-destructive font-medium">
                    Over by ${budget.spent - budget.limit}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
