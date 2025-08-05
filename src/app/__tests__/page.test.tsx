import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../page'

// Mock the components to avoid complex rendering issues
jest.mock('../../components/ui', () => ({
  Button: ({ children, onClick, ...props }: any) => (
    <button onClick={onClick} {...props}>{children}</button>
  ),
  Card: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Modal: ({ children, isOpen, onClose }: any) => 
    isOpen ? <div data-testid="modal" onClick={onClose}>{children}</div> : null,
  Input: (props: any) => <input {...props} />,
  Badge: ({ children, ...props }: any) => <span {...props}>{children}</span>,
}))

jest.mock('../../components/landing', () => ({
  FeatureIcon: ({ icon, className }: any) => (
    <div className={className} data-testid="feature-icon">{icon}</div>
  ),
  FAQItem: ({ question, answer }: any) => (
    <div data-testid="faq-item">
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  ),
}))

describe('Home Page', () => {
  it('renders the hero section', () => {
    render(<Home />)
    
    expect(screen.getByText(/Transform Your Marketing/i)).toBeInTheDocument()
    expect(screen.getByText(/with AI Power/i)).toBeInTheDocument()
    expect(screen.getByText(/Start Free Trial/i)).toBeInTheDocument()
    expect(screen.getByText(/Watch Demo/i)).toBeInTheDocument()
  })

  it('renders the features section', () => {
    render(<Home />)
    
    expect(screen.getByText(/AI-Powered Content Creation/i)).toBeInTheDocument()
    expect(screen.getByText(/Smart Analytics Dashboard/i)).toBeInTheDocument()
    expect(screen.getByText(/Automated Campaign Management/i)).toBeInTheDocument()
  })

  it('renders the pricing section', () => {
    render(<Home />)
    
    expect(screen.getByText(/Starter/i)).toBeInTheDocument()
    expect(screen.getByText(/Professional/i)).toBeInTheDocument()
    expect(screen.getByText(/Enterprise/i)).toBeInTheDocument()
  })

  it('renders the testimonials section', () => {
    render(<Home />)
    
    expect(screen.getByText(/Sarah Johnson/i)).toBeInTheDocument()
    expect(screen.getByText(/Marketing Director/i)).toBeInTheDocument()
    expect(screen.getByText(/TechFlow Inc./i)).toBeInTheDocument()
  })

  it('renders the FAQ section', () => {
    render(<Home />)
    
    expect(screen.getByText(/How does the AI content generation work?/i)).toBeInTheDocument()
    expect(screen.getByText(/Can I integrate with my existing tools?/i)).toBeInTheDocument()
    expect(screen.getByText(/Is there a free trial available?/i)).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<Home />)
    
    expect(screen.getByText(/ADmyBRAND/i)).toBeInTheDocument()
    expect(screen.getByText(/© 2024 ADmyBRAND AI Suite/i)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Home />)
    
    expect(screen.getByText(/Features/i)).toBeInTheDocument()
    expect(screen.getByText(/Pricing/i)).toBeInTheDocument()
    expect(screen.getByText(/Testimonials/i)).toBeInTheDocument()
    expect(screen.getByText(/FAQ/i)).toBeInTheDocument()
  })

  it('renders the interactive calculator CTA', () => {
    render(<Home />)
    
    expect(screen.getByText(/Try Interactive Calculator/i)).toBeInTheDocument()
  })

  it('renders the resources section', () => {
    render(<Home />)
    
    expect(screen.getByText(/Latest Resources/i)).toBeInTheDocument()
    expect(screen.getByText(/View All Resources/i)).toBeInTheDocument()
  })
}) 