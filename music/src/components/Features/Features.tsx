interface IFeature {
  icon: JSX.Element
  name: string
  information: string
  colorBg: string
}

interface Props {
  features: IFeature[]
}

function Features({ features }: Props) {
  return (
    <div className='mt-5 flex flex-wrap flex-row gap-6'>
      {features.map((feature) => (
        <div className='flex md:basis-1/4 relative flex-col md:max-w-[23%] basis-full max-w-full'>
          <div className='flex flex-row mb-3'>
            <div className={`h-12 w-12 rounded-xl flex flex-row mr-3 p-3`} style={{ backgroundColor: feature.colorBg }}>
              {feature.icon}
            </div>
            <div className='flex justify-center items-center text-lg font-normal'>{feature.name}</div>
          </div>
          <div>
            <span className='text-[#c0c0c0]'>{feature.information}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Features
