type ProductType = {
  sku: string
  id: number
  name: string
  price: number
  description: string
}

type PropsType = {
  product: ProductType
  dispatch: React.Dispatch<ReducerAction>
  REDUCER_ACTIONS: ReducerActionType
  inCart: boolean
}


type ProductDetailsProps = {
  product: ProductType
  onClose: () => void
}

// Header and Nav types
type PropsTypeNav = {
  viewCart: boolean
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

// Footer types
type PropsTypeFooter = {
  viewCart: boolean
}

type UseProductsContextType = { products: ProductType[] }

type ChildrenType = { children?: ReactElement | ReactElement[] }