import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Food & Dining", value: 1250, color: "hsl(var(--accent))" },
  { name: "Transportation", value: 850, color: "hsl(var(--chart-2))" },
  { name: "Shopping", value: 620, color: "hsl(var(--chart-3))" },
  { name: "Entertainment", value: 480, color: "hsl(var(--chart-4))" },
  { name: "Utilities", value: 380, color: "hsl(var(--chart-5))" },
];

export function CategoryPieChart() {
  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Spending by Category</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
                formatter={(value: number) => [`$${value}`, ""]}
              />
              <Legend
                layout="vertical"
                align="right"
                verticalAlign="middle"
                formatter={(value) => (
                  <span className="text-sm text-muted-foreground">{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
