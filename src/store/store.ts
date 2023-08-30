import { configureStore } from '@reduxjs/toolkit'
import loadingEducationReducer from './loadingSliceEducation'
import skillsSlice from './fetchSkills/fetch'

const store = configureStore({
  reducer: {
    loadingEducation: loadingEducationReducer,
    skills: skillsSlice
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
