import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store/store'
import Skills from './Skills'
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks()

const mockSkillsData = [
  { name: 'Skill 1', range: 50 },
  { name: 'Skill 2', range: 75 }
]

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(() => {}),
  removeItem: jest.fn(() => {}),
  clear: jest.fn()
}

describe('Skills component', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock
    })
  })

  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.mockResponse(JSON.stringify(mockSkillsData))
    window.localStorage.clear()
  })

  it('renders title', () => {
    render(
      <Provider store={store}>
        <Skills />
      </Provider>
    )
    expect(screen.getByText('Skills')).toBeInTheDocument()
  })

  it('fetches and renders skills data correctly', async () => {
    render(
      <Provider store={store}>
        <Skills />
      </Provider>
    )

    expect(await screen.findByText('Skill 1')).toBeInTheDocument()
    expect(screen.getByText('Skill 2')).toBeInTheDocument()
  })

  it('renders Open edit and Eraser buttons', () => {
    render(
      <Provider store={store}>
        <Skills />
      </Provider>
    )
    expect(screen.getByText('Open edit')).toBeInTheDocument()
    expect(screen.getByTestId('eraser-button')).toBeInTheDocument()
  })

  it('toggles form visibility', () => {
    render(
      <Provider store={store}>
        <Skills />
      </Provider>
    )
    const formToggleBtn = screen.getByText('Open edit')
    expect(screen.queryByText('Skill name')).not.toBeInTheDocument()

    fireEvent.click(formToggleBtn)
    expect(screen.getByText('Skill name')).toBeInTheDocument()

    fireEvent.click(formToggleBtn)
    expect(screen.queryByText('Skill name')).not.toBeInTheDocument()
  })

  it('resets local skills data', async () => {
    const initialData = [{ name: 'Existing skill', range: 25 }]
    localStorageMock.getItem = jest.fn(() => JSON.stringify(initialData))
    render(
      <Provider store={store}>
        <Skills />
      </Provider>
    )

    expect(screen.getByText('Existing skill')).toBeInTheDocument()

    const eraserBtn = screen.getByTestId('eraser-button')
    await waitFor(() => {
      fireEvent.click(eraserBtn)
    })

    expect(screen.queryByText('Existing skill')).not.toBeInTheDocument()
  })
})
