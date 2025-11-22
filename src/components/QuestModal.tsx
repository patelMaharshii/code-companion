import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface Quest {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface QuestModalProps {
  quest: Quest;
  onClose: () => void;
  onComplete: (questId: number) => void;
}

const questContent: Record<number, {
  content: string;
  quiz: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  };
}> = {
  1: {
    content: "An emergency fund is your financial safety net. It's money set aside for unexpected expenses like car repairs, medical bills, or job loss. Financial experts recommend saving 3-6 months of living expenses. For women especially, having an emergency fund means independence and security—no one can take that away from you.",
    quiz: {
      question: "How many months of living expenses should an emergency fund cover?",
      options: ["1 month", "3-6 months", "12 months", "It doesn't matter"],
      correctAnswer: 1,
      explanation: "Most experts recommend 3-6 months of living expenses. This gives you enough cushion to handle most emergencies while not tying up too much money that could be invested elsewhere."
    }
  },
  2: {
    content: "Investing isn't just for the wealthy—it's how you build long-term wealth. When you invest, your money works for you, growing over time through compound interest. Even small amounts invested regularly can grow significantly. The stock market historically returns about 8-10% annually over the long term, far outpacing inflation and savings accounts.",
    quiz: {
      question: "What is the main benefit of investing over just saving money?",
      options: [
        "It's safer than saving",
        "Your money grows faster through compound returns",
        "You can access it more easily",
        "It requires less money to start"
      ],
      correctAnswer: 1,
      explanation: "Investing allows your money to grow much faster through compound returns. While it has more risk than saving, over the long term, it significantly outpaces inflation and builds real wealth."
    }
  },
  3: {
    content: "A budget is simply a plan for your money. It's not about restriction—it's about intentional spending aligned with your values and goals. The 50/30/20 rule is a great starting point: 50% for needs, 30% for wants, and 20% for savings and debt repayment. Your budget should empower you, not limit you.",
    quiz: {
      question: "In the 50/30/20 budget rule, what does the 20% represent?",
      options: [
        "Entertainment and fun",
        "Housing costs",
        "Savings and debt repayment",
        "Food and groceries"
      ],
      correctAnswer: 2,
      explanation: "The 20% in the 50/30/20 rule goes to savings and debt repayment—building your future financial security. This ensures you're always paying yourself first!"
    }
  }
};

const QuestModal = ({ quest, onClose, onComplete }: QuestModalProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const content = questContent[quest.id];

  const handleSubmit = () => {
    const correct = parseInt(selectedAnswer) === content.quiz.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      toast.success("Amazing! You're one step closer to financial confidence!", {
        icon: <Sparkles className="w-4 h-4" />
      });
    }
  };

  const handleComplete = () => {
    onComplete(quest.id);
    toast.success("Quest completed! Badge earned! ⭐", {
      icon: <CheckCircle2 className="w-4 h-4" />
    });
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{quest.title}</DialogTitle>
          <DialogDescription>{quest.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Content */}
          <Card className="bg-accent/30 border-2">
            <CardContent className="pt-6">
              <p className="text-foreground leading-relaxed">{content.content}</p>
            </CardContent>
          </Card>

          {/* Quiz */}
          {!quest.completed && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Quick Check:</h3>
              <p className="text-foreground font-medium">{content.quiz.question}</p>
              
              <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                {content.quiz.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="cursor-pointer flex-1">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              {!showResult ? (
                <Button 
                  onClick={handleSubmit} 
                  disabled={!selectedAnswer}
                  className="w-full"
                >
                  Check Answer
                </Button>
              ) : (
                <Card className={`border-2 ${isCorrect ? 'border-primary bg-primary/5' : 'border-destructive bg-destructive/5'}`}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      {isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <h4 className="font-bold mb-2 text-foreground">
                          {isCorrect ? "Correct!" : "Not quite!"}
                        </h4>
                        <p className="text-foreground">{content.quiz.explanation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {showResult && isCorrect && (
                <Button onClick={handleComplete} className="w-full gap-2">
                  <Sparkles className="w-4 h-4" />
                  Complete Quest & Earn Badge
                </Button>
              )}
            </div>
          )}

          {quest.completed && (
            <Card className="border-2 border-primary bg-primary/5">
              <CardContent className="pt-6 text-center">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-bold text-foreground mb-2">Quest Completed!</h3>
                <p className="text-muted-foreground">You've earned your badge for this quest.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuestModal;
