import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

// Add any providers here if needed
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

// Re-export everything
export * from '@testing-library/react'

// Override render method
export { customRender as render }

// Common test data
export const mockTestimonials = [
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
  }
]

export const mockFeatures = [
  {
    icon: "ai",
    title: "AI-Powered Content Creation",
    description: "Generate compelling copy, images, and videos with advanced AI algorithms"
  },
  {
    icon: "analytics",
    title: "Smart Analytics Dashboard",
    description: "Track performance with real-time insights and predictive analytics"
  }
]

export const mockPricingPlans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small businesses getting started",
    features: [
      "AI Content Generation (50/month)",
      "Basic Analytics",
      "3 Social Media Platforms"
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
      "All Social Media Platforms"
    ],
    popular: true
  }
]

// Mock functions for common interactions
export const mockAlert = () => {
  const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {})
  return {
    alertSpy,
    restore: () => alertSpy.mockRestore()
  }
}

export const mockConsole = () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
  return {
    consoleSpy,
    restore: () => consoleSpy.mockRestore()
  }
}

// Wait for element to be removed
export const waitForElementToBeRemoved = (element: Element) => {
  return new Promise<void>((resolve) => {
    const observer = new MutationObserver(() => {
      if (!document.contains(element)) {
        observer.disconnect()
        resolve()
      }
    })
    observer.observe(document.body, { childList: true, subtree: true })
  })
} 