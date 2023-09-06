import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'

describe('Home Component', () => {
  it('renders PhotoBoxHome component with correct props', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    const note = 'Passionate Software Developer'
    const description = 'Crafting immersive web experiences that merge technology and creativity.'

    expect(screen.getByText('David Rodriguez')).toBeInTheDocument()
    expect(screen.getByText(note)).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()
  })

  it('renders a link to /inner with text "Know more"', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    const link = screen.getByRole('button', { name: 'Know more' })
    fireEvent.click(link)
    expect(window.location.pathname).toBe('/inner')
  })
})
