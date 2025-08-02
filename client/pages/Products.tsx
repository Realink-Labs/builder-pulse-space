import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Cloud,
  Link as LinkIcon,
  Shield,
  Wallet,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Database,
  Globe,
  Lock,
  Users,
  BarChart3,
  Zap,
  Building,
  Coins,
  Network,
  Key,
  CreditCard,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    {
      id: "realinkcloud",
      name: "RealinkCloud",
      subtitle: "一站式 RWA 发行与合规管理平台",
      description: "为机构提供完整的RWA资产发行、管理和合规解决方案，支持全流程数字化操作。",
      icon: Cloud,
      color: "text-crypto-blue",
      bgGradient: "from-crypto-blue/10 to-crypto-purple/10",
      features: [
        "资产发行与登记",
        "投资组合与风险控制", 
        "KYC/AML 合规��块",
        "API 接口支持机构接入"
      ],
      benefits: [
        "降低发行成本70%",
        "提升合规效率5倍",
        "支持50+资产类型",
        "99.9%系统可用性"
      ]
    },
    {
      id: "realinkbridge", 
      name: "RealinkBridge",
      subtitle: "跨链资产通道",
      description: "连接传统金融与区块链世界，实现RWA资产的无缝跨链流通和价值传递。",
      icon: Bridge,
      color: "text-crypto-purple",
      bgGradient: "from-crypto-purple/10 to-neon-cyan/10",
      features: [
        "连接主流公链与二层网络",
        "支持 RWA 与稳定币互通",
        "提供资产锚定与清算服务",
        "实时跨链状态监控"
      ],
      benefits: [
        "支持15+主流区块链",
        "跨链手续费最低0.1%",
        "平均跨链时间<5分钟", 
        "资产安全保障100%"
      ]
    },
    {
      id: "realinkdid",
      name: "RealinkDID", 
      subtitle: "去中心化身份与合规认证",
      description: "基于区块链的去中心化身份系统，提供可信的KYC/AML验证和跨生态身份管理。",
      icon: Shield,
      color: "text-crypto-green",
      bgGradient: "from-crypto-green/10 to-crypto-blue/10",
      features: [
        "链上去中心化身份 (DID)",
        "可扩展的 KYC/AML 验证",
        "跨 Realink 全生态统一身份",
        "隐私保护身份验证"
      ],
      benefits: [
        "验证时间从3天缩短到5分钟",
        "隐私数据零泄露风险",
        "支持200+国家地区合规",
        "身份可信度99.8%"
      ]
    },
    {
      id: "tangiblex-pay-wallet",
      name: "TangibleX-Pay-Wallet",
      subtitle: "多链资产钱包与支付工具", 
      description: "企业级多链数字资产钱包，支持RWA资产管理、多签安全和便捷支付功能。",
      icon: Wallet,
      color: "text-crypto-orange",
      bgGradient: "from-crypto-orange/10 to-crypto-purple/10",
      features: [
        "支持多链 RWA 资产管理",
        "多签 & MPC 安全机制",
        "集成链上支付与转账功能",
        "企业级账户管理"
      ],
      benefits: [
        "管理20+链的数字资产",
        "军用级加密安全标准",
        "支付成功率99.95%",
        "API调用响应<100ms"
      ]
    },
    {
      id: "tangiblex-market",
      name: "TangibleX-Market",
      subtitle: "RWA 二级市场",
      description: "专业的RWA资产交易平台，提供流动性支持、价格发现和机构级撮合服务。",
      icon: TrendingUp,
      color: "text-neon-cyan", 
      bgGradient: "from-neon-cyan/10 to-crypto-green/10",
      features: [
        "提供链上交易与流动性",
        "P2P 交易和机构撮合",
        "集成价格预言机与市场数据",
        "���能合约自动结算"
      ],
      benefits: [
        "日交易量突破$50M",
        "流动性深度行业领先",
        "交易手续费低至0.05%",
        "24/7不间断交易服务"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20 py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-cyber opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-crypto-blue/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-web3 text-white border-0 px-4 py-2">
              🚀 Realink Labs 产品生态
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-web3 bg-clip-text text-transparent">
                完整的RWA
              </span>
              <br />
              <span className="text-foreground">基础设施解决方案</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              从资产发行到交易流通，Realink Labs提供端到端的RWA生态系统，
              帮助机构和个人安全、合规地进入Web3世界。
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-32 bg-card/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              五大核心产品
              <span className="bg-gradient-web3 bg-clip-text text-transparent">
                {" "}完整���态
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              覆盖RWA全生命周期的专业产品矩阵
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className={`group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 border-border/50 hover:border-primary/50 bg-gradient-to-br ${product.bgGradient} backdrop-blur-sm ${
                  index === products.length - 1 && products.length % 2 !== 0 
                    ? "lg:col-span-2 lg:max-w-2xl lg:mx-auto" 
                    : ""
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`inline-flex p-3 rounded-xl bg-secondary/50 group-hover:bg-primary/10 transition-colors duration-300`}>
                      <product.icon className={`h-8 w-8 ${product.color} group-hover:animate-glow-pulse transition-all duration-300`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                        {product.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground font-medium">
                        {product.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">核心功能</h4>
                    <div className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-crypto-green" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">核心优势</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.benefits.map((benefit, idx) => (
                        <Badge key={idx} variant="secondary" className="justify-start text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full bg-gradient-web3 hover:opacity-90 transition-opacity">
                      了解更多 {product.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-crypto-blue/5"></div>
        
        <div className="relative container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-web3 text-white border-0">
              生态协同
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              产品间无缝
              <span className="bg-gradient-web3 bg-clip-text text-transparent">
                {" "}集成协作
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              五大产品相互配合，形成完整的RWA生态闭环，为用户提供一站式解决方案。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-card to-secondary/20 border-primary/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500">
              <Database className="h-12 w-12 text-crypto-blue mb-6" />
              <h3 className="text-xl font-semibold mb-4">资产发行</h3>
              <p className="text-muted-foreground">
                RealinkCloud + RealinkDID 联合提供合规的资产发行和身份验证服务
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-card to-secondary/20 border-primary/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500">
              <Network className="h-12 w-12 text-crypto-purple mb-6" />
              <h3 className="text-xl font-semibold mb-4">跨链流通</h3>
              <p className="text-muted-foreground">
                RealinkBridge + TangibleX-Pay-Wallet 实现多链资产管理和跨链转移
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-card to-secondary/20 border-primary/20 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500">
              <BarChart3 className="h-12 w-12 text-crypto-green mb-6" />
              <h3 className="text-xl font-semibold mb-4">交易变现</h3>
              <p className="text-muted-foreground">
                TangibleX-Market 提供流动性支持，实现RWA资产的高效交易
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-web3 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            开始您的RWA之旅
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            选择最适合您需求的产品，或联系我们的专家团队为您定制完整解决方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 px-8 py-6 text-lg"
            >
              免费试用
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 px-8 py-6 text-lg"
              >
                咨询专家
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
