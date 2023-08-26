import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGraduationCap, faPencil, faSuitcase, faPaperPlane, faComment, faBars, faChevronLeft, faGem } from '@fortawesome/free-solid-svg-icons'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'

import PhotoBoxHome from '../PhotoBox/PhotoBoxHome'
import useCurrentSection from '../../hooks/useCurrentSection'
import img from '../../assets/images/useravatar.png'

import Button from '../Button/Button'

const Panel: React.FC = (): JSX.Element => {
  const [menuCollapse, setMenuCollapse] = useState<boolean>(false)

  const { currentSection } = useCurrentSection()

  const menuIconClick = (): void => {
    setMenuCollapse(!menuCollapse)
  }

  const handleMenuItemClick = (sectionId: string): void => {
    const sectionElement = document.getElementById(sectionId)
    if (sectionElement != null) {
      sectionElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleResize = (): void => {
    if (window.innerWidth > 768) {
      setMenuCollapse(false)
    } else {
      setMenuCollapse(true)
    }
  }

  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <aside className='panel'>
      <div id='header'>
        <Sidebar collapsed={menuCollapse}>
          <div className='header-and-button'>
            <div className='header'>
              <div className='logotext'>
                {!menuCollapse
                  ? <PhotoBoxHome />
                  : <img src={img} alt='user avatar' className='collapsed' />}
              </div>
              <div className='closemenu' onClick={menuIconClick}>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
            <Menu>
              <MenuItem
                icon={<FontAwesomeIcon icon={faUser} />}
                onClick={() => { handleMenuItemClick('about-me') }}
                className={currentSection === 'about-me' ? 'active' : undefined}
              >
                About Me
              </MenuItem>
              <MenuItem
                icon={<FontAwesomeIcon icon={faGraduationCap} />}
                onClick={() => { handleMenuItemClick('education') }}
                className={currentSection === 'education' ? 'active' : undefined}
              >
                Education
              </MenuItem>
              <MenuItem
                icon={<FontAwesomeIcon icon={faPencil} />}
                onClick={() => { handleMenuItemClick('experience') }}
                className={currentSection === 'experience' ? 'active' : undefined}
              >
                Experience
              </MenuItem>
              <MenuItem
                icon={<FontAwesomeIcon icon={faGem} />}
                onClick={() => { handleMenuItemClick('skills') }}
                className={currentSection === 'skills' ? 'active' : undefined}
              >
                Skills
              </MenuItem>
              <MenuItem
                icon={<FontAwesomeIcon icon={faSuitcase} />}
                onClick={() => { handleMenuItemClick('portfolio') }}
                className={currentSection === 'portfolio' ? 'active' : undefined}
              >
                Portfolio
              </MenuItem>
              <MenuItem
                icon={<FontAwesomeIcon icon={faPaperPlane} />}
                onClick={() => { handleMenuItemClick('address') }}
                className={currentSection === 'address' ? 'active' : undefined}
              >
                Contacts
              </MenuItem>
              <MenuItem
                icon={<FontAwesomeIcon icon={faComment} />}
                onClick={() => { handleMenuItemClick('feedbacks') }}
                className={currentSection === 'feedbacks' ? 'active' : undefined}
              >
                Feedback
              </MenuItem>
            </Menu>
          </div>
          <Link to='/'>
            {!menuCollapse
              ? (
                <Button icon={<FontAwesomeIcon icon={faChevronLeft} />} text='Go Back' />
                )
              : (
                <Button className='btn-collapsed' icon={<FontAwesomeIcon icon={faChevronLeft} />} />
              )}
          </Link>
        </Sidebar>
      </div>
    </aside>
  )
}

export default Panel
