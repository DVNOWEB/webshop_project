import '../styles/Nav.css'

import { FaCoffee } from 'react-icons/fa'
import { TiArrowBack } from 'react-icons/ti'

type PropsType = {
  viewCart: boolean
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav = ({ viewCart, setViewCart }: PropsType) => {
  // ternary operator
  // if viewCart is true, then we will display the cart
  const button = viewCart ? (
    <button className='back_btn' onClick={() => setViewCart(false)}>
      <TiArrowBack />
    </button>
  ) : (
    <button className="coffee_btn" onClick={() => setViewCart(true)}>
      <FaCoffee />
    </button>
  )

  const content = <nav className="nav">{button}</nav>
  return content
}

export default Nav
