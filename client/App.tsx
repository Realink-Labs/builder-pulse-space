import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import { Layout } from "./components/Layout";
import { PlaceholderPage } from "./components/PlaceholderPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/solutions"
              element={
                <PlaceholderPage
                  title="Solutions"
                  description="Discover how Realink Labs can transform your business with Web3 infrastructure."
                />
              }
            />
            <Route
              path="/about"
              element={
                <PlaceholderPage
                  title="About Us"
                  description="Learn more about our mission to bridge real-world assets with blockchain technology."
                />
              }
            />
            <Route
              path="/contact"
              element={
                <PlaceholderPage
                  title="Contact Us"
                  description="Get in touch with our team to discuss your Web3 infrastructure needs."
                />
              }
            />
            <Route
              path="/tokenization"
              element={
                <PlaceholderPage
                  title="RWA Tokenization"
                  description="Transform real-world assets into compliant digital tokens."
                />
              }
            />
            <Route
              path="/compliance"
              element={
                <PlaceholderPage
                  title="Compliance Suite"
                  description="Ensure regulatory compliance across all your Web3 operations."
                />
              }
            />
            <Route
              path="/api"
              element={
                <PlaceholderPage
                  title="Developer API"
                  description="Integrate Realink Labs services into your applications."
                />
              }
            />
            <Route
              path="/analytics"
              element={
                <PlaceholderPage
                  title="Analytics"
                  description="Deep insights into your tokenized assets and transactions."
                />
              }
            />
            <Route
              path="/institutional"
              element={
                <PlaceholderPage
                  title="Institutional Solutions"
                  description="Enterprise-grade Web3 infrastructure for institutions."
                />
              }
            />
            <Route
              path="/retail"
              element={
                <PlaceholderPage
                  title="Retail Solutions"
                  description="User-friendly Web3 access for individual investors."
                />
              }
            />
            <Route
              path="/developers"
              element={
                <PlaceholderPage
                  title="Developer Resources"
                  description="Tools and documentation for building on Realink Labs."
                />
              }
            />
            <Route
              path="/partners"
              element={
                <PlaceholderPage
                  title="Partner Program"
                  description="Join our ecosystem of Web3 infrastructure partners."
                />
              }
            />
            <Route
              path="/docs"
              element={
                <PlaceholderPage
                  title="Documentation"
                  description="Comprehensive guides and API references."
                />
              }
            />
            <Route
              path="/whitepaper"
              element={
                <PlaceholderPage
                  title="Whitepaper"
                  description="Technical deep-dive into our RWA tokenization protocol."
                />
              }
            />
            <Route
              path="/blog"
              element={
                <PlaceholderPage
                  title="Blog"
                  description="Latest insights and updates from the Realink Labs team."
                />
              }
            />
            <Route
              path="/support"
              element={
                <PlaceholderPage
                  title="Support"
                  description="Get help with our products and services."
                />
              }
            />
            <Route
              path="/careers"
              element={
                <PlaceholderPage
                  title="Careers"
                  description="Join our mission to revolutionize financial infrastructure."
                />
              }
            />
            <Route
              path="/press"
              element={
                <PlaceholderPage
                  title="Press"
                  description="Latest news and media coverage about Realink Labs."
                />
              }
            />
            <Route
              path="/privacy"
              element={
                <PlaceholderPage
                  title="Privacy Policy"
                  description="How we protect and handle your personal information."
                />
              }
            />
            <Route
              path="/terms"
              element={
                <PlaceholderPage
                  title="Terms of Service"
                  description="Terms and conditions for using Realink Labs services."
                />
              }
            />
            <Route
              path="/cookies"
              element={
                <PlaceholderPage
                  title="Cookie Policy"
                  description="Information about our use of cookies and tracking technologies."
                />
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
