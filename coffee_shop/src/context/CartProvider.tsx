import { useMemo, useReducer, createContext, ReactElement } from 'react'

const initCartState: CartStateType = { cart: [] }

const REDUCER_ACTION_TYPE = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  QUANTITY: 'QUANTITY',
  SUBMIT: 'SUBMIT',
}

const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error('action.payload missing in ADD action')
      }
      const { sku, name, price } = action.payload

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      )

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      )

      const qty: number = itemExists ? itemExists.qty + 1 : 1

      return { ...state, cart: [...filteredCart, { sku, name, price, qty }] }
    }
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error('action.payload missing in REMOVE action')
      }
      const { sku } = action.payload

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      )

      return { ...state, cart: [...filteredCart] }
    }
    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error('action.payload missing in QUANTITY action')
      }

      const { sku, qty } = action.payload

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      )
      if (!itemExists) {
        throw new Error('Item does not exist in cart')
      }

      const updatedItem: CartItemType = {
        ...itemExists,
        qty,
      }

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      )
      return { ...state, cart: [...filteredCart, updatedItem] }
    }
    case REDUCER_ACTION_TYPE.SUBMIT:
      return { ...state, cart: [] }
    default:
      throw new Error('Invalid action type')
  }
}

// UseCart hook to be used in components to access cart state and actions
const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState)

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE
  }, [])

  const totalItems = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.qty
  }, 0)

  // Format total price to EUR currency
  const totalPrice = new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'EUR',
  }).format(
    state.cart.reduce((previousValue, cartItem) => {
      return previousValue + cartItem.qty * cartItem.price
    }, 0)
  )

  // Sort cart items by SKU number (ascending)
  const cart = state.cart.sort((a, b) => {
    const itemA = Number(a.sku.slice(2))
    const itemB = Number(b.sku.slice(2))
    return itemA - itemB
  })

  return {
    dispatch,
    REDUCER_ACTIONS,
    totalItems,
    totalPrice,
    cart,
  }
}

// CartContext to be used in CartProvider component to provide cart state and actions to all child components
const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: '',
  cart: [],
}

// CartContext to be used in CartProvider component to provide cart state and actions to all child components
export const CartContext =
  createContext<UseCartContextType>(initCartContextState)

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
