
type Props = {
    children: React.ReactNode
}

const HText = ({children}: Props) => {
  return (
    <h1 className="basis-3/5 text-4xl font-firs_neue">
        {children}
    </h1>
  )
}

export default HText