import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer Component', () => {
  it('renders footer content correctly', () => {
    render(<Footer />)

    expect(screen.getByText(/2023 David Rodriguez. Created with love/i)).toBeInTheDocument()
  })
})
