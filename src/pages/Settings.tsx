import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User, Bell, Shield, CreditCard, Palette, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const categories = [
  { name: "Food & Dining", budget: 1500 },
  { name: "Transportation", budget: 800 },
  { name: "Shopping", budget: 1000 },
  { name: "Entertainment", budget: 500 },
  { name: "Utilities", budget: 400 },
  { name: "Health & Fitness", budget: 200 },
];

export default function Settings() {
  const { toast } = useToast();
  const [budgets, setBudgets] = useState(categories);

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12 max-w-4xl">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account and preferences.
          </p>
        </div>

        <div className="space-y-8">
          {/* Profile Settings */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-accent" />
                Profile
              </CardTitle>
              <CardDescription>
                Update your personal information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john@example.com" />
              </div>
            </CardContent>
          </Card>

          {/* Budget Settings */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-accent" />
                Budget Limits
              </CardTitle>
              <CardDescription>
                Set monthly spending limits for each category
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {budgets.map((cat, index) => (
                <div key={cat.name} className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium min-w-[140px]">{cat.name}</span>
                  <div className="flex items-center gap-2 flex-1 max-w-[200px]">
                    <span className="text-muted-foreground">$</span>
                    <Input
                      type="number"
                      value={cat.budget}
                      onChange={(e) => {
                        const newBudgets = [...budgets];
                        newBudgets[index].budget = parseInt(e.target.value) || 0;
                        setBudgets(newBudgets);
                      }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-accent" />
                Notifications
              </CardTitle>
              <CardDescription>
                Configure how you receive alerts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Budget alerts</p>
                  <p className="text-sm text-muted-foreground">
                    Get notified when approaching budget limits
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Weekly summary</p>
                  <p className="text-sm text-muted-foreground">
                    Receive a weekly spending summary email
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">AI insights</p>
                  <p className="text-sm text-muted-foreground">
                    Get notified about new financial insights
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-accent" />
                Preferences
              </CardTitle>
              <CardDescription>
                Customize your experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Currency</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                      <SelectItem value="gbp">GBP (£)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Date format</Label>
                  <Select defaultValue="mdy">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                      <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                      <SelectItem value="ymd">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                Security
              </CardTitle>
              <CardDescription>
                Manage your account security
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Two-factor authentication</p>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security
                  </p>
                </div>
                <Button variant="outline">Enable</Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Change password</p>
                  <p className="text-sm text-muted-foreground">
                    Update your password regularly
                  </p>
                </div>
                <Button variant="outline">Update</Button>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button variant="accent" size="lg" onClick={handleSave} className="gap-2">
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
