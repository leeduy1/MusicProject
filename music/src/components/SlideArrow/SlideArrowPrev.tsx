import { FiArrowLeft } from 'react-icons/fi'
interface IProps {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  color?: string
}
function SlideArrowPrev({ className, style, onClick, color }: IProps) {
  return (
    <>
      <FiArrowLeft color={color} className={className} style={{ ...style }} onClick={onClick} />
    </>
  )
}

export default SlideArrowPrev
