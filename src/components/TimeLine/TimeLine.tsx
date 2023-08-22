import Info from "../Info/Info"
import { timeLineData } from "../../utils/data"

const TimeLine = (): JSX.Element => {
  return (
    <section className="timeline" id="education">
      <h2 className="timeline__title">Education</h2>
      <ul className="timeline__list">
        {timeLineData.map((item, index) => (
          <li key={index}>
            <div className="timeline__date">{item.date}</div>
            <div className="timeline__content">
              <div className="timeline__info">
                <Info title={item.title} text={item.description}/>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TimeLine