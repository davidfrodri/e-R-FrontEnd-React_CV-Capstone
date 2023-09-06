import { render, screen, fireEvent } from '@testing-library/react'
import Portfolio from './Portfolio'
import { portfolioItems } from '../../utils/data'

describe('Portfolio Component', () => {
  it('filters portfolio items correctly', () => {
    render(<Portfolio />)

    portfolioItems.forEach((item) => {
      expect(screen.getByText(item.title)).toBeVisible()
    })

    fireEvent.click(screen.getByText('Ui'))
    portfolioItems.forEach((item) => {
      const titleItem = screen.getByText(item.title)
      if (item.classes.includes('ui')) {
        expect(titleItem).toBeVisible()
        expect(titleItem.closest('li')).toHaveClass('ui')
      } else {
        expect(titleItem).not.toBeVisible()
        expect(titleItem.closest('li')).not.toHaveClass('ui')
      }
    })

    fireEvent.click(screen.getByText('Code'))
    portfolioItems.forEach((item) => {
      const titleItem = screen.getByText(item.title)

      if (item.classes.includes('code')) {
        expect(screen.getByText(item.title)).toBeVisible()
        expect(titleItem.closest('li')).toHaveClass('code')
      } else {
        expect(titleItem).not.toBeVisible()
        expect(titleItem.closest('li')).not.toHaveClass('code')
      }
    })

    fireEvent.click(screen.getByText('All'))
    portfolioItems.forEach((item) => {
      expect(screen.getByText(item.title)).toBeVisible()
    })
  })
})
