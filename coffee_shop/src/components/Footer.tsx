import useCart from '../hooks/useCart'

import '../styles/Footer.css'

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
      <div className="footer_copy-div">
        <p>Coffee Shop &copy; {year}</p>
      </div>
      <div className="footer_price-div">
        <span>Total items: {totalItems}</span>
        <span>Total price: {totalPrice}</span>
      </div>
    </>
  )
  const content = <footer className="footer">{pageContent}</footer>
  return content
}

export default Footer
