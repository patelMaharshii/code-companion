import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, TrendingUp, Users, Heart } from "lucide-react";
import heroImage from "@/assets/hero-home.png";
import Navigation from "@/components/Navigation";

const Home = () => {
  const stories = [
    {
      quote: "If a man can feed you then a man can starve you.",
      author: "Financial Independence Reminder"
    },
    {
      quote: "After divorce, my income dropped 50%—I rebuilt savings from scratch.",
      author: "Real Woman Story"
    },
    {
      quote: "Financial abuse left me penniless; learning to invest changed my life.",
      author: "Survivor & Thriver"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Your Cozy Finance Journey
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Learn Finance,
                <span className="text-primary"> Your Way</span>
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Welcome to FemFinance—a cozy, gamified space where women learn money skills 
                through bite-sized quests, supportive community, and playful tools. 
                Because financial freedom is self-care.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/learning">
                  <Button size="lg" className="gap-2">
                    <Sparkles className="w-4 h-4" />
                    Start Learning
                  </Button>
                </Link>
                <Link to="/girl-math">
                  <Button size="lg" variant="outline" className="gap-2">
                    Try Girl Math
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Woman learning finance in cozy setting" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why FemFinance?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We blend cozy themes with actionable, women-centric financial learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-foreground">Learning Adventure</h3>
                <p className="text-muted-foreground">
                  Progress through cozy finance quests. Learn at your pace, celebrate wins!
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-foreground">Supportive Community</h3>
                <p className="text-muted-foreground">
                  Connect with other women on their finance journey. Share, learn, grow together.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-foreground">Girl Math Tools</h3>
                <p className="text-muted-foreground">
                  Playful calculators that make saving and investing fun and empowering.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stories Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Real Stories, Real Impact
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <Card key={index} className="bg-card border-2">
                <CardContent className="pt-6 space-y-4">
                  <div className="text-lg italic text-foreground">
                    "{story.quote}"
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    — {story.author}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of women learning to take control of their financial future
          </p>
          <Link to="/learning">
            <Button size="lg" variant="secondary" className="gap-2">
              <Sparkles className="w-4 h-4" />
              Begin Your Adventure
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;