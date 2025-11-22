import { Card, CardContent } from "@/components/ui/card";
import { Flame, Target, TrendingUp, Award } from "lucide-react";

interface ProgressStatsProps {
  completedQuests: number;
  totalQuests: number;
  streak: number;
  totalXP: number;
}

const ProgressStats = ({ completedQuests, totalQuests, streak, totalXP }: ProgressStatsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card className="border-2 hover:border-primary transition-colors">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">
                {completedQuests}/{totalQuests}
              </div>
              <div className="text-xs text-muted-foreground">Quests</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 hover:border-primary transition-colors">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
              <Flame className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">
                {streak}
              </div>
              <div className="text-xs text-muted-foreground">Day Streak</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 hover:border-primary transition-colors">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">
                {totalXP}
              </div>
              <div className="text-xs text-muted-foreground">Total XP</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 hover:border-primary transition-colors">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">
                {completedQuests}
              </div>
              <div className="text-xs text-muted-foreground">Badges</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressStats;
