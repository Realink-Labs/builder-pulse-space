import { Button } from "@/components/ui/button";
import { Construction, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-6">
          <Construction className="h-16 w-16 text-primary mx-auto mb-4 animate-glow-pulse" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4 bg-gradient-web3 bg-clip-text text-transparent">
          {title}
        </h1>
        
        <p className="text-muted-foreground mb-8">
          {description || "This page is currently under construction. We're working hard to bring you amazing content soon!"}
        </p>
        
        <p className="text-sm text-muted-foreground mb-6">
          Continue prompting to help build out this page's content.
        </p>
        
        <Link to="/">
          <Button className="bg-gradient-web3 hover:opacity-90 transition-opacity">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
