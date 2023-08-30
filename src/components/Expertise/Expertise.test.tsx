import { render, screen } from '@testing-library/react'
import Expertise from './Expertise' // Asegúrate de importar la ruta correcta a tu componente
import { JobDataArray } from '../../types'

describe('Expertise Component', () => {
  it('renders loading text when data is null', () => {
    render(<Expertise data={null} />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders expertise items correctly when data is provided', () => {
    const mockData: JobDataArray = [
      {
        date: '2013-2014',
        info: {
          company: 'Google',
          job: 'php programmer',
          description:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit...'
        }
      },
      {
        date: '2014-2015',
        info: {
          company: 'Facebook',
          job: 'Front-end developer',
          description:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elito...'
        }
      }
    ]

    render(<Expertise data={mockData} />)

    expect(screen.getByText('Experience')).toBeInTheDocument()

    mockData.forEach((item) => {
      expect(screen.getByText(item.info.company)).toBeInTheDocument()
      expect(screen.getByText(item.date)).toBeInTheDocument()
      expect(screen.getByText(item.info.job)).toBeInTheDocument()
      expect(screen.getByText(item.info.description)).toBeInTheDocument()
    })
  })
})
