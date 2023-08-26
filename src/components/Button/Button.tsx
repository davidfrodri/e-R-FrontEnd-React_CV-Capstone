import { type ReactNode } from 'react'

interface Props {
  text?: string
  icon?: ReactNode
  className?: string
  onClick?: () => void
}

const Button = ({ text, icon, className, onClick }: Props): JSX.Element => {
  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <button className={`btn ${className}`} onClick={onClick}>
      {icon !== undefined && <span className='btn-icon'>{icon}</span>}
      <span className='btn-text'>{text}</span>
    </button>
  )
}

export default Button
