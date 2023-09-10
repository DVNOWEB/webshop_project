import Nav from "./Nav"

type PropsType = {
  viewCart: boolean
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ viewCart, setViewCart }: PropsType) => {

  const content = (
    <header className="header" >
      <div className="header_logo-box">
        <h1>Coffee Shop</h1>
        <div className="header_price-box">
          <p>Total items: 3</p>
          <p>Total price: 10€</p>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>

  )
  
  return content
}
export default Header
