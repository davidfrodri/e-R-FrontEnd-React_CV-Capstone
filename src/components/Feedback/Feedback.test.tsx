import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Feedback from './Feedback'

const mockData = [
  {
    feedback:
          'Lorem ipsum dolor sit amet, consectetuer',
    reporter: {
      photoUrl: '../../assets/images/usertestavatar.png',
      name: 'John Doe',
      citeUrl: 'https://www.citetestexample.com'
    }
  }
]

describe('Feedback Component', () => {
  it('renders feedback items correctly', () => {
    render(<Feedback data={mockData} />)

    expect(screen.getByText('Feedbacks')).toBeInTheDocument()

    mockData.forEach((item) => {
      expect(screen.getByText(item.feedback)).toBeInTheDocument()
      expect(screen.getByAltText(`${item.reporter.name}'s avatar`)).toBeInTheDocument()
      expect(screen.getByText(new RegExp(item.reporter.name, 'i'))).toBeInTheDocument()
      expect(screen.getByText(item.reporter.citeUrl)).toBeInTheDocument()
      expect(screen.getByRole('link', { name: item.reporter.citeUrl })).toBeInTheDocument()
    })
  })
})
