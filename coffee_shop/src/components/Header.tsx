import Nav from './Nav'
import useCart from '../hooks/useCart'
import '../styles/Header.css'

type PropsType = {
  viewCart: boolean
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ viewCart, setViewCart }: PropsType) => {
  // we are using the useCart hook to get the totalItems and totalPrice
  const { totalItems, totalPrice } = useCart()

  const content = (
    <>
      <header className="header">
        <div className="header_logo-box">
          <h1>Coffee Shop.</h1>
        </div>
        <div className="nav">
          <Nav viewCart={viewCart} setViewCart={setViewCart} />
        </div>
      </header>

      <div className="header_price-box">
        <span>Total items: {totalItems}</span>
        <span>Total price: {totalPrice}</span>
      </div>
    </>
  )

  return content
}
export default Header
