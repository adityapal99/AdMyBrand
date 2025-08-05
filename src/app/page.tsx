"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button, Card, Modal, Input } from "../components/ui";
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
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Transform Your{" "}
              <span className="gradient-text">Marketing</span>
              <br />
              with AI Power
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-8 max-w-3xl mx-auto">
              Create stunning campaigns, automate workflows, and boost your brand's success with our AI-powered marketing suite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" onClick={() => setIsModalOpen(true)}>
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Hero Image/Video Placeholder */}
          <div className="mt-16 relative">
            <Card variant="glass" className="rounded-3xl p-8 max-w-4xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-lg text-muted">Interactive Demo Coming Soon</p>
                </div>
              </div>
            </Card>
          </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} variant="glass" className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureIcon icon={feature.icon} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </Card>
            ))}
          </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} variant="glass" className={`relative ${plan.popular ? 'ring-2 ring-primary' : ''} animate-scale-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
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
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">
                    Get Started
                  </Button>
                </div>
              </Card>
            ))}
          </div>
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
            <div className="flex overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`w-full flex-shrink-0 transition-transform duration-500 ${
                    index === activeTestimonial ? 'translate-x-0' : 'translate-x-full'
                  }`}
                >
                  <Card variant="glass" className="text-center max-w-2xl mx-auto">
                    <div className="text-6xl mb-6">{testimonial.image}</div>
                    <blockquote className="text-xl mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-muted">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
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
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
            />
            <Button className="w-full" onClick={() => setIsModalOpen(false)}>
              Start Free Trial
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

import { FAQItem } from "../components/landing";
