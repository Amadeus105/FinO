import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", spending: 2400, income: 4000 },
  { month: "Feb", spending: 1398, income: 3000 },
  { month: "Mar", spending: 3800, income: 4500 },
  { month: "Apr", spending: 3908, income: 4200 },
  { month: "May", spending: 4800, income: 5100 },
  { month: "Jun", spending: 3800, income: 4800 },
  { month: "Jul", spending: 4300, income: 5200 },
];

export function SpendingChart() {
  return (
    <Card variant="elevated" className="col-span-full lg:col-span-2">
      <CardHeader>
        <CardTitle>Income vs Spending</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorSpending" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="month" 
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
                  boxShadow: "var(--shadow-lg)",
                }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Area
                type="monotone"
                dataKey="income"
                stroke="hsl(var(--accent))"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorIncome)"
              />
              <Area
                type="monotone"
                dataKey="spending"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorSpending)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
