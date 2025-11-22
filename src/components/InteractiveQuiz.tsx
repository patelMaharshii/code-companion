import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { CheckCircle2, XCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizStep {
  type: "multiple-choice" | "slider" | "drag-drop" | "visual";
  question: string;
  explanation: string;
  options?: string[];
  correctAnswer?: number | number[];
  sliderConfig?: {
    min: number;
    max: number;
    step: number;
    correctRange: [number, number];
    label: string;
  };
  visual?: {
    scenario: string;
    choices: { label: string; isCorrect: boolean }[];
  };
}

interface InteractiveQuizProps {
  steps: QuizStep[];
  onComplete: () => void;
}

const InteractiveQuiz = ({ steps, onComplete }: InteractiveQuizProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [sliderValue, setSliderValue] = useState<number[]>([50]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const step = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  const checkAnswer = () => {
    let correct = false;

    if (step.type === "multiple-choice" && selectedAnswer !== null) {
      correct = selectedAnswer === step.correctAnswer;
    } else if (step.type === "slider" && step.sliderConfig) {
      const value = sliderValue[0];
      const [min, max] = step.sliderConfig.correctRange;
      correct = value >= min && value <= max;
    } else if (step.type === "visual" && selectedAnswer !== null && step.visual) {
      correct = step.visual.choices[selectedAnswer].isCorrect;
    }

    setIsCorrect(correct);
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (isLastStep && isCorrect) {
      onComplete();
    } else if (isCorrect) {
      setCurrentStep(prev => prev + 1);
      setSelectedAnswer(null);
      setSliderValue([50]);
      setShowFeedback(false);
      setIsCorrect(false);
    }
  };

  const canSubmit = () => {
    if (step.type === "slider") return true;
    return selectedAnswer !== null;
  };

  return (
    <div className="space-y-6">
      {/* Progress Indicator */}
      <div className="flex gap-2">
        {steps.map((_, idx) => (
          <div
            key={idx}
            className={cn(
              "h-2 flex-1 rounded-full transition-all",
              idx < currentStep ? "bg-primary" : idx === currentStep ? "bg-primary/50" : "bg-border"
            )}
          />
        ))}
      </div>

      {/* Question */}
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
            {currentStep + 1}
          </div>
          <h3 className="text-lg font-bold text-foreground mt-1">{step.question}</h3>
        </div>

        {/* Multiple Choice */}
        {step.type === "multiple-choice" && step.options && (
          <div className="space-y-3">
            {step.options.map((option, idx) => (
              <Card
                key={idx}
                className={cn(
                  "cursor-pointer transition-all border-2 hover:border-primary",
                  selectedAnswer === idx && "border-primary bg-primary/5",
                  showFeedback && idx === step.correctAnswer && "border-primary bg-primary/10",
                  showFeedback && selectedAnswer === idx && idx !== step.correctAnswer && "border-destructive bg-destructive/5"
                )}
                onClick={() => !showFeedback && setSelectedAnswer(idx)}
              >
                <CardContent className="p-4 flex items-center gap-3">
                  <div className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                    selectedAnswer === idx ? "border-primary bg-primary" : "border-border"
                  )}>
                    {selectedAnswer === idx && <div className="w-3 h-3 rounded-full bg-primary-foreground" />}
                  </div>
                  <span className="text-foreground">{option}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Slider Question */}
        {step.type === "slider" && step.sliderConfig && (
          <div className="space-y-6 py-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {sliderValue[0]}{step.sliderConfig.label}
              </div>
            </div>
            <Slider
              value={sliderValue}
              onValueChange={setSliderValue}
              min={step.sliderConfig.min}
              max={step.sliderConfig.max}
              step={step.sliderConfig.step}
              className="w-full"
              disabled={showFeedback}
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{step.sliderConfig.min}{step.sliderConfig.label}</span>
              <span>{step.sliderConfig.max}{step.sliderConfig.label}</span>
            </div>
          </div>
        )}

        {/* Visual/Scenario Question */}
        {step.type === "visual" && step.visual && (
          <div className="space-y-4">
            <Card className="bg-accent/30 border-2">
              <CardContent className="pt-6">
                <p className="text-foreground leading-relaxed">{step.visual.scenario}</p>
              </CardContent>
            </Card>
            <div className="grid gap-3">
              {step.visual.choices.map((choice, idx) => (
                <Card
                  key={idx}
                  className={cn(
                    "cursor-pointer transition-all border-2 hover:border-primary",
                    selectedAnswer === idx && "border-primary bg-primary/5",
                    showFeedback && choice.isCorrect && "border-primary bg-primary/10",
                    showFeedback && selectedAnswer === idx && !choice.isCorrect && "border-destructive bg-destructive/5"
                  )}
                  onClick={() => !showFeedback && setSelectedAnswer(idx)}
                >
                  <CardContent className="p-4">
                    <span className="text-foreground font-medium">{choice.label}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Feedback */}
        {showFeedback && (
          <Card className={cn(
            "border-2 animate-fade-in",
            isCorrect ? "border-primary bg-primary/5" : "border-destructive bg-destructive/5"
          )}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                ) : (
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                )}
                <div className="flex-1">
                  <h4 className="font-bold mb-2 text-foreground">
                    {isCorrect ? "Perfect! 🎉" : "Not quite!"}
                  </h4>
                  <p className="text-foreground leading-relaxed">{step.explanation}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          {!showFeedback ? (
            <Button 
              onClick={checkAnswer} 
              disabled={!canSubmit()}
              className="flex-1 gap-2"
              size="lg"
            >
              Check Answer
            </Button>
          ) : isCorrect ? (
            <Button 
              onClick={handleNext} 
              className="flex-1 gap-2"
              size="lg"
            >
              <Sparkles className="w-4 h-4" />
              {isLastStep ? "Complete Quest" : "Continue"}
            </Button>
          ) : (
            <Button 
              onClick={() => {
                setShowFeedback(false);
                setSelectedAnswer(null);
              }} 
              variant="outline"
              className="flex-1"
              size="lg"
            >
              Try Again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveQuiz;
