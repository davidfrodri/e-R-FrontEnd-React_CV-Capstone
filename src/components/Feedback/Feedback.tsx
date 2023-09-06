import Info from '../Info/Info'

interface reporter {
  photoUrl: string
  name: string
  citeUrl: string
}

interface feedbackdata {
  feedback: string
  reporter: reporter
}

interface Props {
  data: feedbackdata[]
}

const Feedback = ({ data }: Props): JSX.Element => {
  return (
    <section className='feedback' id='feedbacks'>
      <h2 className='feedback__title'>Feedbacks</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index} className='feedback__item'>
            <blockquote>
              <Info text={item.feedback} />
              <div className='feedback__reporter'>
                <img
                  src={require('../../assets/images/useravatar.png')}
                  alt={`${item.reporter.name}'s avatar`}
                />
                <cite>
                  <span>{item.reporter.name}, </span>
                  <a href={item.reporter.citeUrl}>{item.reporter.citeUrl}</a>
                </cite>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Feedback
