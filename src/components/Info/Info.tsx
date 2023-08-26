interface Props {
  title?: string
  text: string
}

const Info = ({ title, text }: Props): JSX.Element => {
  return (
    <div className='info'>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Info
