import { useContext } from 'react'
import CartContext from '../context/CartProvider'
import { UseCartContextType } from '../context/CartProvider'

const useCart = (): UseCartContextType => useContext(CartContext)

export default useCart

// nice this is a custom hook that uses the useContext hook to get the cart context and we just need to import this hook and use it in our components