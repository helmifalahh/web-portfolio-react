
type Props = {
    children: React.ReactNode
}

const HText_White = ({children}: Props) => {
  return (
    <h1 className="basis-3/5 text-4xl font-firs_neue text-white">
        {children}
    </h1>
  )
}

export default HText_White