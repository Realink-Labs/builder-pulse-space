import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  CheckCircle,
  ArrowRight,
  Building,
  Users,
  TrendingUp,
  Cloud,
  Link as LinkIcon,
  Wallet,
  Zap,
  Lock,
  Network,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Index() {
  const { t } = useLanguage();

  const products = [
    {
      icon: Cloud,
      name: t("product.realinkcloud.name"),
      title: t("product.realinkcloud.subtitle"),
      description: t("product.realinkcloud.description"),
      color: "text-crypto-blue",
    },
    {
      icon: LinkIcon,
      name: t("product.realinkbridge.name"),
      title: t("product.realinkbridge.subtitle"),
      description: t("product.realinkbridge.description"),
      color: "text-crypto-purple",
    },
    {
      icon: Shield,
      name: t("product.realinkdid.name"),
      title: t("product.realinkdid.subtitle"),
      description: t("product.realinkdid.description"),
      color: "text-crypto-green",
    },
    {
      icon: Wallet,
      name: t("product.tangiblex.wallet.name"),
      title: t("product.tangiblex.wallet.subtitle"),
      description: t("product.tangiblex.wallet.description"),
      color: "text-crypto-orange",
    },
    {
      icon: TrendingUp,
      name: t("product.tangiblex.market.name"),
      title: t("product.tangiblex.market.subtitle"),
      description: t("product.tangiblex.market.description"),
      color: "text-neon-cyan",
    },
  ];

  const benefits = [
    t("benefit.compliance"),
    t("benefit.multichain"),
    t("benefit.security"),
    t("benefit.support"),
    t("benefit.api"),
    t("benefit.analytics"),
  ];

  const stats = [
    { value: "$2.5B+", label: t("stats.assetsTokenized") },
    { value: "150+", label: t("stats.institutionPartners") },
    { value: "99.9%", label: t("stats.uptime") },
    { value: "50+", label: t("stats.countries") },
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
              {t("hero.badge")}
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-web3 bg-clip-text text-transparent">
                {t("hero.title1")}
              </span>
              <br />
              <span className="text-foreground">{t("hero.title2")}</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-web3 hover:opacity-90 transition-all duration-300 px-8 py-6 text-lg animate-glow-pulse"
              >
                {t("hero.startTokenizing")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:border-primary transition-all duration-300 px-8 py-6 text-lg"
              >
                {t("hero.learnMore")}
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

      {/* Products Overview Section */}
      <section className="py-20 lg:py-32 bg-card/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              {t("products.coreTitle")}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t("products.coreSubtitle")}
              <span className="bg-gradient-web3 bg-clip-text text-transparent">
                {" "}
                {t("products.coreSubtitle2")}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("products.coreDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border-border/50 hover:border-primary/50 bg-card/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-secondary/50 group-hover:bg-primary/10 transition-colors duration-300`}
                    >
                      <product.icon
                        className={`h-8 w-8 ${product.color} group-hover:animate-glow-pulse transition-all duration-300`}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>
                    <h4 className="text-sm font-medium text-primary mb-3">
                      {product.title}
                    </h4>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button className="bg-gradient-web3 hover:opacity-90 transition-opacity px-8 py-6 text-lg">
                {t("products.viewAll")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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
                  {t("about.badge")}
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  {t("about.title1")}
                  <span className="bg-gradient-web3 bg-clip-text text-transparent">
                    {" "}
                    {t("about.title2")}
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t("about.description")}
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
                    {t("about.learnMoreBtn")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="border-primary/50 hover:border-primary transition-all duration-300"
                  >
                    {t("about.contactSales")}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-card to-secondary/20 border-primary/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 animate-slide-up">
                  <Building className="h-8 w-8 text-crypto-blue mb-4" />
                  <h3 className="font-semibold mb-2">
                    {t("feature.institutional")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("feature.institutional.desc")}
                  </p>
                </Card>

                <Card
                  className="p-6 bg-gradient-to-br from-card to-secondary/20 border-primary/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 animate-slide-up mt-8"
                  style={{ animationDelay: "0.2s" }}
                >
                  <Users className="h-8 w-8 text-crypto-purple mb-4" />
                  <h3 className="font-semibold mb-2">
                    {t("feature.userFriendly")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("feature.userFriendly.desc")}
                  </p>
                </Card>

                <Card
                  className="p-6 bg-gradient-to-br from-card to-secondary/20 border-primary/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 animate-slide-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Network className="h-8 w-8 text-crypto-green mb-4" />
                  <h3 className="font-semibold mb-2">
                    {t("feature.globalReach")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("feature.globalReach.desc")}
                  </p>
                </Card>

                <Card
                  className="p-6 bg-gradient-to-br from-card to-secondary/20 border-primary/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 animate-slide-up mt-8"
                  style={{ animationDelay: "0.6s" }}
                >
                  <BarChart3 className="h-8 w-8 text-crypto-orange mb-4" />
                  <h3 className="font-semibold mb-2">
                    {t("feature.scalable")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("feature.scalable.desc")}
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 lg:py-32 bg-card/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">
              {t("coreFeatures.badge")}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t("coreFeatures.title1")}
              <span className="bg-gradient-web3 bg-clip-text text-transparent">
                {" "}
                {t("coreFeatures.title2")}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("coreFeatures.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border-border/50 hover:border-primary/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="inline-flex p-3 rounded-xl bg-secondary/50 group-hover:bg-primary/10 transition-colors duration-300">
                    <Lock className="h-8 w-8 text-crypto-green group-hover:animate-glow-pulse transition-all duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {t("coreFeatures.compliance")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("coreFeatures.compliance.desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border-border/50 hover:border-primary/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="inline-flex p-3 rounded-xl bg-secondary/50 group-hover:bg-primary/10 transition-colors duration-300">
                    <Network className="h-8 w-8 text-crypto-purple group-hover:animate-glow-pulse transition-all duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {t("coreFeatures.integration")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("coreFeatures.integration.desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border-border/50 hover:border-primary/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="inline-flex p-3 rounded-xl bg-secondary/50 group-hover:bg-primary/10 transition-colors duration-300">
                    <Zap className="h-8 w-8 text-crypto-blue group-hover:animate-glow-pulse transition-all duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {t("coreFeatures.fast")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("coreFeatures.fast.desc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-web3 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 px-8 py-6 text-lg"
            >
              {t("cta.getStarted")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 px-8 py-6 text-lg"
            >
              {t("cta.scheduleDemo")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
