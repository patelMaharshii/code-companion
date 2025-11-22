import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Lock, Star, Sparkles } from "lucide-react";
import learningMapImage from "@/assets/learning-map.png";
import Navigation from "@/components/Navigation";
import QuestModal from "@/components/QuestModal";
import ProgressStats from "@/components/ProgressStats";
import { Link } from "react-router-dom";


interface Quest {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  locked: boolean;
  category: string;
}

const Learning = () => {
  const [quests, setQuests] = useState<Quest[]>([
    {
      id: 1,
      title: "Emergency Fund Basics",
      description: "Learn why every woman needs an emergency fund and how to build one",
      completed: false,
      locked: false,
      category: "Foundations"
    },
    {
      id: 2,
      title: "Introduction to Investing",
      description: "Demystify investing and learn why it's essential for long-term wealth",
      completed: false,
      locked: false,
      category: "Building Wealth"
    },
    {
      id: 3,
      title: "Budget Like a Boss",
      description: "Create a budget that works for your life and goals",
      completed: false,
      locked: false,
      category: "Daily Money"
    },
    {
      id: 4,
      title: "Understanding Stocks",
      description: "Learn what stocks are, how they work, and why they're a key part of wealth building",
      completed: false,
      locked: false,
      category: "Investing 101"
    },
    {
      id: 5,
      title: "Mutual Funds Explained",
      description: "Discover how mutual funds work and why they're perfect for beginner investors",
      completed: false,
      locked: false,
      category: "Investing 101"
    },
    {
      id: 6,
      title: "Bonds Demystified",
      description: "Understand bonds, why they're considered safer, and how to use them in your portfolio",
      completed: false,
      locked: false,
      category: "Investing 101"
    },
    {
      id: 7,
      title: "ETFs vs Mutual Funds",
      description: "Compare ETFs and mutual funds to choose the right investment vehicle for you",
      completed: false,
      locked: false,
      category: "Investing 101"
    },
    {
      id: 8,
      title: "Diversification Basics",
      description: "Learn the golden rule of investing: don't put all your eggs in one basket",
      completed: false,
      locked: false,
      category: "Investment Strategy"
    },
    {
      id: 9,
      title: "Index Funds 101",
      description: "Discover why index funds are a favorite among investors and how to get started",
      completed: false,
      locked: false,
      category: "Investment Strategy"
    },
  ]);

  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);
  
  const completedCount = quests.filter(q => q.completed).length;
  const progress = (completedCount / quests.length) * 100;
  
  // Gamification stats
  const streak = 7; // Mock data - would track actual daily usage
  const totalXP = completedCount * 100; // 100 XP per quest

  const handleCompleteQuest = (questId: number) => {
    setQuests(prev => prev.map(q => 
      q.id === questId ? { ...q, completed: true } : q
    ));
    setSelectedQuest(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Learning Path
              </h1>
              <p className="text-muted-foreground">
                Interactive, hands-on financial education
              </p>
            </div>
          </div>
          
          {/* Progress Stats */}
          <ProgressStats 
            completedQuests={completedCount}
            totalQuests={quests.length}
            streak={streak}
            totalXP={totalXP}
          />
        </div>

        {/* Overall Progress Bar */}
        <Card className="bg-card border-2 mb-8">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-3">
              <span className="font-bold text-foreground">Quest Progress</span>
              <span className="text-sm text-muted-foreground font-medium">
                {completedCount} of {quests.length} completed
              </span>
            </div>
            <Progress value={progress} className="h-4" />
          </CardContent>
        </Card>

        {/* Quest Map Visual */}
        <div className="mb-12">
          <Card className="overflow-hidden border-2 hover:border-primary transition-colors">
            <CardContent className="p-0 relative group">
              <img 
                src={learningMapImage} 
                alt="Learning journey map" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-foreground font-medium">
                  Follow the path and complete each quest to master personal finance
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Educational Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Educational Resources</h2>
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link 
                  to="/learning/articles/what-are-stocks"
                  className="p-4 rounded-lg border-2 hover:border-primary hover:bg-accent/50 transition-all group"
                >
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary">
                    What Are Stocks?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Learn the basics of stock ownership and how the stock market works
                  </p>
                </Link>
                
                <Link 
                  to="/learning/articles/mutual-funds-explained"
                  className="p-4 rounded-lg border-2 hover:border-primary hover:bg-accent/50 transition-all group"
                >
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary">
                    Mutual Funds Explained
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Discover how mutual funds pool money to invest in diversified portfolios
                  </p>
                </Link>
                
                <Link 
                  to="/learning/articles/understanding-bonds"
                  className="p-4 rounded-lg border-2 hover:border-primary hover:bg-accent/50 transition-all group"
                >
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary">
                    Understanding Bonds
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Explore fixed-income investments and how bonds can stabilize your portfolio
                  </p>
                </Link>
                
                <Link 
                  to="/learning/articles/etfs-index-funds"
                  className="p-4 rounded-lg border-2 hover:border-primary hover:bg-accent/50 transition-all group"
                >
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary">
                    ETFs & Index Funds
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Learn about low-cost, passive investing strategies for beginners
                  </p>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Quests Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Star className="w-6 h-6 text-primary" />
              Your Quests
            </h2>
            <span className="text-sm text-muted-foreground font-medium">
              Complete interactive lessons and practice problems
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quests.map((quest) => (
              <Card 
                key={quest.id}
                className={`border-2 transition-all hover:shadow-lg hover:-translate-y-1 ${
                  quest.completed 
                    ? 'border-primary bg-primary/5' 
                    : quest.locked 
                    ? 'opacity-60' 
                    : 'hover:border-primary'
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    {quest.completed && (
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                      </div>
                    )}
                    {quest.locked && (
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <Lock className="w-5 h-5 text-muted-foreground" />
                      </div>
                    )}
                    {!quest.completed && !quest.locked && (
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                        <Star className="w-5 h-5 text-accent-foreground" />
                      </div>
                    )}
                  </div>
                  <div className="text-xs font-bold text-primary uppercase tracking-wide mb-2">
                    {quest.category}
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {quest.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {quest.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {quest.completed && (
                    <div className="text-sm text-primary font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      +100 XP Earned
                    </div>
                  )}
                  <Button 
                    className="w-full gap-2"
                    size="lg"
                    variant={quest.completed ? "outline" : "default"}
                    disabled={quest.locked}
                    onClick={() => setSelectedQuest(quest)}
                  >
                    {quest.completed ? (
                      "Review Quest"
                    ) : quest.locked ? (
                      <>
                        <Lock className="w-4 h-4" />
                        Locked
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        Start Learning
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {selectedQuest && (
        <QuestModal 
          quest={selectedQuest}
          onClose={() => setSelectedQuest(null)}
          onComplete={handleCompleteQuest}
        />
      )}
    </div>
  );
};

export default Learning;
