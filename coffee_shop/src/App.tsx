import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import ProductList from './components/ProductList'

function App() {
  // viewCart is a boolean that will toggle between the product list and the product details
  const [viewCart, setViewCart] = useState<boolean>(false)

  const pageContent = viewCart ? <Cart /> : <ProductList />

  return (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  )
}

export default App
