import { Navbar } from "@/components/layout/Navbar";
import { StatCard } from "@/components/dashboard/StatCard";
import { SpendingChart } from "@/components/dashboard/SpendingChart";
import { CategoryPieChart } from "@/components/dashboard/CategoryPieChart";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { BudgetProgress } from "@/components/dashboard/BudgetProgress";
import { Wallet, TrendingUp, CreditCard, PiggyBank } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's your financial overview.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Balance"
            value="$24,563.00"
            change="+12.5%"
            changeType="positive"
            icon={Wallet}
          />
          <StatCard
            title="Monthly Income"
            value="$8,450.00"
            change="+5.2%"
            changeType="positive"
            icon={TrendingUp}
            iconColor="text-chart-2"
            iconBg="bg-chart-2/10"
          />
          <StatCard
            title="Monthly Spending"
            value="$3,847.50"
            change="-8.2%"
            changeType="positive"
            icon={CreditCard}
            iconColor="text-chart-3"
            iconBg="bg-chart-3/10"
          />
          <StatCard
            title="Savings Rate"
            value="54.5%"
            change="+3.1%"
            changeType="positive"
            icon={PiggyBank}
            iconColor="text-chart-4"
            iconBg="bg-chart-4/10"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <SpendingChart />
          <CategoryPieChart />
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RecentTransactions />
          <BudgetProgress />
        </div>
      </main>
    </div>
  );
}
