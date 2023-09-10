import useCart from '../hooks/useCart'

type PropsType = {
  viewCart: boolean
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Footer = ({ viewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart()

  const year = new Date().getFullYear()

  const pageContent = viewCart ? (
    <p>Coffee Shop &copy; {year}</p>
  ) : (
    <>
      <p>Total items: {totalItems}</p>
      <p>Total price: {totalPrice}</p>

      <p>Coffee Shop &copy; {year}</p>
    </>
  )
  const content = <footer className="footer">{pageContent}</footer>
  return content
}

export default Footer
