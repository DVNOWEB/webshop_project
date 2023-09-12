import { ProductType } from '../context/ProductsProvider'

type ProductDetailsProps = {
  product: ProductType
  onClick: () => void
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        {/* Add more details here */}
      </div>
    </div>
  )
}

export default ProductDetails;

