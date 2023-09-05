interface ILogo {
  className?: string
}
function Logo({ className }: ILogo) {
  return (
    <div className={`w-[100px] ${className}`}>
      <img src='http://volna.volkovdesign.com/img/logo.svg' alt='ld-team logo' />
    </div>
  )
}

export default Logo
