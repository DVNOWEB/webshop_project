import Nav from './Nav'
import useCart from '../hooks/useCart'
import '../styles/Header.css'
import AddProduct from './AddProduct'
import { useState } from 'react'

const Header = ({ viewCart, setViewCart }: PropsTypeNav) => {
  // we are using the useCart hook to get the totalItems and totalPrice
  const { totalItems, totalPrice } = useCart()

  const [showAddProduct, setShowAddProduct] = useState(false)

  const content = (
    <div className="main_container">
      <header className="header">
        <div className="header_logo-box">
          <h1>Coffee Shop.</h1>
        </div>
        <div className="nav">
          <Nav viewCart={viewCart} setViewCart={setViewCart} />
        </div>
      </header>
      {showAddProduct && <AddProduct />}
      <div className="header_inline-div">
        <div className="add_new_product-div">
          <button className='add_new_product-btn' onClick={() => setShowAddProduct(!showAddProduct)}>
            {showAddProduct ? 'Close' : 'Add New Product'}
          </button>
        </div>
        <div className="header_price-box">
          <span>Total items: {totalItems}</span>
          <span>Total price: {totalPrice}</span>
        </div>
      </div>
    </div>
  )

  return content
}
export default Header
