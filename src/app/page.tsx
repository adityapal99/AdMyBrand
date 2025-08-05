"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Card, Modal, Input, Badge } from "../components/ui";
import { FeatureIcon } from "../components/landing";

// Main Landing Page
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: "ai",
      title: "AI-Powered Content Creation",
      description: "Generate compelling copy, images, and videos with advanced AI algorithms"
    },
    {
      icon: "analytics",
      title: "Smart Analytics Dashboard",
      description: "Track performance with real-time insights and predictive analytics"
    },
    {
      icon: "automation",
      title: "Automated Campaign Management",
      description: "Set up and optimize campaigns automatically with intelligent workflows"
    },
    {
      icon: "design",
      title: "Brand Design Tools",
      description: "Create stunning visuals with AI-assisted design templates"
    },
    {
      icon: "social",
      title: "Multi-Platform Publishing",
      description: "Publish to all social platforms from one unified dashboard"
    },
    {
      icon: "email",
      title: "Email Marketing Automation",
      description: "Build engaging email sequences with personalized content"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "AI Content Generation (50/month)",
        "Basic Analytics",
        "3 Social Media Platforms",
        "Email Templates",
        "Basic Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "AI Content Generation (200/month)",
        "Advanced Analytics",
        "All Social Media Platforms",
        "Custom Email Sequences",
        "Priority Support",
        "Team Collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited AI Content Generation",
        "Custom Analytics Dashboard",
        "API Access",
        "White-label Solutions",
        "Dedicated Account Manager",
        "Custom Integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      image: "👩‍💼",
      quote: "ADmyBRAND AI Suite transformed our marketing strategy. Our engagement rates increased by 300% in just 3 months!"
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "StartupXYZ",
      image: "👨‍💻",
      quote: "The AI-powered content creation saves us hours every week. It's like having a full marketing team in one tool."
    },
    {
      name: "Emily Rodriguez",
      role: "Social Media Manager",
      company: "Creative Agency",
      image: "👩‍🎨",
      quote: "The automation features are incredible. I can focus on strategy while the AI handles the repetitive tasks."
    }
  ];

  const faqs = [
    {
      question: "How does the AI content generation work?",
      answer: "Our AI analyzes your brand voice, target audience, and industry trends to create personalized content that resonates with your audience. It learns from your feedback to improve over time."
    },
    {
      question: "Can I integrate with my existing tools?",
      answer: "Yes! ADmyBRAND AI Suite integrates with popular platforms like Shopify, Mailchimp, HubSpot, and more. We also offer API access for custom integrations."
    },
    {
      question: "Is there a free trial available?",
      answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to start."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 customer support via chat, email, and phone. Enterprise customers get a dedicated account manager."
    },
    {
      question: "How secure is my data?",
      answer: "We use enterprise-grade security with end-to-end encryption. Your data is stored securely and never shared with third parties."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 glass backdrop-blur-md border-b border-glass-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold gradient-text">ADmyBRAND</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
              <a href="#resources" className="text-foreground hover:text-primary transition-colors">Resources</a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Transform Your{" "}
              <span className="gradient-text">Marketing</span>
              <br />
              with AI Power
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Create stunning campaigns, automate workflows, and boost your brand's success with our AI-powered marketing suite.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" onClick={() => setIsModalOpen(true)}>
                  Start Free Trial
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Hero Image/Video Placeholder */}
          <motion.div 
            className="mt-16 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            <Card variant="glass" className="rounded-3xl p-8 max-w-4xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0">
                  <motion.div 
                    className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div 
                    className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/20 rounded-full"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.6, 0.2]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  <motion.div 
                    className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-primary/40 rounded-full"
                    animate={{ 
                      scale: [1, 2, 1],
                      opacity: [0.4, 1, 0.4]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                  <motion.div 
                    className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary/25 rounded-full"
                    animate={{ 
                      scale: [1, 1.4, 1],
                      opacity: [0.25, 0.7, 0.25]
                    }}
                    transition={{ 
                      duration: 2.2, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3
                    }}
                  />
                </div>
                
                {/* Main demo content */}
                <motion.div 
                  className="text-center relative z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <motion.div 
                    className="text-6xl mb-4"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🚀
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                  >
                    Interactive Demo
                  </motion.h3>
                  <motion.p 
                    className="text-lg text-muted mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                  >
                    Experience the power of AI-driven marketing
                  </motion.p>
                  <motion.div 
                    className="flex justify-center space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                  >
                    <motion.div 
                      className="w-3 h-3 bg-primary rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div 
                      className="w-3 h-3 bg-primary/60 rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.2
                      }}
                    />
                    <motion.div 
                      className="w-3 h-3 bg-primary/40 rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.4
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need to{" "}
              <span className="gradient-text">Succeed</span>
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Powerful AI tools designed to streamline your marketing workflow and drive results.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card variant="glass" className="text-center">
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <FeatureIcon icon={feature.icon} className="mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your{" "}
              <span className="gradient-text">Plan</span>
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Start free and scale as you grow. No hidden fees, cancel anytime.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{ 
                  y: -15,
                  scale: 1.03,
                  transition: { duration: 0.4 }
                }}
              >
                <Card variant="glass" className={`relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                  {plan.popular && (
                    <motion.div 
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <motion.span 
                        className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold"
                        animate={{ 
                          scale: [1, 1.05, 1],
                          y: [0, -2, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        Most Popular
                      </motion.span>
                    </motion.div>
                  )}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted">{plan.period}</span>
                    </div>
                    <p className="text-muted mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8 text-left">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + featureIndex * 0.1 }}
                        >
                          <span className="text-primary mr-2">✓</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="w-full">
                        Get Started
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Interactive Pricing Calculator CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.02,
                y: -5
              }}
              transition={{ duration: 0.3 }}
            >
              <Card variant="glass" className="p-8 max-w-2xl mx-auto">
                <motion.h3 
                  className="text-2xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Need a Custom Plan?
                </motion.h3>
                <motion.p 
                  className="text-muted mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  Use our interactive pricing calculator to customize your plan based on your team size, features, and add-ons.
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" onClick={() => window.location.href = '/calculator'}>
                    Try Interactive Calculator →
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Loved by{" "}
              <span className="gradient-text">Marketers</span>
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              See what our customers are saying about ADmyBRAND AI Suite.
            </p>
          </div>
          
          <div className="relative">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                index === activeTestimonial && (
                  <motion.div
                    key={index}
                    className="w-full flex-shrink-0"
                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -100, scale: 0.8 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <Card variant="glass" className="text-center max-w-2xl mx-auto">
                      <motion.div 
                        className="text-6xl mb-6"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
                      >
                        {testimonial.image}
                      </motion.div>
                      <motion.blockquote 
                        className="text-xl mb-6 italic"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        "{testimonial.quote}"
                      </motion.blockquote>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-muted">{testimonial.role} at {testimonial.company}</p>
                      </motion.div>
                    </Card>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  animate={{
                    scale: index === activeTestimonial ? 1.2 : 1,
                    backgroundColor: index === activeTestimonial ? 'var(--primary)' : 'var(--muted)'
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-muted">
              Everything you need to know about ADmyBRAND AI Suite.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog/Resources Section */}
      <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Latest{" "}
              <span className="gradient-text">Resources</span>
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Stay updated with the latest marketing trends, AI insights, and best practices.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {[
              {
                title: "AI Marketing Trends 2025",
                excerpt: "Discover the top AI marketing trends that will shape the industry in 2025 and beyond.",
                category: "Trends",
                readTime: "5 min read",
                image: "📈"
              },
              {
                title: "How to Create Engaging Content with AI",
                excerpt: "Learn practical strategies for using AI to create compelling content that converts.",
                category: "Tutorial",
                readTime: "8 min read",
                image: "✍️"
              },
              {
                title: "Building Your Brand with AI Tools",
                excerpt: "A comprehensive guide to building a strong brand identity using AI-powered tools.",
                category: "Guide",
                readTime: "12 min read",
                image: "🎨"
              }
            ].map((post, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card variant="glass">
                  <motion.div 
                    className="text-4xl mb-4"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {post.image}
                  </motion.div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="primary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-muted mb-4">{post.excerpt}</p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="sm">
                      Read More →
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Resources
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">ADmyBRAND</h3>
              <p className="text-muted mb-4">
                Transform your marketing with AI-powered tools designed for modern businesses.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted hover:text-primary transition-colors">Twitter</a>
                <a href="#" className="text-muted hover:text-primary transition-colors">LinkedIn</a>
                <a href="#" className="text-muted hover:text-primary transition-colors">Facebook</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="text-muted hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="text-muted hover:text-primary transition-colors">API</a></li>
                <li><a href="#" className="text-muted hover:text-primary transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="text-muted hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="text-muted hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="text-muted hover:text-primary transition-colors">Status</a></li>
                <li><a href="#" className="text-muted hover:text-primary transition-colors">Contact Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-muted">
              © 2024 ADmyBRAND AI Suite. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Start Your Free Trial</h3>
          <p className="text-muted mb-6">
            Get 14 days of full access to all features. No credit card required.
          </p>
          <form onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const email = formData.get('email') as string;
            if (email && email.includes('@')) {
              alert(`Thank you! We've sent a confirmation email to ${email}`);
              setIsModalOpen(false);
            }
          }} className="space-y-4">
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address"
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full">
              Start Free Trial
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

import { FAQItem } from "../components/landing";
