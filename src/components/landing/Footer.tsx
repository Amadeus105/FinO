import { Link } from "react-router-dom";
import { Wallet } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <Wallet className="h-4 w-4" />
            </div>
            <span className="text-lg font-bold">FinTrack</span>
          </Link>
          
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link>
            <Link to="/transactions" className="hover:text-foreground transition-colors">Transactions</Link>
            <Link to="/forecast" className="hover:text-foreground transition-colors">Forecast</Link>
            <Link to="/settings" className="hover:text-foreground transition-colors">Settings</Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            © 2024 FinTrack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
