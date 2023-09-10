import Header from "./components/Header"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import ProductList from "./components/ProductList"
// import ProductDetails from './components/ProductDetails'

// we importing useState from react because we want to use state to toggle between the product list and the product details
import { useState } from "react"

function App() {

  // viewCart is a boolean that will toggle between the product list and the product details
  const [ viewCart, setViewCart ] = useState<boolean>(false)

  // if viewCart is true, then we will display the cart, otherwise we will display the product list
  const pageContent = viewCart ? <Cart /> : <ProductList />

  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  )

  // we are returning the content
  return content
}

export default App
