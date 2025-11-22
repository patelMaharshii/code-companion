import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingUp, Sparkles, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import calculatorIcon from "@/assets/calculator-icon.png";
import piggyBank from "@/assets/piggy-bank.png";

const GirlMath = () => {
  const [originalPrice, setOriginalPrice] = useState("99.99");
  const [discountPercent, setDiscountPercent] = useState("20");
  const [result, setResult] = useState<{
    saved: number;
    invested: number;
    futureValue: number;
  } | null>(null);

  const calculateGirlMath = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercent);

    if (isNaN(price) || isNaN(discount) || price <= 0 || discount <= 0 || discount > 100) {
      return;
    }

    const saved = price * (discount / 100);
    const invested = saved * 0.1; // 10% "virtually invested"
    const futureValue = invested * Math.pow(1.08, 10); // 8% annual return over 10 years

    setResult({
      saved: saved,
      invested: invested,
      futureValue: futureValue
    });
  };

  const motivationalMessages = [
    "You're investing in yourself! 💜",
    "Saving is winning! 🏆",
    "That's not spending, that's smart money moves! ✨",
    "Financial self-care is the best self-care! 💅",
  ];

  const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <img src={calculatorIcon} alt="Calculator" className="w-16 h-16" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Girl Math Calculator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            That discount isn't just savings—it's a virtual investment in your future! 
            Let's calculate your smart money moves.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Card */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" />
                Calculate Your Savings
              </CardTitle>
              <CardDescription>
                Enter the original price and discount percentage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="price">Original Price ($)</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="99.99"
                  value={originalPrice}
                  onChange={(e) => setOriginalPrice(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="discount">Discount (%)</Label>
                <Input
                  id="discount"
                  type="number"
                  placeholder="20"
                  value={discountPercent}
                  onChange={(e) => setDiscountPercent(e.target.value)}
                />
              </div>

              <Button 
                onClick={calculateGirlMath} 
                className="w-full gap-2"
                size="lg"
              >
                <Sparkles className="w-4 h-4" />
                Calculate Girl Math
              </Button>
            </CardContent>
          </Card>

          {/* Results Card */}
          <Card className="border-2 bg-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Your Smart Money Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-6">
                  <div className="text-center py-4">
                    <img src={piggyBank} alt="Piggy Bank" className="w-24 h-24 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">
                      ${result.saved.toFixed(2)}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Saved!</div>
                  </div>

                  <div className="space-y-4">
                    <Card className="bg-card border-primary border-2">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">Virtually Invested</span>
                          <span className="text-lg font-bold text-primary">
                            ${result.invested.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          10% of your savings
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-card border-primary border-2">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">Future Value (10 years)</span>
                          <span className="text-lg font-bold text-primary">
                            ${result.futureValue.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          At 8% annual S&P 500 return
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-primary text-primary-foreground border-0">
                    <CardContent className="pt-6 text-center">
                      <Heart className="w-8 h-8 mx-auto mb-3" />
                      <p className="font-medium">{randomMessage}</p>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calculator className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <p className="text-muted-foreground">
                    Enter a price and discount to see your girl math breakdown!
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Info Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="border-2 bg-accent/20">
            <CardHeader>
              <CardTitle>Why Girl Math Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                Girl Math is about reframing your relationship with money. When you score a discount, 
                you're not just spending less—you're demonstrating financial savvy!
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Every discount is a win that builds your confidence</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Thinking about investing those savings makes it real</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Small amounts invested regularly create massive long-term growth</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GirlMath;
