import React from 'react'
import { render, screen } from '@testing-library/react'
import { Card } from '../card'

describe('Card Component', () => {
  it('renders with default props', () => {
    render(<Card>Card content</Card>)
    const card = screen.getByText('Card content')
    expect(card).toBeInTheDocument()
    expect(card.parentElement).toHaveClass('bg-background')
  })

  it('renders with glass variant', () => {
    render(<Card variant="glass">Glass card</Card>)
    const card = screen.getByText('Glass card').parentElement
    expect(card).toHaveClass('glass')
  })

  it('renders with elevated variant', () => {
    render(<Card variant="elevated">Elevated card</Card>)
    const card = screen.getByText('Elevated card').parentElement
    expect(card).toHaveClass('shadow-lg')
  })

  it('applies custom className', () => {
    render(<Card className="custom-card">Custom card</Card>)
    const card = screen.getByText('Custom card').parentElement
    expect(card).toHaveClass('custom-card')
  })

  it('forwards HTML attributes', () => {
    render(<Card data-testid="test-card">Test card</Card>)
    const card = screen.getByTestId('test-card')
    expect(card).toBeInTheDocument()
  })

  it('renders with complex content', () => {
    render(
      <Card>
        <h2>Card Title</h2>
        <p>Card description</p>
        <button>Action</button>
      </Card>
    )
    
    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.getByText('Card description')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
}) 