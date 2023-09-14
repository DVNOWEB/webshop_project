import { ProductType } from '../context/ProductsProvider'
import { ReducerActionType, ReducerAction } from '../context/CartProvider'
import { BsCheck2Square } from 'react-icons/bs'
import { ReactElement, memo, useState } from 'react'
import ProductDetails from './ProductDetails'

import '../styles/Product.css'

type PropsType = {
  product: ProductType
  dispatch: React.Dispatch<ReducerAction>
  REDUCER_ACTIONS: ReducerActionType
  inCart: boolean
}
export const getImageUrl = (sku: string): string => {
  if(sku.includes ('http' || 'https')){
    return sku
  } else{
    return new URL(`../images/${sku}`, import.meta.url).href
  } 
}
// we are destructuring the props object to get the product, dispatch, REDUCER_ACTIONS, and inCart


const Product = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: PropsType): ReactElement => {
  const img = getImageUrl(product.sku)

  const [showDetails, setShowDetails] = useState(false)

  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } })

  const itemInCart = inCart ? <BsCheck2Square /> : null

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img
        className="product_img"
        src={img}
        alt={product.name}
        onClick={toggleDetails}
      />
      <div className="add_to_cart">
        <span className="product_price">
          {new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'EUR',
          }).format(product.price)}
          <span className="product_in_cart">{itemInCart}</span>
        </span>
        <button className="add_to_cart-btn" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
      {showDetails && (
        <ProductDetails product={product} onClose={toggleDetails} />
      )}
    </article>
  )

  return content
}

function areProductsEquel(
  { product: prevProduct, inCart: prevInCart }: PropsType,
  { product: nextProduct, inCart: nextInCart }: PropsType
) {
  return (
    Object.keys(prevProduct).every((key) => {
      return (
        prevProduct[key as keyof ProductType] ===
        nextProduct[key as keyof ProductType]
      )
    }) && prevInCart === nextInCart
  )
}
const MemoizedProduct = memo<typeof Product>(Product, areProductsEquel)

export default MemoizedProduct
