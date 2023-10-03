import { FiArrowRight } from 'react-icons/fi'
interface IProps {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  color?: string
}
function SlideArrowNext({ className, onClick, color }: IProps) {
  return (
    <>
      <FiArrowRight color={color} className={className} onClick={onClick} />
    </>
  )
}

export default SlideArrowNext
