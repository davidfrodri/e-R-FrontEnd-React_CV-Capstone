
import img from '../../assets/images/useravatar.png'

interface Props {
  note?: string
  description?: string
}

const PhotoBoxHome = ({ note, description }: Props): JSX.Element => {
  return (
    <div className='photo-box'>
      <img src={img} alt='user avatar' className='photo-box__avatar' />
      <h2 className='photo-box__name'>David Rodriguez</h2>
      <p className='photo-box__note'>{note}</p>
      <p className='photo-box__description'>{description}</p>   
    </div>
  )
}

export default PhotoBoxHome
