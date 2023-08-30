import { type JobDataArray } from '../../types'

interface Props {
  data: JobDataArray | null
}

const Expertise = ({ data }: Props): JSX.Element => {
  if (data == null) {
    return <div>Loading...</div>
  }

  return (
    <section className='expertise' id='experience'>
      <h2>Experience</h2>
      <ul className='expertise__list'>
        {data.map((item, index) => (
          <li key={index} className='expertise__list__item'>
            <div className='expertise__list__date'>
              <h3>{item.info.company}</h3>
              <span>{item.date}</span>
            </div>
            <div className='expertise__list__info'>
              <h3>{item.info.job}</h3>
              <p>{item.info.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Expertise
