import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Sparkles, Target } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import InteractiveQuiz from "@/components/InteractiveQuiz";

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
  lessonSteps: { title: string; content: string }[];
  quizSteps: any[];
}> = {
  1: {
    lessonSteps: [
      {
        title: "What is an Emergency Fund?",
        content: "An emergency fund is your financial safety net—money specifically set aside for unexpected life events. Think of it as your personal insurance policy that you control completely."
      },
      {
        title: "Why It Matters for Women",
        content: "Women face unique financial vulnerabilities: longer life expectancy, wage gaps, career breaks for caregiving, and higher rates of single parenthood. An emergency fund means you're never trapped or dependent—it's your freedom fund."
      },
      {
        title: "How Much to Save",
        content: "Financial experts recommend 3-6 months of living expenses. Start small—even $1,000 can cover most minor emergencies. The key is starting now and building consistently."
      }
    ],
    quizSteps: [
      {
        type: "multiple-choice",
        question: "Why is an emergency fund especially important for women?",
        options: [
          "Women spend more on emergencies than men",
          "Women face unique vulnerabilities like wage gaps, career breaks, and longer life expectancy",
          "Women are less likely to have insurance",
          "Women are more likely to have debt"
        ],
        correctAnswer: 1,
        explanation: "Women face structural financial challenges including wage gaps (earning $0.82 per dollar men earn), career breaks for caregiving, and living 5-7 years longer than men on average. An emergency fund provides independence and security against these specific vulnerabilities."
      },
      {
        type: "slider",
        question: "How many months of living expenses should your emergency fund cover?",
        sliderConfig: {
          min: 0,
          max: 12,
          step: 1,
          correctRange: [3, 6],
          label: " months"
        },
        explanation: "Most financial experts recommend 3-6 months of living expenses. This provides enough cushion to handle job loss, medical emergencies, or major unexpected costs without going into debt. Start with 3 months as your goal, then work toward 6 months for extra security."
      },
      {
        type: "visual",
        question: "Sarah has $2,000 in her checking account and no other savings. Her monthly expenses are $2,500. What should she prioritize?",
        visual: {
          scenario: "Sarah lives paycheck to paycheck. Her car needs a $800 repair, and she just saw a 50% off sale on a new laptop she's been wanting ($600 sale price).",
          choices: [
            { label: "Buy the laptop—it's a great deal and she needs it for work eventually", isCorrect: false },
            { label: "Skip both and save the $2,000 as an emergency fund starter", isCorrect: true },
            { label: "Fix the car and buy the laptop—she can make it work", isCorrect: false },
            { label: "Fix the car only and put the rest on a credit card for emergencies", isCorrect: false }
          ]
        },
        explanation: "Sarah should fix the car (needed for work/life) and save the remaining money as the start of her emergency fund. The laptop can wait—building even a small emergency cushion (that $1,200 after the car repair) will protect her from the next unexpected expense. The 'deal' on the laptop is meaningless if it leaves her vulnerable to the next emergency."
      }
    ]
  },
  2: {
    lessonSteps: [
      {
        title: "What is Investing?",
        content: "Investing means putting your money to work so it grows over time. Unlike saving (where money sits earning minimal interest), investing allows your money to multiply through compound returns."
      },
      {
        title: "The Power of Compound Growth",
        content: "Albert Einstein reportedly called compound interest 'the eighth wonder of the world.' When you invest, you earn returns on your initial money AND on the returns themselves. Over time, this snowball effect creates significant wealth."
      },
      {
        title: "Why Start Now",
        content: "Time is your biggest advantage. Thanks to compound growth, investing $100/month starting at 25 will grow to more than investing $200/month starting at 35. The earlier you start, the less you need to invest to reach the same goals."
      }
    ],
    quizSteps: [
      {
        type: "multiple-choice",
        question: "What's the main difference between saving and investing?",
        options: [
          "Saving is safer than investing",
          "Investing grows your money faster through compound returns over time",
          "Saving requires more money to start",
          "Investing is only for rich people"
        ],
        correctAnswer: 1,
        explanation: "While saving is important for short-term needs and emergencies, investing is how you build long-term wealth. The stock market has historically returned about 8-10% annually over the long term, vastly outpacing savings accounts (often <1%) and inflation (2-3%). This means invested money grows much faster through the power of compound returns."
      },
      {
        type: "visual",
        question: "Compare these two scenarios over 30 years:",
        visual: {
          scenario: "Maya invests $200/month starting at age 25 and stops at 35 (total: $24,000). Lisa starts investing $200/month at age 35 and continues until 55 (total: $48,000). Who has more at 55, assuming 8% annual returns?",
          choices: [
            { label: "Lisa has more—she invested twice as much money ($48k vs $24k)", isCorrect: false },
            { label: "They have about the same amount", isCorrect: false },
            { label: "Maya has more—she started 10 years earlier, giving compound growth more time", isCorrect: true }
          ]
        },
        explanation: "Maya ends up with significantly more (~$230,000) despite investing half as much money, because she started 10 years earlier. Those extra years of compound growth made all the difference. This demonstrates why starting early is more powerful than investing large amounts later. Time in the market beats timing the market!"
      },
      {
        type: "slider",
        question: "Historically, what has been the average annual return of the S&P 500 stock index over the long term?",
        sliderConfig: {
          min: 0,
          max: 20,
          step: 1,
          correctRange: [8, 10],
          label: "%"
        },
        explanation: "The S&P 500 has historically returned about 8-10% annually over the long term (after adjusting for inflation). This doesn't mean every year—some years are up 20%, some down 10%. But over decades, this average holds. This is why even small, consistent investments can grow substantially over time."
      }
    ]
  },
  3: {
    lessonSteps: [
      {
        title: "What is a Budget?",
        content: "A budget isn't about restriction—it's a plan for your money that aligns with your values and goals. It's about making intentional choices rather than wondering where your money went at the end of each month."
      },
      {
        title: "The 50/30/20 Rule",
        content: "This simple framework divides your after-tax income into three categories: 50% for needs (housing, food, utilities), 30% for wants (dining out, hobbies, entertainment), and 20% for savings and debt repayment. It's a starting point you can adjust to fit your life."
      },
      {
        title: "Make It Your Own",
        content: "Your budget should empower you, not limit you. If you value travel more than clothes, allocate more 'wants' budget there. The key is being intentional about your choices and always paying yourself first through that 20% savings."
      }
    ],
    quizSteps: [
      {
        type: "visual",
        question: "Let's build a budget together. Emma earns $3,000/month after taxes. Using the 50/30/20 rule, how should she allocate her income?",
        visual: {
          scenario: "Emma's current spending: $1,700 on rent/bills/groceries (needs), $1,100 on shopping/dining/entertainment (wants), $200 toward savings.",
          choices: [
            { label: "Needs: $1,500 | Wants: $900 | Savings: $600", isCorrect: true },
            { label: "Keep her current allocation—it's close enough", isCorrect: false },
            { label: "Needs: $1,000 | Wants: $1,500 | Savings: $500", isCorrect: false }
          ]
        },
        explanation: "Using the 50/30/20 rule on $3,000: Needs should be $1,500 (50%), Wants $900 (30%), and Savings/Debt $600 (20%). Emma is currently overspending on wants and under-saving. By cutting $200 from her wants spending, she can triple her savings rate to $600/month—that's $7,200/year going toward her future!"
      },
      {
        type: "multiple-choice",
        question: "In the 50/30/20 budget rule, where does debt repayment fit?",
        options: [
          "In the 'needs' category with housing and utilities",
          "In the 'wants' category since debt is discretionary",
          "In the 20% category along with savings—paying yourself first includes paying down debt",
          "Debt repayment isn't part of the 50/30/20 framework"
        ],
        correctAnswer: 2,
        explanation: "Debt repayment is part of the 20% 'savings and debt' category. Paying down debt is paying your future self—it frees up future income and reduces interest charges. Many people split that 20% between building emergency savings and paying down high-interest debt. Both are investments in your financial security!"
      },
      {
        type: "slider",
        question: "What percentage of your after-tax income should go toward savings and debt repayment in the 50/30/20 rule?",
        sliderConfig: {
          min: 0,
          max: 50,
          step: 5,
          correctRange: [20, 20],
          label: "%"
        },
        explanation: "20% of your after-tax income should go toward savings and debt repayment. This 'pay yourself first' principle ensures you're building your financial future before spending on wants. For someone earning $3,000/month, that's $600. Over a year, that's $7,200 working for your future!"
      }
    ]
  }
};

