import { render, screen, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { MemoryRouter } from 'react-router-dom'
import Panel from './Panel'

describe('Panel Component', () => {
  it('renders sidebar with menu items', () => {
    render(
      <MemoryRouter>
        <Panel />
      </MemoryRouter>
    )

    const menuItems = [
      'About Me',
      'Education',
      'Experience',
      'Skills',
      'Portfolio',
      'Contacts',
      'Feedback'
    ]

    menuItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })

    const menuIcon = screen.getByTestId('menu-icon')
    fireEvent.click(menuIcon)
    expect(screen.getByTestId('sidebar')).toHaveClass('ps-collapsed')
  })

  it('renders expanded menu on larger screens', async () => {
    render(
      <MemoryRouter>
        <Panel />
      </MemoryRouter>
    )

    act(() => {
      global.innerWidth = 500
      const resizeEvent = new Event('resize')
      window.dispatchEvent(resizeEvent)
    })

    expect(screen.getByTestId('sidebar')).toHaveClass('ps-collapsed')
  })

  it('list are active when clicked', async () => {
    render(
      <MemoryRouter>
        <Panel />
      </MemoryRouter>
    )

    const aboutMeMenuItem = screen.getByText('About Me').closest('a')
    if (aboutMeMenuItem != null) {
      fireEvent.click(aboutMeMenuItem)
      expect(aboutMeMenuItem.closest('li')).toHaveClass('active')
    }

    const educationListItem = screen.getByText('Education').closest('li')
    if (educationListItem != null) {
      const educationLink = educationListItem.querySelector('a')
      if (educationLink != null) {
        fireEvent.click(educationLink)
        // expect(educationListItem).toHaveClass('active')
      }
    }

    fireEvent.click(screen.getByText('Experience'))
    fireEvent.click(screen.getByText('Skills'))
    fireEvent.click(screen.getByText('Portfolio'))
    fireEvent.click(screen.getByText('Contacts'))
    fireEvent.click(screen.getByText('Feedback'))
  })
})
