import { render, screen } from '@testing-library/react'

import PhotoBoxHome from './PhotoBoxHome'

describe('PhotoBoxHome component', () => {
  const note = 'Text note test'
  const description = 'Text description test'

  it('render the title', () => {
    render(<PhotoBoxHome />)

    expect(screen.getByText('David Rodriguez')).toBeInTheDocument()
    expect(screen.queryByText(note)).not.toBeInTheDocument()
    expect(screen.queryByText(description)).not.toBeInTheDocument()
  })

  it('render the note', () => {
    render(<PhotoBoxHome note={note} />)

    expect(screen.getByText(note)).toBeInTheDocument()
  })

  it('render the note', () => {
    render(<PhotoBoxHome description={description} />)

    expect(screen.getByText(description)).toBeInTheDocument()
  })
})
