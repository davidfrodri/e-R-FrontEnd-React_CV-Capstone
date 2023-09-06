import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store/store'
import SkillsForm from './SkillsForm'

const mockDispatch = jest.fn()
const mockMergeSkillsDataAction = jest.fn()

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch
}))

jest.mock('../../store/fetchSkills/fetch', () => ({
  ...jest.requireActual('../../store/fetchSkills/fetch'),
  mergeSkillsDataAction: (data: any) => mockMergeSkillsDataAction(data)
}))

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(() => {}),
  removeItem: jest.fn(() => {}),
  clear: jest.fn()
}

function fillOutForm (nameValue: string, rangeValue: number) {
  const nameInput = screen.getByPlaceholderText('Enter skill name')
  const rangeInput = screen.getByPlaceholderText('Enter skill range')
  const submitButton = screen.getByText('Add skill')

  fireEvent.change(nameInput, { target: { value: nameValue } })
  fireEvent.change(rangeInput, { target: { value: rangeValue } })
  fireEvent.click(submitButton)
}

describe('SkillsForm component', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock
    })
  })

  beforeEach(() => {
    window.localStorage.clear()
    mockDispatch.mockClear()
    mockMergeSkillsDataAction.mockClear()

    render(
      <Provider store={store}>
        <SkillsForm />
      </Provider>
    )
  })

  it('renders form elements correctly', () => {
    expect(screen.getByText('Skill name')).toBeInTheDocument()
    expect(screen.getByText('Skill range')).toBeInTheDocument()
    expect(screen.getByText('Add skill')).toBeInTheDocument()
  })

  it('handles form submission when localStorage is empty', async () => {
    fillOutForm('Test skill', 50)

    await waitFor(() => {
      const newSkill = { name: 'Test skill', range: '50' }
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'skills',
        JSON.stringify([newSkill])
      )
    })
  })

  it('handles form submission when localStorage has skills', async () => {
    const initialData = [{ name: 'Existing skill', range: 25 }]
    localStorageMock.getItem = jest.fn(() => JSON.stringify(initialData))

    fillOutForm('Test skill', 50)

    await waitFor(() => {
      const newSkill = { name: 'Test skill', range: '50' }
      const updatedData = [...initialData, newSkill]
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'skills',
        JSON.stringify(updatedData)
      )
    })
  })

  it('verifying dispatch and mergeSkillsDataAction are called', async () => {
    const initialData = [{ name: 'Existing skill', range: 25 }]
    localStorageMock.getItem = jest.fn(() => JSON.stringify(initialData))

    fillOutForm('Test skill', 50)

    await waitFor(() => {
      const newSkill = { name: 'Test skill', range: '50' }
      const updatedData = [...initialData, newSkill]
      expect(mockDispatch).toHaveBeenCalledTimes(1)
      expect(mockMergeSkillsDataAction).toBeCalledWith(updatedData)
    })
  })

  it('validates the name field', async () => {
    const submitButton = screen.getByText('Add skill')
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText('Skill name is required')).toBeInTheDocument()
    })
  })

  it('validates the range field', async () => {
    const rangeInput = screen.getByPlaceholderText('Enter skill range')
    fireEvent.change(rangeInput, { target: { value: 5 } })
    fireEvent.click(screen.getByText('Add skill'))

    await waitFor(() => {
      expect(screen.getByText('Skill range must be at least 10')).toBeInTheDocument()
    })

    fireEvent.change(rangeInput, { target: { value: 105 } })
    fireEvent.click(screen.getByText('Add skill'))

    await waitFor(() => {
      expect(screen.getByText('Skill range must be at most 100')).toBeInTheDocument()
    })
  })
})
