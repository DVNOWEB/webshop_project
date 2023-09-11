import { ProductType } from '../context/ProductsProvider'
import { ReducerActionType, ReducerAction } from '../context/CartProvider'
import { BsCheck2Square } from 'react-icons/bs'
import { ReactElement, memo } from 'react'

import '../styles/Product.css'

type PropsType = {
  product: ProductType
  dispatch: React.Dispatch<ReducerAction>
  REDUCER_ACTIONS: ReducerActionType
  inCart: boolean
}

// we are destructuring the props object to get the product, dispatch, REDUCER_ACTIONS, and inCart
const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsType): ReactElement => {
  const img: string = new URL(`../images/${product.sku}`, import.meta.url).href

  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } })

  const itemInCart = inCart ? <BsCheck2Square /> : null

  const content = (
    <article className="product">
        <h3>{product.name}</h3>
      <img className="product_img" src={img} alt={product.name} />
      <div className="add_to_cart">

        <span className='product_price'>
          {new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'EUR',
          }).format(product.price)}   
        <span className="product_in_cart">
          {itemInCart}
        </span>
        </span>
        <button className='add_to_cart-btn' onClick={onAddToCart}>Add to Cart</button>
      </div>
    </article>
  )

  return content
}

function areProductsEquel({ product: prevProduct, inCart: prevInCart }: PropsType, { product: nextProduct, inCart: nextInCart }: PropsType) {
  return (
    Object.keys(prevProduct).every(key => {
      return prevProduct[key as keyof ProductType] === nextProduct[key as keyof ProductType]
    }) && prevInCart === nextInCart
  )
}
const MemoizedProduct = memo<typeof Product>(Product, areProductsEquel)

export default MemoizedProduct