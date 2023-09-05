import { createContext, ReactElement, useState, useEffect } from 'react'

export type ProductType = {
  sku: string
  id: number
  name: string
  price: number
  description: string
}

const initState: ProductType[] = []

// const initState: ProductType[] = [
//   {
//     sku: 'p1.jpeg',
//     id: 1,
//     name: 'Espresso',
//     price: 100,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris volutpat, convallis nibh.',
//   },
//   {
//     sku: 'p2.jpg',
//     id: 2,
//     name: 'Doppio',
//     price: 200,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris volutpat, convallis nibh.',
//   },
//   {
//     sku: 'p3.jpg',
//     id: 3,
//     name: 'Macchiato',
//     price: 300,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris volutpat, convallis nibh.',
//   },
//   {
//     sku: 'p4.jpg',
//     id: 4,
//     name: 'Americano',
//     price: 400,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris volutpat, convallis nibh.',
//   },
//   {
//     sku: 'p5.jpg',
//     id: 5,
//     name: 'Cappuccino',
//     price: 500,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris volutpat, convallis nibh.',
//   },
//   {
//     sku: 'p6.jpg',
//     id: 6,
//     name: 'Latte',
//     price: 600,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris volutpat, convallis nibh.',
//   },
//   {
//     sku: 'p7.jpg',
//     id: 7,
//     name: 'Affogato',
//     price: 700,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris volutpat, convallis nibh.',
//   },
//   {
//     sku: 'p8.jpeg',
//     id: 8,
//     name: 'Mocha',
//     price: 800,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris volutpat, convallis nibh.',
//   },
//   {
//     sku: 'p9.jpg',
//     id: 9,
//     name: 'Flat White',
//     price: 900,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris volutpat, convallis nibh.',
//   },
// ]

export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: [] }

const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState)

  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      const data = await fetch('http://localhost:3001/products')
        .then((res) => {
          return res.json()
        })
        .catch((err) => {
          if (err instanceof Error) console.log(err.message)
        })
      return data
    }


    fetchProducts().then(products => setProducts(products))
  }, [])


  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContext