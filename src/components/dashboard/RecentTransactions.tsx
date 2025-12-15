import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingBag, 
  Coffee, 
  Car, 
  Zap, 
  Film,
  ArrowUpRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const transactions = [
  {
    id: 1,
    description: "Whole Foods Market",
    amount: -127.45,
    category: "Food & Dining",
    date: "Today",
    icon: Coffee,
    confidence: 98,
  },
  {
    id: 2,
    description: "Uber Ride",
    amount: -24.50,
    category: "Transportation",
    date: "Today",
    icon: Car,
    confidence: 95,
  },
  {
    id: 3,
    description: "Amazon.com",
    amount: -89.99,
    category: "Shopping",
    date: "Yesterday",
    icon: ShoppingBag,
    confidence: 92,
  },
  {
    id: 4,
    description: "Electric Company",
    amount: -156.00,
    category: "Utilities",
    date: "Yesterday",
    icon: Zap,
    confidence: 99,
  },
  {
    id: 5,
    description: "Netflix Subscription",
    amount: -15.99,
    category: "Entertainment",
    date: "2 days ago",
    icon: Film,
    confidence: 100,
  },
];

export function RecentTransactions() {
  return (
    <Card variant="elevated" className="col-span-full lg:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Transactions</CardTitle>
        <Link to="/transactions">
          <Button variant="ghost" size="sm" className="gap-1">
            View all
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <tx.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">{tx.description}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {tx.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      AI: {tx.confidence}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-semibold ${tx.amount < 0 ? "text-destructive" : "text-accent"}`}>
                  {tx.amount < 0 ? "-" : "+"}${Math.abs(tx.amount).toFixed(2)}
                </p>
                <p className="text-xs text-muted-foreground">{tx.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
