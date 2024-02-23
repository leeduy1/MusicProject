interface IProps {
  className?: string
  fill?: string
}

function AbtractionIcon({ className, fill }: IProps) {
  return (
    <svg className={className} fill={fill} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path fill='' d='M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z' />
    </svg>
  )
}

export default AbtractionIcon
