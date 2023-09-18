import useCart from '../hooks/useCart'
import useProducts from '../hooks/useProducts'
import { ReactElement } from 'react'
import Product from './Product'
import '../styles/ProductList.css'


const ProductList = () => {
  // dispatch and REDUCER_ACTIONS are used to update the state of the products
  const { dispatch, REDUCER_ACTIONS, cart } = useCart()
  const { products } = useProducts()

  let pageContent: ReactElement | ReactElement[] = (
    <div>
      <p>Loading...</p>
    </div>
  )


  if (products?.length) {
    pageContent = products.map((product: ProductType) => {
      const inCart: boolean = cart.some((item: CartItemType) => item.sku === product.sku)

      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        />
      )
    })
  }

  // if we have products, we will map over them and render a Product component for each product
  const content = <main className="main main_product">{pageContent}</main>

  return content
}

export default ProductList
