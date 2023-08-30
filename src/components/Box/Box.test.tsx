import { render, screen } from '@testing-library/react'
import Box from './Box'

describe('Box', () => {
  it('renders with default props', () => {
    render(<Box />)
    expect(screen.getByText('About me')).toBeInTheDocument()
    expect(screen.getByText('Text')).toBeInTheDocument()
  })

  it('renders with custom title prop', () => {
    render(<Box title='Custom title' />)
    expect(screen.getByText('Custom title')).toBeInTheDocument()
  })

  it('renders with custom text prop', () => {
    render(<Box text='Custom text' />)
    expect(screen.getByText('Custom text')).toBeInTheDocument()
  })
})
