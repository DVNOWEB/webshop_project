type CartItemType = {
  sku: string
  name: string
  price: number
  qty: number
}

type CartStateType = { cart: CartItemType[] }

type PropsTypeCart = {
  item: CartItemType
  dispatch: React.Dispatch<ReducerAction>
  REDUCER_ACTIONS: ReducerActionType
}

type ReducerActionType = typeof REDUCER_ACTION_TYPE

type ReducerAction = {
  type: string
  payload?: CartItemType
}

// Type of useCartContext hook return value to be used in components
type UseCartContextType = ReturnType<typeof useCartContext>

type ChildrenType = { children?: ReactElement | ReactElement[] }