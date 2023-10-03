interface IProps {
  className?: string
  fill?: string
}

function SignoutIcon({ className, fill }: IProps) {
  return (
    <svg className={className} fill={fill} width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20H6a2 2 0 01-2-2V6a2 2 0 012-2h5M20 12l-4-4m4 4l-4 4m4-4H10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
  )
}

export default SignoutIcon