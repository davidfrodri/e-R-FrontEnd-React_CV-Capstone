import { type ReactNode } from 'react'

interface Props {
  text?: string
  icon?: ReactNode
  className?: string
  onClick?: () => void
}

const Button = ({ text, icon, className, onClick, ...otherProps }: Props): JSX.Element => {
  return (
    <button className={`btn${(className !== undefined) ? ` ${className}` : ''}`} onClick={onClick} {...otherProps}>
      {icon !== undefined && <span className='btn-icon'>{icon}</span>}
      {text !== undefined && <span className='btn-text'>{text}</span>}
    </button>
  )
}

export default Button
