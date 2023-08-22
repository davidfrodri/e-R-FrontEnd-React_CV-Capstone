import { Link } from 'react-router-dom'

import Button from '../../components/Button/Button'

import PhotoBoxHome from '../../components/PhotoBox/PhotoBoxHome'

const note = 'Passionate Software Developer'
const description = 'Crafting immersive web experiences that merge technology and creativity.'

const Home = (): JSX.Element => {
  return (
    <div className='home'>
      <PhotoBoxHome note={note} description={description} />
      <Link to='/inner'>
        <Button text='Know more' />
      </Link>
    </div>
  )
}

export default Home
