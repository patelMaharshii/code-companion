import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Clock, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import { articles } from "@/data/articles";

const Article = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  
  const article = articleId ? articles[articleId] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Button onClick={() => navigate("/learning")}>
            Back to Learning
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button 
          variant="ghost" 
          className="mb-6 gap-2"
          onClick={() => navigate("/learning")}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Learning
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {article.title}
          </h1>
        </div>

        <Card className="border-2">
          <CardContent className="pt-6 prose prose-lg max-w-none">
            {article.content.map((section, index) => {
              switch (section.type) {
                case "intro":
                  return (
                    <p key={index} className="text-xl text-muted-foreground leading-relaxed mb-8">
                      {section.text}
                    </p>
                  );
                case "heading":
                  return (
                    <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                      {section.text}
                    </h2>
                  );
                case "paragraph":
                  return (
                    <p key={index} className="text-foreground leading-relaxed mb-6">
                      {section.text}
                    </p>
                  );
                case "list":
                  return (
                    <ul key={index} className="space-y-3 mb-6 ml-6">
                      {section.items?.map((item, i) => (
                        <li key={i} className="text-foreground leading-relaxed">
                          <strong>{item.split(':')[0]}:</strong>
                          {item.split(':').slice(1).join(':')}
                        </li>
                      ))}
                    </ul>
                  );
                case "callout":
                  return (
                    <div key={index} className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
                      <p className="text-foreground font-medium flex items-start gap-3">
                        <Star className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span>{section.text}</span>
                      </p>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-center">
          <Button size="lg" onClick={() => navigate("/learning")}>
            Continue Learning
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Article;