import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Coins,
  Building,
  Users,
  Lock,
  BarChart3,
  Network,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const features = [
    {
      icon: Coins,
      title: "RWA Tokenization",
      description:
        "Transform real-world assets into compliant digital tokens with our cutting-edge infrastructure.",
      color: "text-crypto-blue",
    },
    {
      icon: Shield,
      title: "Compliance First",
      description:
        "Built-in regulatory compliance ensures your tokenized assets meet all legal requirements.",
      color: "text-crypto-green",
    },
    {
      icon: Network,
      title: "Seamless Integration",
      description:
        "Easy-to-use APIs and SDKs for rapid deployment into existing financial systems.",
      color: "text-crypto-purple",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Real-time insights and reporting for comprehensive asset management and tracking.",
      color: "text-crypto-orange",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description:
        "Bank-grade security protocols protect your assets and user data at every level.",
      color: "text-neon-cyan",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "High-performance blockchain infrastructure for instant transaction processing.",
      color: "text-crypto-blue",
    },
  ];

  const benefits = [
    "Regulatory compliant tokenization",
    "Multi-blockchain support",
    "Institutional-grade security",
    "24/7 technical support",
    "Comprehensive API suite",
    "Real-time analytics dashboard",
  ];

  const stats = [
    { value: "$2.5B+", label: "Assets Tokenized" },
    { value: "150+", label: "Institution Partners" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "50+", label: "Supported Countries" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="absolute inset-0 bg-gradient-cyber opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-crypto-blue/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 lg:px-6 py-20 lg:py-32">
          <div className="text-center max-w-5xl mx-auto">
            <Badge className="mb-6 bg-gradient-web3 text-white border-0 px-4 py-2">
              🌐 Web3 Financial Infrastructure
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-web3 bg-clip-text text-transparent">
                Connecting Reality
              </span>
              <br />
              <span className="text-foreground">to Blockchain</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Realink Labs specializes in building RWA (Real World Assets)
              tokenization and compliance ecosystems, helping institutions and
              individuals seamlessly access the Web3 world through secure,
              transparent, and compliant on-chain solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-web3 hover:opacity-90 transition-all duration-300 px-8 py-6 text-lg animate-glow-pulse"
              >
                Start Tokenizing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:border-primary transition-all duration-300 px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-web3 bg-clip-text text-transparent group-hover:animate-glow-pulse transition-all duration-300">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm md:text-base mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-card/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              Core Features
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Built for the Future of
              <span className="bg-gradient-web3 bg-clip-text text-transparent">
                {" "}
                Finance
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform provides everything you need to
              tokenize, manage, and scale real-world assets in the digital
              economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border-border/50 hover:border-primary/50 bg-card/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-secondary/50 group-hover:bg-primary/10 transition-colors duration-300`}
                    >
                      <feature.icon
                        className={`h-8 w-8 ${feature.color} group-hover:animate-glow-pulse transition-all duration-300`}
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-crypto-blue/5"></div>

        <div className="relative container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-gradient-web3 text-white border-0">
                  About Realink Labs
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Bridging Traditional
                  <span className="bg-gradient-web3 bg-clip-text text-transparent">
                    {" "}
                    & Digital
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We're pioneering the infrastructure that connects real-world
                  assets with blockchain technology, creating a secure,
                  transparent, and compliant bridge to the Web3 ecosystem.
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group"
                  >
                    <CheckCircle className="h-5 w-5 text-crypto-green group-hover:animate-glow-pulse transition-all duration-300" />
                    <span className="text-foreground group-hover:text-primary transition-colors duration-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about">
                  <Button className="bg-gradient-web3 hover:opacity-90 transition-opacity">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="border-primary/50 hover:border-primary transition-all duration-300"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-card to-secondary/20 border-primary/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 animate-slide-up">
                  <Building className="h-8 w-8 text-crypto-blue mb-4" />
                  <h3 className="font-semibold mb-2">Institutional Grade</h3>
                  <p className="text-sm text-muted-foreground">
                    Enterprise security and compliance for large-scale
                    operations.
                  </p>
                </Card>

                <Card
                  className="p-6 bg-gradient-to-br from-card to-secondary/20 border-primary/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 animate-slide-up mt-8"
                  style={{ animationDelay: "0.2s" }}
                >
                  <Users className="h-8 w-8 text-crypto-purple mb-4" />
                  <h3 className="font-semibold mb-2">User Friendly</h3>
                  <p className="text-sm text-muted-foreground">
                    Intuitive interfaces for seamless Web3 onboarding.
                  </p>
                </Card>

                <Card
                  className="p-6 bg-gradient-to-br from-card to-secondary/20 border-primary/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 animate-slide-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Globe className="h-8 w-8 text-crypto-green mb-4" />
                  <h3 className="font-semibold mb-2">Global Reach</h3>
                  <p className="text-sm text-muted-foreground">
                    Worldwide compliance and multi-jurisdictional support.
                  </p>
                </Card>

                <Card
                  className="p-6 bg-gradient-to-br from-card to-secondary/20 border-primary/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 animate-slide-up mt-8"
                  style={{ animationDelay: "0.6s" }}
                >
                  <TrendingUp className="h-8 w-8 text-crypto-orange mb-4" />
                  <h3 className="font-semibold mb-2">Scalable</h3>
                  <p className="text-sm text-muted-foreground">
                    Infrastructure that grows with your business needs.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-web3 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Assets?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join leading institutions in building the future of finance with
            secure, compliant real-world asset tokenization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 px-8 py-6 text-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 px-8 py-6 text-lg"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
