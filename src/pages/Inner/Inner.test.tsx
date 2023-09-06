import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store/store'
import { BrowserRouter } from 'react-router-dom'
import Inner from './Inner'

describe('Inner Component', () => {
  it('renders sidebar with menu items', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Inner />
        </Provider>
      </BrowserRouter>
    )
    const main = screen.getByTestId('main')
    const panel = screen.getByTestId('panel')

    expect(main).toBeInTheDocument()
    expect(panel).toBeInTheDocument()
  })
})
