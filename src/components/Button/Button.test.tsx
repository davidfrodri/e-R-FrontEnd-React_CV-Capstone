import { render, screen, fireEvent } from '@testing-library/react'

import Button from './Button'

describe('Button component', () => {
  it('renders the text', () => {
    const text = 'Example test text'
    render(<Button text={text} />)

    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('renders the icon', () => {
    const icon = <span>Icon test</span>
    render(<Button icon={icon} />)

    expect(screen.getByText('Icon test')).toBeInTheDocument()
  })

  it('applies the className', () => {
    const text = 'Example test text'
    const className = 'test-class'
    render(<Button text={text} className={className} />)

    expect(screen.getByText(text).parentElement).toHaveClass('btn')
    expect(screen.getByText(text).parentElement).toHaveClass(className)
  })

  it('handles onClick event', () => {
    const text = 'Example test text'
    const onClick = jest.fn()
    render(<Button text={text} onClick={onClick} />)

    fireEvent.click(screen.getByText(text))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
