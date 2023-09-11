import { ReactElement, ChangeEvent } from 'react'
import { CartItemType } from '../context/CartProvider'
import { ReducerActionType, ReducerAction } from '../context/CartProvider'

import '../styles/CartLineItem.css'

type PropsType = {
  item: CartItemType
  dispatch: React.Dispatch<ReducerAction>
  REDUCER_ACTIONS: ReducerActionType
}

const CartLineItem = ({ item, dispatch, REDUCER_ACTIONS }: PropsType) => {
  const img: string = new URL(`../images/${item.sku}`, import.meta.url).href

  const lineTotal: number = item.qty * item.price

  const highestQty: number = 20 > item.qty ? 20 : item.qty

  const optionValues: number[] = [...Array(highestQty).keys()].map((i) => i + 1)

  const options: ReactElement[] = optionValues.map((val) => {
    return (
      <option key={`opt${val}`} value={val}>
        {val}
      </option>
    )
  })

  const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, qty: Number(e.target.value) },
    })
  }

  const onRemoveFromCart = () =>
    dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: item })

  const content = (
    <li className="cart_item">
      <div className="img_div">
        <img src={img} alt={item.name} className="cart_img" />
      </div>
      <div className="item_box">

        <div aria-label="Price Per Item" className='aria_price'>
          {new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'EUR',
          }).format(item.price)}

          <div aria-label="Item Name" className='item_name'>{item.name}</div>

          <label htmlFor="itemQty" className="offscreen">
            Item Quantity
          </label>

          <select
            name="itemQty"
            id="itemQty"
            className="cart_select"
            value={item.qty}
            aria-label="Item Quantity"
            onChange={onChangeQty}>
            {options}
          </select>

          <div className="cart_item-subtotal" aria-label="Line Item Subtotal">
            {new Intl.NumberFormat('en-EN', {
              style: 'currency',
              currency: 'EUR',
            }).format(lineTotal)}
          </div>

          <button
            className="cart_item-remove"
            aria-label="Remove Item"
            title="Remove Item"
            onClick={onRemoveFromCart}>
            Remove
          </button>

        </div>
      </div>
    </li>
  )
  return content
}

export default CartLineItem
