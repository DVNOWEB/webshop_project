import { ProductType } from '../context/ProductsProvider'
import '../styles/ProductDetails.css'

type ProductDetailsProps = {
  product: ProductType
  onClose: () => void
}


const ProductDetails = ({ product, onClose }: ProductDetailsProps) => {
  const imgSrc: string = new URL(`../images/${product.sku}`, import.meta.url).href

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <img
            src={imgSrc}
            alt={product.name}
            className="product-image"
          />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          {/* Add more details here */}
          <button className="close-modal-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
