import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Lock, Star } from "lucide-react";
import learningMapImage from "@/assets/learning-map.png";
import Navigation from "@/components/Navigation";
import QuestModal from "@/components/QuestModal";

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

  const handleCompleteQuest = (questId: number) => {
    setQuests(prev => prev.map(q => 
      q.id === questId ? { ...q, completed: true } : q
    ));
    setSelectedQuest(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Your Learning Adventure
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Complete quests to build your financial confidence, one step at a time
          </p>
          
          <Card className="bg-card border-2">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Your Progress</span>
                <span className="text-sm text-muted-foreground">
                  {completedCount} of {quests.length} quests completed
                </span>
              </div>
              <Progress value={progress} className="h-3" />
            </CardContent>
          </Card>
        </div>

        {/* Quest Map Visual */}
        <div className="mb-12">
          <Card className="overflow-hidden border-2">
            <CardContent className="p-0">
              <img 
                src={learningMapImage} 
                alt="Learning journey map" 
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>

        {/* Quests Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Star className="w-6 h-6 text-primary" />
            Available Quests
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quests.map((quest) => (
              <Card 
                key={quest.id}
                className={`border-2 transition-all hover:shadow-lg ${
                  quest.completed 
                    ? 'border-primary bg-primary/5' 
                    : quest.locked 
                    ? 'opacity-60' 
                    : 'hover:border-primary'
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-xs font-medium text-primary mb-2">
                        {quest.category}
                      </div>
                      <CardTitle className="text-xl mb-2">
                        {quest.title}
                      </CardTitle>
                    </div>
                    {quest.completed && (
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    )}
                    {quest.locked && (
                      <Lock className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                    )}
                  </div>
                  <CardDescription>{quest.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full"
                    variant={quest.completed ? "outline" : "default"}
                    disabled={quest.locked}
                    onClick={() => setSelectedQuest(quest)}
                  >
                    {quest.completed ? "Review Quest" : quest.locked ? "Locked" : "Start Quest"}
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
