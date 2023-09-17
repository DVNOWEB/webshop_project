import { createContext, ReactElement, useState, useEffect } from 'react'

const initContextState: UseProductsContextType = { products: [] }

const ProductsContext = createContext<UseProductsContextType>(initContextState)

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(
    initContextState.products
  )

  useEffect(() => {
    // Fetch products from local storage
    const localStorageProducts = localStorage.getItem('products')
    if (localStorageProducts) {
      setProducts(JSON.parse(localStorageProducts))
    }
  }, [])

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContext
