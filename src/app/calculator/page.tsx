"use client";

import { useState, useEffect } from "react";
import { Button, Card, Input, Checkbox, Select, Badge } from "../../components/ui";

interface PricingPlan {
  name: string;
  basePrice: number;
  userPrice: number;
  features: string[];
}

interface AddOn {
  id: string;
  name: string;
  price: number;
  description: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    basePrice: 29,
    userPrice: 5,
    features: ["AI Content Generation", "Basic Analytics", "Email Support"]
  },
  {
    name: "Pro",
    basePrice: 79,
    userPrice: 8,
    features: ["AI Content Generation", "Advanced Analytics", "Priority Support", "Custom Templates", "API Access"]
  },
  {
    name: "Enterprise",
    basePrice: 199,
    userPrice: 12,
    features: ["Everything in Pro", "Dedicated Account Manager", "Custom Integrations", "Advanced Security", "SLA Guarantee"]
  }
];

const addOns: AddOn[] = [
  {
    id: "custom-integrations",
    name: "Custom Integrations",
    price: 50,
    description: "Connect with your existing tools and workflows"
  },
  {
    id: "extra-analytics",
    name: "Advanced Analytics",
    price: 30,
    description: "Deep insights and custom reporting"
  },
  {
    id: "priority-support",
    name: "Priority Support",
    price: 25,
    description: "24/7 phone and chat support"
  },
  {
    id: "white-label",
    name: "White Label",
    price: 100,
    description: "Remove branding and customize the interface"
  },
  {
    id: "data-export",
    name: "Data Export",
    price: 20,
    description: "Export all your data in multiple formats"
  },
  {
    id: "training",
    name: "Team Training",
    price: 75,
    description: "On-site or virtual training sessions"
  }
];

export default function PricingCalculator() {
  const [selectedPlan, setSelectedPlan] = useState<string>("Pro");
  const [userCount, setUserCount] = useState<number>(5);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["ai-content", "analytics"]);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [showAddOns, setShowAddOns] = useState<boolean>(false);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  const currentPlan = pricingPlans.find(plan => plan.name === selectedPlan) || pricingPlans[1];

  const calculateTotalPrice = () => {
    const basePrice = currentPlan.basePrice;
    const userCost = currentPlan.userPrice * userCount;
    const addOnsCost = selectedAddOns.reduce((total, addOnId) => {
      const addOn = addOns.find(a => a.id === addOnId);
      return total + (addOn?.price || 0);
    }, 0);
    
    return basePrice + userCost + addOnsCost;
  };

  const totalPrice = calculateTotalPrice();

  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => setIsCalculating(false), 300);
    return () => clearTimeout(timer);
  }, [selectedPlan, userCount, selectedAddOns]);

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const handleAddOnToggle = (addOnId: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const handleGetStarted = () => {
    // In a real app, this would redirect to a signup form with pre-filled plan details
    alert(`Selected Plan: ${selectedPlan}\nUsers: ${userCount}\nTotal Price: $${totalPrice}/month`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-accent">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 glass backdrop-blur-md border-b border-glass-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-foreground">ADmyBRAND AI Suite</h1>
            </div>
            <Button variant="outline" size="sm" onClick={() => window.history.back()}>
              ← Back to Home
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Interactive Pricing Calculator
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Customize your plan and see real-time pricing. Find the perfect combination for your team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Controls */}
            <div className="space-y-8">
              {/* Plan Selection */}
              <Card variant="glass" className="p-6">
                <h3 className="text-xl font-semibold mb-4">Select Your Plan</h3>
                <div className="space-y-3">
                  {pricingPlans.map((plan) => (
                    <div
                      key={plan.name}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        selectedPlan === plan.name
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedPlan(plan.name)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">{plan.name}</h4>
                          <p className="text-sm text-muted">${plan.basePrice}/month base</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">${plan.userPrice}/user</p>
                          <p className="text-xs text-muted">per month</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Team Size */}
              <Card variant="glass" className="p-6">
                <h3 className="text-xl font-semibold mb-4">Team Size</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Number of Users: {userCount}
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={userCount}
                      onChange={(e) => setUserCount(parseInt(e.target.value))}
                      className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-muted mt-1">
                      <span>1</span>
                      <span>25</span>
                      <span>50</span>
                      <span>75</span>
                      <span>100</span>
                    </div>
                  </div>
                  <Input
                    type="number"
                    value={userCount}
                    onChange={(e) => setUserCount(parseInt(e.target.value) || 1)}
                    min="1"
                    max="100"
                    className="w-24"
                  />
                </div>
              </Card>

              {/* Features */}
              <Card variant="glass" className="p-6">
                <h3 className="text-xl font-semibold mb-4">Core Features</h3>
                <div className="space-y-3">
                  {[
                    { id: "ai-content", name: "AI Content Generation", included: true },
                    { id: "analytics", name: "Analytics Dashboard", included: true },
                    { id: "automation", name: "Workflow Automation", included: selectedPlan !== "Basic" },
                    { id: "templates", name: "Custom Templates", included: selectedPlan !== "Basic" },
                    { id: "api", name: "API Access", included: selectedPlan === "Pro" || selectedPlan === "Enterprise" },
                    { id: "integrations", name: "Third-party Integrations", included: selectedPlan !== "Basic" }
                  ].map((feature) => (
                    <div key={feature.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          checked={selectedFeatures.includes(feature.id)}
                          onChange={() => handleFeatureToggle(feature.id)}
                        />
                        <span className={feature.included ? "text-muted" : ""}>
                          {feature.name}
                        </span>
                      </div>
                      {feature.included && (
                        <Badge variant="default" className="text-xs">
                          Included
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </Card>

              {/* Add-ons */}
              <Card variant="glass" className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Add-ons</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowAddOns(!showAddOns)}
                  >
                    {showAddOns ? "Hide" : "Show"} Add-ons
                  </Button>
                </div>
                
                {showAddOns && (
                  <div className="space-y-4 animate-fade-in">
                    {addOns.map((addOn) => (
                      <div
                        key={addOn.id}
                        className={`p-4 rounded-lg border transition-all duration-300 ${
                          selectedAddOns.includes(addOn.id)
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3">
                              <Checkbox
                                checked={selectedAddOns.includes(addOn.id)}
                                onChange={() => handleAddOnToggle(addOn.id)}
                              />
                              <div>
                                <h4 className="font-medium">{addOn.name}</h4>
                                <p className="text-sm text-muted">{addOn.description}</p>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">${addOn.price}/month</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </div>

            {/* Price Display */}
            <div className="space-y-6">
              <Card variant="glass" className="p-8 text-center">
                <h2 className="text-2xl font-semibold mb-2">Your Custom Plan</h2>
                <div className="mb-6">
                  <div className={`text-5xl font-bold text-primary transition-all duration-500 ${
                    isCalculating ? 'scale-110' : 'scale-100'
                  }`}>
                    ${totalPrice}
                  </div>
                  <div className="text-muted">per month</div>
                </div>

                <div className="space-y-3 text-left mb-6">
                  <div className="flex justify-between">
                    <span>Base Plan ({selectedPlan})</span>
                    <span>${currentPlan.basePrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Users ({userCount} × ${currentPlan.userPrice})</span>
                    <span>${currentPlan.userPrice * userCount}</span>
                  </div>
                  {selectedAddOns.length > 0 && (
                    <div className="border-t pt-3">
                      <div className="text-sm font-medium mb-2">Add-ons:</div>
                      {selectedAddOns.map((addOnId) => {
                        const addOn = addOns.find(a => a.id === addOnId);
                        return (
                          <div key={addOnId} className="flex justify-between text-sm">
                            <span>{addOn?.name}</span>
                            <span>${addOn?.price}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <Button size="lg" className="w-full" onClick={handleGetStarted}>
                  Get Started Now
                </Button>
              </Card>

              {/* Plan Features */}
              <Card variant="glass" className="p-6">
                <h3 className="text-xl font-semibold mb-4">{selectedPlan} Plan Features</h3>
                <ul className="space-y-2">
                  {currentPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-primary">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Save Estimate */}
              <Card variant="glass" className="p-6">
                <h3 className="text-xl font-semibold mb-4">Save Your Estimate</h3>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const email = formData.get('email') as string;
                  if (email && email.includes('@')) {
                    const estimate = {
                      plan: selectedPlan,
                      users: userCount,
                      addOns: selectedAddOns,
                      totalPrice: totalPrice,
                      features: selectedFeatures
                    };
                    alert(`Estimate sent to ${email}!\n\nPlan: ${selectedPlan}\nUsers: ${userCount}\nTotal: $${totalPrice}/month`);
                  }
                }} className="space-y-4">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Please enter a valid email address"
                    className="w-full"
                  />
                  <Button type="submit" variant="outline" className="w-full">
                    Send Estimate to Email
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 