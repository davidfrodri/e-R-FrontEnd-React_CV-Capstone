import { createSlice, createAsyncThunk, createAction, type PayloadAction } from '@reduxjs/toolkit'
import { fetchSkillsService } from '../../services/services'
import { type FormSkills } from '../../types'

export const fetchSkills = createAsyncThunk('/api/skills', async () => {
  const data = await fetchSkillsService()
  return data
})

export const mergeSkillsDataAction = createAction<FormSkills[]>('skills/mergeSkillsData')

const skillsSlice = createSlice({
  name: 'skills',
  initialState: {
    defaultSkills: [] as FormSkills[],
    skillsData: [] as FormSkills[]
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.defaultSkills = action.payload
      })
      .addCase(mergeSkillsDataAction, (state, action: PayloadAction<FormSkills[]>) => {
        state.skillsData = action.payload
      })
  }
})

export default skillsSlice.reducer