const QuestModal = ({ quest, onClose, onComplete }: QuestModalProps) => {
  const content = questContent[quest.id];
  const [currentLessonStep, setCurrentLessonStep] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);

  const isLastLesson = currentLessonStep === content.lessonSteps.length - 1;

  const handleContinue = () => {
    if (isLastLesson) {
      setShowQuiz(true);
    } else {
      setCurrentLessonStep(prev => prev + 1);
    }
  };

  const handleQuizComplete = () => {
    onComplete(quest.id);
    toast.success("Quest completed! You earned a badge! ⭐", {
      icon: <CheckCircle2 className="w-4 h-4" />
    });
  };

  if (quest.completed) {
    return (
      <Dialog open={true} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{quest.title}</DialogTitle>
          </DialogHeader>
          <Card className="border-2 border-primary bg-primary/5">
            <CardContent className="pt-6 text-center">
              <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Quest Completed!</h3>
              <p className="text-muted-foreground">You've mastered this topic and earned your badge.</p>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <Target className="w-6 h-6 text-primary" />
            <DialogTitle className="text-2xl">{quest.title}</DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {!showQuiz ? (
            <>
              {/* Lesson Steps Progress */}
              <div className="flex gap-2">
                {content.lessonSteps.map((_, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "h-2 flex-1 rounded-full transition-all",
                      idx < currentLessonStep ? "bg-primary" : idx === currentLessonStep ? "bg-primary/50" : "bg-border"
                    )}
                  />
                ))}
              </div>

              {/* Lesson Content */}
              <Card className="border-2 bg-accent/20 animate-fade-in">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                      {currentLessonStep + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {content.lessonSteps[currentLessonStep].title}
                      </h3>
                      <p className="text-foreground leading-relaxed text-lg">
                        {content.lessonSteps[currentLessonStep].content}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button onClick={handleContinue} className="w-full gap-2" size="lg">
                {isLastLesson ? (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Start Practice Problems
                  </>
                ) : (
                  "Continue"
                )}
              </Button>
            </>
          ) : (
            <InteractiveQuiz 
              steps={content.quizSteps} 
              onComplete={handleQuizComplete}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuestModal;
