import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Upload, Plus, Filter, Brain } from "lucide-react";

const transactions = [
  { id: 1, date: "2024-01-15", description: "Whole Foods Market", amount: -127.45, category: "Food & Dining", confidence: 98 },
  { id: 2, date: "2024-01-15", description: "Uber Ride", amount: -24.50, category: "Transportation", confidence: 95 },
  { id: 3, date: "2024-01-14", description: "Amazon.com", amount: -89.99, category: "Shopping", confidence: 92 },
  { id: 4, date: "2024-01-14", description: "Electric Company", amount: -156.00, category: "Utilities", confidence: 99 },
  { id: 5, date: "2024-01-13", description: "Netflix Subscription", amount: -15.99, category: "Entertainment", confidence: 100 },
  { id: 6, date: "2024-01-13", description: "Salary Deposit", amount: 4500.00, category: "Income", confidence: 100 },
  { id: 7, date: "2024-01-12", description: "Starbucks", amount: -6.75, category: "Food & Dining", confidence: 97 },
  { id: 8, date: "2024-01-12", description: "Gas Station", amount: -45.00, category: "Transportation", confidence: 94 },
  { id: 9, date: "2024-01-11", description: "Gym Membership", amount: -49.99, category: "Health & Fitness", confidence: 96 },
  { id: 10, date: "2024-01-11", description: "Freelance Payment", amount: 850.00, category: "Income", confidence: 100 },
];

const categories = [
  "All Categories",
  "Food & Dining",
  "Transportation",
  "Shopping",
  "Utilities",
  "Entertainment",
  "Income",
  "Health & Fitness",
];

export default function Transactions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");

  const filteredTransactions = transactions.filter((tx) => {
    const matchesSearch = tx.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "All Categories" || tx.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Transactions</h1>
            <p className="text-muted-foreground">
              View and manage all your transactions with AI categorization.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Upload className="h-4 w-4" />
              Import CSV
            </Button>
            <Button variant="accent" className="gap-2">
              <Plus className="h-4 w-4" />
              Add Transaction
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card variant="elevated" className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search transactions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Transactions Table */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-accent" />
              AI-Categorized Transactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>AI Confidence</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.map((tx) => (
                    <TableRow key={tx.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="text-muted-foreground">
                        {new Date(tx.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="font-medium">{tx.description}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{tx.category}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-accent rounded-full"
                              style={{ width: `${tx.confidence}%` }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {tx.confidence}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className={`text-right font-semibold ${tx.amount < 0 ? "text-destructive" : "text-accent"}`}>
                        {tx.amount < 0 ? "-" : "+"}${Math.abs(tx.amount).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
