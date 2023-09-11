import useCart from '../hooks/useCart'
import { useState } from 'react'
import CartLineItem from './CartLineItem'

import '../styles/Cart.css'

const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false)

  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart()

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT })
    setConfirm(true)
  }

  const pageContent = confirm ? (
    <h2>Thank you for your order.</h2>
  ) : (
    <div className='cart_container'>
      <h2 className="offscreen">Cart</h2>
      <ul className="cart">
        {cart.map((item) => {
          return (
            <CartLineItem
              key={item.sku}
              item={item}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
            />
          )
        })}
      </ul>
      <div className="cart_totals">
        <span>Total items: {totalItems}</span>
        <span>Total price: {totalPrice}</span>
        <button
          className="cart_submit"
          disabled={!totalItems}
          onClick={onSubmitOrder}>
          Submit Order
        </button>
      </div>
    </div>
  )

  const content = <main className="main main_cart">{pageContent}</main>
  
  return content
}

export default Cart
