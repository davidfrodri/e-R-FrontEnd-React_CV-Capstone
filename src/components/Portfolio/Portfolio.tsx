import { useEffect, useRef, useState } from 'react'
import Isotope from 'isotope-layout'

import { portfolioItems } from '../../utils/data'

const Portfolio = (): JSX.Element => {
  const isotope = useRef<Isotope | null>()
  const [filterKey, setFilterKey] = useState('*')

  useEffect(() => {
    isotope.current = new Isotope('.filter-container', {
      itemSelector: '.filter-item',
      layoutMode: 'fitRows'
    })
    return () => isotope.current?.destroy()
  }, [])

  useEffect(() => {
    if (filterKey === '*') isotope.current?.arrange({ filter: '*' })
    else isotope.current?.arrange({ filter: `.${filterKey}` })
  }, [filterKey])

  const handleFilterKeyChange = (key: string) => () => {
    setFilterKey(key)
  }

  return (
    <section className='portfolio' id='portfolio'>
      <h2 className='title'>Portfolio</h2>
      <ul className='tabs'>
        <li className={filterKey === '*' ? 'active' : ''} onClick={handleFilterKeyChange('*')}><span>All</span></li>
        <li className={filterKey === 'ui' ? 'active' : ''} onClick={handleFilterKeyChange('ui')}><span>Ui</span></li>
        <li className={filterKey === 'code' ? 'active' : ''} onClick={handleFilterKeyChange('code')}><span>Code</span></li>
      </ul>
      <hr />
      <ul className='filter-container'>
        {portfolioItems.map((item) => (
          <li key={item.id} className={`filter-item ${item.classes}`}>
            <img src={item.imgSrc} alt={item.title} />
            <div className='portfolio-info'>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.link}>{item.linkText}</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Portfolio
