import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PricingCalculator from '../page'

// Mock the components
jest.mock('../../../components/ui', () => ({
  Button: ({ children, onClick, ...props }: any) => (
    <button onClick={onClick} {...props}>{children}</button>
  ),
  Card: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Input: (props: any) => <input {...props} />,
  Checkbox: ({ checked, onChange, ...props }: any) => (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      {...props}
    />
  ),
  Badge: ({ children, ...props }: any) => <span {...props}>{children}</span>,
}))

describe('Pricing Calculator', () => {
  it('renders the calculator page', () => {
      render(<PricingCalculator />)
    
    expect(screen.getByText(/Interactive Pricing Calculator/i)).toBeTruthy()
    expect(screen.getByText(/Customize your plan/i)).toBeTruthy()
  })

  it('renders plan selection options', () => {
    render(<PricingCalculator />)
    
    expect(screen.getByText(/Basic/i)).toBeTruthy()
    expect(screen.getByText(/Pro/i)).toBeTruthy()
    expect(screen.getByText(/Enterprise/i)).toBeTruthy()
  })

  it('renders team size controls', () => {
    render(<PricingCalculator />)
    
    expect(screen.getByText(/Team Size/i)).toBeTruthy()
    expect(screen.getByText(/Number of Users: 5/i)).toBeTruthy()
  })

  it('renders core features section', () => {
    render(<PricingCalculator />)
    
    expect(screen.getByText(/Core Features/i)).toBeTruthy()
    expect(screen.getByText(/AI Content Generation/i)).toBeTruthy()
    expect(screen.getByText(/Analytics Dashboard/i)).toBeTruthy()
  })

  it('renders add-ons section', () => {
    render(<PricingCalculator />)
    
    expect(screen.getByText(/Add-ons/i)).toBeTruthy()
    expect(screen.getByText(/Show Add-ons/i)).toBeTruthy()
  })

  it('renders price display', () => {
    render(<PricingCalculator />)
    
    expect(screen.getByText(/Your Custom Plan/i)).toBeTruthy()
    expect(screen.getByText(/\$119/i)).toBeTruthy() // Default Pro plan with 5 users
    expect(screen.getByText(/per month/i)).toBeTruthy()
  })

  it('renders plan features', () => {
    render(<PricingCalculator />)
    
    expect(screen.getByText(/Pro Plan Features/i)).toBeTruthy()
    expect(screen.getByText(/AI Content Generation/i)).toBeTruthy()
    expect(screen.getByText(/Advanced Analytics/i)).toBeTruthy()
  })

  it('renders save estimate form', () => {
    render(<PricingCalculator />)
    
    expect(screen.getByText(/Save Your Estimate/i)).toBeTruthy()
    expect(screen.getByPlaceholderText(/Enter your email/i)).toBeTruthy()
    expect(screen.getByText(/Send Estimate to Email/i)).toBeTruthy()
  })

  it('renders navigation', () => {
    render(<PricingCalculator />)
    
    expect(screen.getByText(/ADmyBRAND AI Suite/i)).toBeTruthy()
    expect(screen.getByText(/← Back to Home/i)).toBeTruthy()
  })

  it('allows plan selection', async () => {
    const user = userEvent.setup()
    render(<PricingCalculator />)
    
    const basicPlan = screen.getByText(/Basic/i).closest('div')
    await user.click(basicPlan!)
    
    // Price should update to Basic plan pricing
    expect(screen.getByText(/\$54/i)).toBeTruthy() // Basic plan with 5 users
  })

  it('allows team size adjustment', async () => {
    const user = userEvent.setup()
    render(<PricingCalculator />)
    
    const userInput = screen.getAllByDisplayValue('5')[1] // Get the number input, not the range input
    await user.clear(userInput)
    await user.type(userInput, '10')
    
    expect(screen.getByDisplayValue('10')).toBeTruthy()
    expect(screen.getByText(/Number of Users: 10/i)).toBeTruthy()
  })

  it('shows add-ons when toggled', async () => {
    const user = userEvent.setup()
    render(<PricingCalculator />)
    
    const showAddOnsButton = screen.getByText(/Show Add-ons/i)
    await user.click(showAddOnsButton)
    
    expect(screen.getByText(/Custom Integrations/i)).toBeTruthy()
    expect(screen.getAllByText(/Advanced Analytics/i)[1]).toBeTruthy() // Get the add-on, not the feature
    expect(screen.getByText(/Priority Support/i)).toBeTruthy()
  })

  it('handles email form submission', async () => {
    const user = userEvent.setup()
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {})
    
    render(<PricingCalculator />)
    
    const emailInput = screen.getByPlaceholderText(/Enter your email/i)
    const submitButton = screen.getByText(/Send Estimate to Email/i)
    
    await user.type(emailInput, 'test@example.com')
    await user.click(submitButton)
    
    expect(alertSpy).toHaveBeenCalledWith(
      expect.stringContaining('Estimate sent to test@example.com')
    )
    
    alertSpy.mockRestore()
  })
}) 