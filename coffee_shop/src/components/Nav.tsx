import '../styles/Nav.css'


type PropsType = {
  viewCart: boolean
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav = ({viewCart, setViewCart }: PropsType) => {

  // ternary operator 
  // if viewCart is true, then we will display the cart
  const button = viewCart 
   ? <button onClick={() => setViewCart(false)}>Back to Products</button>
   : <button onClick={() => setViewCart(true)}>View Cart</button>
  
  const content = (
    <nav className="nav">
     {button}
    </nav>
  )
  return content
}

export default Nav
