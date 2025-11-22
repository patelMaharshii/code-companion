import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, MessageCircle, Calculator, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/learning", icon: BookOpen, label: "Learning" },
    { to: "/community", icon: MessageCircle, label: "Community" },
    { to: "/girl-math", icon: Calculator, label: "Girl Math" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl text-foreground">FemFinance</span>
          </Link>
          
          <div className="flex items-center gap-1 md:gap-2">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.to;
              
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                    "hover:bg-accent hover:text-accent-foreground",
                    isActive && "bg-primary text-primary-foreground font-medium"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline text-sm">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
