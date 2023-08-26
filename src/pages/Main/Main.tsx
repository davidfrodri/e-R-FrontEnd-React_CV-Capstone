import { feedbackData, aboutMeTextData, infoTextData, experienceData } from '../../utils/data'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

import useScrollToTop from '../../hooks/useScrollToTop'

import Info from '../../components/Info/Info'
import Box from '../../components/Box/Box'
import Expertise from '../../components/Expertise/Expertise'
import Skills from '../../components/Skills/Skills'
import Address from '../../components/Address/Address'
import Feedback from '../../components/Feedback/Feedback'
import Portfolio from '../../components/Portfolio/Portfolio'
import TimeLine from "../../components/TimeLine/TimeLine"
import Footer from '../../components/Footer/Footer'

const Main = (): JSX.Element => {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <div id='main' className='main'>
      <main className="main-up">
        <Info text={infoTextData} />
        <Box text={aboutMeTextData} id='about-me' />
        <TimeLine />
        <Expertise data={experienceData.data} />
        <Skills />
        <Portfolio />
        <Address />
        <Feedback data={feedbackData.data} />

        <div
          className={`chevron-up ${isVisible ? 'visible' : ''}`}
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Main