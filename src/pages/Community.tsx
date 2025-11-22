import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Calendar, Plus } from "lucide-react";
import Navigation from "@/components/Navigation";
import NewPostDialog from "@/components/NewPostDialog";

interface Post {
  id: number;
  title: string;
  preview: string;
  author: string;
  category: string;
  replies: number;
  timestamp: string;
}

const Community = () => {
  const [showNewPost, setShowNewPost] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Just started my emergency fund!",
      preview: "After completing the Emergency Fund quest, I opened a high-yield savings account and made my first deposit. Feeling so empowered! 💪",
      author: "SunbeamSaver23",
      category: "General",
      replies: 12,
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      title: "Best investment apps for beginners?",
      preview: "I want to start investing but feeling overwhelmed by all the options. What apps do you recommend for someone just starting out?",
      author: "MintMover",
      category: "Advice",
      replies: 24,
      timestamp: "5 hours ago"
    },
    {
      id: 3,
      title: "Budgeting with irregular income?",
      preview: "I'm a freelancer and my income varies month to month. How do you budget when you don't have a steady paycheck?",
      author: "HedgehogHolder",
      category: "Advice",
      replies: 18,
      timestamp: "1 day ago"
    },
    {
      id: 4,
      title: "Celebrating: Paid off my credit card!",
      preview: "It took 8 months but I finally paid off my $3,000 credit card debt! This community gave me so much motivation. Thank you all! 🎉",
      author: "FinancialPhoenix",
      category: "General",
      replies: 45,
      timestamp: "1 day ago"
    },
  ]);

  const addPost = (post: Omit<Post, "id" | "replies" | "timestamp">) => {
    const newPost = {
      ...post,
      id: posts.length + 1,
      replies: 0,
      timestamp: "Just now"
    };
    setPosts([newPost, ...posts]);
  };

  const generalPosts = posts.filter(p => p.category === "General");
  const advicePosts = posts.filter(p => p.category === "Advice");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Community Hub
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Connect, share experiences, and support each other on this journey
          </p>

          {/* Featured Event Banner */}
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Calendar className="w-12 h-12 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">Upcoming: Financial Freedom AMA</h3>
                  <p className="opacity-90">Join certified financial planner Sarah Chen this Friday at 3 PM EST</p>
                </div>
                <Button variant="secondary" size="sm">
                  RSVP
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Forum Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="all">All Posts</TabsTrigger>
              <TabsTrigger value="general">General Discussion</TabsTrigger>
              <TabsTrigger value="advice">Advice & Q&A</TabsTrigger>
            </TabsList>
            
            <Button onClick={() => setShowNewPost(true)} className="gap-2">
              <Plus className="w-4 h-4" />
              New Post
            </Button>
          </div>

          <TabsContent value="all" className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id} className="hover:border-primary transition-all cursor-pointer border-2">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground">{post.timestamp}</span>
                      </div>
                      <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                      <CardDescription className="text-base">{post.preview}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Posted by {post.author}</span>
                    <div className="flex items-center gap-2 text-primary">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.replies} replies</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="general" className="space-y-4">
            {generalPosts.map((post) => (
              <Card key={post.id} className="hover:border-primary transition-all cursor-pointer border-2">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.timestamp}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.preview}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Posted by {post.author}</span>
                    <div className="flex items-center gap-2 text-primary">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.replies} replies</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="advice" className="space-y-4">
            {advicePosts.map((post) => (
              <Card key={post.id} className="hover:border-primary transition-all cursor-pointer border-2">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.timestamp}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.preview}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Posted by {post.author}</span>
                    <div className="flex items-center gap-2 text-primary">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.replies} replies</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      <NewPostDialog 
        open={showNewPost} 
        onClose={() => setShowNewPost(false)}
        onSubmit={addPost}
      />
    </div>
  );
};

export default Community;
