import { render, screen } from '@testing-library/react'
import Info from './Info'

describe('Info Component', () => {
  const title = 'Sample Title'
  const text = 'This is the content of the Info component.'

  it('renders with title and text', () => {
    render(<Info title={title} text={text} />)

    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('renders without title', () => {
    render(<Info text={text} />)

    expect(screen.queryByText(title)).not.toBeInTheDocument()
    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
