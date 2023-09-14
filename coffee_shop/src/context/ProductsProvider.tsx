import { createContext, ReactElement, useState, useEffect } from 'react'

export type ProductType = {
  sku: string
  id: number
  name: string
  price: number
  description: string
}

export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: [] }

const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

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

  // useEffect(() => {
  //   const fetchProducts = async (): Promise<ProductType[]> => {
  //     try {
  //       // Fetch the data from the imported JSON file
  //       const data = await fetch('/data/products.json')
  //       if (!data.ok) {
  //         throw new Error('Failed to fetch products')
  //       }
  //       const productsData = await data.json()
  //       return productsData.products // Assuming the products are stored in a 'products' property
  //     } catch (error) {
  //       console.error('Error fetching products:', error)
  //       return []
  //     }
  //   }

  //   fetchProducts().then((fetchedProducts) => {
  //     setProducts(fetchedProducts)
  //   })
  // }, [])

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContext
