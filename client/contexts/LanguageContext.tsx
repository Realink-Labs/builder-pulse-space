import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.products": "Products", 
    "nav.solutions": "Solutions",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",
    
    // Hero Section
    "hero.badge": "🌐 Web3 Financial Infrastructure",
    "hero.title1": "Connecting Reality",
    "hero.title2": "to Blockchain Infrastructure",
    "hero.description": "Building RWA tokenization infrastructure that bridges traditional finance with Web3 through secure, compliant solutions.",
    "hero.startTokenizing": "Start Tokenizing",
    "hero.learnMore": "Learn More",
    
    // Stats
    "stats.assetsTokenized": "Assets Tokenized",
    "stats.institutionPartners": "Institution Partners", 
    "stats.uptime": "System Uptime",
    "stats.countries": "Supported Countries",
    
    // Products
    "products.badge": "🚀 Realink Labs Product Ecosystem",
    "products.title1": "Complete RWA",
    "products.title2": "Infrastructure Solutions",
    "products.description": "From asset issuance to trading circulation, Realink Labs provides end-to-end RWA ecosystem, helping institutions and individuals securely and compliantly enter the Web3 world.",
    "products.coreTitle": "Core Products",
    "products.coreSubtitle": "Building Complete",
    "products.coreSubtitle2": "RWA Ecosystem",
    "products.coreDescription": "Five core products forming a complete RWA infrastructure matrix covering the full lifecycle of RWA.",
    "products.viewAll": "View All Products",
    
    // Product Names
    "product.realinkcloud.name": "RealinkCloud",
    "product.realinkcloud.subtitle": "One-stop RWA Issuance & Compliance Management Platform",
    "product.realinkcloud.description": "Asset issuance & registration, portfolio & risk control, KYC/AML compliance modules, API interface for institutional access",
    
    "product.realinkbridge.name": "RealinkBridge", 
    "product.realinkbridge.subtitle": "Cross-chain Asset Channel",
    "product.realinkbridge.description": "Connecting mainstream public chains & layer 2 networks, supporting RWA & stablecoin interoperability, providing asset anchoring & clearing services",
    
    "product.realinkdid.name": "RealinkDID",
    "product.realinkdid.subtitle": "Decentralized Identity & Compliance Certification",
    "product.realinkdid.description": "On-chain decentralized identity (DID), scalable KYC/AML verification, unified identity across Realink ecosystem",
    
    "product.tangiblex.wallet.name": "TangibleX-Pay-Wallet",
    "product.tangiblex.wallet.subtitle": "Multi-chain Asset Wallet & Payment Tool",
    "product.tangiblex.wallet.description": "Supporting multi-chain RWA asset management, multi-sig & MPC security mechanisms, integrated on-chain payment & transfer functions",
    
    "product.tangiblex.market.name": "TangibleX-Market",
    "product.tangiblex.market.subtitle": "RWA Secondary Market", 
    "product.tangiblex.market.description": "Providing on-chain trading & liquidity, P2P trading and institutional matching, integrated price oracles & market data",
    
    // About Section
    "about.badge": "About Realink Labs",
    "about.title1": "Bridging Traditional Finance",
    "about.title2": "& Digital World",
    "about.description": "We're building infrastructure that connects real-world assets with blockchain technology, creating a secure, transparent, and compliant Web3 ecosystem bridge.",
    "about.learnMoreBtn": "Learn More",
    "about.contactSales": "Contact Sales",
    
    // Benefits
    "benefit.compliance": "Regulatory compliant tokenization solutions",
    "benefit.multichain": "Multi-blockchain ecosystem support",
    "benefit.security": "Institutional-grade security standards",
    "benefit.support": "24/7 technical support services",
    "benefit.api": "Complete API interface suite",
    "benefit.analytics": "Real-time analytics dashboard system",
    
    // Features
    "feature.institutional": "Institutional Grade",
    "feature.institutional.desc": "Enterprise security and compliance for large-scale operations.",
    "feature.userFriendly": "User Friendly",
    "feature.userFriendly.desc": "Intuitive interface design making Web3 onboarding simple and understandable.",
    "feature.globalReach": "Global Coverage",
    "feature.globalReach.desc": "Global compliance support for multi-jurisdictional business operations.",
    "feature.scalable": "Scalable",
    "feature.scalable.desc": "Infrastructure that grows with business needs, supporting enterprise scaling.",
    
    // Core Features
    "coreFeatures.badge": "Core Features",
    "coreFeatures.title1": "Built for the Future of",
    "coreFeatures.title2": "Finance",
    "coreFeatures.description": "Our comprehensive platform provides everything needed to tokenize, manage, and scale real-world assets in the digital economy.",
    "coreFeatures.compliance": "Compliance First",
    "coreFeatures.compliance.desc": "Built-in regulatory compliance ensures your tokenized assets meet all legal requirements.",
    "coreFeatures.integration": "Seamless Integration", 
    "coreFeatures.integration.desc": "Easy-to-use APIs and SDKs for rapid deployment into existing financial systems.",
    "coreFeatures.fast": "Lightning Fast",
    "coreFeatures.fast.desc": "High-performance blockchain infrastructure for instant transaction processing.",
    
    // CTA
    "cta.title": "Ready to Transform Your Assets?",
    "cta.description": "Join leading institutions in building the future of finance with secure, compliant real-world asset tokenization.",
    "cta.getStarted": "Get Started Today",
    "cta.scheduleDemo": "Schedule Demo",
  },
  zh: {
    // Navigation
    "nav.home": "首页",
    "nav.products": "产品",
    "nav.solutions": "解决方案", 
    "nav.about": "关于我们",
    "nav.contact": "联系我们",
    "nav.getStarted": "立即开始",
    
    // Hero Section
    "hero.badge": "🌐 Web3 金融���础设施",
    "hero.title1": "连接现实世界",
    "hero.title2": "与区块链的金融基础设施",
    "hero.description": "构建 RWA 代币化基础设施，通过安全合规的解决方案连接传统金融与 Web3。",
    "hero.startTokenizing": "开始代币化",
    "hero.learnMore": "了解更多",
    
    // Stats
    "stats.assetsTokenized": "已代币化资产",
    "stats.institutionPartners": "机构合作伙伴",
    "stats.uptime": "系统可用性",
    "stats.countries": "支持的国家",
    
    // Products
    "products.badge": "🚀 Realink Labs 产品生态",
    "products.title1": "完整的RWA",
    "products.title2": "基础设施解决方案",
    "products.description": "从资产发行到交易流通，Realink Labs提供端到端的RWA生态系统，帮助机构和个人安全、合规地进入Web3世界。",
    "products.coreTitle": "核心产品",
    "products.coreSubtitle": "构建完整的",
    "products.coreSubtitle2": "RWA 生态系统",
    "products.coreDescription": "五大核心产品组成完整的RWA基础设施，从资产发行到交易流通，为您提供端到端的Web3金融解决方案。",
    "products.viewAll": "查看所有产品",
    
    // Product Names
    "product.realinkcloud.name": "RealinkCloud",
    "product.realinkcloud.subtitle": "一站式 RWA 发行与合规管理平台",
    "product.realinkcloud.description": "资产发行与登记、投资组合与风险控制、KYC/AML 合规模块、API 接口支持机构接入",
    
    "product.realinkbridge.name": "RealinkBridge",
    "product.realinkbridge.subtitle": "跨链资产通道", 
    "product.realinkbridge.description": "连接主流公链与二层网络、支持 RWA 与稳定币互通、提供资产锚定与清算服务",
    
    "product.realinkdid.name": "RealinkDID",
    "product.realinkdid.subtitle": "去中心化身份与合规认证",
    "product.realinkdid.description": "链上去中心化身份 (DID)、可扩展的 KYC/AML 验证、跨 Realink 全生态统一身份",
    
    "product.tangiblex.wallet.name": "TangibleX-Pay-Wallet",
    "product.tangiblex.wallet.subtitle": "多链资产钱包与支付工具",
    "product.tangiblex.wallet.description": "支持多链 RWA 资产管理、多签 & MPC 安全机制、集成链上支付与转账功能",
    
    "product.tangiblex.market.name": "TangibleX-Market",
    "product.tangiblex.market.subtitle": "RWA 二级市场",
    "product.tangiblex.market.description": "提供链上交���与流动性、P2P 交易和机构撮合、集成价格预言机与市场数据",
    
    // About Section
    "about.badge": "关于 Realink Labs",
    "about.title1": "桥接传统金融",
    "about.title2": "与数字世界",
    "about.description": "我们正在构建连接现实世界资产与区块链技术的基础设施，创建一个安全、透明、合规的Web3生态系统桥梁。",
    "about.learnMoreBtn": "了解更多",
    "about.contactSales": "联系销售",
    
    // Benefits
    "benefit.compliance": "监管合规的代币化解决方案",
    "benefit.multichain": "多区块链生态系统支持",
    "benefit.security": "机构级安全保障标准",
    "benefit.support": "7x24小时技术支持服务",
    "benefit.api": "完整的API接口套件",
    "benefit.analytics": "实时分析仪表板系统",
    
    // Features
    "feature.institutional": "机构级服务",
    "feature.institutional.desc": "企业级安全性和合规性，支持大规模业务运营。",
    "feature.userFriendly": "用户友好",
    "feature.userFriendly.desc": "直观的界面设计，让Web3入门变得简单易懂。",
    "feature.globalReach": "全球覆盖",
    "feature.globalReach.desc": "全球合规支��，支持多司法管辖区的业务运营。",
    "feature.scalable": "可扩展性",
    "feature.scalable.desc": "随业务需求增长的基础设施，支持企业规模化发展。",
    
    // Core Features
    "coreFeatures.badge": "核心优势",
    "coreFeatures.title1": "为未来金融",
    "coreFeatures.title2": "而构建",
    "coreFeatures.description": "我们的综合平台提供您在数字经济中代币化、管理和扩展现实世界资产所需的一切。",
    "coreFeatures.compliance": "监管合规优先",
    "coreFeatures.compliance.desc": "内置的监管合规确保您的代币化资产满足所有法律要求。",
    "coreFeatures.integration": "无缝集成",
    "coreFeatures.integration.desc": "易于使用的API和SDK，快速部署到现有金融系统中。",
    "coreFeatures.fast": "闪电般快速", 
    "coreFeatures.fast.desc": "高性能区块链基础设施，支持即时交易处理。",
    
    // CTA
    "cta.title": "准备好转换您的资产了吗？",
    "cta.description": "加入领先机构的行列，通过安全、合规的现实世界资产代币化构建金融的未来。",
    "cta.getStarted": "立即开始",
    "cta.scheduleDemo": "预约演示",
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
