import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import TimeLine from './TimeLine'
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks()

const mockStore = configureStore([])

const mockEducationData = [
  {
    date: '2018 - 2020',
    title: 'Example University',
    description: 'Example description'
  },
  {
    date: '2019 - 2020',
    title: 'Examples University',
    description: 'Examples description'
  }
]

describe('TimeLine component', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('renders the title', () => {
    const store = mockStore({
      loadingEducation: {
        isLoadingEducation: true
      }
    })

    render(
      <Provider store={store}>
        <TimeLine />
      </Provider>
    )

    const spinner = screen.getByTestId('loader')
    expect(spinner).toBeVisible()
  })

  it('renders the title', () => {
    fetchMock.mockResponse(JSON.stringify(mockEducationData))

    const store = mockStore({
      loadingEducation: {
        isLoadingEducation: false
      }
    })

    render(
      <Provider store={store}>
        <TimeLine />
      </Provider>
    )

    const title = screen.getByText(/Education/i)
    expect(title).toBeInTheDocument()
  })

  it('renders education data', async () => {
    fetchMock.mockResponse(JSON.stringify(mockEducationData))

    const store = mockStore({
      loadingEducation: {
        isLoadingEducation: false
      }
    })

    render(
      <Provider store={store}>
        <TimeLine />
      </Provider>
    )

    const educationTitle = await screen.findByText('Example University')
    expect(educationTitle).toBeInTheDocument()

    const educationDescription = await screen.findByText(
      'Example description'
    )
    expect(educationDescription).toBeInTheDocument()
  })

  it('renders error message when fetch fails', async () => {
    const errorMessage = new Error('Something went wrong; please review your server connection!')

    fetchMock.mockReject(errorMessage)

    const store = mockStore({
      loadingEducation: {
        isLoadingEducation: false
      }
    })

    render(
      <Provider store={store}>
        <TimeLine />
      </Provider>
    )

    const errorMsg = await screen.findByTestId('error-message')
    expect(errorMsg).toBeInTheDocument()
    expect(errorMsg).toHaveTextContent('Something went wrong; please review your server connection!')
  })
})
