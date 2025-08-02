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
  Bridge,
  Wallet,
  Zap,
  Lock,
  Network,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const products = [
    {
      icon: Cloud,
      name: "RealinkCloud",
      title: "一站式 RWA 发行与合规管理平台",
      description: "资产发行与登记、投资组合与风险控制、KYC/AML 合规模块、API 接口支持机构接入",
      color: "text-crypto-blue",
    },
    {
      icon: Bridge,
      name: "RealinkBridge", 
      title: "跨链资产通道",
      description: "连接主流公链与二层网络、支持 RWA 与稳定币互通、提供资产锚定与清算服务",
      color: "text-crypto-purple",
    },
    {
      icon: Shield,
      name: "RealinkDID",
      title: "去中心化身份与合规认证",
      description: "链上去中心化身份 (DID)、可扩展的 KYC/AML 验证、跨 Realink 全生态统一身份",
      color: "text-crypto-green",
    },
    {
      icon: Wallet,
      name: "TangibleX-Pay-Wallet",
      title: "多链资产钱包与支付工具",
      description: "支持多链 RWA 资产管理、多签 & MPC 安全机制、集成链上支付与转账功能",
      color: "text-crypto-orange",
    },
    {
      icon: TrendingUp,
      name: "TangibleX-Market", 
      title: "RWA 二级市场",
      description: "提供链上交易与流动性、P2P 交易和机构撮合、集成价格预言机与市场数据",
      color: "text-neon-cyan",
    },
  ];

  const benefits = [
    "监管合规的代币化解决方案",
    "多区块链生态系统支持",
    "机构级安全保障标准",
    "7x24小时技术支持服务", 
    "完整的API接口套件",
    "实时分析仪表板系统",
  ];

  const stats = [
    { value: "$2.5B+", label: "已代币化资产" },
    { value: "150+", label: "机构合作伙伴" },
    { value: "99.9%", label: "系统可用性" },
    { value: "50+", label: "支持的国家" },
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
              🌐 Web3 金融基础设施
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-web3 bg-clip-text text-transparent">
                连接现实世界
              </span>
              <br />
              <span className="text-foreground">与区块链的金融基础设施</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Realink Labs 专注于构建 RWA（现实世界资产）代币化与合规生态，
              通过安全、透明、合规的链上产品，帮助机构与个人用户无缝接入 Web3 世界。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-web3 hover:opacity-90 transition-all duration-300 px-8 py-6 text-lg animate-glow-pulse"
              >
                开始代币化
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:border-primary transition-all duration-300 px-8 py-6 text-lg"
              >
                了解更多
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
              核心产品
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              构建完整的
              <span className="bg-gradient-web3 bg-clip-text text-transparent">
                {" "}
                RWA 生态系统
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              五大核心产品组成完整的RWA基础设施，从资产发行到交易流通，
              为您提供端到端的Web3金融解决方案。
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
                查看所有产品
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
                  关于 Realink Labs
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  桥接传统金融
                  <span className="bg-gradient-web3 bg-clip-text text-transparent">
                    {" "}
                    与数字世界
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  我们正在构建连接现实世界资产与区块链技术的基础设施，
                  创建一个安全、透明、合规的Web3生态系统桥梁。
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
                    了解更多
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="border-primary/50 hover:border-primary transition-all duration-300"
                  >
                    联系销售
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-card to-secondary/20 border-primary/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 animate-slide-up">
                  <Building className="h-8 w-8 text-crypto-blue mb-4" />
                  <h3 className="font-semibold mb-2">机构级服务</h3>
                  <p className="text-sm text-muted-foreground">
                    企业级安全性和合规性，支持大规模业务运营。
                  </p>
                </Card>

                <Card
                  className="p-6 bg-gradient-to-br from-card to-secondary/20 border-primary/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 animate-slide-up mt-8"
                  style={{ animationDelay: "0.2s" }}
                >
                  <Users className="h-8 w-8 text-crypto-purple mb-4" />
                  <h3 className="font-semibold mb-2">用户友好</h3>
                  <p className="text-sm text-muted-foreground">
                    直观的界面设计，让Web3入门变得简单易懂。
                  </p>
                </Card>

                <Card
                  className="p-6 bg-gradient-to-br from-card to-secondary/20 border-primary/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 animate-slide-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Network className="h-8 w-8 text-crypto-green mb-4" />
                  <h3 className="font-semibold mb-2">全球覆盖</h3>
                  <p className="text-sm text-muted-foreground">
                    全球合规支持，支持多司法管辖区的业务运营。
                  </p>
                </Card>

                <Card
                  className="p-6 bg-gradient-to-br from-card to-secondary/20 border-primary/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 animate-slide-up mt-8"
                  style={{ animationDelay: "0.6s" }}
                >
                  <BarChart3 className="h-8 w-8 text-crypto-orange mb-4" />
                  <h3 className="font-semibold mb-2">可扩展性</h3>
                  <p className="text-sm text-muted-foreground">
                    随业务需求增长的基础设施，支持企业规模化发展。
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
              核心优势
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              为未来金融
              <span className="bg-gradient-web3 bg-clip-text text-transparent">
                {" "}
                而构建
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              我们的综合平台提供您在数字经济中代币化、管理和扩展现实世界资产所需的一切。
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
                  监管合规优先
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  内置的监管合规确保您的代币化资产满足所有法律要求。
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
                  无缝集成
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  易于使用的API和SDK，快速部署到现有金融系统中。
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
                  闪电般快速
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  高性能区块链基础设施，支持即时交易处理。
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
            准备好转换您的资产了吗？
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            加入领先机构的行列，通过安全、合规的现实世界资产代币化构建金融的未来。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 px-8 py-6 text-lg"
            >
              立即开始
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 px-8 py-6 text-lg"
            >
              预约演示
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
