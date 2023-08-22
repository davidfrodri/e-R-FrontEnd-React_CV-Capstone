interface Props {
	title?: string
	text?: string
	id?: string
}

const Box = ({ title, text, id }: Props): JSX.Element => {
  return (
    <section className='box' id={id}>
      <h2 className='box__title'>{title ?? 'About me'}</h2>
      <p className='box__text'>{text ?? 'Text'}</p>
    </section>
  )
}

export default Box
