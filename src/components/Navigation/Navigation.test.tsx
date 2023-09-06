import { render, screen } from '@testing-library/react'
import Navigation from './Navigation'

describe('Navigation Component', () => {
  it('renders navigation links correctly', () => {
    render(<Navigation />)

    expect(screen.getByText('About me')).toBeInTheDocument()
    expect(screen.getByText('Education')).toBeInTheDocument()
    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Contacts')).toBeInTheDocument()
    expect(screen.getByText('Feedbacks')).toBeInTheDocument()
  })

  it('has correct href attributes for navigation links', () => {
    render(<Navigation />)

    const links = screen.getAllByRole('link')
    expect(links[0]).toHaveAttribute('href', '#about-me')
    expect(links[1]).toHaveAttribute('href', '#education')
    expect(links[2]).toHaveAttribute('href', '#experience')
    expect(links[3]).toHaveAttribute('href', '#portfolio')
    expect(links[4]).toHaveAttribute('href', '#address')
    expect(links[5]).toHaveAttribute('href', '#feedbacks')
  })
})
