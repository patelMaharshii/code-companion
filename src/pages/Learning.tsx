import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Lock, Star, Sparkles } from "lucide-react";
import learningMapImage from "@/assets/learning-map.png";
import Navigation from "@/components/Navigation";
import QuestModal from "@/components/QuestModal";
import ProgressStats from "@/components/ProgressStats";

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
