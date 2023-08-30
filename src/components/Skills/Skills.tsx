import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEraser } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { type RootState, type AppDispatch } from '../../store/store'
import { fetchSkills, mergeSkillsDataAction } from '../../store/fetchSkills/fetch'

import SkillsForm from './SkillsForm'
import Button from '../Button/Button'

const Skills = (): JSX.Element => {
  const [formVisible, setFormVisible] = useState<boolean>(false)

  const dispatch = useDispatch<AppDispatch>()
  const defaultSkills = useSelector((state: RootState) => state.skills.defaultSkills)
  const skillsDataLocal = useSelector((state: RootState) => state.skills.skillsData)

  const skillsData = [...defaultSkills, ...skillsDataLocal]

  useEffect(() => {
    dispatch(fetchSkills())
  }
  , [dispatch])

  useEffect(() => {
    const storedSkills = localStorage.getItem('skills')
    if (storedSkills != null) {
      dispatch(mergeSkillsDataAction(JSON.parse(storedSkills)))
    }
  }, [])

  const handleVisible = (): void => {
    setFormVisible(!formVisible)
  }

  const handleReset = (): void => {
    localStorage.removeItem('skills')
    dispatch(mergeSkillsDataAction([]))
  }

  return (
    <section className='skills' id='skills'>
      <div className='up'>
        <h2 className='title'>Skills</h2>
        <div>
          <Button text='Open edit' icon={<FontAwesomeIcon icon={faPenToSquare} />} onClick={handleVisible} />
          <Button icon={<FontAwesomeIcon icon={faEraser} />} onClick={handleReset} data-testid='eraser-button' />
        </div>
      </div>
      {formVisible && <SkillsForm />}
      <div className='chart-container'>
        <ul className='items'>
          {skillsData.map((skill, index) => (
            <li className='item-bar' key={index}>
              <div className='bar' style={{ width: `${skill.range}%` }}>{skill.name}</div>
            </li>
          ))}
        </ul>
        <div className='x'>
          <div className='x-axis'>
            <div className='first'> </div>
            <div className='second' />
            <div className='third' />
          </div>
          <div className='x-names'>
            <div>Beginner</div>
            <div>Proficient</div>
            <div>Expert</div>
            <div>Master</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
