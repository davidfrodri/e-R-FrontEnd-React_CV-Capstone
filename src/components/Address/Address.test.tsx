import { render, screen } from '@testing-library/react'
import Address from './Address'
import { contactItems } from '../../utils/data'

describe('Address Component', () => {
  it('renders contact items correctly', () => {
    render(<Address />)

    expect(screen.getByText('Contacts')).toBeInTheDocument()

    contactItems.forEach((item) => {
      expect(screen.getByText(item.displayText)).toBeInTheDocument()
    })
  })
})

// TODO: Se puede mejorar // Verificar si se aplican o no las clases
